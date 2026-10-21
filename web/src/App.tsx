import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SkillDetail from "./pages/SkillDetail";
import Install from "./pages/Install";

function ActiveLink({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${className} text-brand-500` : `${className} text-slate-400 hover:text-white`}
      end
    >
      {children}
    </NavLink>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <BrowserRouter basename="/ForOpenCode/">
      <div className="min-h-screen bg-dark-950 text-slate-100">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skill/:id" element={<SkillDetail />} />
            <Route path="/install" element={<Install />} />
          </Routes>
        </main>
        <footer className="border-t border-slate-800 bg-dark-900 py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-brand-500 font-bold text-lg">ForOpenCode</span>
              <span className="text-slate-500 text-sm">136 skills para OpenCode V2</span>
            </div>
            <div className="flex gap-4 text-slate-500 text-sm">
              <span>imandro</span>
              <span>| GitHub Pages</span>
              <span>
                <a href="https://opencode.ai/v2/docs/skills/" className="text-brand-400 hover:text-brand-300 underline underline-offset-4">Docs OpenCode</a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
