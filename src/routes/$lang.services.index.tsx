import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SERVICE_SLUGS, isLang, type Lang } from "@/content/site";
import { dictFor } from "@/lib/lang";
import { pageHead } from "@/lib/seo";
import { Link } from "@/components/site/link";
import { CtaBand, PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/$lang/services/")({
  head: ({ params }) => pageHead(isLang(params.lang) ? params.lang : "en", "services", "/services"),
  component: Services,
});

function Services() {
  const { lang } = Route.useParams() as { lang: Lang };
  const t = dictFor(lang);
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <>
      <PageHero lang={lang} kicker={t.services.kicker} title={t.services.title} intro={t.hero.desc} />

      <Section className="section-light">
        <div className="grid gap-px bg-hairline md:grid-cols-2">
          {SERVICE_SLUGS.map((slug) => {
            const s = t.services.items[slug];
            return (
              <Link
                key={slug}
                to={`/${lang}/services/${slug}`}
                className="group bg-surface p-10 transition-colors hover:bg-surface-2"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center bg-orange text-sm font-bold tracking-widest text-white">
                  {s.num}
                </span>
                <h2 className="mt-5 text-2xl font-bold">{s.title}</h2>
                <div className="mt-4 h-px w-16 accent-rule opacity-80 transition-all duration-500 group-hover:w-28" />
                <p className="mt-6 text-muted-foreground">{s.desc}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-orange">
                  {t.services.detailCta}
                  <Arrow className="size-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </span>

              </Link>
            );
          })}
        </div>
      </Section>

      <CtaBand lang={lang} />
    </>
  );
}
