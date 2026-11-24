---
version: 1
slug: "src-home-homepage-tsx"
primary_target: "src/home/HomePage.tsx"
related_targets: ["src/home/home.css", "src/home/useHomeStory.ts", "src/components/siteHeader.css"]
---

# Homepage · `/`

Persuade. For public-sector and organizational decision-makers who need to understand what Governance.kz does before requesting a meeting. Keep the original headline and description. The video shows one scenario, not the whole product.

## Direction contract

**THESIS:** An institutional presentation, not a boxed video ad. The original message leads; a real product fragment plays at the scale of the screen without claiming to represent the entire offering.

**OWN-WORLD:** Cool daylight or midnight blue, a clear blue action, unboxed navigation, fine rules and a Cyrillic-first typographic voice. Three adjacent chapters on one horizontal canvas; the wide film floats without an outline.

**STORY:** Read the introduction, book a meeting or open the note. Move past the video and into a text-only closing chapter: «Решения остаются за людьми» plus three ways to work with the team and a link to «Общее».

**FIRST VIEWPORT:** The shared masthead and a pinned three-part strip, based on the opening layout of `normalisboring.es`. The opening pairs the headline with a generously visible portion of the film; one consistent gap separates the chapters instead of leaving an empty band between them. Vertical scroll moves from the introduction to the video and right-hand text. A small chapter navigator doubles as a keyboard path. Narrow, short and reduced-motion layouts read top to bottom.

**FORM:** Code-led. Native scroll with a sticky viewport and a single track transform; no wheel interception. The 4.8-second clip in `public/videos/graphs-hero.mp4` starts at 8.6 seconds of the 2880×1470 source `_video-originals/graphs.mov`, cropped only to remove the console strip. The poster uses the same first frame. The muted clip plays once as its frame comes into view; reduced motion uses the poster.

**FINISH:** Verify the rendered homepage and its controls at phone, desktop and wide sizes, without altering the internal pages or submission routing.
