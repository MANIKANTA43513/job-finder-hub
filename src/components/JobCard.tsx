import { Job } from "@/data/jobs";
import { MapPin, Building2, Briefcase } from "lucide-react";

interface JobCardProps {
  job: Job;
  searchTerm: string;
}

const highlightText = (text: string, term: string) => {
  if (!term.trim()) return text;
  const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-accent text-accent-foreground rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

const JobCard = ({ job, searchTerm }: JobCardProps) => {
  return (
    <div className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-card-foreground truncate">
            {highlightText(job.title, searchTerm)}
          </h3>
          <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Building2 className="h-4 w-4 shrink-0" />
            <span>{job.company}</span>
          </div>
          <div className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>{job.location}</span>
          </div>
        </div>
        <span
          className={`inline-flex items-center gap-1 shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
            job.type === "Internship"
              ? "bg-secondary text-secondary-foreground"
              : "bg-primary text-primary-foreground"
          }`}
        >
          <Briefcase className="h-3 w-3" />
          {job.type}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
