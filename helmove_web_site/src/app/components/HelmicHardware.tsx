import { motion } from "motion/react";
import { Cpu, ShoppingCart } from "lucide-react";
import { useTranslation } from 'react-i18next';

export function HelmicHardware() {
  const { t, i18n } = useTranslation();
  return (
    <section id="helmic-hardware" className="relative py-24 bg-[#050505] border-t border-white/5 z-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full bg-[#0a0a0a] border border-[#FF5500]/30 rounded-3xl p-6 md:p-10 lg:p-12 overflow-hidden group hover:border-[#FF5500]/60 transition-colors duration-500 shadow-[0_0_40px_rgba(255,85,0,0.1)]"
        >
          {/* Background Ambient Glow & Frosted Glass */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF5500]/15 blur-[100px] group-hover:bg-[#FF5500]/25 transition-all duration-700 pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF5500]/10 blur-[100px] group-hover:bg-[#FF5500]/20 transition-all duration-700 pointer-events-none"></div>

          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[2px] pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
            {/* LEFT SIDE: Hardware Icon Box & The New Edge-Style Button */}
            <div className="shrink-0 sticky top-10 flex flex-col items-center gap-4 w-full md:w-56">
              {/* Icon Box */}
              <div className="p-6 md:p-8 bg-black/60 backdrop-blur-xl border border-[#FF5500]/50 rounded-2xl shadow-[0_0_30px_rgba(255,85,0,0.3)] flex justify-center w-full">
                <Cpu
                  className="text-[#FF5500] w-16 h-16 md:w-20 md:h-20"
                  strokeWidth={1.5}
                />
              </div>

              {/* Ghost Button Tasarımı */}
              <button className="w-full flex items-center justify-center gap-2 bg-[#FF5500]/10 border border-[#FF5500]/50 text-[#FF5500] px-5 py-3 text-sm font-black tracking-widest hover:bg-[#FF5500] hover:text-[#050505] hover:shadow-[0_0_30px_rgba(255,85,0,0.5)] transition-all duration-300">
                <ShoppingCart
                  className="w-4 h-4"
                  strokeWidth={2.5}
                />
                {t('order_helmic').toLocaleUpperCase(i18n.language)}
              </button>
            </div>

            {/* RIGHT SIDE: Content */}
            <div className="flex-1 text-center md:text-left w-full">
              <h4
                className="text-3xl md:text-5xl font-black text-white tracking-wider mb-4"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                {t('hardware_title').toLocaleUpperCase(i18n.language)}
              </h4>
              <p className="text-[#FF5500] text-lg md:text-xl font-bold mb-4 tracking-[0.2em]">
                {t('hardware_subtitle').toLocaleUpperCase(i18n.language)}
              </p>
              <div className="h-1 w-16 bg-[#FF5500] mx-auto md:mx-0 mb-6 shadow-[0_0_10px_rgba(255,85,0,0.8)] rounded-full"></div>

              {/* Existing Paragraph */}
              <p
                className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-none mx-auto md:mx-0 mb-10 text-justify"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t('hardware_intro')}
              </p>

              {/* The Audio Liberator Explained */}
              <div
                className="space-y-8 text-left max-w-none mx-auto md:mx-0"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {/* Text Sections */}
                <div className="space-y-6">
                  <div>
                    <h5 className="text-white font-bold text-lg mb-2 tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF5500]"></span>
                      {t('bt_limit_title').toLocaleUpperCase(i18n.language)}
                    </h5>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base text-justify">
                      {t('bt_limit_desc')}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-white font-bold text-lg mb-2 tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF5500]"></span>
                      {t('bt_bypass_title').toLocaleUpperCase(i18n.language)}
                    </h5>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base text-justify">
                      {t('bt_bypass_desc')}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-white font-bold text-lg mb-2 tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF5500]"></span>
                      {t('dedicated_link_title').toLocaleUpperCase(i18n.language)}
                    </h5>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base text-justify">
                      {t('dedicated_link_desc')}
                    </p>
                  </div>
                </div>

                {/* 3 Pillars Grid - BURASI SOLA YASLANDI */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/10">
                  <div className="bg-black/40 border border-white/5 p-5 rounded-xl hover:border-[#FF5500]/40 transition-all duration-300">
                    <h6 className="text-[#FF5500] font-bold mb-2 uppercase text-sm tracking-wide">
                      {t('studio_music_title').toLocaleUpperCase(i18n.language)}
                    </h6>
                    <p className="text-gray-400 text-sm text-left">
                      {t('studio_music_desc')}
                    </p>
                  </div>

                  <div className="bg-black/40 border border-white/5 p-5 rounded-xl hover:border-[#FF5500]/40 transition-all duration-300">
                    <h6 className="text-[#FF5500] font-bold mb-2 uppercase text-sm tracking-wide">
                      {t('voice_isolation_title').toLocaleUpperCase(i18n.language)}
                    </h6>
                    <p className="text-gray-400 text-sm text-left">
                      {t('voice_isolation_desc')}
                    </p>
                  </div>

                  <div className="bg-black/40 border border-white/5 p-5 rounded-xl hover:border-[#FF5500]/40 transition-all duration-300">
                    <h6 className="text-[#FF5500] font-bold mb-2 uppercase text-sm tracking-wide">
                      {t('pro_discipline_title').toLocaleUpperCase(i18n.language)}
                    </h6>
                    <p className="text-gray-400 text-sm text-left">
                      {t('pro_discipline_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}