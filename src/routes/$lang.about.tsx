import { createFileRoute } from "@tanstack/react-router";
import { isLang, type Lang } from "@/content/site";
import { dictFor } from "@/lib/lang";
import { pageHead } from "@/lib/seo";
import { CtaBand, Kicker, PageHero, Section, SectionTitle } from "@/components/site/Section";
import engineerImg from "@/assets/eva-taqa-engineer.jpg";
import ceoImg from "@/assets/ceo-message.jpg";

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
              src={engineerImg}
              alt={rtl ? "مهندس إيفا طاقة يعمل على لوحة توزيع كهربائية" : "EVA TAQA engineer working on an electrical distribution panel"}
              loading="lazy"
              width={1086}
              height={1448}
              className="aspect-[4/5] w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-orange" />

          </div>
          <div>
            <Kicker>{rtl ? "لماذا نحن" : "Why EVA TAQA"}</Kicker>
            <p className="mt-6 text-muted-foreground">{t.about.body[1]}</p>
            <p
              className="mt-10 text-2xl font-bold text-orange"
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

      <Section className="border-b border-hairline">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <Kicker>{t.ceo.kicker}</Kicker>
            <SectionTitle>{t.ceo.title}</SectionTitle>
            <div className="mt-6 h-px w-20 accent-rule" />
            <p className="mt-6 text-xs font-bold tracking-[0.24em] text-muted-foreground uppercase">{t.ceo.role}</p>
            <div className="relative mt-8 max-w-sm overflow-hidden border border-hairline">
              <img
                src={ceoImg}
                alt={rtl ? "صورة من مناسبة تكريم لإيفا طاقة" : "EVA TAQA recognition ceremony"}
                loading="lazy"
                width={837}
                height={1280}
                className="aspect-[3/4] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-orange" />
            </div>
          </div>
          <div className="border-s-2 border-orange ps-8">
            {t.ceo.body.map((p, i) => (
              <p key={i} className={`text-muted-foreground ${i === 0 ? "text-lg text-foreground" : "mt-6"}`}>
                {p}
              </p>
            ))}
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
                <span className="text-xs font-bold tracking-widest text-orange/70">{b.label}</span>
                <h3 className="text-2xl font-extrabold">{b.heading}</h3>
              </div>
              <div className="mt-4 h-px w-16 accent-rule opacity-60 transition-all duration-500 group-hover:w-28" />
              {b.body && <p className="mt-6 text-muted-foreground">{b.body}</p>}
              {b.items && (
                <ul className="mt-6 space-y-3">
                  {b.items.map((i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-orange" />
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
