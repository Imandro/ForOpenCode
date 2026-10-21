import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
      <input
        type="text"
        placeholder="Buscar skills por nombre o descripción..."
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-3 bg-dark-900 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all placeholder-slate-500 text-sm"
      />
    </div>
  );
}
