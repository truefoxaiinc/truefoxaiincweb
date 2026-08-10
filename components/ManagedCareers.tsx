import CareerApplicationForm from "@/components/CareerApplicationForm";
import type { Job } from "@/lib/cms";

export default function ManagedCareers({ jobs }: { jobs: Job[] }) {
  const published = jobs.filter((job) => job.status === "published").sort((a, b) => a.sortOrder - b.sortOrder);
  return <><div className="careers-open-heading"><span className="eyebrow">NOW HIRING</span><h2>{published.length ? "CURRENT OPEN POSITIONS" : "NO OPEN POSITIONS"}</h2></div><div className="managed-job-grid">{published.map((job) => <article key={job.id}><div><span>{job.department}</span><small>{job.employmentType}</small></div><h3>{job.title}</h3><p>{job.summary}</p><ul>{job.requirements.split("\n").filter(Boolean).map((requirement) => <li key={requirement}>{requirement}</li>)}</ul><footer><span>{job.location}</span><a href="#career-application">Apply now →</a></footer></article>)}</div>{published.length ? <CareerApplicationForm jobs={published} /> : <p className="managed-empty-copy">There are no published openings right now. Check back for future opportunities.</p>}</>;
}
