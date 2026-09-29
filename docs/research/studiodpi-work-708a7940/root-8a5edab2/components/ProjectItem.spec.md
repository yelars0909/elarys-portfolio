# ProjectItem Specification (includes ProjectCarousel)

## Overview
- **Target files:**
  - `src/components/sites/studiodpi-work-708a7940/root-8a5edab2/ProjectItem.tsx`
  - `src/components/sites/studiodpi-work-708a7940/root-8a5edab2/ProjectCarousel.tsx`
- **Screenshots:** `desktop-1440-top.png` (collapsed), `desktop-1440-item-expanded.png` (expanded)
- **Interaction model:** click-driven expand + carousel (click zones / horizontal wheel / hover cursor label)

## ProjectItem DOM
```
div.item (w-100%, mb-32px, id "right-item-<id>")
├─ div.itemTop (flex, items-start, 16px/20px, transition all 0.8s cubic-bezier(0.075,0.82,0.165,1))
│  ├─ div.itemTopLeft (w-24%, mr-20px, flex-none): name text [+ optional (LINK) anchor: gray #959595 underline, hover #000, target _blank, "(" has paddingLeft 4px]
│  ├─ div.itemTopMiddle (w-24%, mr-40px, flex-none, cursor pointer, onClick toggleCollapse):
│  │    <span style color #959595>TYPE.</span><span class dpi-html-text dpi-html-text-left-space>categories joined ", "</span>
│  └─ div.itemTopRight (w-52%, cursor pointer, onClick toggleCollapse): "INFO"
├─ div.itemHide[.show] (h-0 overflow hidden → h-auto; flex, items-start; transition same 0.8s easing)
│  ├─ div.itemHideLeft (pt-10px, w-24%, mr-20px):
│  │    row: <span #959595>CLIENT.</span><span dpi-html-text left-space innerHTML clientEn>
│  │    row: <span #959595>Year.</span><span dpi-html-text left-space innerHTML year>
│  ├─ div.itemHideMiddle (pt-10px, w-24%, mr-40px, cursor pointer, onClick toggleCollapse):
│  │    extendsEn rows: <span #959595>{param}</span><span dpi-html-text left-space innerHTML value>
│  └─ div.itemHideRight (pt-10px, w-52%, cursor pointer, onClick toggleCollapse, innerHTML descriptionEn)
├─ div spacer (w-100%, h-20px)
└─ ProjectCarousel (medias)
```

## ProjectCarousel
- Constants: SECTION_WIDTH=1310, SWIPER_HEIGHT=840 (1920 design base → `oV(x)=x*100/1920 vw`)
- Swiper (swiper/react): `direction horizontal`, `slidesPerView: "auto"`, `spaceBetween: 20`, `loop: true`, `loopedSlides: 4`, `mousewheel: { forceToAxis: true, eventsTarget: container }` via Mousewheel module; slides `width:auto`
- Slide media sizing: ratio `C = h/w`; if `C > 840/1310` → tall: height `oV(840)`, width `oV(840/C)`; else wide: width `oV(1310)`, height `oV(840)` + `object-fit:contain` (images only)
- swiperMedia wrapper: flex center, relative
- **Cursor label** (desktop): absolute overlay inset `0 0 32px 0`, `cursor:none`; on mousemove a white label follows at `translate3d(x-16px, y-11px, 0)`, text `"<index+1>/<total>"`, bg #fff, `box-shadow:1px 1px 4px #0003`, padding `0 4px`, opacity 0→1 on hover
- **Click zones:** left half (`left:0, w-50%, h:calc(100%-75px), z-1, cursor:none`) → slidePrev; right half → slideNext
- Videos: `<video autoplay muted loop playsinline preload="metadata">` src `/sites/.../videos/<hashName>`, sized like images, pointer-events none
- Images: MagicImage with hashName

## States & Behaviors
- **Expand/collapse:** click TYPE./INFO/middle/right areas toggles; 0.8s `cubic-bezier(0.075,0.82,0.165,1)`; default collapsed.
- **Carousel hover:** label appears and follows cursor; cursor hidden.
- **Carousel wheel:** horizontal wheel scrolls slides; vertical passes to column.

## Assets
- `/sites/studiodpi-work-708a7940/root-8a5edab2/images/<hashName>` and `.../videos/<hashName>`

## Text Content
- Fixed labels: `TYPE.`, `INFO`, `CLIENT.`, `Year.` (exact casing), `(LINK)` when `work.link`.
- Content verbatim from `WORKS` in data.ts.

## Responsive
- All sizes vw (1920 base); text fixed 16px/20px.
