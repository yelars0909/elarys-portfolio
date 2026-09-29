# Design Tokens — studiodpi.work

Source: exact values from the site's own stylesheets (`chunks/index.pretty.css`, computed styles) and JS.

## Colors
| Token | Value | Usage |
|---|---|---|
| text / foreground | `#000000` | all primary text |
| muted | `#959595` | strip numbers, labels (TYPE./CLIENT./Year.), active category, links |
| border | `#707070` | 1px solid — top bars bottom border, left bottom bar top border |
| background | `#ffffff` | page bg, top bars bg |
| loader / placeholder | `#f9f9f9` | image loading placeholder bg |
| video loader | `#000000` | video loading bg |
| overlay point bg | `#ffffff` + `box-shadow: 1px 1px 4px #0003` | swiper cursor label |

## Typography
- Font family: `AntiqueOli-Reg, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, ...`
- `@font-face`: `AntiqueOli-Lig` → `/static/3A2B35_0_0.716309c3.woff2`; `AntiqueOli-Reg` → `/static/3A2B35_1_0.51ebe8c9.woff2`
- Base: `font-size: 16px; line-height: 20px; font-weight: 400` everywhere (top bars, lists, item rows, categories)
- Left bottom copyright: `12px / 20px`
- Numbers in strip: 16px/20px, `#959595`, centered, `padding-bottom: 3px`; active item `#000`

## Layout (design base 1920px, `oV(x) = x*100/1920 vw`)
- Page `.main`: `display:flex; justify-content:space-between; padding: 0 1.0416666667vw; height:100vh; overflow hidden` (document does NOT scroll; columns scroll internally)
- Left column: `width: 18.75vw` (360px @1920), `height:100vh`, flex column
- Middle strip: `flex:1` (≈210px @1920), `height:100vh`, overflow hidden; top spacer 11px white
- Right column: `width: oV(1310) = 68.23vw`, `height:100vh`, flex column

## Fixed heights / borders
- Top bars (left title, right category bar): `height:56px; border-bottom:1px solid #707070; background:#fff; margin-bottom:17px; line-height:56px` (left title uses `line-height:20px` + flex align)
- Left bottom bar: `height:62px; border-top:1px solid #707070; background:#fff`, vertically centered text

## Right column internals
- Category strip: `font-size:16px; line-height:56px; white-space:nowrap; overflow-x:auto; scrollbar hidden`, items separated by `, `; default item `#000`, ACTIVE item `#959595` (inverted!)
- "DOTs ON i" top-right: `font-size:16px; line-height:56px; cursor:pointer; hover color #707070`
- Project item: `margin-bottom:32px`; center scroll container `padding-bottom:20px`, `scroll-behavior:smooth`, scrollbar hidden
- Item top/hide row columns: left `width:24%; margin-right:20px`; middle `width:24%; margin-right:40px; cursor:pointer`; right `width:52%; cursor:pointer`
- `itemHide`: `height:0; overflow:hidden` → `.show { height:auto }`; `transition: all cubic-bezier(0.075,0.82,0.165,1) 0.8s`; children `padding-top:10px`
- Inline links in descriptions: `color:#959595; text-decoration:underline; hover → #000`
- 20px spacer between item rows and carousel

## Carousel (Swiper)
- Container relative; swiper height `oV(840)`, full column width
- `slidesPerView:auto; spaceBetween:20; loop:true; loopedSlides:4; mousewheel:{forceToAxis:true}` (desktop); slide width auto
- Media sizing: ratio C=h/w; if C > 840/1310 → tall: `height:oV(840); width:oV(840/C)`; else `width:oV(1310); height:oV(840)` with `object-fit:contain` for images
- Hover overlay over media: `position:absolute; inset:0 0 32px 0; cursor:none`; label follows mouse `translate3d(x-16, y-11, 0)`, text `n/total` (e.g. `3/10`), bg white, shadow `1px 1px 4px #0003`, padding `0 4px`, opacity 0 → 1 on hover
- Click zones: left 50% = prev, right 50% = next, `height: calc(100% - 75px)`, `cursor:none`, z-index 1

## Middle strip (marquee)
- Item: flex column centered, full width, `cursor:pointer`; image `oV(170) × oV(170)`; number below (zero-padded `01`…`35`)
- Auto-scroll: RAF loop, `translateY -= 1px` per frame (frame-rate dependent — 60px/s @60Hz, 120px/s @120Hz), wraps at one block height; 3 duplicated blocks, wrapper offset `translate3d(0,-33.3333%,0)`
- Pauses on hover over the strip; wheel over strip manually adjusts position
- Click item → right column smooth-scrolls to that project; that item's number turns black (bold)

## Random overlay ("DOTs ON i")
- `position:fixed; inset:0; z-index:999; pointer-events:none; flex center`
- Image: `height:100vh; width:auto; max-width:100vw; object-fit:contain`
- Click "DOTs ON i" → random image appears; click anywhere on page → dismisses
