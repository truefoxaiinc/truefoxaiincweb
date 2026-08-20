"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { navGroups } from "@/data/site";
import { ArrowUpRight, ChevronDown, CloseIcon, MenuIcon } from "@/components/Icons";

export default function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef(false);
  const closeMenu = (shouldReturnFocus = true) => { returnFocus.current = shouldReturnFocus; setOpen(false); };

  useEffect(() => { setOpen(false); setOpenGroup(null); }, [pathname]);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 18);
    handler(); window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    const background = Array.from(document.querySelectorAll<HTMLElement>("main, footer, .whatsapp-float, .chatbot-wrap"));
    if (!open) {
      if (returnFocus.current) { returnFocus.current = false; requestAnimationFrame(() => menuButtonRef.current?.focus()); }
      return;
    }
    root.style.overflow = "hidden";
    background.forEach((element) => { element.inert = true; });
    const focusables = () => Array.from(mobileMenuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); closeMenu(); return; }
      if (event.key !== "Tab") return;
      const items = focusables(); if (!items.length) return;
      const first = items[0]; const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => focusables()[0]?.focus());
    return () => { root.style.overflow = ""; background.forEach((element) => { element.inert = false; }); window.removeEventListener("keydown", onKeyDown); };
  }, [open]);

  return <header className={`site-header cinematic-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="header-inner shell">
      <Link href="/" className="brand" aria-label="Truefox AI home"><Image src="/images/truefox-logo.webp" width={620} height={190} alt="Truefox AI Inc." priority sizes="(max-width: 600px) 155px, 190px" /></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link className={pathname === "/" ? "active" : ""} href="/">Home</Link>
        {navGroups.map((group) => {
          const panelId = `desktop-nav-${group.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
          const expanded = openGroup === group.label;
          return <div className={`nav-group${expanded ? " is-open" : ""}`} key={group.label} onMouseEnter={() => setOpenGroup(group.label)} onMouseLeave={() => setOpenGroup(null)} onFocusCapture={() => setOpenGroup(group.label)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenGroup(null); }}>
            <button type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setOpenGroup(expanded ? null : group.label)} onKeyDown={(event) => { if (event.key === "Escape") setOpenGroup(null); if (event.key === "ArrowDown") { event.preventDefault(); setOpenGroup(group.label); requestAnimationFrame(() => event.currentTarget.parentElement?.querySelector<HTMLAnchorElement>(".nav-panel a")?.focus()); } }}>{group.label}<ChevronDown /></button>
            <div className="nav-panel" id={panelId} role="group" aria-label={`${group.label} links`}><div className="nav-panel-title"><span>{group.label}</span><i /></div>{group.items.map(([label, href], index) => <Link key={href} href={href}><span>0{index + 1}</span>{label}<ArrowUpRight /></Link>)}</div>
          </div>;
        })}
        <Link className={pathname === "/contact" ? "active" : ""} href="/contact">Contact</Link>
      </nav>
      <div className="header-actions"><Link href="/request-quote" className="button button-small button-primary">Get Started<ArrowUpRight /></Link><button ref={menuButtonRef} className="menu-button" onClick={() => open ? closeMenu() : setOpen(true)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? <CloseIcon /> : <MenuIcon />}</button></div>
    </div>
    <AnimatePresence>{open && <motion.div ref={mobileMenuRef} id="mobile-navigation" className="mobile-menu cinematic-mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation" initial={reduce ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={reduce ? undefined : { opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={reduce ? undefined : { opacity: 0, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}><div className="mobile-menu-grid shell"><div className="mobile-menu-meta"><span>TRUEFOX AI / NAVIGATION</span><p>Canada headquarters<br />India engineering<br />International delivery</p></div><nav aria-label="Mobile navigation"><Link href="/" onClick={() => closeMenu(false)}><span>00</span>Home<ArrowUpRight /></Link>{navGroups.flatMap(g => g.items).map(([label, href], index) => <Link key={href} href={href} onClick={() => closeMenu(false)}><span>{String(index + 1).padStart(2, "0")}</span>{label}<ArrowUpRight /></Link>)}<Link href="/contact" onClick={() => closeMenu(false)}><span>21</span>Contact Us<ArrowUpRight /></Link></nav><div className="mobile-menu-cta"><Link href="/request-quote" className="button button-primary" onClick={() => closeMenu(false)}>Request a quote<ArrowUpRight /></Link><a href="mailto:info@truefoxaiinc.com">info@truefoxaiinc.com</a></div></div></motion.div>}</AnimatePresence>
  </header>;
}
