import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Wind, ChefHat, Snowflake, Droplets, Wrench, Bug, Sparkles, Sofa, Building2,
  Users, ShieldCheck, Cpu, Zap, Award, Phone, MapPin, FileText, Hash, Menu, X,
  ArrowUp, CheckCircle2, MessageCircle, ClipboardCheck, HardHat, BadgeCheck, Globe,
} from "lucide-react";
import { content, waLink, PHONE, CR, UNIFIED, type Lang } from "@/content/site";
import { WhatsAppIcon, Reveal, LazyMap, Wave, DropMotif } from "@/components/site-bits";
import heroImg from "@/assets/riyadh-hero.jpg";
import heroSm from "@/assets/riyadh-hero-sm.jpg";
import vision from "@/assets/vision-2030-logo.jpeg.asset.json";

const ar = content.ar;
const TITLE = "خدمات الصيانة والنظافة في الرياض | مؤسسة علي معيض الأسمري";
const DESC =
  "مؤسسة علي معيض الأسمري: تنظيف مداخن الشفط والهودات، تعقيم التكييف، شفط وتسليك مصائد الزيوت، مكافحة الحشرات وتنظيف الواجهات في الرياض مع شهادة إنجاز رسمية. واتساب 0539427061";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "تنظيف مداخن الشفط الرياض, تنظيف الهودات, شفط مصائد الزيوت, مكافحة حشرات الرياض, تنظيف واجهات, صيانة ونظافة الرياض" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroSm, media: "(max-width: 767px)" },
      { rel: "preload", as: "image", href: heroImg, media: "(min-width: 768px)" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: ar.name,
          alternateName: content.en.name,
          description: DESC,
          telephone: "+966539427061",
          areaServed: "الرياض",
          address: {
            "@type": "PostalAddress",
            streetAddress: "حي بدر – رقم المبنى 2653 – الرقم الإضافي 6858",
            addressLocality: "الرياض",
            postalCode: "14742",
            addressCountry: "SA",
          },
          identifier: [
            { "@type": "PropertyValue", name: "السجل التجاري", value: CR },
            { "@type": "PropertyValue", name: "الرقم الموحد", value: UNIFIED },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "خدماتنا",
            itemListElement: ar.services.items.map(([n, d]) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: n, description: d },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: ar.faq.items.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const SERVICE_ICONS = [Wind, ChefHat, Snowflake, Droplets, Wrench, Bug, Sparkles, Sofa, Building2];
const WHY_ICONS = [Users, ShieldCheck, Cpu, Zap, Award];
const STEP_ICONS = [MessageCircle, ClipboardCheck, HardHat, BadgeCheck];

function SectionHead({ kicker, title, light = false }: { kicker: string; title: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <span className="inline-block rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-primary-foreground">{kicker}</span>
      <h2 className={`mt-4 text-3xl font-bold leading-tight md:text-4xl ${light ? "text-on-dark" : "text-navy"}`}>{title}</h2>
    </Reveal>
  );
}

function VisionLogo({ className = "" }: { className?: string }) {
  return <img src={vision.url} alt={ar.vision2030Alt} className={`object-contain ${className}`} loading="lazy" decoding="async" />;
}

function Index() {
  const [lang, setLang] = useState<Lang>("ar");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const f2 = t.contact.form;
    const msg = `${t.contact.waIntro}\n${f2.name}: ${f.get("name")}\n${f2.phone}: ${f.get("phone")}\n${f2.service}: ${f.get("service")}\n${f2.message}: ${f.get("message")}`;
    window.open(waLink(msg), "_blank", "noopener");
  };

  const inputCls =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 glass-light">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:h-20 md:px-6">
          <a href="#home" className="flex min-w-0 items-center gap-2">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-dark-brand text-sky">
              <Droplets className="h-5 w-5" />
            </span>
            <span className="truncate text-sm font-bold text-navy md:text-base">{t.short}</span>
          </a>
          <ul className="hidden items-center gap-1 xl:flex">
            {t.nav.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="flex h-10 items-center gap-1 rounded-xl border border-border px-3 text-sm font-semibold text-navy transition hover:border-primary"
              aria-label="Language"
            >
              <Globe className="h-4 w-4" /> {lang === "ar" ? "EN" : "ع"}
            </button>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="hidden h-10 items-center gap-2 rounded-xl bg-whatsapp px-4 text-sm font-semibold text-on-dark transition hover:brightness-110 sm:flex"
            >
              <WhatsAppIcon className="h-5 w-5" /> {PHONE}
            </a>
            <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-navy xl:hidden" aria-label={t.menu}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {open && (
          <ul className="grid gap-1 border-t border-border bg-background px-4 py-3 xl:hidden">
            {t.nav.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-medium text-navy hover:bg-secondary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-20">
          <picture>
            <source media="(max-width: 767px)" srcSet={heroSm} />
            <img src={heroImg} alt="أفق مدينة الرياض عند الغروب" width={1600} height={912} fetchPriority="high" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          </picture>
          <div className="absolute inset-0 -z-10 bg-hero-overlay" />
          <DropMotif className="pointer-events-none absolute -end-20 top-24 -z-10 h-80 w-80 text-on-dark opacity-10" />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-28 md:px-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="animate-fade-up text-on-dark">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-sky" /> {t.hero.badge}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.2] sm:text-5xl lg:text-6xl">{t.hero.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed opacity-90 md:text-xl">{t.hero.sub}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={waLink()} target="_blank" rel="noopener" className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-brand px-7 text-lg font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5">
                  <WhatsAppIcon className="h-6 w-6" /> {t.hero.cta}
                </a>
                <a href="#contact" className="glass inline-flex h-14 items-center justify-center rounded-2xl px-7 text-lg font-semibold transition hover:-translate-y-0.5">
                  {t.hero.cta2}
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 lg:items-end">
              <div className="animate-floaty rounded-3xl bg-card p-5 shadow-card">
                <VisionLogo className="h-28 w-48 md:h-36 md:w-60" />
              </div>
              <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4 text-on-dark">
                <FileText className="h-6 w-6 text-sky" />
                <div>
                  <div className="text-xs opacity-80">{t.hero.cr}</div>
                  <div className="text-lg font-bold tracking-wider">{CR}</div>
                </div>
              </div>
            </div>
          </div>
          <Wave className="absolute inset-x-0 bottom-0 text-background" />
        </section>

        {/* ABOUT */}
        <section id="about" className="relative py-20 md:py-28">
          <DropMotif className="pointer-events-none absolute start-0 top-10 h-64 w-64 text-primary opacity-[0.06]" />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
            <Reveal>
              <span className="inline-block rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-primary-foreground">{t.about.kicker}</span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-navy md:text-4xl">{t.about.title}</h2>
              <p className="mt-5 text-lg leading-loose text-muted-foreground">{t.about.body}</p>
            </Reveal>
            <Reveal delay={150} className="grid gap-4">
              {t.about.points.map((p, i) => {
                const Icon = [Award, ShieldCheck, BadgeCheck][i]!;
                return (
                  <div key={p} className="flex items-center gap-4 rounded-2xl bg-ice p-5 shadow-card">
                    <span className="icon-tile grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-primary-foreground"><Icon className="h-6 w-6" /></span>
                    <span className="text-xl font-bold text-navy">{p}</span>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-ice py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHead kicker={t.services.kicker} title={t.services.title} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.services.items.map(([title, desc], i) => {
                const Icon = SERVICE_ICONS[i]!;
                return (
                  <Reveal key={title} delay={(i % 3) * 100}>
                    <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                      <span className="icon-tile grid h-16 w-16 place-items-center rounded-2xl bg-brand text-primary-foreground shadow-glow">
                        <Icon className="h-8 w-8" strokeWidth={1.8} />
                      </span>
                      <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
                      <p className="mt-2 flex-1 text-muted-foreground">{desc}</p>
                      <a href={waLink(t.services.msg + title)} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">
                        <WhatsAppIcon className="h-5 w-5 text-whatsapp" /> {t.services.order}
                      </a>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHead kicker={t.why.kicker} title={t.why.title} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {t.why.items.map(([title, desc], i) => {
                const Icon = WHY_ICONS[i]!;
                return (
                  <Reveal key={title} delay={i * 80}>
                    <div className="group h-full rounded-3xl bg-ice p-6 text-center transition hover:-translate-y-1 hover:shadow-card">
                      <span className="icon-tile mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-dark-brand text-sky"><Icon className="h-7 w-7" /></span>
                      <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CERTIFICATE */}
        <section id="certificate" className="relative overflow-hidden bg-dark-brand py-20 text-on-dark md:py-28">
          <DropMotif className="pointer-events-none absolute -start-16 -bottom-16 h-80 w-80 opacity-10" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
            <Reveal>
              <span className="inline-block rounded-full bg-brand px-4 py-1.5 text-sm font-semibold">{t.cert.kicker}</span>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">{t.cert.title}</h2>
              <p className="mt-5 text-lg leading-loose opacity-90">{t.cert.body}</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {t.cert.to.map((x) => (
                  <li key={x} className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-sky" /> {x}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <div className="animate-floaty relative mx-auto max-w-sm rounded-3xl bg-card p-7 text-card-foreground shadow-glow">
                <div className="absolute inset-x-0 top-0 h-2 rounded-t-3xl bg-brand" />
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-dark-brand text-sky"><Droplets className="h-6 w-6" /></span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary">COC/0007</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-navy">{t.cert.card.title}</h3>
                <p className="text-sm text-muted-foreground">{t.cert.card.label}</p>
                <div className="mt-5 space-y-3 border-t border-dashed border-border pt-5 text-sm">
                  <div className="flex justify-between gap-4"><span className="text-muted-foreground">{t.cert.card.no}</span><span className="font-bold">COC/0007</span></div>
                  <div className="flex justify-between gap-4"><span className="text-muted-foreground">{t.cert.card.service}</span><span className="text-end font-bold">{t.services.items[0][0]}</span></div>
                </div>
                <div className="mt-6 flex items-center gap-2 rounded-xl bg-ice px-4 py-3 font-semibold text-primary">
                  <BadgeCheck className="h-5 w-5" /> {t.cert.card.status}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionHead kicker={t.process.kicker} title={t.process.title} />
            <ol className="relative grid gap-6 md:grid-cols-4">
              <div className="absolute inset-x-[12%] top-9 hidden h-0.5 bg-brand md:block" aria-hidden="true" />
              {t.process.steps.map((s, i) => {
                const Icon = STEP_ICONS[i]!;
                return (
                  <Reveal key={s} delay={i * 120}>
                    <li className="group relative flex items-center gap-4 md:flex-col md:text-center">
                      <span className="icon-tile relative grid h-18 w-18 shrink-0 place-items-center rounded-full border-4 border-background bg-brand p-4 text-primary-foreground shadow-glow">
                        <Icon className="h-8 w-8" />
                      </span>
                      <div>
                        <div className="text-sm font-bold text-primary">0{i + 1}</div>
                        <div className="text-lg font-bold text-navy">{s}</div>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </section>

        {/* VISION */}
        <section id="vision" className="bg-ice py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
            <Reveal className="order-2 md:order-1">
              <span className="inline-block rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-primary-foreground">{t.vision.kicker}</span>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">{t.vision.title}</h2>
              <p className="mt-5 text-lg leading-loose text-muted-foreground">{t.vision.body}</p>
            </Reveal>
            <Reveal delay={150} className="order-1 md:order-2">
              <div className="grid place-items-center rounded-[2rem] bg-card p-10 shadow-card">
                <VisionLogo className="h-48 w-full max-w-sm md:h-64" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24" aria-labelledby="faq-title">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <h2 id="faq-title" className="mb-8 text-center text-3xl font-bold text-navy">{t.faq.title}</h2>
            <div className="space-y-3">
              {t.faq.items.map(([q, a]) => (
                <details key={q} className="group rounded-2xl border border-border bg-card p-5 shadow-card">
                  <summary className="cursor-pointer list-none text-lg font-semibold text-navy">{q}</summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-ice py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHead kicker={t.contact.kicker} title={t.contact.title} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { icon: Phone, label: t.contact.phone, value: PHONE, href: `tel:${PHONE}` },
                { icon: MessageCircle, label: t.contact.wa, value: PHONE, href: waLink() },
                { icon: MapPin, label: t.contact.address, value: lang === "ar" ? "الرياض – حي بدر" : "Riyadh – Badr" },
                { icon: Hash, label: t.contact.unified, value: UNIFIED },
                { icon: FileText, label: t.contact.cr, value: CR },
              ].map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div className="group flex h-full items-center gap-3 rounded-2xl bg-card p-5 shadow-card transition hover:-translate-y-1">
                    <span className="icon-tile grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-primary-foreground"><Icon className="h-6 w-6" /></span>
                    <div className="min-w-0">
                      <div className="text-sm text-muted-foreground">{label}</div>
                      <div className="truncate font-bold text-navy" dir="ltr">{value}</div>
                    </div>
                  </div>
                );
                return href ? <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">{inner}</a> : <div key={label}>{inner}</div>;
              })}
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">{t.contact.addressText}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl bg-card p-6 shadow-card md:p-8">
                <input name="name" required placeholder={t.contact.form.name} className={inputCls} aria-label={t.contact.form.name} />
                <input name="phone" required type="tel" inputMode="tel" placeholder={t.contact.form.phone} className={inputCls} aria-label={t.contact.form.phone} />
                <select name="service" required defaultValue="" className={inputCls} aria-label={t.contact.form.service}>
                  <option value="" disabled>{t.contact.form.choose}</option>
                  {t.services.items.map(([s]) => <option key={s} value={s}>{s}</option>)}
                </select>
                <textarea name="message" rows={4} placeholder={t.contact.form.message} className={inputCls} aria-label={t.contact.form.message} />
                <button type="submit" className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp text-lg font-semibold text-on-dark transition hover:brightness-110">
                  <WhatsAppIcon className="h-6 w-6" /> {t.contact.form.submit}
                </button>
              </form>
              <LazyMap title={t.contact.address} />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative bg-navy text-on-dark">
        <Wave flip className="absolute inset-x-0 -top-px text-ice" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-10 pt-28 md:grid-cols-2 md:px-6 lg:grid-cols-4">
          <div>
            <div className="text-xl font-bold">{t.name}</div>
            <div className="mt-5 inline-block rounded-2xl bg-card p-4"><VisionLogo className="h-20 w-36" /></div>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-sky">{t.footer.links}</h3>
            <ul className="space-y-2 opacity-85">{t.nav.map(([id, l]) => <li key={id}><a href={`#${id}`} className="hover:text-sky">{l}</a></li>)}</ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-sky">{t.footer.services}</h3>
            <ul className="space-y-2 text-sm opacity-85">{t.services.items.map(([s]) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-sky">{t.footer.contact}</h3>
            <ul className="space-y-3 text-sm opacity-85">
              <li><a href={`tel:${PHONE}`} className="hover:text-sky" dir="ltr">{PHONE}</a></li>
              <li>{t.contact.addressText}</li>
              <li>{t.contact.cr}: {CR}</li>
              <li>{t.contact.unified}: {UNIFIED}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-on-dark/10 py-5 text-center text-sm opacity-70">© 2026 {t.name} — {t.footer.rights}</div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        aria-label={t.waFloat}
        className="fixed bottom-5 end-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp p-4 text-on-dark shadow-glow transition hover:scale-105 md:px-5"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-whatsapp animate-pulse-ring" />
        <WhatsAppIcon className="h-8 w-8" />
        <span className="hidden font-semibold md:inline">{t.waFloat}</span>
      </a>
      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0 })}
          aria-label={t.toTop}
          className="fixed bottom-6 start-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-navy text-on-dark shadow-card"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
