import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, PlugZap, ShieldCheck, Truck, Wrench, Zap } from "lucide-react";
import { SERVICE_SLUGS, isLang, type Lang } from "@/content/site";
import { brandFor } from "@/content/brand";
import { dictFor } from "@/lib/lang";
import { pageHead } from "@/lib/seo";
import { Link } from "@/components/site/link";
import { CtaBand, Kicker, Section, SectionTitle } from "@/components/site/Section";
import { AnimatedStat } from "@/components/site/AnimatedStat";
import { ProjectCarousel } from "@/components/site/ProjectCarousel";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import heroImg from "@/assets/eva-taqa-hero.webp";
import riyadhImg from "@/assets/riyadh.jpg";
import controlImg from "@/assets/control-room.jpg";
import teamImg from "@/assets/team-site.jpg";
import inverterImg from "@/assets/projects/project-inverter-mobile.jpg";
import samiImg from "@/assets/projects/project-sami-generators.jpg";
import sdaiaImg from "@/assets/projects/project-sdaia-mobile-operations.jpg";
import seuImg from "@/assets/projects/project-seu-generators.jpg";
import borderUpsImg from "@/assets/projects/project-border-ups.jpg";
import satelliteBatteriesImg from "@/assets/projects/project-satellite-batteries.jpg";
import militaryVisual from "@/assets/military-field-concept.webp";
import seuLogo from "@/assets/clients/seu.svg";
import metroLogo from "@/assets/clients/riyadh-metro.svg";
import stcLogo from "@/assets/clients/stc.svg";
import mofaLogo from "@/assets/clients/mofa.png";
import mnghaLogo from "@/assets/clients/mngha.png";
import samiLogo from "@/assets/clients/sami.svg";

const CLIENT_LOGOS = [seuLogo, metroLogo, stcLogo, mofaLogo, mnghaLogo, samiLogo];

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => pageHead(isLang(params.lang) ? params.lang : "en", "home", ""),
  component: Home,
});

