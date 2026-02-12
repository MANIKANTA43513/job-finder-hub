export interface Job {
  id: number;
  title: string;
  company: string;
  location: "Remote" | "On-site" | "Hybrid";
  type: "Internship" | "Full-time";
}

export const jobs: Job[] = [
  { id: 1, title: "Frontend Intern", company: "Acme Corp", location: "Remote", type: "Internship" },
  { id: 2, title: "Web Developer", company: "Tech Solutions", location: "On-site", type: "Full-time" },
  { id: 3, title: "React Developer", company: "InnovateTech", location: "Remote", type: "Full-time" },
  { id: 4, title: "UI/UX Design Intern", company: "DesignHub", location: "Hybrid", type: "Internship" },
  { id: 5, title: "Backend Engineer", company: "CloudNet", location: "On-site", type: "Full-time" },
  { id: 6, title: "Full Stack Developer", company: "DevStudio", location: "Remote", type: "Full-time" },
  { id: 7, title: "Software Engineering Intern", company: "ByteWorks", location: "On-site", type: "Internship" },
  { id: 8, title: "Mobile App Developer", company: "AppVenture", location: "Remote", type: "Full-time" },
  { id: 9, title: "Data Analyst Intern", company: "DataMinds", location: "Hybrid", type: "Internship" },
  { id: 10, title: "DevOps Engineer", company: "ScaleUp Inc", location: "On-site", type: "Full-time" },
  { id: 11, title: "QA Testing Intern", company: "BugFree Labs", location: "Remote", type: "Internship" },
  { id: 12, title: "JavaScript Developer", company: "WebCraft", location: "Hybrid", type: "Full-time" },
];
