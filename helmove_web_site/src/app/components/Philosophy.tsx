import { motion } from "motion/react";
import { Link2, Radio, Zap } from "lucide-react";
import { useTranslation } from 'react-i18next';

export function Philosophy() {
  const { t, i18n } = useTranslation();
  return (
    <section id="philosophy" className="relative py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Carbon fiber subtle background overlay */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1763805508094-901f2a79ff77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2FyYm9uJTIwZmliZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MjkyMTAzM3ww&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-[#FF5500] text-sm font-bold tracking-[0.2em] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              {t('philosophy_badge').toLocaleUpperCase(i18n.language)}
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wide mb-8" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              {t('philosophy_title_1')} <br className="hidden md:block"/> {t('philosophy_title_2')}
            </h3>
            <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: 96 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-[#FF5500] mb-8 shadow-[0_0_15px_rgba(255,85,0,0.6)]"
            ></motion.div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              {t('philosophy_description')}
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div whileHover={{ y: -5 }} className="flex items-start gap-4 group cursor-pointer">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-[#FF5500] group-hover:bg-[#FF5500]/10 group-hover:border-[#FF5500]/50 transition-colors">
                  <Link2 size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 tracking-wider uppercase group-hover:text-[#FF5500] transition-colors">{t('philosophy_cross_brand_title')}</h4>
                  <p className="text-gray-500 text-sm">{t('philosophy_cross_brand_desc')}</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="flex items-start gap-4 group cursor-pointer">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-[#FF5500] group-hover:bg-[#FF5500]/10 group-hover:border-[#FF5500]/50 transition-colors">
                  <Radio size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 tracking-wider uppercase group-hover:text-[#FF5500] transition-colors">{t('philosophy_zero_drops_title')}</h4>
                  <p className="text-gray-500 text-sm">{t('philosophy_zero_drops_desc')}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            {/* Abstract Tech Visual */}
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,85,0,0.15)_0%,transparent_70%)]"
              ></motion.div>
              
              {/* Outer Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-[#FF5500]/20 rounded-full border-dashed"
              ></motion.div>
              
              {/* Inner Ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 border-2 border-white/5 rounded-full"
              ></motion.div>

              {/* Core Waves */}
              <motion.div 
                animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-1/4 border border-[#FF5500]/50 rounded-full z-0"
              ></motion.div>

              {/* Center Core */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative w-32 h-32 bg-[#050505] rounded-full border border-[#FF5500] shadow-[0_0_40px_rgba(255,85,0,0.4)] flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-crosshair">
                  <div className="absolute inset-2 border border-[#FF5500]/50 rounded-full animate-ping opacity-20"></div>
                  <Zap className="w-12 h-12 text-[#FF5500]" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Connected Nodes */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-0 w-12 h-12 bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,85,0,0.1)]"
              >
                <Radio className="w-5 h-5 text-[#FF5500]" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-0 w-12 h-12 bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,85,0,0.1)]"
              >
                <Link2 className="w-5 h-5 text-[#FF5500]" />
              </motion.div>
              <div className="absolute top-10 right-20 w-8 h-8 bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}