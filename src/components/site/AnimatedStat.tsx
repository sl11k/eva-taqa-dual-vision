"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatProps = {
  value: string;
  className?: string;
};

export function AnimatedStat({ value, className }: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parts = [...value.matchAll(/\d+(?:\.\d+)?/g)].map(([number]) => ({
      target: Number(number),
      decimals: number.includes(".") ? (number.split(".")[1]?.length ?? 0) : 0,
    }));
    if (parts.length === 0) {
      setDisplay(value);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let replayTimer = 0;
    let inView = false;

    const render = (progress: number) => {
      let index = 0;
      setDisplay(
        value.replace(/\d+(?:\.\d+)?/g, () => {
          const part = parts[index++];
          if (!part) return "0";
          return (part.target * progress).toFixed(part.decimals);
        }),
      );
    };

    const start = () => {
      render(0);
      const startedAt = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / 1700, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        render(eased);
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        } else if (inView) {
          replayTimer = window.setTimeout(start, 2600);
        }
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !inView) {
          inView = true;
          start();
        } else if (!entry?.isIntersecting && inView) {
          inView = false;
          cancelAnimationFrame(frame);
          window.clearTimeout(replayTimer);
          setDisplay(value);
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.clearTimeout(replayTimer);
    };
  }, [value]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {display}
    </span>
  );
}
