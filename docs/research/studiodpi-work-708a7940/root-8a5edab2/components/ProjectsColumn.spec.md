# ProjectsColumn Specification

## Overview
- **Target file:** `src/components/sites/studiodpi-work-708a7940/root-8a5edab2/ProjectsColumn.tsx`
- **Screenshot:** `desktop-1440-top.png` (right column)
- **Interaction model:** click-driven (category filter, DOTs ON i) + native scroll + programmatic smooth scroll

## DOM Structure
```
div.wrap (width: oV(1310) = 68.2291667vw, h-100vh, flex col, color #000)
├─ div.top (flex-none, h-56px, border-b 1px #707070, flex items-center, bg #fff, mb-17px)
│  ├─ div.topLeft (flex items-center, flex-1, pr-16px, min-w-0)
│  │  └─ div.topLeftCategory (w-100%, 16px/56px, nowrap, overflow-x auto, scrollbar hidden, scroll-behavior smooth)
│  │      └─ per category i: [i>0 → <span>", "</span>] + <span item onClick>{nameEn}</span>
│  │         item: color #000, cursor pointer; ACTIVE (currCategoryId===id): color #959595
│  └─ div.topRight "DOTs ON i" (flex-none, line-height 56px, cursor pointer, 16px, text-left; hover color #707070)
└─ div.center (relative, flex-1, overflow-y auto, scrollbar hidden, scroll-behavior smooth, pb-20px)
   └─ ProjectItem × filtered works (see ProjectItem.spec.md)
```

## States & Behaviors
- **Category click (different id):** sets currCategoryId, filters list (works having that category), `isMiddleNeedReset` + `isRightNeedReset` → both columns jump to top, currIndex → -1. Clicking the active category: no-op.
- **Category list content:** "ALL PROJECTS" (id -1) prepended, then API order: VISUAL IDENTITY, PACKAGING, BOOK, KEY VISUAL, DIGITAL, INSTALLATION & DISPLAY.
- **DOTs ON i click:** `stopPropagation`, pick random supply image, show overlay.
- **Scroll-into-view:** when `currIndex >= 0` changes → `document.getElementById("right-item-<works[currIndex].id>").scrollIntoView({behavior:"smooth"})`.
- **Reset:** when `isRightNeedReset` → center.scrollTop = 0, clear flag.

## Text Content
- "DOTs ON i" (exact), category names from `CATEGORIES` + "ALL PROJECTS".

## Responsive
- Column width 68.23vw; bar 56px fixed height; fonts 16px.
