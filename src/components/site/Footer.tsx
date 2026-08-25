import { Link } from "@/components/site/link";
import { CONTACT, type Lang } from "@/content/site";
import { dictFor } from "@/lib/lang";
import logoLight from "@/assets/eva-taqa-logo-light.png.asset.json";

export function Footer({ lang }: { lang: Lang }) {
  const t = dictFor(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-surface/40">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-xl font-bold text-gradient max-w-sm">{t.footer.statement}</p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t.footer.blurb}</p>
          <div className="mt-6 h-px w-24 accent-rule" />
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
            {t.footer.companyCol}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: `/${lang}/about`, label: t.nav.about },
              { to: `/${lang}/services`, label: t.nav.services },
              { to: `/${lang}/projects`, label: t.nav.projects },
              { to: `/${lang}/contact`, label: t.nav.contact },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
            {t.footer.contactCol}
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="ltr-inline transition-colors hover:text-foreground">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="ltr-inline transition-colors hover:text-foreground">
                {CONTACT.phone}
              </a>
            </li>
            <li>{t.footer.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground">
          <span>
            © <span className="ltr-inline">{year}</span> {t.footer.rights}
          </span>
          <span className="tracking-[0.2em] uppercase">EVA TAQA</span>
        </div>
      </div>
    </footer>
  );
}
