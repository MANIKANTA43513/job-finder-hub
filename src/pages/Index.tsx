import { useState, useMemo } from "react";
import { jobs } from "@/data/jobs";
import JobCard from "@/components/JobCard";
import Filters from "@/components/Filters";
import { Briefcase } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortAsc, setSortAsc] = useState(true);

  const displayedJobs = useMemo(() => {
    const filtered = jobs.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = locationFilter === "All" || job.location === locationFilter;
      const matchesType = typeFilter === "All" || job.type === typeFilter;
      return matchesSearch && matchesLocation && matchesType;
    });

    filtered.sort((a, b) =>
      sortAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );

    return filtered;
  }, [searchTerm, locationFilter, typeFilter, sortAsc]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Job Board</h1>
              <p className="text-sm text-muted-foreground">Find your next opportunity</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        <Filters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          locationFilter={locationFilter}
          onLocationChange={setLocationFilter}
          typeFilter={typeFilter}
          onTypeChange={setTypeFilter}
          sortAsc={sortAsc}
          onSortToggle={() => setSortAsc((prev) => !prev)}
        />

        <p className="mt-5 mb-3 text-sm text-muted-foreground">
          {displayedJobs.length} job{displayedJobs.length !== 1 ? "s" : ""} found
        </p>

        {displayedJobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {displayedJobs.map((job) => (
              <JobCard key={job.id} job={job} searchTerm={searchTerm} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
            <Briefcase className="h-10 w-10 text-muted-foreground/50" />
            <p className="mt-3 text-muted-foreground">No jobs match your criteria</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setLocationFilter("All");
                setTypeFilter("All");
              }}
              className="mt-2 text-sm text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
