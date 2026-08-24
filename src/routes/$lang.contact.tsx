import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, isLang, type Lang } from "@/content/site";
import { dictFor } from "@/lib/lang";
import { pageHead } from "@/lib/seo";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/$lang/contact")({
  head: ({ params }) => pageHead(isLang(params.lang) ? params.lang : "en", "contact", "/contact"),
  component: Contact,
});

function Contact() {
  const { lang } = Route.useParams() as { lang: Lang };
  const t = dictFor(lang);
  const f = t.contact.form;
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [f.name, f.company, f.email, f.phone, f.projectType, f.message]
      .map((label, i) => `${label}: ${data.get(["name", "company", "email", "phone", "projectType", "message"][i]) ?? ""}`)
      .join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      lang === "ar" ? "استفسار جديد — إيفا طاقة" : "New inquiry — EVA TAQA",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const fieldClass =
    "w-full border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-cyan/60";

  return (
    <>
      <PageHero lang={lang} kicker={t.contact.kicker} title={t.contact.title} intro={t.ctaBlock.body} />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <form onSubmit={onSubmit} className="panel p-8 md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold tracking-wide text-muted-foreground">{f.name}</span>
                <input name="name" required className={`mt-2 ${fieldClass}`} />
              </label>
              <label className="block">
                <span className="text-xs font-semibold tracking-wide text-muted-foreground">{f.company}</span>
                <input name="company" className={`mt-2 ${fieldClass}`} />
              </label>
              <label className="block">
                <span className="text-xs font-semibold tracking-wide text-muted-foreground">{f.email}</span>
                <input name="email" type="email" required dir="ltr" className={`mt-2 ${fieldClass}`} />
              </label>
              <label className="block">
                <span className="text-xs font-semibold tracking-wide text-muted-foreground">{f.phone}</span>
                <input name="phone" type="tel" dir="ltr" className={`mt-2 ${fieldClass}`} />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold tracking-wide text-muted-foreground">{f.projectType}</span>
                <input name="projectType" className={`mt-2 ${fieldClass}`} />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold tracking-wide text-muted-foreground">{f.message}</span>
                <textarea name="message" rows={5} required className={`mt-2 ${fieldClass}`} />
              </label>
            </div>
            <button
              type="submit"
              className="mt-8 rounded-xs bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-shadow hover:shadow-[var(--glow-primary)]"
            >
              {f.submit}
            </button>
            {sent && <p className="mt-5 text-sm text-cyan">{f.success}</p>}
          </form>

          <aside className="space-y-8">
            <div className="panel p-8">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">EVA TAQA</h2>
              <ul className="mt-6 space-y-6 text-sm">
                <li className="flex gap-4">
                  <Mail className="mt-0.5 size-4 shrink-0 text-cyan" />
                  <div>
                    <p className="text-xs text-muted-foreground">{t.contact.infoLabels.email}</p>
                    <a href={`mailto:${CONTACT.email}`} className="ltr-inline mt-1 hover:text-cyan">
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 size-4 shrink-0 text-cyan" />
                  <div>
                    <p className="text-xs text-muted-foreground">{t.contact.infoLabels.phone}</p>
                    <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="ltr-inline mt-1 hover:text-cyan">
                      {CONTACT.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" />
                  <div>
                    <p className="text-xs text-muted-foreground">{t.contact.infoLabels.address}</p>
                    <address className="mt-1 not-italic leading-relaxed text-muted-foreground">
                      {t.contact.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </li>
              </ul>
            </div>
            <div className="panel flow-line p-8">
              <p className="text-lg font-bold text-gradient">{t.footer.statement}</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
