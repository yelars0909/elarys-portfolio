# Behaviors — studiodpi.work

Interaction sweep findings (browser + source verification).

## Global
- Document never scrolls (`100vh` app, three internal scroll containers).
- Click anywhere on `main` hides the random overlay if visible.
- No smooth-scroll library (no Lenis/Locomotive). Scroll containers use `scroll-behavior: smooth` only for programmatic scrolls.

## IndexStrip (middle)
- INTERACTION MODEL: time-driven auto-scroll (RAF, −1px/frame, wraps per block; 3 duplicated blocks for seamless loop).
- Hover over strip pauses the RAF loop; leaving resumes.
- Wheel over strip: manually offsets translateY by deltaY (loop continues).
- Click item N: right column smooth-scrolls to project N (`scrollIntoView({behavior:'smooth'})`); strip number N becomes black (`#000`), others `#959595`.
- On category/studio reset: strip jumps back to translateY 0 and resumes.

## ProjectsColumn (right)
- Category bar: click a category → filters both strip and project list to works containing that category; resets scroll positions; active category renders `#959595`, inactive `#000`. Clicking the same category again does nothing. Clicking "ALL PROJECTS" (id -1) after a filter resets.
- "DOTs ON i": click → `calRandomIndex()` + show overlay (stopPropagation). Hover: color → `#707070`.
- INTERACTION MODEL for list: click-driven expand; native vertical scroll; horizontal wheel over a carousel scrolls that carousel's slides (Swiper mousewheel forceToAxis).

## ProjectItem
- Default state: collapsed (`itemHide` height 0).
- Click "TYPE. …" or "INFO" → toggles expansion; transition `all cubic-bezier(0.075,0.82,0.165,1) 0.8s`; expanded area shows CLIENT./Year. (left), extends param/value rows (middle), description (right).
- Name (left) is not clickable unless the work has a `link` (then a `(LINK)` anchor, gray underline, hover black, target _blank).

## Carousel
- Swiper: `slidesPerView:auto`, `spaceBetween:20`, `loop:true`, horizontal.
- Mouse over media: native cursor hidden (`cursor:none`); white label "index/total" follows the mouse (offset −16px, −11px), fades in.
- Left half click → previous slide; right half click → next slide (click zones stop 75px above carousel bottom).
- Videos autoplay muted (Video.js, tech pointer-events none).

## InfoColumn (left)
- "STUDIO DPi" click: scrolls left column to top + global reset (category → ALL, scrolls reset, currIndex cleared).
- All sections static; mailto link in CONTACT; external links in FRIENDS.

## Random overlay
- Fixed inset 0, z-999, pointer-events none, image height 100vh contain. Source: 16 images from `athenas/supply` jigsaw id 3.

## Responsive
- Fully fluid: all sizes in vw on a 1920 design base (`oV`); fonts fixed px (16/20).
- At 390px (desktop rendering): identical proportions, columns 73/43/266px. Real phones get a `v-mobile` class (390-base vw scaling) — clone targets the fluid desktop behavior.
