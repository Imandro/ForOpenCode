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
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          active === null
            ? "bg-brand-600 text-white shadow-[0_0_20px_rgba(14,165,233,0.3)]"
            : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700"
        }`}
      >
        Todas
      </button>
      {Object.values(CATEGORIES).map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
            active === cat.id
              ? "bg-brand-600 text-white shadow-[0_0_20px_rgba(14,165,233,0.3)]"
              : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700"
          }`}
        >
          {cat.icon} {cat.label}
        </button>
      ))}
    </div>
  );
}
