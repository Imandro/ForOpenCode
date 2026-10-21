import { NavLink, useLocation } from "react-router-dom";
import { Search, Menu, X, Folder, Code } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { to: "/", label: "Inicio", icon: <Folder size={18} /> },
    { to: "/install", label: "Instalación", icon: <Code size={18} /> },
  ];

  return (
    <>
      <nav className="navbar z-50 h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#0ea5e9] rounded-lg flex items-center justify-center">
              <Code size={16} className="text-white" />
            </div>
            <NavLink to="/" className="text-xl font-bold text-[#1e293b] tracking-tight">
              ForOpenCode
            </NavLink>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#0ea5e9] text-white border border-[#0ea5e9]/30"
                      : "text-[#64748b] hover:text-[#111827] hover:bg-[#f8fafc]"
                  }`
                }
              >
                {item.icon} {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/install"
              className="px-3 py-2 rounded-lg text-sm font-medium text-[#0ea5e9] hover:text-white border border-[#0ea5e9] hover:bg-[#0ea5e9] transition-colors"
            >
              📦 Instalar
            </NavLink>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-[#64748b] hover:text-[#111827] hover:bg-[#f8fafc]"
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-b border-[#e2e8f0] bg-white">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#0ea5e9]/10 text-[#0ea5e9]"
                        : "text-[#64748b] hover:bg-[#f8fafc] hover:text-[#111827]"
                    }`
                  }
                >
                  {item.icon} {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/install"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium border border-[#0ea5e9] bg-[#0ea5e9]/10 text-[#0ea5e9]"
              >
                📦 Instalación
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile search dropdown */}
      {open && (
        <div className="md:hidden bg-white border-b border-[#e2e8f0] p-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-[#64748b]" />
            <input
              type="text"
              placeholder="Buscar skills..."
              className="w-full pl-9 pr-4 py-2 bg-[#f8fafc] border border-[#cbd5e1] rounded-lg text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 placeholder-[#94a3b8] text-sm"
            />
          </div>
        </div>
      )}
    </>
  );
}
