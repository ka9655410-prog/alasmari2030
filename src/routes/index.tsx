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
import vision from "@/assets/vision-2030-clear.png.asset.json";

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
      <header className="fixed inset-x-0 top-0 z-50 glass-dark">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:h-20 md:px-6">
          {lang === "en" && <VisionLogo className="h-11 w-auto shrink-0 md:h-14" />}
          <a href="#home" className="flex min-w-0 items-center gap-2">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-dark-brand text-sky">
              <Droplets className="h-5 w-5" />
            </span>
            <span className="truncate text-sm font-bold text-on-dark md:text-base">{t.short}</span>
          </a>
          <ul className="hidden items-center gap-1 xl:flex">
            {t.nav.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="rounded-lg px-3 py-2 text-sm font-medium text-on-dark/80 transition hover:bg-on-dark/10 hover:text-sky">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="flex h-10 items-center gap-1 rounded-xl border border-on-dark/25 px-3 text-sm font-semibold text-on-dark transition hover:border-sky"
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
            <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl bg-on-dark/10 text-on-dark xl:hidden" aria-label={t.menu}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            {lang === "ar" && <VisionLogo className="h-11 w-auto shrink-0 md:h-14" />}
          </div>
        </nav>
        {open && (
          <ul className="grid gap-1 border-t border-on-dark/15 px-4 py-3 xl:hidden">
            {t.nav.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-medium text-on-dark hover:bg-on-dark/10">
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
            <img src={heroImg} alt="أفق مدينة الرياض عند الغروب" width={1920} height={1088} fetchPriority="high" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          </picture>
          <div className="absolute inset-0 -z-10 bg-hero-overlay" />
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
              <div className="animate-floaty">
                <VisionLogo className="h-36 w-auto drop-shadow-2xl md:h-48" />
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
        <section id="about" className="relative overflow-hidden py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 md:grid-cols-2 md:px-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-primary"><span className="h-0.5 w-8 bg-brand" />{t.about.kicker}</span>
              <h2 className="mt-4 text-3xl font-bold leading-snug text-navy md:text-5xl md:leading-tight">{t.about.title}</h2>
              <span className="mt-5 block h-1.5 w-24 rounded-full bg-brand" />
              <p className="mt-6 text-lg leading-loose text-muted-foreground">{t.about.body}</p>
              <ul className="mt-8 flex flex-wrap gap-3">
                {t.about.points.map((p) => (
                  <li key={p} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-bold text-navy shadow-card">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-primary-foreground"><CheckCircle2 className="h-4 w-4" /></span>{p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative mx-auto max-w-md pb-10 pe-6">
                <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-brand opacity-20 blur-2xl" aria-hidden="true" />
                <img src={heroSm} alt="" loading="lazy" decoding="async" width={720} height={1020} className="aspect-[4/5] w-full rounded-[2.5rem] rounded-tl-[6rem] object-cover shadow-card" />
                <div className="absolute -start-4 top-10 grid gap-3">
                  {t.about.points.map((p, i) => {
                    const Icon = [Award, ShieldCheck, BadgeCheck][i]!;
                    return (
                      <div key={p} className="glass-light animate-floaty flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-card" style={{ animationDelay: `${i * 0.8}s` }}>
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-primary-foreground"><Icon className="h-5 w-5" /></span>
                        <span className="font-bold text-navy">{p}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="absolute bottom-0 end-0 flex items-center gap-3 rounded-2xl bg-dark-brand px-5 py-4 text-on-dark shadow-glow">
                  <FileText className="h-6 w-6 text-sky" />
                  <div><div className="text-xs opacity-80">{t.hero.cr}</div><div className="font-bold tracking-wider">{CR}</div></div>
                </div>
              </div>
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
        <section id="why" className="relative bg-ice py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHead kicker={t.why.kicker} title={t.why.title} />
            <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {t.why.items.map(([title, desc], i) => {
                const Icon = WHY_ICONS[i]!;
                const big = i === 0;
                return (
                  <Reveal key={title} delay={i * 100} className={big ? "sm:col-span-2 lg:row-span-2" : ""}>
                    <div className={`group relative h-full overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 ${big ? "bg-dark-brand text-on-dark shadow-glow md:p-10" : "border border-border bg-card shadow-card hover:shadow-glow"}`}>
                      <span className={`pointer-events-none absolute -bottom-6 end-3 font-bold leading-none ${big ? "text-[10rem] text-on-dark/10" : "text-8xl text-primary/10"}`}>0{i + 1}</span>
                      {big && <div className="absolute -top-20 end-[-5rem] h-64 w-64 rounded-full bg-sky/30 blur-3xl" aria-hidden="true" />}
                      <span className={`icon-tile relative grid place-items-center rounded-2xl bg-brand text-primary-foreground shadow-glow ${big ? "h-20 w-20" : "h-14 w-14"}`}><Icon className={big ? "h-10 w-10" : "h-7 w-7"} /></span>
                      <h3 className={`relative mt-6 font-bold ${big ? "text-3xl md:text-4xl" : "text-xl text-navy"}`}>{title}</h3>
                      <p className={`relative mt-3 ${big ? "text-lg opacity-85" : "text-muted-foreground"}`}>{desc}</p>
                      <span className="absolute inset-x-0 bottom-0 h-1 origin-[inherit] scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
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
        <section id="process" className="relative isolate overflow-hidden bg-dark-brand py-20 text-on-dark md:py-28">
          <div className="absolute -top-24 start-[-6rem] -z-10 h-80 w-80 rounded-full bg-sky/25 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 end-[-6rem] -z-10 h-96 w-96 rounded-full bg-primary/40 blur-3xl" aria-hidden="true" />
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="glass inline-block rounded-full px-4 py-1.5 text-sm font-semibold">{t.process.kicker}</span>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">{t.process.title}</h2>
            </div>
            <div className="relative">
              <svg className="absolute inset-x-0 top-10 hidden h-24 w-full md:block" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
                <path className="process-path" d="M60 50 C180 -10 260 110 375 50 S560 -10 625 50 S820 110 940 50" fill="none" stroke="var(--sky)" strokeWidth="3" strokeDasharray="10 10" />
              </svg>
              <div className="absolute bottom-6 start-9 top-6 w-0.5 bg-gradient-to-b from-sky to-primary md:hidden" aria-hidden="true" />
              <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
                {t.process.steps.map((s, i) => {
                  const Icon = STEP_ICONS[i]!;
                  return (
                    <Reveal key={s} delay={i * 180}>
                      <li className={`group relative flex items-center gap-5 md:flex-col md:text-center ${i % 2 ? "md:mt-16" : ""}`}>
                        <span className="relative grid h-18 w-18 shrink-0 place-items-center">
                          <span className="absolute inset-0 rounded-full bg-sky/40 animate-pulse-ring" style={{ animationDelay: `${i * 0.4}s` }} />
                          <span className="icon-tile relative grid h-18 w-18 place-items-center rounded-full bg-brand text-primary-foreground shadow-glow ring-4 ring-navy">
                            <Icon className="h-8 w-8" />
                          </span>
                        </span>
                        <div className="glass relative w-full overflow-hidden rounded-2xl px-5 py-5 transition duration-300 group-hover:-translate-y-1.5">
                          <span className="pointer-events-none absolute -top-4 end-2 text-7xl font-bold text-on-dark/10">0{i + 1}</span>
                          <div className="text-sm font-bold text-sky">{lang === "ar" ? "الخطوة" : "Step"} 0{i + 1}</div>
                          <div className="mt-1 text-lg font-bold">{s}</div>
                        </div>
                      </li>
                    </Reveal>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section id="vision" className="relative overflow-hidden bg-dark-brand py-20 text-on-dark md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
            <Reveal className="order-2 md:order-1">
              <span className="inline-block rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-primary-foreground">{t.vision.kicker}</span>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">{t.vision.title}</h2>
              <p className="mt-5 text-lg leading-loose opacity-85">{t.vision.body}</p>
            </Reveal>
            <Reveal delay={150} className="order-1 md:order-2">
              <div className="grid place-items-center p-6">
                <VisionLogo className="h-auto w-full max-w-md animate-floaty" />
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
            <div className="mt-5"><VisionLogo className="h-20 w-auto" /></div>
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
