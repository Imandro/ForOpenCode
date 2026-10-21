import { Link } from "react-router-dom";
import { Code2, FileText } from "lucide-react";
import { Skill } from "../types";

interface SkillCardProps {
  skill: Skill;
  description: string;
  category: string;
}

export default function SkillCard({ skill, description, category }: SkillCardProps) {
  return (
    <Link to={`/skill/${skill.name}`} className="skill-card block">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-[#0ea5e9]" />
          <span className="font-bold text-[#1e293b]">{skill.name}</span>
        </div>
        <span className="text-xs bg-[#f0f9ff] text-[#0ea5e9] px-2 py-1 rounded border border-[#0ea5e9]/30 font-bold">
          v{skill.version}
        </span>
      </div>
      <p className="text-[#64748b] text-sm mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between pt-3 border-t border-[#e2e8f0]">
        <span className="text-xs text-[#64748b] uppercase tracking-wider font-bold">{category}</span>
        <FileText className="w-4 h-4 text-[#94a3b8] group-hover:text-[#0ea5e9] transition-colors" />
      </div>
    </Link>
  );
}
