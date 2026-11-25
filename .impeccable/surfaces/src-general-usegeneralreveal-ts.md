---
version: 1
slug: "src-general-usegeneralreveal-ts"
primary_target: "src/general/useGeneralReveal.ts"
related_targets: ["imports/index.tsx", "src/general/generalReveal.css"]
---

# General · `/#general`

Keep the existing layout, direction cards, and links. Card buttons name their destinations, and the research introduction explains why the synthetic example is shown. Existing cards and sections rise a short distance and fade in when their first readable content reaches the viewport, not when their top padding enters. Research uses that shared entrance rather than animating again on its own. Anything already in the first viewport is shown immediately. Entrances play once without reflowing the page and are disabled for reduced motion.
