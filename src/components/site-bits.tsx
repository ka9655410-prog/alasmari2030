import { useEffect, useRef, useState, type ReactNode } from "react";

export function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.04 3C9.4 3 4 8.38 4 15c0 2.12.56 4.18 1.62 6L4 29l8.2-1.58A12.06 12.06 0 0 0 16.04 27C22.66 27 28 21.62 28 15S22.66 3 16.04 3Zm0 21.82c-1.86 0-3.68-.5-5.27-1.45l-.38-.22-4.87.94.97-4.74-.25-.4A9.8 9.8 0 0 1 6.2 15c0-5.42 4.42-9.82 9.84-9.82 5.42 0 9.8 4.4 9.8 9.82 0 5.42-4.38 9.82-9.8 9.82Zm5.4-7.35c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.07 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function LazyMap({ title }: { title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShow(true), io.disconnect()), { rootMargin: "300px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="h-72 overflow-hidden rounded-3xl bg-secondary shadow-card md:h-full md:min-h-80">
      {show && (
        <iframe
          title={title}
          src="https://www.google.com/maps?q=%D8%AD%D9%8A+%D8%A8%D8%AF%D8%B1+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
}

export function Wave({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`block h-14 w-full md:h-24 ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path fill="currentColor" d="M0 64c120 32 240 48 400 32S720 24 880 24s320 56 400 64 120-8 160-16v48H0Z" opacity=".35" />
      <path fill="currentColor" d="M0 88c160 24 320 24 480 8s320-48 480-40 320 48 480 40v24H0Z" />
    </svg>
  );
}

export function DropMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="4">
      <circle cx="100" cy="100" r="90" />
      <path d="M100 30C100 30 55 90 55 120a45 45 0 0 0 90 0C145 90 100 30 100 30Z" />
      <g transform="translate(100 120)">
        {[0, 120, 240].map((r) => (
          <path key={r} transform={`rotate(${r})`} d="M0 0C8-6 10-20 0-26C-6-18-6-6 0 0Z" fill="currentColor" />
        ))}
      </g>
    </svg>
  );
}
