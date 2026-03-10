import { motion } from "motion/react";
import {
  Mic,
  Headphones,
  Smartphone,
  Cpu,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TechSpecs() {
  const { t, i18n } = useTranslation();
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5500]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF5500]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Phone UI Mockup */}
          <motion.div
            initial={{ opacity: 0, rotateY: -15, x: -50 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full max-w-md mx-auto perspective-[1000px]"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[40px] border-4 border-white/10 p-2 shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,85,0,0.15)] overflow-hidden group"
            >
              {/* Screen Content */}
              <div className="absolute inset-2 bg-[#0a0a0a] rounded-[32px] overflow-hidden flex flex-col">
                {/* Header UI */}
                <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-black/50 backdrop-blur-md z-10">
                  <span
                    className="text-white text-xs font-black tracking-widest group-hover:text-[#FF5500] transition-colors"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                    }}
                  >
                    HELMOVE
                  </span>
                  <div className="flex gap-2 text-[#FF5500]">
                    <Mic size={14} />
                    <Headphones size={14} />
                  </div>
                </div>

                {/* Simulated App Body */}
                <div className="flex-1 relative">
                  {/* Map Graphic Layer */}
                  <div className="absolute inset-0 bg-[#080808]">
                    <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-[#FF5500]/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute top-1/3 left-1/4 w-24 h-24 border border-[#FF5500]/40 rounded-full m-4 animate-[spin_5s_linear_infinite_reverse]"></div>

                    {/* Route Line */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 20 80 Q 40 40, 80 20"
                        fill="none"
                        stroke="#FF5500"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                      />
                      <motion.circle
                        r="2"
                        fill="#FF5500"
                        animate={{
                          offsetDistance: ["0%", "100%"],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={
                          {
                            offsetPath:
                              'path("M 20 80 Q 40 40, 80 20")',
                          } as any
                        }
                      />
                    </svg>

                    {/* Nodes */}
                    <div className="absolute top-[80%] left-[20%] w-3 h-3 bg-white rounded-full border-[3px] border-black"></div>
                    <div className="absolute top-[20%] left-[80%] w-4 h-4 bg-[#FF5500] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,85,0,0.8)] animate-pulse">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    </div>
                  </div>

                  {/* Rider Cards overlaid */}
                  <div className="absolute bottom-6 left-4 right-4 space-y-3">
                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center gap-3 cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1765298409798-7a2b6e48e78a?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=100&h=100&fm=jpg"
                          alt="Rider"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-xs font-bold">
                          JAX T.
                        </p>
                        <p className="text-[#FF5500] text-[10px]">
                          {t('tech_specs.rider_captain_status')}
                        </p>
                      </div>
                      <Mic
                        size={14}
                        className="text-white/50"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="bg-black/80 backdrop-blur-md border border-[#FF5500]/40 shadow-[0_0_20px_rgba(255,85,0,0.15)] rounded-xl p-3 flex items-center gap-3 cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-[#FF5500]/20 rounded-full flex items-center justify-center text-[#FF5500] font-bold text-xs border border-[#FF5500]/50">
                        {t('tech_specs.rider_you').toLocaleUpperCase(i18n.language)}
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-xs font-bold">
                          {t('tech_specs.rider_me').toLocaleUpperCase(i18n.language)}
                        </p>
                        <p className="text-[#FF5500] text-[10px] animate-pulse">
                          {t('tech_specs.rider_broadcasting')}
                        </p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#FF5500] shadow-[0_0_8px_rgba(255,85,0,1)]"></div>
                    </motion.div>
                  </div>
                </div>

                {/* Simulated home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1"
          >
            <motion.h2
              variants={fadeUp}
              className="text-[#FF5500] text-sm font-bold tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t('tech_specs.badge').toLocaleUpperCase(i18n.language)}
            </motion.h2>
            <motion.h3
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-white tracking-wide mb-8"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {t('tech_specs.title_1').toLocaleUpperCase(i18n.language)} <br className="hidden md:block" />{" "}
              {t('tech_specs.title_2').toLocaleUpperCase(i18n.language)}.
            </motion.h3>

            <div className="space-y-10">
              {/* Feature: Audio */}
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#FF5500]/10 rounded-lg border border-[#FF5500]/30">
                    <Headphones
                      className="text-[#FF5500]"
                      size={20}
                    />
                  </div>
                  <h4
                    className="text-xl font-bold text-white uppercase tracking-wider"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                    }}
                  >
                    {t('tech_specs.feature_tandem_title').toLocaleUpperCase(i18n.language)}
                  </h4>
                </div>
                <p className="text-gray-400 pl-12 leading-relaxed">
                  {t('tech_specs.feature_tandem_desc')}
                </p>
              </motion.div>

              {/* Feature: Group Rides */}
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#FF5500]/10 rounded-lg border border-[#FF5500]/30">
                    <Users
                      className="text-[#FF5500]"
                      size={20}
                    />
                  </div>
                  <h4
                    className="text-xl font-bold text-white uppercase tracking-wider"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                    }}
                  >
                    {t('tech_specs.feature_group_title').toLocaleUpperCase(i18n.language)}
                  </h4>
                </div>
                <p className="text-gray-400 pl-12 leading-relaxed">
                  {t('tech_specs.feature_group_desc')}
                </p>
              </motion.div>

              {/* Feature: Live Social Feed */}
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#FF5500]/10 rounded-lg border border-[#FF5500]/30">
                    <Smartphone
                      className="text-[#FF5500]"
                      size={20}
                    />
                  </div>
                  <h4
                    className="text-xl font-bold text-white uppercase tracking-wider"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                    }}
                  >
                    {t('tech_specs.feature_social_title').toLocaleUpperCase(i18n.language)}
                  </h4>
                </div>
                <p className="text-gray-400 pl-12 leading-relaxed">
                  {t('tech_specs.feature_social_desc')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}