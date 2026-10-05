"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Lang } from "@/content/site";

export type CarouselProject = {
  image: string;
  title: string;
  military?: boolean;
};

export function ProjectCarousel({ projects, lang }: { projects: CarouselProject[]; lang: Lang }) {
  const rtl = lang === "ar";
  const [viewportRef, api] = useEmblaCarousel({ loop: true, align: "start", direction: rtl ? "rtl" : "ltr" });

  useEffect(() => {
    if (!api) return;
    const viewport = api.rootNode();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    let paused = false;
    const observer = new IntersectionObserver(([entry]) => {
      inView = Boolean(entry?.isIntersecting);
    }, { threshold: 0.2 });
    observer.observe(viewport);

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    viewport.addEventListener("pointerdown", pause);
    window.addEventListener("pointerup", resume);
    window.addEventListener("pointercancel", resume);

    const timer = window.setInterval(() => {
      if (inView && !paused && !document.hidden && !reduceMotion.matches) api.scrollNext();
    }, 3000);

    return () => {
      window.clearInterval(timer);
      observer.disconnect();
      viewport.removeEventListener("pointerdown", pause);
      window.removeEventListener("pointerup", resume);
      window.removeEventListener("pointercancel", resume);
    };
  }, [api]);

  return (
    <div className="relative mt-14">
      <div ref={viewportRef} className="overflow-hidden" aria-label={rtl ? "مشاريع إيفا طاقة" : "EVA TAQA projects"} aria-roledescription="carousel">
        <div className="-ms-6 flex touch-pan-y">
          {projects.map((project) => (
            <div key={project.title} className="min-w-0 flex-[0_0_85%] ps-6 sm:flex-[0_0_48%] lg:flex-[0_0_33.333%]">
              <article className={`group h-full overflow-hidden border bg-surface ${project.military ? "border-orange" : "border-hairline"}`}>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={1600}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-orange" />
                  {project.military && (
                    <span className="absolute end-4 top-4 bg-orange px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-primary-foreground">
                      {rtl ? "مشروع عسكري" : "Military project"}
                    </span>
                  )}
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex gap-3" aria-label={rtl ? "التحكم بالمشاريع" : "Project controls"}>
        <button type="button" onClick={() => api?.scrollPrev()} aria-label={rtl ? "المشروع السابق" : "Previous project"} className="flex size-10 items-center justify-center border border-hairline text-orange transition-colors hover:border-orange focus-visible:outline-2 focus-visible:outline-orange">
          {rtl ? <ArrowRight className="size-5" /> : <ArrowLeft className="size-5" />}
        </button>
        <button type="button" onClick={() => api?.scrollNext()} aria-label={rtl ? "المشروع التالي" : "Next project"} className="flex size-10 items-center justify-center border border-hairline text-orange transition-colors hover:border-orange focus-visible:outline-2 focus-visible:outline-orange">
          {rtl ? <ArrowLeft className="size-5" /> : <ArrowRight className="size-5" />}
        </button>
      </div>
    </div>
  );
}
