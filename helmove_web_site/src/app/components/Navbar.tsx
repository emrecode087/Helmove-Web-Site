import { Hexagon, Menu, ChevronDown, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [supportOpen, setSupportOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const currentLocale = i18n.language || 'en';
  const currentLang = currentLocale.slice(0, 2).toLocaleUpperCase(currentLocale);

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  }

  function goToHardware() {
    // If not on home, navigate first then scroll after a short delay
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('helmic-hardware');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    } else {
      const el = document.getElementById('helmic-hardware');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function goToFeatures() {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('features');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    } else {
      const el = document.getElementById('features');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function goToPhilosophy() {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('philosophy');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    } else {
      const el = document.getElementById('philosophy');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-[#FF5500] cursor-pointer">
          <Hexagon className="fill-[#FF5500]" size={28} />
          <span className="text-2xl font-black tracking-widest text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            HELMOVE®
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={goToPhilosophy} className="text-xs font-bold text-gray-300 hover:text-[#FF5500] tracking-[0.15em] transition-colors bg-transparent">
            {t('philosophy').toLocaleUpperCase(currentLocale)}
          </button>
          <button onClick={goToFeatures} className="text-xs font-bold text-gray-300 hover:text-[#FF5500] tracking-[0.15em] transition-colors bg-transparent">
            {t('features').toLocaleUpperCase(currentLocale)}
          </button>
          <button onClick={goToHardware} className="text-xs font-bold text-gray-300 hover:text-[#FF5500] tracking-[0.15em] transition-colors bg-transparent">
            {t('hardware').toLocaleUpperCase(currentLocale)}
          </button>
          
          <div 
            className="relative h-20 flex items-center" 
            onMouseEnter={() => setSupportOpen(true)} 
            onMouseLeave={() => setSupportOpen(false)}
          >
            <button className="flex items-center gap-1 text-xs font-bold text-gray-300 hover:text-[#FF5500] tracking-[0.15em] transition-colors">
              {t('support').toLocaleUpperCase(currentLocale)} <ChevronDown size={14} className={`transition-transform duration-300 ${supportOpen ? "rotate-180" : ""}`} />
            </button>
            
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] py-2 transition-all duration-300 origin-top ${supportOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}>
              <Link to="/privacy-policy" className="block px-5 py-3 text-xs text-gray-400 hover:text-[#FF5500] hover:bg-white/5 tracking-wider transition-colors border-b border-white/5 last:border-0">
                {t('privacy_policy').toLocaleUpperCase(currentLocale)}
              </Link>
              <Link to="/terms-of-use" className="block px-5 py-3 text-xs text-gray-400 hover:text-[#FF5500] hover:bg-white/5 tracking-wider transition-colors border-b border-white/5 last:border-0">
                {t('terms').toLocaleUpperCase(currentLocale)}
              </Link>
              <Link to="/support-center" className="block px-5 py-3 text-xs text-gray-400 hover:text-[#FF5500] hover:bg-white/5 tracking-wider transition-colors border-b border-white/5 last:border-0">
                {t('support_center').toLocaleUpperCase(currentLocale)}
              </Link>
              <Link to="/data-deletion" className="block px-5 py-3 text-xs text-gray-400 hover:text-[#FF5500] hover:bg-white/5 tracking-wider transition-colors border-b border-white/5 last:border-0">
                {t('data_deletion').toLocaleUpperCase(currentLocale)}
              </Link>
            </div>
          </div>
          
          
          <button 
            onClick={() => navigate('/app-links')}
            className="bg-[#FF5500]/10 border border-[#FF5500]/50 text-[#FF5500] px-5 py-2 text-xs font-black tracking-widest hover:bg-[#FF5500] hover:text-[#050505] transition-all duration-300"
          >
            {t('get_the_app').toLocaleUpperCase(currentLocale)}
          </button>

          <div 
            className="relative h-20 flex items-center ml-4" 
            onMouseEnter={() => setLangOpen(true)} 
            onMouseLeave={() => setLangOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-xs font-bold text-gray-300 hover:text-[#FF5500] tracking-[0.15em] transition-colors">
              <Globe size={16} /> {currentLang} <ChevronDown size={14} className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-40 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] py-2 transition-all duration-300 origin-top ${langOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}>
              <button onClick={() => changeLanguage('tr')} className="w-full text-left block px-5 py-3 text-xs text-gray-400 hover:text-[#FF5500] hover:bg-white/5 tracking-wider transition-colors border-b border-white/5 last:border-0">
                TÜRKÇE
              </button>
              <button onClick={() => changeLanguage('en')} className="w-full text-left block px-5 py-3 text-xs text-gray-400 hover:text-[#FF5500] hover:bg-white/5 tracking-wider transition-colors border-b border-white/5 last:border-0">
                ENGLISH
              </button>
              <button onClick={() => changeLanguage('de')} className="w-full text-left block px-5 py-3 text-xs text-gray-400 hover:text-[#FF5500] hover:bg-white/5 tracking-wider transition-colors border-b border-white/5 last:border-0">
                DEUTSCH
              </button>
              <button onClick={() => changeLanguage('it')} className="w-full text-left block px-5 py-3 text-xs text-gray-400 hover:text-[#FF5500] hover:bg-white/5 tracking-wider transition-colors border-b border-white/5 last:border-0">
                ITALIANO
              </button>
              <button onClick={() => changeLanguage('fr')} className="w-full text-left block px-5 py-3 text-xs text-gray-400 hover:text-[#FF5500] hover:bg-white/5 tracking-wider transition-colors border-b border-white/5 last:border-0">
                FRANÇAIS
              </button>
              <button onClick={() => changeLanguage('es')} className="w-full text-left block px-5 py-3 text-xs text-gray-400 hover:text-[#FF5500] hover:bg-white/5 tracking-wider transition-colors border-b border-white/5 last:border-0">
                ESPAÑOL
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-white p-2">
          <Menu size={24} />
        </button>

      </div>
    </nav>
  );
}