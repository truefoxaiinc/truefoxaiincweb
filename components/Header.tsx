"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { navGroups } from "@/data/site";
import { ArrowUpRight, ChevronDown, CloseIcon, MenuIcon } from "@/components/Icons";

export default function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 18);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header cinematic-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner shell">
        <Link href="/" className="brand" aria-label="Truefox AI home">
          <Image src="/images/truefox-logo.webp" width={620} height={190} alt="Truefox AI Inc." priority sizes="(max-width: 600px) 155px, 190px" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link className={pathname === "/" ? "active" : ""} href="/">Home</Link>
          {navGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <button type="button">{group.label}<ChevronDown /></button>
              <div className="nav-panel">
                <div className="nav-panel-title"><span>{group.label}</span><i /></div>
                {group.items.map(([label, href], index) => <Link key={href} href={href}><span>0{index + 1}</span>{label}<ArrowUpRight /></Link>)}
              </div>
            </div>
          ))}
          <Link className={pathname === "/contact" ? "active" : ""} href="/contact">Contact</Link>
        </nav>
        <div className="header-actions">
          <Link href="/request-quote" className="button button-small button-primary">Get Started<ArrowUpRight /></Link>
          <button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <CloseIcon /> : <MenuIcon />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu cinematic-mobile-menu" initial={reduce ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={reduce ? undefined : { opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={reduce ? undefined : { opacity: 0, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
            <div className="mobile-menu-grid shell">
              <div className="mobile-menu-meta"><span>TRUEFOX AI / NAVIGATION</span><p>Canada headquarters<br />India engineering<br />International delivery</p></div>
              <nav aria-label="Mobile navigation">
                <Link href="/"><span>00</span>Home<ArrowUpRight /></Link>
                {navGroups.flatMap(g => g.items).map(([label, href], index) => <Link key={href} href={href}><span>{String(index + 1).padStart(2, "0")}</span>{label}<ArrowUpRight /></Link>)}
                <Link href="/contact"><span>21</span>Contact Us<ArrowUpRight /></Link>
              </nav>
              <div className="mobile-menu-cta"><Link href="/request-quote" className="button button-primary">Request a quote<ArrowUpRight /></Link><a href="mailto:info@truefoxaiinc.com">info@truefoxaiinc.com</a></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
