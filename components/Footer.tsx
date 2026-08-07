import type { SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { navGroups, site, solutions } from "@/data/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from "@/components/Icons";

const socialConfig = [
  ["LinkedIn", site.social.linkedin, LinkedInIcon],
  ["X", site.social.x, XIcon],
  ["YouTube", site.social.youtube, YouTubeIcon],
  ["Instagram", site.social.instagram, InstagramIcon],
  ["Facebook", site.social.facebook, FacebookIcon]
] as const;

function CubeIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="m12 2.8 8 4.6v9.2l-8 4.6-8-4.6V7.4l8-4.6Zm0 9.2 8-4.6M12 12 4 7.4M12 12v9.2" /></svg>;
}

function BuildingIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="M3 21h18M5 21V7h9v14M14 21V11h5v10M8 10h2m-2 4h2m-2 4h2m7-4h1m-1 4h1M7 7V3h5v4" /></svg>;
}

function BulbIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="M9 18h6m-5 3h4m2.1-6.4A7 7 0 1 0 7.9 14.6C9 15.5 9 16.5 9 18h6c0-1.5 0-2.5 1.1-3.4ZM12 1V0m8 4-1.5 1.5M4 4l1.5 1.5M2 12H0m24 0h-2" /></svg>;
}

function BookIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="M3 4.5c3.2-.7 6.2.1 9 2.2v14c-2.8-2.1-5.8-2.9-9-2.2v-14Zm18 0c-3.2-.7-6.2.1-9 2.2v14c2.8-2.1 5.8-2.9 9-2.2v-14Z" /></svg>;
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="M12 2.5 20 6v5.5c0 5-3.3 8.7-8 10-4.7-1.3-8-5-8-10V6l8-3.5Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg>;
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><rect x="2.5" y="5" width="19" height="14" rx="1.5" /><path d="m3 6 9 7 9-7" /></svg>;
}

function PinIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

const cardGroups = [
  { label: "Products", subtitle: "AI-Powered Innovation", Icon: CubeIcon, items: solutions.slice(0, 6).map(({ title, href }) => [title, href || "/products"] as const) },
  { label: "Company", subtitle: "About Truefox AI", Icon: BuildingIcon, items: navGroups.find(group => group.label === "Company")?.items ?? [] },
  { label: "Solutions", subtitle: "Industry Focus", Icon: BulbIcon, items: navGroups.find(group => group.label === "Solutions")?.items ?? [] },
  { label: "Resources", subtitle: "Insights & Knowledge", Icon: BookIcon, items: navGroups.find(group => group.label === "Resources")?.items ?? [] }
] as const;

const privacyPolicies = [
  ["Attention Minder Privacy Policy", "/attention-minder-privacy-policy"],
] as const;

export default function Footer() {
  const socials = socialConfig.filter(([, href]) => Boolean(href));

  return (
    <footer className="site-footer reference-footer">
      <div className="footer-grid shell">
        <section className="footer-brand-card" aria-label="Truefox AI contact information">
          <Image src="/images/truefox-logo.webp" width={620} height={190} alt="Truefox AI Inc." sizes="(max-width: 640px) 250px, 280px" />
          <div className="brand-accent" aria-hidden="true" />
          <a href={`mailto:${site.email}`} className="footer-contact-line"><MailIcon /> <span>{site.email}</span></a>
          <div className="footer-office-list">
            <address className="footer-contact-line">
              <PinIcon />
              <span><strong>Canada office</strong>{site.address.street}<br />{site.address.city}, {site.address.region} {site.address.postalCode}<br />Canada</span>
            </address>
            <address className="footer-contact-line">
              <PinIcon />
              <span><strong>India office</strong>Olangattu Tower<br />Chittethukara, Kakkanad<br />Kochi, Kerala 682037<br />India</span>
            </address>
          </div>
          <div className="social-block">
            <span>OFFICIAL SOCIAL</span>
            <div className="social-row" aria-label="Social media">
              {socials.map(([label, href, Icon]) => <a key={label} href={href} target="_blank" rel="me noreferrer" aria-label={label}><Icon /></a>)}
            </div>
          </div>
        </section>

        <div className="footer-nav-grid">
          {cardGroups.map(({ label, subtitle, Icon, items }) => (
            <section className="footer-nav-card" key={label}>
              <div className="footer-card-icon"><Icon /></div>
              <h2>{label}</h2>
              <p>{subtitle}</p>
              <nav aria-label={`${label} links`}>
                {items.map(([itemLabel, href]) => <Link key={`${label}-${itemLabel}`} href={href}><span>{itemLabel}</span><span aria-hidden="true">›</span></Link>)}
              </nav>
            </section>
          ))}
          <section className="footer-nav-card">
            <div className="footer-card-icon"><ShieldIcon /></div>
            <h2>Privacy Policies</h2>
            <p>Data Protection &amp; Product Privacy</p>
            <nav aria-label="Product privacy policies">
              {privacyPolicies.map(([label, href]) => (
                <Link key={href} href={href}>
                  <span>{label}</span><span aria-hidden="true">›</span>
                </Link>
              ))}
            </nav>
          </section>
        </div>
      </div>

      <div className="footer-legal">
        <div className="shell footer-legal-inner">
          <p>© {new Date().getFullYear()} Truefox AI Inc. All rights reserved.</p>
          <nav aria-label="Legal links"><Link href="/privacy-policy">Privacy &amp; Policy</Link><Link href="/terms-and-conditions">Terms</Link><Link href="/sitemap.xml">Sitemap</Link><Link href="/llms.txt">LLMs.txt</Link></nav>
        </div>
      </div>
    </footer>
  );
}
