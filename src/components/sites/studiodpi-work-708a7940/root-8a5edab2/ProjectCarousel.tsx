"use client";

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import { MagicImage, ASSET_ROOT } from "./MagicImage";
import type { Media } from "./types";

const FRAME_WIDTH = 862;
const FRAME_HEIGHT = 553;

interface ProjectCarouselProps {
  eventId: number;
  medias: Media[];
}

/**
 * Per-project media carousel: horizontal Swiper (loop, mousewheel forceToAxis),
 * media sized to a fixed 840-unit height row, a white "n/total" label that
 * follows the mouse (native cursor hidden), and invisible left/right click
 * zones for prev/next.
 */
export function ProjectCarousel({ eventId, medias }: ProjectCarouselProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const wheelAccRef = useRef(0);
  const wheelGestureActiveRef = useRef(false);
  const wheelQuietTimerRef = useRef<number | null>(null);
  const pendingDirRef = useRef(0);
  const [cursor, setCursor] = useState<{ x: number; y: number; index: number } | null>(null);

  // Queue a slide request: Swiper drops slideNext/slidePrev calls made while a
  // transition is running, which feels like dropped swipes. If animating,
  // remember the latest direction and fire it when the transition ends.
  const requestSlide = (dir: number) => {
    const s = swiperRef.current;
    if (!s) return;
    if (s.animating) {
      pendingDirRef.current = dir;
      return;
    }
    pendingDirRef.current = 0;
    if (dir > 0) s.slideNext();
    else s.slidePrev();
  };

  // Custom wheel handling tuned for trackpads: the FIRST horizontal event of a
  // gesture (after 120ms of quiet) slides immediately — zero latency, so it
  // feels silky. The rest of that gesture's stream (inertia tail) is absorbed
  // by a negative "hole" in a decaying accumulator; only a sustained stream
  // (a genuinely continued scroll) crosses the in-gesture threshold.
  // Native non-passive listener because React's onWheel is passive and cannot
  // preventDefault (page would scroll sideways / navigate).
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const IN_GESTURE_THRESHOLD = 120;
    const HOLE = -200;
    const handler = (e: globalThis.WheelEvent) => {
      const s = swiperRef.current;
      if (!s) return;
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (wheelQuietTimerRef.current !== null) {
        window.clearTimeout(wheelQuietTimerRef.current);
      }
      wheelQuietTimerRef.current = window.setTimeout(() => {
        wheelGestureActiveRef.current = false;
        wheelAccRef.current = 0;
        wheelQuietTimerRef.current = null;
      }, 120);
      const dir = e.deltaX > 0 ? 1 : -1;
      if (!wheelGestureActiveRef.current) {
        // New gesture: respond instantly, then absorb this gesture's tail.
        wheelGestureActiveRef.current = true;
        wheelAccRef.current = HOLE;
        requestSlide(dir);
        return;
      }
      wheelAccRef.current = wheelAccRef.current * 0.9 + Math.abs(e.deltaX);
      if (wheelAccRef.current < IN_GESTURE_THRESHOLD) return;
      wheelAccRef.current = HOLE;
      requestSlide(dir);
    };
    wrap.addEventListener("wheel", handler, { passive: false });
    return () => {
      wrap.removeEventListener("wheel", handler);
      if (wheelQuietTimerRef.current !== null) {
        window.clearTimeout(wheelQuietTimerRef.current);
      }
    };
  }, []);

  const mediaStyle = (m: Media): CSSProperties => {
    // Every media gets the fixed row height; width follows its own aspect
    // ratio, so narrow slides let the next one peek in (original behavior).
    const ratio = m.height / m.width;
    if (Number.isFinite(ratio) && ratio > 0) {
      return { height: FRAME_HEIGHT, width: FRAME_HEIGHT / ratio };
    }
    return { width: FRAME_WIDTH, height: FRAME_HEIGHT };
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    // Find the slide under the cursor, looking past the click zones / label.
    let index = swiperRef.current?.realIndex ?? 0;
    for (const el of document.elementsFromPoint(e.clientX, e.clientY)) {
      const slide = (el as HTMLElement).closest?.(".swiper-slide");
      if (slide && wrap.contains(slide)) {
        const attr = (slide as HTMLElement).getAttribute("data-swiper-slide-index");
        if (attr !== null) index = Number(attr);
        break;
      }
    }
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top, index });
  };

  return (
    <div
      ref={wrapRef}
      className="relative cursor-none"
      id={`DPI_SWIPER_EVENT_${eventId}`}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setCursor(null)}
    >
      <Swiper
        direction="horizontal"
        slidesPerView="auto"
        spaceBetween={18}
        speed={500}
        loop={true}
        onSwiper={(s) => {
          swiperRef.current = s;
          s.on("slideChangeTransitionEnd", () => {
            const dir = pendingDirRef.current;
            if (dir === 0) return;
            pendingDirRef.current = 0;
            if (dir > 0) s.slideNext();
            else s.slidePrev();
          });
        }}
        className="dpi-swiper"
      >
        {medias.map((m) => (
          <SwiperSlide key={m.hashName}>
            <div className="relative flex items-center justify-center">
              {m.type === "IMAGE" && (
                <MagicImage
                  hashName={m.hashName}
                  rootStyle={mediaStyle(m)}
                />
              )}
              {m.type === "VIDEO" && (
                <video
                  src={`${ASSET_ROOT}/videos/${m.hashName}`}
                  style={mediaStyle(m)}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="pointer-events-none bg-black object-contain"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="absolute top-0 right-0 z-10 h-[calc(100%-75px)] w-1/2 cursor-none"
        onClick={() => requestSlide(1)}
      />
      <div
        className="absolute top-0 left-0 z-10 h-[calc(100%-75px)] w-1/2 cursor-none"
        onClick={() => requestSlide(-1)}
      />
      <span
        className="pointer-events-none absolute top-0 left-0 z-20 bg-white px-1 text-base leading-5 shadow-[1px_1px_4px_#0003]"
        style={{
          opacity: cursor ? 1 : 0,
          transform: cursor
            ? `translate3d(${cursor.x - 16}px, ${cursor.y - 11}px, 0px)`
            : undefined,
        }}
      >
        {`${(cursor?.index ?? 0) + 1}/${medias.length}`}
      </span>
    </div>
  );
}
