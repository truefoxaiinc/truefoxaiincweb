import Image from "next/image";

const voices = [
  {
    image: "/images/team-voices/team-voice-01.jpeg",
    name: "Vishnu Prabhakar",
    discipline: "Senior Flutter Developer · UI/UX Designer",
    quote: "I enjoy being able to think about both the experience and the engineering behind it. There is real freedom to explore an idea, refine it with the team and turn it into something people genuinely enjoy using."
  },
  {
    image: "/images/team-voices/team-voice-02.jpeg",
    name: "Krishna Vinod",
    discipline: "Data Scientist",
    quote: "What I value most is the space to ask questions and follow the data properly. We do not rush to an answer—we work through the problem together and make sure the result is useful in the real world."
  },
  {
    image: "/images/team-voices/team-voice-03.jpeg",
    name: "Muktha AR",
    discipline: "Senior Machine Learning & Computer Vision Engineer",
    quote: "I get to work on technically challenging problems while staying close to how the system will actually be used. The team is open, supportive and always willing to test an assumption instead of simply accepting it."
  },
  {
    image: "/images/team-voices/team-voice-04.jpeg",
    name: "Shanu VM",
    discipline: "Project Manager",
    quote: "Every project brings different people and perspectives together, and I like helping that work move clearly from one stage to the next. Everyone takes ownership, communicates openly and supports each other when priorities change."
  },
  {
    image: "/images/team-voices/team-voice-05.jpeg",
    name: "Muhammed Fuhad",
    discipline: "Senior Backend Developer",
    quote: "I appreciate the focus on building things properly, not just making them work for a demo. We think about performance, reliability and what the team will need later, and there is always someone ready to help solve a difficult problem."
  }
] as const;

function VoiceCards({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="team-voices-group" aria-hidden={duplicate || undefined}>
      {voices.map((voice, index) => (
        <article className="team-voice-card" key={`${voice.image}-${duplicate ? "copy" : "original"}`} tabIndex={duplicate ? -1 : 0}>
          <div className="team-voice-copy">
            <span>{String(index + 1).padStart(2, "0")} / TEAM VOICE</span>
            <blockquote>“{voice.quote}”</blockquote>
            <p>{voice.name}</p>
            <small>{voice.discipline}</small>
          </div>
          <Image src={voice.image} width={100} height={100} alt={duplicate ? "" : `Truefox AI ${voice.discipline} team member`} sizes="100px" />
        </article>
      ))}
    </div>
  );
}

export default function TeamVoices() {
  return (
    <section className="team-voices" aria-labelledby="team-voices-title">
      <div className="shell team-voices-heading">
        <div>
          <span>VOICES FROM THE TEAM</span>
          <h2 id="team-voices-title">WHAT IT FEELS LIKE<br />TO BUILD HERE.</h2>
        </div>
        <p>Different perspectives, shared ownership and the space to do meaningful work well.</p>
      </div>
      <div className="team-voices-marquee" aria-label="Thoughts from Truefox AI team members">
        <div className="team-voices-track">
          <VoiceCards />
          <VoiceCards duplicate />
        </div>
      </div>
    </section>
  );
}
