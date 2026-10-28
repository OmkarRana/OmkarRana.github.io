---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/globals.css","src/components/interactions.tsx"]
---

# Portfolio home

Mode: Experience. Scope: /, src/app/page.tsx, src/components/interactions.tsx, src/app/globals.css.

## Direction contract
THESIS: A personal engineering profile inspired by the supplied Aneesh reference: a calm, narrow document that makes experience readable immediately. Remove the billboard hero, synthetic illustrations and numbered bands.

OWN-WORLD: Near-black and off-white surfaces, restrained neutral dividers, Geist sans, compact shadcn controls, softly squared avatars and technology badges. Status green appears only for current employment and availability.

STORY: Meet Omkar, understand his work at TCS, review professional experience, inspect skills and projects, validate credentials, then download the PDF or contact him.

FIRST VIEWPORT: A centered 680px reading column under a quiet sticky navigation. A 60px initials avatar sits beside the 34px name and 17px role. Current employment and availability precede a readable resume-derived introduction and compact social/resume actions. The experience heading and current employer begin within the first desktop viewport. Mobile keeps the same order with wrapped metadata and no menu drawer.

FORM: User-pinned reference overrides the assignment: https://www.aneeshbhadauria.com. Reference inspected in Browser at mobile and desktop sizes. seed:bb84859ea07f3d74. Build path: code, expressly confirmed by user. Signature interaction: experience disclosure with a rotating chevron; keyboard operation is immediate. One 240ms visible-default entrance, 140ms press feedback, no scroll choreography.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Motion extension
User requested find-animation-opportunities followed by exclusive Motion implementation. Accepted: disclosures bridge state with 200ms measured height and 160ms opacity (height is the accordion-only layout exception); theme icons crossfade with a 30-degree rotation over150ms. Existing chevrons180ms and press140ms also run through Motion. All use ease[0.23,1,0.32,1]. Keyboard activation remains immediate; reduced motion uses100ms opacity only with instant geometry. Rejected decorative nav/scroll/list motion. No factual content or visual-world change.
