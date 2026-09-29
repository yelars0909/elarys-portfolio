# InfoColumn Specification

## Overview
- **Target file:** `src/components/sites/studiodpi-work-708a7940/root-8a5edab2/InfoColumn.tsx`
- **Screenshot:** `docs/design-references/studiodpi-work-708a7940/root-8a5edab2/desktop-1440-top.png`
- **Interaction model:** static + native internal scroll; one click handler on title

## DOM Structure
```
div.wrap (width:18.75vw, h:100vh, flex col, color #000)
├─ div.top (flex-none, flex col, mb-[17px])
│  └─ div.topTitle "STUDIO DPi" (h-56px, border-b 1px #707070, flex items-center, cursor pointer, onClick → reset)
├─ div.center (flex-1, overflow-y auto, scrollbar hidden, scroll-behavior smooth, text 16px/20px)
│  ├─ div.desc.spec (mb-44px; p + mt-22px except first) — studio description HTML (CN bold para + EN para)
│  ├─ for each jigsaw:
│  │  ├─ p.title (jigsaw name, mb-0)
│  │  ├─ mode CONTACT/RICH_TEXT → div.desc(.contact if CONTACT) mb-22px, innerHTML description
│  │  └─ mode ROWS → div.list mb-22px > div.listItem (flex) × rows
│  │        ├─ span.listItemLeft (year; min-width 4.1666667vw; padding-right 0.5208333vw; flex-none)
│  │        └─ span.listItemRight (flex-1; innerHTML description)
└─ div.bottom (flex-none, h-62px, border-t 1px #707070, bg #fff, flex items-center, line-height 20px)
   └─ span.bottomText (font-size 12px) "Copyright ©️2023 STUDIO DPi. All Rights reserved."
```

## Computed Styles (from original stylesheet)
- wrap: `width:18.75vw; height:100vh; display:flex; flex-direction:column`
- topTitle: `height:56px; border-bottom:1px solid #707070; line-height:20px; font-size:16px; display:flex; align-items:center; cursor:pointer`
- center: `flex:1; overflow-y:auto; font-size:16px; line-height:20px; scrollbar-width:none; scroll-behavior:smooth`
- desc: `margin-bottom:22px; text-align:left`; `.spec`: `margin-bottom:44px`; `.spec p { margin-top:22px } .spec p:first-child { margin-top:0 }`
- title: `margin-bottom:0` (global p margin already 0)
- listItemLeft: `min-width:4.1666666667vw; padding-right:0.5208333333vw; flex:0 0 auto`
- bottom: `height:62px; border-top:1px solid #707070; background:#fff; display:flex; align-items:center`
- bottomText: `font-size:12px`

## States & Behaviors
- **Title click:** scrolls center to top (`scrollTop=0`) and calls `onStudioClick()` (global reset).
- **Links:** CONTACT email is `mailto:` (inherits black, no underline — `.contact p a { text-decoration:none }`); FRIENDS links are `<a target="_blank">` (black, default underline from UA? — original global `p a { color:#000 }`, underline default). Description bold/italic inline styles preserved via innerHTML.
- No hover states other than cursor.

## Content
- Verbatim in `data.ts` → `ABOUT` (descriptionEn + jigsaws in order: CONTACT, ACTIVITIES, AWARDS, SELECTED CLIENTS, JOBS, FRIENDS).
- Copyright: `COPYRIGHT` export.

## Responsive
- Fluid vw layout; fixed 16px/20px text. Same at all widths (matches original desktop-UA behavior).
