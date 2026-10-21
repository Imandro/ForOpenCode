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
          <Code2 className="w-4 h-4 text-brand-500" />
          <span className="font-semibold text-slate-200">{skill.name}</span>
        </div>
        <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded border border-slate-700">
          v{skill.version}
        </span>
      </div>
      <p className="text-slate-400 text-sm mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/50">
        <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">{category}</span>
        <FileText className="w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors" />
      </div>
    </Link>
  );
}
