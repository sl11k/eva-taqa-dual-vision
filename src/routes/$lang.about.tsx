import { createFileRoute } from "@tanstack/react-router";
import { isLang, type Lang } from "@/content/site";
import { dictFor } from "@/lib/lang";
import { pageHead } from "@/lib/seo";
import { CtaBand, Kicker, PageHero, Section, SectionTitle } from "@/components/site/Section";
import riyadhImg from "@/assets/riyadh.jpg";

export const Route = createFileRoute("/$lang/about")({
  head: ({ params }) => pageHead(isLang(params.lang) ? params.lang : "en", "about", "/about"),
  component: About,
});

function About() {
  const { lang } = Route.useParams() as { lang: Lang };
  const t = dictFor(lang);
  const rtl = lang === "ar";

  return (
    <>
      <PageHero lang={lang} kicker={t.about.kicker} title={t.about.title} intro={t.about.body[0]} />

      <Section className="section-light border-b border-hairline">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden border border-hairline">
            <img
              src={riyadhImg}
              alt={rtl ? "أفق مدينة الرياض" : "Riyadh skyline at blue hour"}
              loading="lazy"
              width={1600}
              height={1008}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-orange" />

          </div>
          <div>
            <p className="text-muted-foreground">{t.about.body[1]}</p>
            <p
              className="mt-10 text-2xl font-bold text-gradient"
              lang={rtl ? "ar" : undefined}
            >
              {rtl ? "نطمح بأن نكون الأولى في الشرق الأوسط" : "We aspire to be the best in the Middle East."}
            </p>
            <div className="mt-8 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
              {t.about.pillars.map((p) => (
                <div key={p.title} className="bg-surface p-7">
                  <h3 className="text-sm font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-y border-hairline bg-surface/30">
        <Kicker>{rtl ? "التوجه الاستراتيجي" : "Strategic direction"}</Kicker>
        <SectionTitle>{rtl ? "الرؤية والمهمة والاستراتيجية والأهداف" : "Vision, Mission, Strategy & Objectives"}</SectionTitle>
        <div className="mt-16 grid gap-px bg-hairline md:grid-cols-2">
          {t.vmso.map((b) => (
            <article key={b.key} className="group bg-background p-10 transition-colors hover:bg-surface">
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-bold tracking-widest text-cyan/70">{b.label}</span>
                <h3 className="text-2xl font-extrabold">{b.heading}</h3>
              </div>
              <div className="mt-4 h-px w-16 accent-rule opacity-60 transition-all duration-500 group-hover:w-28" />
              {b.body && <p className="mt-6 text-muted-foreground">{b.body}</p>}
              {b.items && (
                <ul className="mt-6 space-y-3">
                  {b.items.map((i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cyan/70" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Section>

      <CtaBand lang={lang} />
    </>
  );
}
