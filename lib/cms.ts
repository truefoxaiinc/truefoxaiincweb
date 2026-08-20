export type LeadStatus = "new" | "contacted" | "qualified" | "closed";
export type ApplicationStatus = "new" | "reviewing" | "shortlisted" | "rejected" | "hired";
export type PublishStatus = "draft" | "published" | "archived";

type Common = { id: string; createdAt: string; updatedAt: string };
export type Lead = Common & { status: LeadStatus; intent: string; name: string; email: string; company: string; phone: string; interest: string; timing: string; message: string; notes: string };
export type Application = Common & { status: ApplicationStatus; jobId: string; jobTitle: string; name: string; email: string; phone: string; location: string; experience: string; resumeUrl: string; coverLetter: string; notes: string };
export type Job = Common & { status: PublishStatus; title: string; department: string; location: string; employmentType: string; summary: string; description: string; requirements: string; sortOrder: number };
export type BlogPost = Common & { status: PublishStatus; title: string; slug: string; category: string; excerpt: string; content: string; author: string; publishedAt: string; readTime: string; relatedLinks?: { label: string; href: string }[] };
export type SiteRecord = Common & { status: PublishStatus; group: string; label: string; value: string; description: string; sortOrder: number };
export type CmsData = { leads: Lead[]; applications: Application[]; jobs: Job[]; posts: BlogPost[]; records: SiteRecord[] };
export type CollectionName = keyof CmsData;
