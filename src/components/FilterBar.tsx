import { Button } from "@/components/ui/button";

interface FilterBarProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterBar = ({ categories, activeFilter, onFilterChange }: FilterBarProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      <Button
        variant={activeFilter === "All" ? "default" : "outline"}
        onClick={() => onFilterChange("All")}
        className="rounded-full"
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? "default" : "outline"}
          onClick={() => onFilterChange(category)}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default FilterBar;