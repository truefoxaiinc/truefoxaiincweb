import Image from "next/image";
import Link from "next/link";
import { navGroups, site } from "@/data/site";
import { ArrowUpRight, FacebookIcon, InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from "@/components/Icons";

const socialConfig = [
  ["LinkedIn", site.social.linkedin, LinkedInIcon],
  ["Instagram", site.social.instagram, InstagramIcon],
  ["Facebook", site.social.facebook, FacebookIcon],
  ["X", site.social.x, XIcon],
  ["YouTube", site.social.youtube, YouTubeIcon]
] as const;

export default function Footer() {
  const socials = socialConfig.filter(([, href]) => Boolean(href));
  return (
    <footer className="site-footer cinematic-footer">
      <div className="footer-orbit" aria-hidden="true"><i /><i /><i /><span>TFX</span></div>
      <div className="footer-cta shell">
        <div><span className="eyebrow">BUILD THE NEXT OPERATING ADVANTAGE</span><h2>Beyond imagination.<br /><em>Inside your operation.</em></h2></div>
        <div><p>Bring us the workflow, problem or product idea. We will help turn it into a practical AI system.</p><Link href="/request-quote" className="button button-primary">Start a project<ArrowUpRight /></Link></div>
      </div>
      <div className="footer-main shell">
        <div className="footer-brand">
          <Image src="/images/truefox-logo.webp" width={620} height={190} alt="Truefox AI Inc." sizes="220px" />
          <p>{site.description}</p>
          <a href={`mailto:${site.email}`} className="footer-email">{site.email}</a>
          <address>{site.address.street}<br />{site.address.city}, {site.address.region} {site.address.postalCode}<br />Canada</address>
          <div className="social-block"><span>OFFICIAL SOCIAL</span><div className="social-row" aria-label="Social media">{socials.map(([label, href, Icon]) => <a key={label} href={href} target="_blank" rel="me noreferrer" aria-label={label}><Icon /></a>)}</div></div>
        </div>
        {navGroups.map((group, groupIndex) => (
          <div className="footer-column" key={group.label}><span>0{groupIndex + 1}</span><h3>{group.label}</h3>{group.items.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
        ))}
      </div>
      <div className="footer-bottom shell"><p>© {new Date().getFullYear()} Truefox AI Inc. All rights reserved.</p><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms-and-conditions">Terms</Link><Link href="/sitemap.xml">Sitemap</Link><Link href="/llms.txt">LLMs.txt</Link></div><span>CANADA / INDIA / WORLDWIDE</span></div>
    </footer>
  );
}
