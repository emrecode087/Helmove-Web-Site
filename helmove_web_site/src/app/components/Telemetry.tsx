import { motion } from "motion/react";
import { Gauge, Activity, Mountain, Compass } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Telemetry() {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF5500]/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <Compass size={16} className="text-[#FF5500]" />
              <span className="text-[#FF5500] text-xs font-bold tracking-[0.2em] uppercase">{t('telemetry.badge').toLocaleUpperCase(i18n.language)}</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wide mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              {t('telemetry.title_1').toLocaleUpperCase(i18n.language)} <br /> {t('telemetry.title_2').toLocaleUpperCase(i18n.language)}
            </h3>
            
            <div className="h-1 w-24 bg-[#FF5500] mb-8 shadow-[0_0_15px_rgba(255,85,0,0.6)]"></div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
              {t('telemetry.description')}
            </p>
          </motion.div>

          {/* Right Visual: Telemetry Overlay Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              {/* Background Image */}
              <div className="aspect-[4/3] w-full relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1722356748457-b7c4aeb22a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwbGVhbmluZyUyMGNvcm5lciUyMGRhcmslMjBhY3Rpb258ZW58MXx8fHwxNzcyOTIzNTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Motorcycle cornering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.7)_100%)]"></div>
              </div>

              {/* HUD Overlays */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none">
                
                {/* Top Row: Altimeter & Speed */}
                <div className="flex justify-between items-start">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-black/60 backdrop-blur-md border border-white/20 rounded-xl p-3 flex flex-col gap-1 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  >
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <Mountain size={14} className="text-[#FF5500]" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">{t('telemetry.stat_altitude').toLocaleUpperCase(i18n.language)}</span>
                    </div>
                    <div className="text-white text-2xl font-black tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                      1,842<span className="text-[#FF5500] text-sm ml-1">M</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-black/60 backdrop-blur-md border border-white/20 rounded-xl p-3 flex flex-col gap-1 text-right shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  >
                    <div className="flex items-center justify-end gap-2 text-gray-400 mb-1">
                      <span className="text-[10px] uppercase tracking-widest font-bold">{t('telemetry.stat_max_speed').toLocaleUpperCase(i18n.language)}</span>
                      <Activity size={14} className="text-[#FF5500]" />
                    </div>
                    <div className="text-white text-2xl font-black tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                      184<span className="text-[#FF5500] text-sm ml-1">KM/H</span>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Row: Lean Angle & G-Force */}
                <div className="flex justify-between items-end">
                  {/* Lean Angle Graphic */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-black/60 backdrop-blur-md border border-[#FF5500]/40 rounded-full p-4 flex items-center justify-center relative shadow-[0_0_20px_rgba(255,85,0,0.2)] w-24 h-24"
                  >
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                      <motion.circle 
                        cx="50" cy="50" r="46" fill="none" stroke="#FF5500" strokeWidth="4" 
                        strokeDasharray="289" strokeDashoffset="289"
                        animate={{ strokeDashoffset: 180 }}
                        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="text-center">
                      <Gauge size={16} className="text-[#FF5500] mx-auto mb-1" />
                      <div className="text-white text-xl font-black" style={{ fontFamily: "'Orbitron', sans-serif" }}>42°</div>
                      <div className="text-[#FF5500] text-[8px] font-bold tracking-widest uppercase">{t('telemetry.stat_lean').toLocaleUpperCase(i18n.language)}</div>
                    </div>
                  </motion.div>

                  {/* G-Force bar */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="bg-black/60 backdrop-blur-md border border-white/20 rounded-xl p-3 w-32 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  >
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{t('telemetry.stat_gforce').toLocaleUpperCase(i18n.language)}</span>
                      <span className="text-white font-black text-sm" style={{ fontFamily: "'Orbitron', sans-serif" }}>1.2G</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "70%" }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                        className="h-full bg-[#FF5500] shadow-[0_0_8px_rgba(255,85,0,1)]"
                      ></motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Central Target Reticle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
                  <div className="w-32 h-32 border border-[#FF5500] rounded-full flex items-center justify-center">
                    <div className="w-1 h-4 bg-[#FF5500] absolute top-0 -translate-y-1/2"></div>
                    <div className="w-1 h-4 bg-[#FF5500] absolute bottom-0 translate-y-1/2"></div>
                    <div className="w-4 h-1 bg-[#FF5500] absolute left-0 -translate-x-1/2"></div>
                    <div className="w-4 h-1 bg-[#FF5500] absolute right-0 translate-x-1/2"></div>
                    <div className="w-2 h-2 bg-[#FF5500] rounded-full"></div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}