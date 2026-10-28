import data from "@/data/portfolio.json";
import type { ExperienceItemType } from "@/components/work-experience";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function toComponentPeriod(value: string): string {
  const [month, year] = value.trim().split(/\s+/);
  const index = months.indexOf(month);
  if (index < 0 || !/^\d{4}$/.test(year ?? "")) {
    throw new Error(`Unsupported resume date: ${value}. Expected MMM YYYY.`);
  }
  return `${String(index + 1).padStart(2, "0")}.${year}`;
}

// Adapt the existing resume data; do not maintain a second experience dataset.
export const workExperiences: ExperienceItemType[] = data.experience.map((job, index) => ({
  id: `employer-${index}`,
  companyName: job.company,
  isCurrentEmployer: job.end === "Present",
  positions: [{
    id: `position-${index}`,
    title: job.role,
    employmentPeriod: {
      start: toComponentPeriod(job.start),
      ...(job.end === "Present" ? {} : { end: toComponentPeriod(job.end) }),
    },
    location: job.location,
    description: job.highlights.map(highlight => `- ${highlight}`).join("\n"),
    skills: job.technologies,
    isExpanded: true,
    showDuration: false,
  }],
}));
