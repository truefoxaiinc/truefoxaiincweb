import Image from "next/image";
import { ArrowUpRight } from "@/components/Icons";

const benefits = [
  ["01", "UNDERSTAND", "Begin with self-guided or AI-assisted assessments that make attention patterns easier to recognise."],
  ["02", "STRENGTHEN", "Follow a personalised programme with focused lessons, videos, reading and practical exercises."],
  ["03", "PRACTISE", "Build memory, response control and task-switching skills through purposeful interactive activities."],
  ["04", "PROGRESS", "Review attention scores, activity performance, session history and weekly improvement in one place."]
] as const;

export default function AttentionMinderLaunch() {
  return (
    <section className="attention-launch" aria-labelledby="attention-launch-title">
      <div className="shell attention-launch-grid">
        <div className="attention-launch-visual">
          <div className="attention-launch-signal" aria-hidden="true"><i /><i /><i /></div>
          <Image
            src="/images/products/attention-minder-app-icon.png"
            width={1024}
            height={1024}
            alt="Attention Minder app icon"
            sizes="(max-width: 700px) 72vw, (max-width: 1050px) 42vw, 440px"
            priority={false}
          />
          <span>TRUEFOX AI · DIGITAL WELLBEING</span>
        </div>

        <div className="attention-launch-copy">
          <div className="attention-launch-meta">
            <span>NEW PRODUCT</span>
            <span>ATTENTION MINDER</span>
          </div>
          <h2 id="attention-launch-title">UNDERSTAND YOUR ATTENTION.<br /><em>BUILD STRONGER FOCUS.</em></h2>
          <p>Attention Minder helps people understand their attention, build healthier focus habits and follow meaningful progress through guided assessments, personalised training and practical activities.</p>

          <div className="attention-launch-benefits">
            {benefits.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>

          <div className="attention-launch-actions">
            <a className="button button-primary" href="https://play.google.com/store/apps/details?id=com.trufox.attentionminder" target="_blank" rel="noreferrer">
              VIEW ON GOOGLE PLAY <ArrowUpRight />
            </a>
            <span>GUIDED · PERSONALISED · PROGRESS-FOCUSED</span>
          </div>

          <p className="attention-launch-note">Attention Minder supports personal awareness, attention practice and everyday wellbeing. It does not provide a medical diagnosis or replace professional medical advice, diagnosis or treatment.</p>
        </div>
      </div>
    </section>
  );
}
