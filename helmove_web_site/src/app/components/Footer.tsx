import { Hexagon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLocale = i18n.language || 'en';
  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4 text-[#FF5500]">
              <Hexagon className="fill-[#FF5500]" size={24} />
              <span className="text-xl font-black tracking-widest text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                HELMOVE®
              </span>
            </div>
            <p className="text-gray-500 text-xs tracking-widest uppercase text-center md:text-left mb-6">
              -------------------------<br/>
              Built for the Global Pack.
              <br/>Beyond Intercom. Beyond Boundaries.
            </p>
            
            <button 
              onClick={() => navigate('/app-links')}
              className="bg-[#FF5500]/10 border border-[#FF5500]/50 text-[#FF5500] px-6 py-2.5 text-xs font-black tracking-widest hover:bg-[#FF5500] hover:text-[#050505] transition-all duration-300 uppercase shadow-[0_0_20px_rgba(255,85,0,0.1)] hover:shadow-[0_0_30px_rgba(255,85,0,0.3)]"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {t('get_the_app').toLocaleUpperCase(currentLocale)}
            </button>
          </div>

          

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/support-center" className="text-gray-400 hover:text-[#FF5500] text-sm font-medium uppercase tracking-wider transition-colors">
              {t('support_center')}
            </Link>
            <Link to="/privacy-policy" className="text-gray-400 hover:text-[#FF5500] text-sm font-medium uppercase tracking-wider transition-colors">
              {t('privacy_policy')}
            </Link>
            <Link to="/terms-of-use" className="text-gray-400 hover:text-[#FF5500] text-sm font-medium uppercase tracking-wider transition-colors">
              {t('terms')}
            </Link>
          </div>
          
        </div>
        
        <div className="border-t border-white/5 pt-8 flex justify-center">
          <p className="text-gray-600 text-xs uppercase tracking-widest">
            © COPYRIGHT 2026 HELMOVE® ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}