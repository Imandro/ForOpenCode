import { CATEGORIES, type Category } from "../types";

interface CategoryFilterProps {
  active: Category | null;
  onChange: (category: Category | null) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar custom-scrollbar">
      <button
        onClick={() => onChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
          active === null
            ? "bg-[#0ea5e9] text-white shadow-[0_0_20px_rgba(14,165,233,0.3)]"
            : "bg-white text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#111827] border border-[#cbd5e1]"
        }`}
      >
        Todas
      </button>
      {Object.values(CATEGORIES).map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
            active === cat.id
              ? "bg-[#0ea5e9] text-white shadow-[0_0_20px_rgba(14,165,233,0.3)]"
              : "bg-white text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#111827] border border-[#cbd5e1]"
          }`}
        >
          {cat.icon} {cat.label}
        </button>
      ))}
    </div>
  );
}
