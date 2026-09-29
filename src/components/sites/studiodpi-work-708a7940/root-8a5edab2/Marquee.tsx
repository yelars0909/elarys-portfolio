"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ReactNode,
  type WheelEvent,
} from "react";
import { cn } from "@/lib/utils";

export interface MarqueeHandle {
  translateTo: (y: number) => void;
  getTranslate: () => number;
  start: () => void;
  stop: () => void;
}

interface MarqueeProps {
  speed?: number;
  className?: string;
  childClassName?: string;
  children: ReactNode;
}

/**
 * Infinite vertical auto-scroll marquee, replicating the original site's
 * RAF-driven loop: translateY decreases by `speed` px per frame and wraps
 * when a full block has scrolled past. Three duplicated blocks render when
 * the content overflows; the inner wrapper is offset by -33.3333%.
 */
export const Marquee = forwardRef<MarqueeHandle, MarqueeProps>(function Marquee(
  { speed = 1, className, childClassName, children },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ isRunning: true, isOverflow: false, translateY: 0 });
  const speedRef = useRef(speed);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  const applyTransforms = useCallback((translateY: number, overflow: boolean) => {
    const inner = containerRef.current?.firstElementChild as HTMLElement | null;
    if (!inner) return;
    inner.style.transform = `translate3d(0, ${overflow ? "-33.3333%" : "0"},0)`;
    for (const el of Array.from(inner.children)) {
      (el as HTMLElement).style.transform = `translate3d(0,${translateY}px,0)`;
    }
  }, []);

  // Measure content vs container to decide overflow mode (and re-measure when
  // the children change, e.g. after a category filter).
  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      const container = containerRef.current;
      const block = blockRef.current;
      if (!container || !block) return;
      const overflow = block.clientHeight > container.clientHeight && block.clientHeight > 0;
      stateRef.current.isOverflow = overflow;
      setIsOverflow(overflow);
      applyTransforms(stateRef.current.translateY, overflow);
    });
    return () => window.cancelAnimationFrame(raf);
  }, [children, applyTransforms]);

  // Single persistent RAF loop; advancing is gated on isRunning/isOverflow so
  // start/stop/translateTo only mutate flags, mirroring the original API.
  useEffect(() => {
    let raf: number;
    const tick = () => {
      const state = stateRef.current;
      if (state.isRunning && state.isOverflow) {
        const blockHeight = blockRef.current?.clientHeight ?? 0;
        const next = state.translateY - speedRef.current;
        state.translateY = blockHeight > 0 && Math.abs(next) >= blockHeight ? 0 : next;
        applyTransforms(state.translateY, true);
      }
      raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [applyTransforms]);

  useImperativeHandle(
    ref,
    () => ({
      translateTo: (y: number) => {
        stateRef.current.translateY = y;
        applyTransforms(y, stateRef.current.isOverflow);
      },
      getTranslate: () => stateRef.current.translateY,
      start: () => {
        stateRef.current.isRunning = true;
      },
      stop: () => {
        stateRef.current.isRunning = false;
      },
    }),
    [applyTransforms],
  );

  const onWheel = (e: WheelEvent<HTMLDivElement>) => {
    const state = stateRef.current;
    if (!state.isOverflow) return;
    const blockHeight = blockRef.current?.clientHeight ?? 0;
    const next = state.translateY - e.deltaY;
    state.translateY = blockHeight > 0 && Math.abs(next) >= blockHeight ? 0 : next;
    applyTransforms(state.translateY, true);
  };

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)} onWheel={onWheel}>
      <div
        data-dpi-strip-inner
        style={{ transform: `translate3d(0, ${isOverflow ? "-33.3333%" : "0"},0)` }}
      >
        {isOverflow && <div className={childClassName}>{children}</div>}
        <div ref={blockRef} className={childClassName}>
          {children}
        </div>
        {isOverflow && <div className={childClassName}>{children}</div>}
      </div>
    </div>
  );
});