function Home() {
  const { lang } = Route.useParams() as { lang: Lang };
  const t = dictFor(lang);
  const b = brandFor(lang);
  const rtl = lang === "ar";
  const Arrow = rtl ? ArrowLeft : ArrowRight;
  const homeProjects = [
    {
      image: inverterImg,
      title: rtl
        ? "تركيب منظومة كهرباء وإنفيرتر لمركبة متنقلة"
        : "Mobile vehicle electrical and inverter system installation",
    },
    {
      image: samiImg,
      title: rtl
        ? "صيانة مولدات شركة سامي للصناعات العسكرية"
        : "Generator maintenance for SAMI Military Industries",
      military: true,
    },
    {
      image: sdaiaImg,
      title: rtl
        ? "تجهيز منظومة الكهرباء للعربات المتنقلة لسدايا"
        : "Electrical systems for SDAIA mobile vehicles",
    },
    {
      image: seuImg,
      title: rtl
        ? "صيانة مولدات الجامعة السعودية الإلكترونية"
        : "Generator maintenance for Saudi Electronic University",
    },
    {
      image: borderUpsImg,
      title: rtl
        ? "توريد وتركيب UPS لمنفذ علب بظهران الجنوب"
        : "UPS supply and installation at Alab border crossing, Dhahran Al-Janoub",
    },
    {
      image: satelliteBatteriesImg,
      title: rtl
        ? "توريد وتركيب بطاريات بإدارة الأقمار الصناعية في تبوك"
        : "Battery supply and installation for the Satellite Administration in Tabuk",
    },
  ];

  return (
    <>
      {/* ── HERO — brand book cover ─────────────────────────── */}
      <section className="relative min-h-[88vh] overflow-hidden bg-background">
        <img
          src={heroImg}
          alt={
            rtl
              ? "مهندس من إيفا طاقة يعمل على منظومة طاقة متنقلة ليلاً"
              : "EVA TAQA engineer working on a mobile power system at night"
          }
          width={1672}
          height={941}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className={`absolute inset-0 ${rtl ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-navy/90 via-navy/55 to-navy/10`} />
        <div className="absolute inset-0 dot-grid opacity-[0.16]" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-[1280px] flex-col justify-center px-6 pt-32 pb-24">
          <div className="reveal">
            <Kicker>{t.hero.eyebrow}</Kicker>
          </div>
          <h1
            className={`brand-caps mt-8 reveal ${rtl ? "max-w-4xl text-4xl sm:text-5xl md:text-6xl" : "max-w-4xl text-5xl sm:text-6xl md:text-[5.5rem]"}`}
            style={{ animationDelay: "80ms" }}
          >
            {t.hero.headline[0]}
            <br />
            <span className="text-orange">{t.hero.headline[1]}</span>
          </h1>
          <div className="mt-8 reveal brand-rule" style={{ animationDelay: "140ms" }} />
          <p
            className="mt-8 reveal max-w-xl text-lg text-muted-foreground"
            style={{ animationDelay: "180ms" }}
          >
            {t.hero.desc}
          </p>
          <p
            className="mt-6 reveal text-xs font-bold tracking-[0.34em] text-orange uppercase"
            style={{ animationDelay: "230ms" }}
          >
            {b.signature}
          </p>

          <div
            className="mt-12 reveal flex flex-wrap items-center gap-4"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              to={`/${lang}/services`}
              className="rounded-none bg-orange px-8 py-4 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.hero.primary}
            </Link>
            <Link
              to={`/${lang}/contact`}
              className="rounded-none border border-border px-8 py-4 text-sm font-bold transition-colors hover:border-orange"
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

        <div className="absolute inset-x-0 bottom-0 border-t border-hairline bg-navy/70 backdrop-blur-sm">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-10 gap-y-2 px-6 py-4 text-[11px] font-bold tracking-[0.24em] text-muted-foreground uppercase">
            <span className="text-orange">{b.signature}</span>
            <span className="hidden sm:inline">{b.signatureSub}</span>
          </div>
        </div>
      </section>

      {/* ── CONFIDENCE STATEMENT ────────────────────────────── */}
      <Section className="border-b border-hairline bg-navy/40">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <h2 className={`brand-caps ${rtl ? "text-3xl md:text-5xl" : "text-4xl md:text-6xl"}`}>
              {b.confidence.lines[0]}
              <br />
              <span className="text-orange">{b.confidence.lines[1]}</span>
            </h2>
            <p className="mt-8 max-w-xl text-muted-foreground">{b.confidence.body}</p>
          </div>
          <div className="border-s-2 border-orange ps-8">
            <div className="stat-figure text-6xl md:text-7xl">
              <AnimatedStat value={b.confidence.stat} className="ltr-inline" />
            </div>
            <div className="mt-3 text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase">
              {b.confidence.statLabel}
            </div>
            <p className="mt-6 text-lg font-semibold">{b.confidence.statNote}</p>
          </div>
        </div>
      </Section>

      {/* ── WHY WE EXIST (light) ────────────────────────────── */}
      <Section className="section-light border-b border-hairline">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Kicker>{b.why.kicker}</Kicker>
            <h2
              className={`brand-caps mt-6 ${rtl ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"}`}
            >
              {b.why.title[0]}
              <br />
              <span className="text-orange">{b.why.title[1]}</span>
            </h2>
            <p className="mt-8 max-w-xl text-muted-foreground">{b.why.body}</p>
            <blockquote className="mt-10 border-s-2 border-orange ps-6 text-xl font-semibold">
              “{b.why.quote}
              <span className="text-orange">{b.why.quoteHighlight}</span>”
            </blockquote>
          </div>
          <div className="relative">
            <img
              src={teamImg}
              alt={
                rtl
                  ? "فريق إيفا طاقة يعمل على لوحات كهربائية"
                  : "EVA TAQA team working on electrical switchgear"
              }
              loading="lazy"
              width={1600}
              height={1000}
              className="aspect-[4/3] w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-orange" />
          </div>
        </div>
      </Section>

      {/* ── BY THE NUMBERS ─────────────────────────────────── */}
      <Section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
        <img
          src={riyadhImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/90" />
        <div className="relative">
          <Kicker>{b.numbers.kicker}</Kicker>
          <SectionTitle>{b.numbers.title}</SectionTitle>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:gap-x-12 lg:grid-cols-3 lg:gap-y-14">
            {b.numbers.items.map((n, index) => (
              <div
                key={n.label}
                className={`relative min-h-44 ps-6 ${["", "lg:mt-10", "lg:mt-5", "lg:mt-5", "", "lg:mt-10"][index]}`}
              >
                <span className="absolute inset-y-0 start-0 w-px bg-gradient-to-b from-white/55 to-white/10" />
                <span className="absolute start-[-4px] top-0 size-[9px] rounded-full border border-white bg-orange shadow-[0_0_14px_3px_rgba(239,119,41,0.5)]" />
                <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                  <AnimatedStat value={n.value} className="ltr-inline" />
                </div>
                <div className="mt-3 max-w-44 text-sm font-medium leading-snug text-white/80">
                  {n.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CORE SOLUTIONS (light) ─────────────────────────── */}
      <Section className="section-light border-b border-hairline">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>{t.services.kicker}</Kicker>
            <SectionTitle>{t.services.title}</SectionTitle>
          </div>
          <Link
            to={`/${lang}/services`}
            className="group inline-flex items-center gap-2 text-sm font-bold text-orange"
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
                className="group relative bg-surface p-9 transition-colors hover:bg-surface-2"
              >
                <ServiceIcon slug={slug} />
                <h3 className="brand-caps mt-6 text-lg">{s.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-orange opacity-0 transition-opacity group-hover:opacity-100">
                  {t.services.detailCta}
                  <Arrow className="size-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ── INDUSTRIES WE SERVE ────────────────────────────── */}
      <Section className="border-b border-hairline bg-navy/30">
        <Kicker>{b.industries.kicker}</Kicker>
        <SectionTitle>{b.industries.title}</SectionTitle>
        <div className="mt-12 flex flex-wrap gap-3">
          {b.industries.items.map((i) => (
            <span
              key={i}
              className="border border-hairline px-5 py-3 text-sm text-muted-foreground transition-colors hover:border-orange hover:text-foreground"
            >
              {i}
            </span>
          ))}
        </div>
      </Section>

      {/* ── MILITARY SECTOR ────────────────────────────────── */}
      <section className="relative isolate overflow-hidden border-b border-[#c5a878]/30 bg-[#101917] text-white">
        <img
          src={militaryVisual}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1672}
          height={941}
          className={`absolute inset-x-0 top-0 -z-20 h-[700px] w-full object-cover ${rtl ? "scale-x-[-1]" : ""}`}
        />
        <div className={`absolute inset-x-0 top-0 -z-10 h-[700px] ${rtl ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#101917] via-[#101917]/85 to-[#101917]/20`} />
        <div className="absolute inset-x-0 top-0 -z-10 h-[700px] bg-gradient-to-b from-transparent via-transparent to-[#101917]" />
        <div className="pointer-events-none absolute inset-0 -z-10 military-grid opacity-30" />

        <div className="relative mx-auto max-w-[1280px] px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="flex min-h-[440px] max-w-2xl flex-col justify-center md:min-h-[490px]">
            <div className="flex items-center gap-3 text-xs font-extrabold tracking-[0.28em] text-[#d9b985] uppercase">
              <span className="h-px w-10 bg-[#d9b985]" />
              {rtl ? "إيفا طاقة  /  القطاع العسكري" : "EVA TAQA  /  DEFENSE SECTOR"}
            </div>
            <h2 className={`brand-caps mt-8 text-white ${rtl ? "text-5xl md:text-7xl" : "text-5xl md:text-7xl"}`}>
              {rtl ? "طاقة تدعم" : "POWER BEHIND"}
              <br />
              <span className="text-[#d9b985]">{rtl ? "المهمة" : "THE MISSION"}</span>
            </h2>
            <p className="mt-8 max-w-lg border-s-2 border-[#d9b985] ps-5 text-base leading-relaxed text-white/80 md:text-lg">
              {rtl
                ? "حلول كهربائية ميدانية تدعم الجاهزية واستمرارية التشغيل: من التوليد والطاقة الاحتياطية إلى توزيع الطاقة وتجهيز المركبات المتنقلة."
                : "Field-ready electrical systems that support operational continuity, from generation and backup power to distribution and mobile vehicle systems."}
            </p>
            <Link
              to={`/${lang}/projects`}
              className="mt-9 inline-flex w-fit items-center gap-3 bg-[#d9b985] px-7 py-4 text-sm font-extrabold text-[#101917] transition-colors hover:bg-white"
            >
              {rtl ? "استكشف مشاريع القطاع العسكري" : "Explore military projects"}
              <Arrow className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid overflow-hidden border border-[#d9b985]/40 bg-[#17221e]/95 shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-72 overflow-hidden lg:min-h-[390px]">
              <img
                src={samiImg}
                alt={rtl ? "مولدات إيفا طاقة ضمن مشروع لشركة سامي" : "EVA TAQA generators in a SAMI project"}
                loading="lazy"
                width={960}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101917] via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-[11px] font-extrabold tracking-[0.22em] text-[#d9b985] uppercase">
                  {rtl ? "من مشاريعنا الفعلية" : "REAL PROJECT"}
                </span>
                <p className="mt-2 max-w-sm text-lg font-bold leading-snug text-white">
                  {rtl ? "صيانة مولدات سامي للصناعات العسكرية" : "Generator maintenance for SAMI Military Industries"}
                </p>
              </div>
            </div>
            <div className="p-7 md:p-10 lg:p-12">
              <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#d9b985] uppercase">
                <ShieldCheck className="size-5" strokeWidth={1.5} aria-hidden="true" />
                {rtl ? "حلول مصممة للجاهزية" : "BUILT FOR READINESS"}
              </div>
              <h3 className="mt-5 max-w-xl text-2xl font-extrabold leading-tight md:text-3xl">
                {rtl ? "منظومة كهربائية لكل مرحلة من المهمة" : "Electrical capability across every mission phase"}
              </h3>
              <div className="mt-8 grid gap-px bg-[#d9b985]/25 sm:grid-cols-2">
                {[
                  { icon: Zap, ar: "توليد وطاقة احتياطية", en: "Generation & backup power" },
                  { icon: PlugZap, ar: "توزيع وتحكم كهربائي", en: "Distribution & control" },
                  { icon: Truck, ar: "تجهيز المركبات المتنقلة", en: "Mobile vehicle systems" },
                  { icon: Wrench, ar: "صيانة ودعم فني", en: "Maintenance & support" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.en} className="flex min-h-28 flex-col justify-center gap-3 bg-[#17221e] p-5">
                      <Icon className="size-6 text-[#d9b985]" strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-sm font-semibold text-white/90">{rtl ? item.ar : item.en}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="mt-4 text-end text-[10px] tracking-wide text-white/45">
            {rtl ? "المشهد الميداني العلوي تصور بصري للحلول، وصورة مشروع سامي موثّقة من أعمالنا." : "The field scene is illustrative; the SAMI project photo shows our actual work."}
          </p>
        </div>
      </section>

      {/* ── ENGINEERING PROCESS (light) ────────────────────── */}
      <Section className="section-light border-b border-hairline">
        <Kicker>{b.process.kicker}</Kicker>
        <SectionTitle>{b.process.title}</SectionTitle>
        <p className="mt-6 max-w-2xl text-muted-foreground">{b.process.body}</p>
        <div className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {b.process.steps.map((s) => (
            <div key={s.num} className="bg-surface p-9">
              <span className="num-plate">{s.num}</span>
              <h3 className="brand-caps mt-6 text-base">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CORE VALUES ────────────────────────────────────── */}
      <Section className="border-b border-hairline">
        <Kicker>{b.values.kicker}</Kicker>
        <SectionTitle>{b.values.title}</SectionTitle>
        <div className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {b.values.items.map((v, i) => (
            <div
              key={v.title}
              className="group bg-background p-9 transition-colors hover:bg-surface"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-bold tracking-[0.2em] text-orange">
                  <span className="ltr-inline">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <h3 className="brand-caps text-lg">{v.title}</h3>
              </div>
              <div className="mt-4 h-px w-14 bg-orange/60 transition-all duration-500 group-hover:w-24" />
              <p className="mt-5 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── HSE + RELIABILITY ──────────────────────────────── */}
      <Section className="border-b border-hairline bg-navy/40">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={controlImg}
              alt={rtl ? "غرفة تحكم كهربائية حديثة" : "Modern electrical control room"}
              loading="lazy"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-y-0 start-0 w-1.5 bg-orange" />
          </div>
          <div>
            <Kicker>{b.hse.kicker}</Kicker>
            <h2
              className={`brand-caps mt-6 ${rtl ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"}`}
            >
              {b.hse.title}
            </h2>
            <p className="mt-6 text-muted-foreground">{b.hse.body}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {b.hse.items.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-orange" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-muted-foreground">{t.reliability.body}</p>
          </div>
        </div>
      </Section>

      {/* ── PARTNERS (light) ───────────────────────────────── */}
      <Section className="section-light border-b border-hairline">
        <Kicker>{b.partners.kicker}</Kicker>
        <SectionTitle>{b.partners.title}</SectionTitle>
        <p className="mt-6 max-w-2xl text-muted-foreground">{b.partners.body}</p>
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-3 lg:grid-cols-3">
          {b.partners.items.map((p) => (
            <div
              key={p}
              className="flex h-24 items-center justify-center bg-surface px-4 text-center text-sm font-bold tracking-[0.2em] text-foreground/70 transition-colors hover:text-orange"
            >
              <span className="ltr-inline">{p}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PROJECTS ───────────────────────────────────────── */}
      <Section className="border-b border-hairline">
        <Kicker>{t.projects.kicker}</Kicker>
        <SectionTitle>{t.projects.title}</SectionTitle>
        <ProjectCarousel projects={homeProjects} lang={lang} />
        <Link
          to={`/${lang}/projects`}
          className="group mt-10 inline-flex items-center gap-2 border-b border-orange/50 pb-2 text-sm font-bold text-orange"
        >
          {t.projects.title}
          <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </Link>
      </Section>

      {/* ── VISION 2030 ────────────────────────────────────── */}
      <Section className="relative overflow-hidden border-b border-hairline">
        <img
          src={riyadhImg}
          alt={rtl ? "أفق مدينة الرياض" : "Riyadh skyline"}
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 diagonal-band" />
        <div className="relative">
          <Kicker>{b.vision2030.kicker}</Kicker>
          <h2
            className={`brand-caps mt-6 max-w-3xl ${rtl ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"}`}
          >
            {b.vision2030.title}
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground">{b.vision2030.body}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {b.vision2030.items.map((i) => (
              <li key={i} className="border-t-2 border-orange pt-4 text-sm font-semibold">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── COMMITMENT ─────────────────────────────────────── */}
      <Section className="border-b border-hairline bg-navy/50 text-center">
        <p className="brand-caps text-2xl md:text-3xl">{b.commitment.line1}</p>
        <p className="brand-caps mt-2 text-2xl text-orange md:text-3xl">{b.commitment.line2}</p>
        <div className="mx-auto mt-8 brand-rule" />
        <p className="mt-8 text-lg text-muted-foreground">{b.commitment.line3}</p>
      </Section>

      <CtaBand lang={lang} />

      {/* ── CLIENTS ────────────────────────────────────────── */}
      <Section className="section-light border-t border-hairline !py-12 md:!py-16">
        <Kicker>{b.clients.kicker}</Kicker>
        <h2 className="mt-3 text-xl font-bold md:text-2xl">{b.clients.title}</h2>
        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-6 md:gap-x-10 md:gap-y-8">
          {CLIENT_LOGOS.map((logo, index) => (
            <div key={logo} className="flex h-16 items-center justify-center rounded bg-white px-2 md:h-20 md:px-6">
              <img
                src={logo}
                alt={b.clients.items[index] ?? ""}
                loading="lazy"
                className="max-h-12 max-w-full object-contain md:max-h-14"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
