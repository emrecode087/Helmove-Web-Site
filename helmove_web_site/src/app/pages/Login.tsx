import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from 'react-i18next';

export function Login() {
  const { t } = useTranslation();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center relative bg-[#050505] overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5500] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md mx-4 bg-[#0A0A0A]/90 backdrop-blur-2xl border border-[#FF5500]/20 rounded-[16px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        
        <div className="flex w-full rounded-full border border-[#FF5500] overflow-hidden mb-8">
          <button 
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
              mode === 'login' 
                ? 'bg-[#FF5500] text-[#0A0A0A] font-black' 
                : 'bg-transparent text-[#FF5500] font-bold hover:bg-[#FF5500]/10'
            }`}
          >
            {t('login_tab_login')}
          </button>
          <button 
            type="button"
            onClick={() => setMode('register')}
            className={`flex-1 py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
              mode === 'register' 
                ? 'bg-[#FF5500] text-[#0A0A0A] font-black' 
                : 'bg-transparent text-[#FF5500] font-bold hover:bg-[#FF5500]/10'
            }`}
          >
            {t('login_tab_register')}
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <AnimatePresence mode="popLayout">
            {mode === 'register' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pb-4">
                  <div className="relative flex items-center bg-[#111111] border-b-2 border-white/10 focus-within:border-[#FF5500] transition-colors duration-300">
                    <div className="absolute left-4 text-gray-500"><User size={18} /></div>
                    <input type="text" placeholder={t('placeholder_username')} className="w-full bg-transparent text-white pl-11 pr-4 py-4 outline-none placeholder-gray-600 font-medium text-sm" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative flex items-center bg-[#111111] border-b-2 border-white/10 focus-within:border-[#FF5500] transition-colors duration-300">
                      <div className="absolute left-4 text-gray-500"><User size={18} /></div>
                      <input type="text" placeholder={t('placeholder_first_name')} className="w-full bg-transparent text-white pl-11 pr-4 py-4 outline-none placeholder-gray-600 font-medium text-sm" />
                    </div>
                    <div className="relative flex items-center bg-[#111111] border-b-2 border-white/10 focus-within:border-[#FF5500] transition-colors duration-300">
                      <div className="absolute left-4 text-gray-500"><User size={18} /></div>
                      <input type="text" placeholder={t('placeholder_last_name')} className="w-full bg-transparent text-white pl-11 pr-4 py-4 outline-none placeholder-gray-600 font-medium text-sm" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-4">
            <div className="relative flex items-center bg-[#111111] border-b-2 border-white/10 focus-within:border-[#FF5500] transition-colors duration-300">
              <div className="absolute left-4 text-gray-500"><Mail size={18} /></div>
              <input type="email" placeholder={t('placeholder_email')} className="w-full bg-transparent text-white pl-11 pr-4 py-4 outline-none placeholder-gray-600 font-medium text-sm" />
            </div>
            
            <div className="relative flex items-center bg-[#111111] border-b-2 border-white/10 focus-within:border-[#FF5500] transition-colors duration-300">
              <div className="absolute left-4 text-gray-500"><Lock size={18} /></div>
              <input type={showPassword ? "text" : "password"} placeholder={t('placeholder_password')} className="w-full bg-transparent text-white pl-11 pr-12 py-4 outline-none placeholder-gray-600 font-medium text-sm" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-gray-500 hover:text-[#FF5500] transition-colors">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <AnimatePresence mode="popLayout">
              {mode === 'register' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4">
                    <div className="relative flex items-center bg-[#111111] border-b-2 border-white/10 focus-within:border-[#FF5500] transition-colors duration-300">
                      <div className="absolute left-4 text-gray-500"><Lock size={18} /></div>
                      <input type={showConfirmPassword ? "text" : "password"} placeholder={t('placeholder_confirm_password')} className="w-full bg-transparent text-white pl-11 pr-12 py-4 outline-none placeholder-gray-600 font-medium text-sm" />
                      <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 text-gray-500 hover:text-[#FF5500] transition-colors">
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-6">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className={`w-4 h-4 flex items-center justify-center rounded border transition-colors ${rememberMe ? 'bg-[#FF5500] border-[#FF5500]' : 'border-gray-600 group-hover:border-[#FF5500]'}`}>
                {rememberMe && <Check size={12} className="text-[#0A0A0A] stroke-[3]" />}
              </div>
              <span className="text-gray-400 text-xs tracking-wider uppercase group-hover:text-white transition-colors">{t('remember_me')}</span>
            </label>
            
            <a href="#" className="text-gray-400 text-xs tracking-wider uppercase underline decoration-white/20 hover:text-[#FF5500] hover:decoration-[#FF5500] transition-all [text-shadow:0_0_10px_rgba(255,85,0,0)] hover:[text-shadow:0_0_10px_rgba(255,85,0,0.5)]">
              {t('forgot_password')}
            </a>
          </div>

          <button 
            type="submit"
            className="relative overflow-hidden group w-full bg-[#FF5500] text-[#0A0A0A] font-black py-4 rounded-lg tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(255,85,0,0.6)] transition-all duration-300 mt-8" 
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="relative z-10">{mode === 'login' ? t('cta_login') : t('cta_register')}</span>
            <div className="absolute top-0 -left-[150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-45deg] group-hover:left-[150%] transition-all duration-700 ease-in-out" />
          </button>

          <div className="mt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase">{t('or_continue_with')}</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            
            <div className="flex gap-4">
              <button type="button" className="flex-1 flex items-center justify-center gap-3 bg-black border border-white/20 py-3 rounded-lg hover:bg-white/5 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 group">
                <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" className="text-white group-hover:scale-110 transition-transform">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.126 3.805 3.052 1.527-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.62-1.496 3.6-2.998 1.14-1.652 1.618-3.257 1.645-3.344-.038-.014-3.126-1.192-3.153-4.787-.026-3.003 2.445-4.444 2.56-4.518-1.425-2.067-3.626-2.352-4.411-2.4-1.74-.153-3.56 1.066-4.539 1.066zM15.11 3.456c.839-1.008 1.4-2.41 1.247-3.808-1.19.049-2.665.787-3.535 1.815-.78.892-1.448 2.336-1.264 3.708 1.332.102 2.704-.707 3.552-1.715z" fill="currentColor"/>
                </svg>
                <span className="text-white font-bold text-xs tracking-wider uppercase">{t('apple')}</span>
              </button>
              <button type="button" className="flex-1 flex items-center justify-center gap-3 bg-[#1A1A1A] py-3 rounded-lg hover:bg-[#2A2A2A] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 group">
                <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-white font-bold text-xs tracking-wider uppercase">{t('google')}</span>
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}