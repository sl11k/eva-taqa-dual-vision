import { createFileRoute } from "@tanstack/react-router";
import { isLang, type Lang } from "@/content/site";
import { dictFor } from "@/lib/lang";
import { pageHead } from "@/lib/seo";
import { CtaBand, PageHero, Section } from "@/components/site/Section";
import riyadhImg from "@/assets/riyadh.jpg";
import heroImg from "@/assets/hero-grid.jpg";
import controlImg from "@/assets/control-room.jpg";

export const Route = createFileRoute("/$lang/projects")({
  head: ({ params }) => pageHead(isLang(params.lang) ? params.lang : "en", "projects", "/projects"),
  component: Projects,
});

const IMAGES = [riyadhImg, heroImg, controlImg];

function Projects() {
  const { lang } = Route.useParams() as { lang: Lang };
  const t = dictFor(lang);

  return (
    <>
      <PageHero lang={lang} kicker={t.projects.kicker} title={t.projects.title} intro={t.projects.note} />

      <Section>
        <div className="grid gap-8">
          {t.projects.items.map((p, i) => (
            <article
              key={p.name}
              className="lift group grid overflow-hidden border border-hairline bg-surface md:grid-cols-[1.1fr_1fr]"
            >
              <div className="relative h-64 overflow-hidden md:h-full">
                <img
                  src={IMAGES[i % IMAGES.length]}
                  alt={p.name}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-10">
                <span className="text-xs font-bold tracking-widest text-cyan/70">
                  {lang === "ar" ? ["٠١", "٠٢", "٠٣"][i] : `0${i + 1}`}
                </span>
                <h2 className="mt-5 text-2xl font-extrabold md:text-3xl">{p.name}</h2>
                <div className="mt-5 h-px w-16 accent-rule opacity-60 transition-all duration-500 group-hover:w-28" />
                <p className="mt-5 text-muted-foreground">{p.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand lang={lang} />
    </>
  );
}
