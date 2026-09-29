"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { MagicImage } from "./MagicImage";
import { Marquee, type MarqueeHandle } from "./Marquee";
import type { Work } from "./types";

interface IndexStripProps {
  list: Work[];
  currIndex: number;
  isMiddleNeedReset: boolean;
  setIsMiddleNeedReset: (v: boolean) => void;
  onItem: (index: number) => void;
}

function pad(n: number): string {
  return n >= 10 ? String(n) : `0${n}`;
}

/**
 * Middle column: infinite auto-scrolling strip of numbered project covers.
 * Auto-scrolls upward (RAF marquee), pauses on hover, wheel adjusts manually,
 * click jumps the right column to that project.
 */
export function IndexStrip({
  list,
  currIndex,
  isMiddleNeedReset,
  setIsMiddleNeedReset,
  onItem,
}: IndexStripProps) {
  const marqueeRef = useRef<MarqueeHandle>(null);

  useEffect(() => {
    if (isMiddleNeedReset) {
      marqueeRef.current?.stop();
      marqueeRef.current?.translateTo(0);
      marqueeRef.current?.start();
      setIsMiddleNeedReset(false);
    }
  }, [isMiddleNeedReset, setIsMiddleNeedReset]);

  return (
    <div
      className="flex h-screen w-[8vw] flex-none flex-col overflow-hidden"
      onMouseEnter={() => marqueeRef.current?.stop()}
      onMouseLeave={() => marqueeRef.current?.start()}
    >
      <div className="h-[11px] w-full flex-none bg-white" />
      <Marquee ref={marqueeRef} className="w-full flex-1" speed={0.4}>
        {list.map((work, i) => (
          <div
            key={work.id}
            className="mb-[36px] flex w-full translate-x-[7px] cursor-pointer flex-col items-center justify-center"
            onClick={() => onItem(i)}
          >
            {work.cover && (
              <MagicImage
                hashName={work.cover.hashName}
                rootStyle={{ width: "4.3333333vw", height: "4.3333333vw" }}
              />
            )}
            <div
              className={cn(
                "mt-[12px] pb-[3px] text-center text-base leading-5 text-[#959595]",
              )}
            >
              {pad(i + 1)}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
