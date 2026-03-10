import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function AppLinks() {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language || "en";

  return (
    <section className="relative py-24 bg-[#050505] border-t border-white/5 z-20 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Arka Plan Ambient Iþýðý */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5500]/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Baþlýk ve Jilet Metinler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-4"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            {t("app_links.title").toLocaleUpperCase(currentLocale)}
          </h2>
          <div className="h-1 w-24 bg-[#FF5500] mx-auto mb-6 shadow-[0_0_15px_rgba(255,85,0,0.8)] rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            {t("app_links.description")}
          </p>
        </motion.div>

        {/* KARE NDRME BUTONLARI (GRID) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
          
          {/* APP STORE KARE BUTON */}
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
            className="group relative w-64 h-64 bg-[#0a0a0a] border border-white/10 rounded-3xl flex flex-col items-center justify-center p-8 hover:border-[#FF5500]/60 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(255,85,0,0.25)]"
          >
            <div className="absolute inset-0 bg-white/5 group-hover:translate-x-full transition-transform duration-700 ease-in-out -translate-x-full skew-x-12"></div>
            
            <div className="w-20 h-20 bg-black/50 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-[#FF5500]/50 transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(255,85,0,0.4)]">
              <svg className="w-10 h-10 fill-white group-hover:fill-[#FF5500] transition-colors duration-500" viewBox="0 0 384 512">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
            </div>
            
            <h3 className="text-white font-bold text-xl uppercase tracking-wider mb-2 group-hover:text-[#FF5500] transition-colors">App Store</h3>
            <p className="text-gray-500 text-xs text-center uppercase tracking-widest">{t("app_links.ios_protocol")}</p>
          </motion.a>

          {/* GOOGLE PLAY KARE BUTON */}
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative w-64 h-64 bg-[#0a0a0a] border border-white/10 rounded-3xl flex flex-col items-center justify-center p-8 hover:border-[#FF5500]/60 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(255,85,0,0.25)]"
          >
            <div className="absolute inset-0 bg-white/5 group-hover:translate-x-full transition-transform duration-700 ease-in-out -translate-x-full skew-x-12"></div>
            
            <div className="w-20 h-20 bg-black/50 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-[#FF5500]/50 transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(255,85,0,0.4)]">
              <svg className="w-10 h-10 fill-white group-hover:fill-[#FF5500] transition-colors duration-500" viewBox="0 0 512 512">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
            </div>
            
            <h3 className="text-white font-bold text-xl uppercase tracking-wider mb-2 group-hover:text-[#FF5500] transition-colors">Google Play</h3>
            <p className="text-gray-500 text-xs text-center uppercase tracking-widest">{t("app_links.android_terminal")}</p>
          </motion.a>

        </div>
      </div>
    </section>
  );
}

