"""Rebuild the transparent illustrations with Pillow and NumPy."""

import argparse
from pathlib import Path

import numpy as np
from PIL import Image, ImageColor, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
IMPORTS = ROOT / "imports"


def ramp(lightness, stops, colors):
    rgb = [ImageColor.getrgb(color) for color in colors]
    return np.stack(
        [np.interp(lightness, stops, channels) for channels in zip(*rgb)], axis=-1
    )


def as_image(rgb, alpha):
    raster = np.dstack((np.clip(rgb, 0, 255), np.clip(alpha, 0, 1) * 255))
    return Image.fromarray(np.rint(raster).astype(np.uint8))


def extract_diagram(path, has_badge=False):
    original = np.asarray(Image.open(path).convert("RGBA"), dtype=np.float32)
    rgb = original[:, :, :3]
    lightness = rgb @ np.array([0.2126, 0.7152, 0.0722], dtype=np.float32)
    neutral = ramp(
        lightness,
        [20, 82, 143, 200, 244, 255],
        ["#ebf0ff", "#a5b4ce", "#7887a1", "#58667f", "#242e42", "#242e42"],
    )
    blue = ramp(
        lightness,
        [20, 65, 104, 130, 170, 228, 255],
        ["#3155da", "#3e64de", "#6f8fff", "#9bb2ff", "#6f87dc", "#2d3b61", "#27324f"],
    )
    tint = np.clip((rgb[:, :, 2] - rgb[:, :, 0] - 8) / 28, 0, 1)
    result = neutral * (1 - tint[:, :, None]) + blue * tint[:, :, None]
    alpha = np.clip((254.5 - lightness) / 10, 0, 1)

    if has_badge:
        # The solid blue header contains white icon strokes, not white paper.
        top = rgb[: original.shape[0] // 4]
        ys, xs = np.where(np.all(top == (35, 70, 221), axis=2))
        if xs.size:
            area = np.s_[ys.min() + 6 : ys.max() - 5, xs.min() + 6 : xs.max() - 5]
            white_ink = np.clip((rgb[area].min(axis=2) - 35) / 210, 0, 1)[:, :, None]
            result[area] = result[area] * (1 - white_ink) + (233, 240, 255) * white_ink
            alpha[area] = 1

    return as_image(result, alpha * (original[:, :, 3] / 255))


def enclosed_surfaces(darkest, cutoff, blank_pockets, pale_faces):
    # Close tiny gaps in the outlines, then key only the paper reachable from the edges.
    outline = Image.fromarray((darkest < cutoff).astype(np.uint8) * 255)
    outline_draw = ImageDraw.Draw(outline)
    for face in pale_faces:
        outline_draw.polygon(face, fill=255)
    outline = outline.filter(ImageFilter.MaxFilter(7)).filter(ImageFilter.MinFilter(7))
    padded = Image.new("L", (outline.width + 2, outline.height + 2), 0)
    padded.paste(outline, (1, 1))
    ImageDraw.floodfill(padded, (0, 0), 128)
    # Signal branches can isolate background pockets from the outside paper.
    for x, y in blank_pockets:
        seed = (x + 1, y + 1)
        if padded.getpixel(seed) == 0:
            ImageDraw.floodfill(padded, seed, 128)
    inside = np.asarray(padded)[1:-1, 1:-1] != 128
    matte = Image.fromarray(inside.astype(np.uint8) * 255)
    return matte.filter(ImageFilter.MinFilter(5)).filter(ImageFilter.GaussianBlur(2.3))


def extract_render(path, cutoff, blank_pockets=(), pale_faces=(), clear=None):
    original = Image.open(path).convert("RGB")
    rgb = np.asarray(original, dtype=np.float32)
    darkest = rgb.min(axis=2)
    matte = enclosed_surfaces(darkest, cutoff, blank_pockets, pale_faces)
    solid = np.asarray(matte, dtype=np.float32) / 255

    if clear:
        # The strategy caption is live text; its frame stays, but the white fill can go.
        left, top, right, bottom = clear
        solid[top:bottom, left:right] = 0

    alpha = np.maximum(solid, np.clip((247 - darkest) / 66, 0, 1))
    # Remove the original white matte from translucent edges and shadows so
    # the illustrations blend into navy rather than leaving a white fringe.
    coverage = alpha[:, :, None]
    foreground = (rgb - (1 - coverage) * 250) / np.maximum(coverage, 0.02)
    foreground = np.clip(foreground, 0, 255) * 0.92 + (0, 1, 6)
    return as_image(foreground, alpha)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=IMPORTS / "dark")
    output = parser.parse_args().output
    output.mkdir(parents=True, exist_ok=True)

    extract_diagram(IMPORTS / "before.png").save(
        output / "before.webp", lossless=True, method=6
    )
    extract_diagram(IMPORTS / "after.png", has_badge=True).save(
        output / "after.webp", lossless=True, method=6
    )
    renders = [
        (
            "synthetic-research",
            ROOT / "public/graphics/ai-robot.png",
            225,
            {
                "blank_pockets": [
                    (400, 160), (1223, 171), (409, 286), (1223, 293),
                    (443, 410), (1201, 419), (637, 432), (643, 447), (1103, 500),
                ],
                # These two plates have a pale rim that opens onto the paper in
                # the source. Seal their front faces along the original edges.
                "pale_faces": [
                    [
                        (117, 153), (338, 109), (351, 114), (359, 129), (361, 169),
                        (357, 188), (348, 198), (126, 242), (113, 233), (110, 174),
                    ],
                    [
                        (1290, 118), (1300, 109), (1319, 112), (1548, 152), (1562, 166),
                        (1566, 196), (1564, 228), (1554, 240), (1537, 241), (1302, 196),
                        (1287, 188), (1284, 128),
                    ],
                ],
            },
        ),
        (
            "strategy",
            IMPORTS / "762e3da223b722c4708edaa513edb7fb81d065dc.png",
            214,
            {"clear": (1044, 0, 1607, 190)},
        ),
        ("visual", IMPORTS / "c07407db45f5b55ba113edc2d3987e4a10064c6c.png", 214, {}),
    ]
    for name, path, cutoff, options in renders:
        extract_render(path, cutoff, **options).save(
            output / f"{name}.webp", quality=90, method=6
        )


if __name__ == "__main__":
    main()
