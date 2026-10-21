import { Link } from "react-router-dom";
import { Code, Terminal, Folder, Globe, Link as LinkIcon } from "lucide-react";

export default function Install() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e293b] to-[#0ea5e9] mb-4">
          Instalación
        </h1>
        <p className="text-[#64748b] text-lg">
          Cómo instalar y usar las skills de ForOpenCode en OpenCode V2.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Opción 1 */}
        <div className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-6 hover:border-[#0ea5e9] hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-colors">
          <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center mb-4 text-[#0ea5e9]">
            <Terminal className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#1e293b] mb-3">Proyecto local</h3>
          <p className="text-[#64748b] text-sm mb-6">
            Copia las skills que necesites dentro de `.opencode/skills/` de tu proyecto.
          </p>
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-4 font-mono text-sm text-[#0ea5e9] overflow-x-auto">
            cp -r ForOpenCode/.opencode/skills/&lt;skill-id&gt; .opencode/skills/
          </div>
        </div>

        {/* Opción 2 */}
        <div className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-6 hover:border-[#0ea5e9] hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-colors">
          <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center mb-4 text-[#0ea5e9]">
            <Folder className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#1e293b] mb-3">Uso global</h3>
          <p className="text-[#64748b] text-sm mb-6">
            Disponible para todos tus proyectos en tu máquina.
          </p>
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-4 font-mono text-sm text-[#0ea5e9] overflow-x-auto">
            cp -r ForOpenCode/.opencode/skills/&lt;skill-id&gt; ~/.config/opencode/skills/
          </div>
        </div>

        {/* Opción 3 */}
        <div className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-6 hover:border-[#0ea5e9] hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-colors">
          <div className="w-12 h-12 bg-[#eff6ff] rounded-lg flex items-center justify-center mb-4 text-[#0ea5e9]">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#1e293b] mb-3">Catálogo HTTP</h3>
          <p className="text-[#64748b] text-sm mb-6">
            Agrega la URL del catálogo a tu configuración de OpenCode.
          </p>
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-4 font-mono text-sm text-[#0ea5e9] overflow-x-auto">
            https://imandro.github.io/ForOpenCode/
          </div>
        </div>
      </div>

      {/* Config example */}
      <div className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-6 shadow-soft">
        <h3 className="text-lg font-bold text-[#1e293b] mb-4 flex items-center gap-2">
          <LinkIcon className="w-5 h-5 text-[#0ea5e9]" /> Configuración opencode.jsonc
        </h3>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-4 font-mono text-sm overflow-x-auto">
{`{
  "$schema": "https://opencode.ai/config.json",
  "skills": [
    "https://imandro.github.io/ForOpenCode/"
  ]
}`}
        </div>
        <p className="text-[#64748b] text-sm mt-3">
          Cada config contribuye sus entradas. Los arrays `skills` se combinan, no se reemplazan.
        </p>
      </div>

      {/* Usage */}
      <div className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-6 shadow-soft">
        <h3 className="text-lg font-bold text-[#1e293b] mb-4 flex items-center gap-2">
          <Code className="w-5 h-5 text-[#0ea5e9]" /> Cargar una skill
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-[#64748b] text-sm font-mono">@</span>
            <span className="text-[#0ea5e9] font-bold text-sm">skill-id</span>
            <span className="ml-auto text-xs text-[#94a3b8]">Menciona la skill en el chat</span>
          </div>
          <div className="flex items-center gap-3 bg-[#f8fafc] p-3 rounded-lg">
            <span className="text-xs text-[#94a3b8]">skill tool</span>
            <span className="ml-auto text-xs font-mono text-[#0ea5e9]">{ '{ "id": "skill-id" }' }</span>
          </div>
          <p className="text-[#64748b] text-sm mt-2">
            Los IDs son exactos y case-sensitive. Consulta el catálogo para ver la lista completa.
          </p>
          <div className="mt-4 flex gap-3">
            <Link to="/" className="btn-primary flex items-center justify-center gap-2">
              <Code className="w-4 h-4" /> Ver catálogo de skills
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
