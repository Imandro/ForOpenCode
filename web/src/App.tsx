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
        isActive ? `${className} text-[#0ea5e9]` : `${className} text-[#64748b] hover:text-[#111827]`}
      end
    >
      {children}
    </NavLink>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#ffffff] text-[#111827]">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skill/:id" element={<SkillDetail />} />
            <Route path="/install" element={<Install />} />
          </Routes>
        </main>
        <footer className="footer py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[#0ea5e9] font-bold text-lg">ForOpenCode</span>
              <span className="text-[#64748b] text-sm">136 skills para OpenCode V2</span>
            </div>
            <div className="flex gap-4 text-[#64748b] text-sm">
              <span>imandro</span>
              <span>| GitHub Pages</span>
              <span>
                <a href="https://opencode.ai/v2/docs/skills/" className="text-[#0ea5e9] underline underline-offset-4 hover:text-[#0284c7]">Docs OpenCode</a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
