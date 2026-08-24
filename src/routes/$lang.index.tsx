import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";
import { SERVICE_SLUGS, isLang, type Lang } from "@/content/site";
import { dictFor } from "@/lib/lang";
import { pageHead } from "@/lib/seo";
import { Link } from "@/components/site/link";
import { CtaBand, Kicker, Section, SectionTitle } from "@/components/site/Section";
import heroImg from "@/assets/hero-grid.jpg";
import riyadhImg from "@/assets/riyadh.jpg";
import controlImg from "@/assets/control-room.jpg";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => pageHead(isLang(params.lang) ? params.lang : "en", "home", ""),
  component: Home,
});

function Home() {
  const { lang } = Route.useParams() as { lang: Lang };
  const t = dictFor(lang);
  const rtl = lang === "ar";
  const Arrow = rtl ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroImg}
          alt={rtl ? "محطة كهرباء وأبراج نقل الطاقة ليلاً" : "High-voltage substation and transmission towers at night"}
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 hero-veil" />
        <div className="absolute inset-0 grid-overlay opacity-70" />
        <div className="absolute inset-x-0 top-1/3 h-px flow-line" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-[1280px] flex-col justify-center px-6 pt-32 pb-20">
          <div className="reveal">
            <Kicker>{t.hero.eyebrow}</Kicker>
          </div>
          <h1
            className={`mt-8 reveal font-extrabold ${
              rtl ? "max-w-4xl text-4xl leading-[1.35] sm:text-5xl md:text-6xl" : "max-w-4xl text-5xl sm:text-6xl md:text-7xl"
            }`}
            style={{ animationDelay: "80ms" }}
          >
            {t.hero.headline[0]}
            <br />
            <span className="text-gradient">{t.hero.headline[1]}</span>
          </h1>
          <p
            className={`mt-8 reveal text-muted-foreground ${rtl ? "max-w-2xl text-lg" : "max-w-xl text-lg"}`}
            style={{ animationDelay: "160ms" }}
          >
            {t.hero.desc}
          </p>
          <p
            className="mt-6 reveal text-base text-cyan/90"
            style={{ animationDelay: "220ms", fontFamily: "var(--font-arabic)" }}
            lang="ar"
            dir="rtl"
          >
            {t.hero.tagline}
          </p>

          <div className="mt-12 reveal flex flex-wrap items-center gap-4" style={{ animationDelay: "280ms" }}>
            <Link
              to={`/${lang}/services`}
              className="rounded-xs bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-shadow hover:shadow-[var(--glow-primary)]"
            >
              {t.hero.primary}
            </Link>
            <Link
              to={`/${lang}/contact`}
              className="rounded-xs border border-border px-8 py-4 text-sm font-bold backdrop-blur-sm transition-colors hover:border-cyan/60"
            >
              {t.hero.secondary}
            </Link>
            <Link
              to={`/${lang}/projects`}
              className="group inline-flex items-center gap-2 px-2 py-4 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.hero.tertiary.replace(/[→←]\s*$/, "").trim()}
              <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Kicker>{t.about.kicker}</Kicker>
            <SectionTitle>{t.about.title}</SectionTitle>
            {t.about.body.map((p) => (
              <p key={p.slice(0, 24)} className="mt-6 text-muted-foreground">
                {p}
              </p>
            ))}
            <Link
              to={`/${lang}/about`}
              className="group mt-10 inline-flex items-center gap-3 border-b border-cyan/40 pb-2 text-sm font-bold text-cyan"
            >
              {t.about.cta}
              <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
            {t.about.pillars.map((p) => (
              <div key={p.title} className="bg-surface p-8 transition-colors hover:bg-surface-2">
                <h3 className="text-base font-bold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* VISION / MISSION / STRATEGY / OBJECTIVES */}
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

      {/* SERVICES */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>{t.services.kicker}</Kicker>
            <SectionTitle>{t.services.title}</SectionTitle>
          </div>
          <Link
            to={`/${lang}/services`}
            className="group inline-flex items-center gap-2 text-sm font-bold text-cyan"
          >
            {t.services.back}
            <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>
        <div className="mt-14 grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_SLUGS.map((slug) => {
            const s = t.services.items[slug];
            return (
              <Link
                key={slug}
                to={`/${lang}/services/${slug}`}
                className="group relative bg-background p-9 transition-colors hover:bg-surface"
              >
                <span className="text-xs font-bold tracking-widest text-cyan/70">{s.num}</span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-cyan opacity-0 transition-opacity group-hover:opacity-100">
                  {t.services.detailCta}
                  <Arrow className="size-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* RELIABILITY */}
      <Section className="border-y border-hairline">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden border border-hairline">
            <img
              src={controlImg}
              alt={rtl ? "غرفة تحكم كهربائية حديثة" : "Modern electrical control room"}
              loading="lazy"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-background/30" />
          </div>
          <div>
            <ShieldCheck className="size-8 text-cyan" />
            <h2 className="mt-8 text-4xl font-extrabold md:text-5xl">
              {t.reliability.title[0]}
              <br />
              <span className="text-gradient">{t.reliability.title[1]}</span>
            </h2>
            <p className="mt-8 text-muted-foreground">{t.reliability.body}</p>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section>
        <Kicker>{t.projects.kicker}</Kicker>
        <SectionTitle>{t.projects.title}</SectionTitle>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.projects.items.map((p, i) => (
            <article key={p.name} className="lift group relative overflow-hidden border border-hairline bg-surface">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={i === 2 ? controlImg : i === 1 ? heroImg : riyadhImg}
                  alt={p.name}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.scope}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">{t.projects.note}</p>
      </Section>

      <CtaBand lang={lang} />
    </>
  );
}
