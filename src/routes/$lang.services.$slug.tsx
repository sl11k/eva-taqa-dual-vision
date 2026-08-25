import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DICT, SERVICE_SLUGS, isLang, type Lang, type ServiceSlug } from "@/content/site";
import { dictFor } from "@/lib/lang";
import { pageHead } from "@/lib/seo";
import { Link } from "@/components/site/link";
import { CtaBand, Section } from "@/components/site/Section";
import solarImg from "@/assets/solar.jpg";
import heroImg from "@/assets/hero-grid.jpg";
import controlImg from "@/assets/control-room.jpg";
import riyadhImg from "@/assets/riyadh.jpg";

const IMAGES: Record<ServiceSlug, string> = {
  "power-transmission": heroImg,
  "distribution-substations": heroImg,
  "electrical-installations": riyadhImg,
  "power-plants": controlImg,
  "solar-renewable": solarImg,
  "control-panels-hvac": controlImg,
};

export const Route = createFileRoute("/$lang/services/$slug")({
  beforeLoad: ({ params }) => {
    if (!SERVICE_SLUGS.includes(params.slug as ServiceSlug)) throw notFound();
  },
  head: ({ params }) => {
    const lang: Lang = isLang(params.lang) ? params.lang : "en";
    const service = DICT[lang].services.items[params.slug as ServiceSlug];
    return pageHead(lang, "services", `/services/${params.slug}`, {
      title: service ? `${service.title} — EVA TAQA` : undefined,
      description: service?.desc,
    });
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { lang, slug } = Route.useParams() as { lang: Lang; slug: ServiceSlug };
  const t = dictFor(lang);
  const s = t.services.items[slug];
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const others = SERVICE_SLUGS.filter((x) => x !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-24">
        <img
          src={IMAGES[slug]}
          alt={s.title}
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 hero-veil" />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Link to={`/${lang}`} className="hover:text-foreground">
              {t.nav.home}
            </Link>
            <span className="opacity-50">/</span>
            <Link to={`/${lang}/services`} className="hover:text-foreground">
              {t.nav.services}
            </Link>
            <span className="opacity-50">/</span>
            <span className="text-foreground">{s.title}</span>
          </nav>
          <span className="mt-10 block text-xs font-bold tracking-widest text-orange/80">{s.num}</span>
          <h1 className={`mt-4 max-w-4xl font-extrabold ${lang === "ar" ? "text-4xl md:text-5xl" : "text-5xl md:text-6xl"}`}>
            {s.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{s.desc}</p>
        </div>
      </section>

      <Section className="section-light border-y border-hairline">
        <div className="grid gap-px bg-hairline md:grid-cols-3">
          {s.points.map((p, i) => (
            <div key={p} className="bg-surface p-9">
              <span className="inline-flex h-9 w-9 items-center justify-center bg-orange text-xs font-bold tracking-widest text-white">
                {lang === "ar" ? ["٠١", "٠٢", "٠٣"][i] : `0${i + 1}`}
              </span>
              <p className="mt-5 font-semibold">{p}</p>
            </div>
          ))}
        </div>
      </Section>


      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-2xl font-extrabold">{t.services.title}</h2>
          <Link to={`/${lang}/services`} className="inline-flex items-center gap-2 text-sm font-bold text-orange">
            {t.services.back}
            <Arrow className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-px bg-hairline md:grid-cols-3">
          {others.map((o) => (
            <Link key={o} to={`/${lang}/services/${o}`} className="bg-background p-8 transition-colors hover:bg-surface">
              <span className="text-xs font-bold tracking-widest text-orange/70">{t.services.items[o].num}</span>
              <h3 className="mt-4 text-lg font-bold">{t.services.items[o].title}</h3>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand lang={lang} />
    </>
  );
}
