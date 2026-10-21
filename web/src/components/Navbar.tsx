import { NavLink, useLocation } from "react-router-dom";
import { Search, Menu, X, Folder, Code, BookOpen } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { to: "/", label: "Inicio", icon: <Folder size={18} /> },
    { to: "/install", label: "Instalación", icon: <Code size={18} /> },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-dark-950/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <Code size={16} className="text-white" />
            </div>
            <NavLink to="/" className="text-xl font-bold text-brand-500 tracking-tight">
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
                      ? "bg-brand-500/10 text-brand-400 border border-brand-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`
                }
              >
                {item.icon} {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/install"
              className="px-3 py-2 rounded-lg text-sm font-medium text-brand-400 hover:text-brand-300 border border-brand-500/20 hover:bg-brand-500/10 transition-colors"
            >
              📦 Instalar
            </NavLink>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50"
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-dark-950 border-b border-slate-800">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-brand-500/10 text-brand-400"
                        : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                    }`
                  }
                >
                  {item.icon} {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/install"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-brand-400 border border-brand-500/20 hover:bg-brand-500/10"
              >
                📦 Instalación
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile search dropdown */}
      {open && (
        <div className="md:hidden bg-dark-950 border-b border-slate-800 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Buscar skills..."
              className="w-full pl-9 pr-4 py-2 bg-dark-900 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/50 placeholder-slate-500"
            />
          </div>
        </div>
      )}
    </>
  );
}
