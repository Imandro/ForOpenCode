import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#94a3b8]" />
      <input
        type="text"
        placeholder="Buscar skills por nombre o descripción..."
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
}
