import { Search, ArrowUpDown } from "lucide-react";

interface FiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  locationFilter: string;
  onLocationChange: (value: string) => void;
  typeFilter: string;
  onTypeChange: (value: string) => void;
  sortAsc: boolean;
  onSortToggle: () => void;
}

const locations = ["All", "Remote", "On-site", "Hybrid"];
const types = ["All", "Internship", "Full-time"];

const Filters = ({
  searchTerm,
  onSearchChange,
  locationFilter,
  onLocationChange,
  typeFilter,
  onTypeChange,
  sortAsc,
  onSortToggle,
}: FiltersProps) => {
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search jobs by title..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {/* Location Filter */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-medium text-muted-foreground mr-1">Location:</span>
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => onLocationChange(loc)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                locationFilter === loc
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-medium text-muted-foreground mr-1">Type:</span>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => onTypeChange(t)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                typeFilter === t
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Sort */}
        <button
          onClick={onSortToggle}
          className="ml-auto flex items-center gap-1.5 rounded-lg border border-input px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors"
        >
          <ArrowUpDown className="h-3.5 w-3.5" />
          {sortAsc ? "A → Z" : "Z → A"}
        </button>
      </div>
    </div>
  );
};

export default Filters;
