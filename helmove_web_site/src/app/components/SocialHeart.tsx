import { motion } from "motion/react";
import { Camera, User, Trophy, Cpu } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export function SocialHeart() {
  const { t, i18n } = useTranslation();
  return (
    <section id="features" className="relative py-32 bg-[#080808] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[#FF5500] text-sm font-bold tracking-[0.2em] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            {t("social_heart_badge").toLocaleUpperCase(i18n.language)}
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-wide mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            {t("social_heart_title").toLocaleUpperCase(i18n.language)}
          </h3>
          <p className="text-gray-400 text-lg">
            {t("social_heart_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

          {/* Feature 1: Ride Logs & Stories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.6 }}
            className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FF5500]/40 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(255,85,0,0.1)]"
          >
            <div className="h-64 overflow-hidden relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1080&q=80"
                alt="Motorcycles journey"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent"></div>
              
              {/* Profile HUD Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-3 w-48 ml-auto translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="text-[#FF5500] text-[10px] font-bold tracking-widest mb-1">{t("shared_moments").toLocaleUpperCase(i18n.language)}</div>
                  <div className="text-white text-xl font-black" style={{ fontFamily: "'Orbitron', sans-serif" }}>1,420</div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2"
              >
                <Camera size={14} className="text-[#FF5500]" />
                <span className="text-xs text-white font-medium tracking-wider">{t("live_social_feed").toLocaleUpperCase(i18n.language)}</span>
              </motion.div>
            </div>

            <div className="p-8 relative">
              <div className="absolute top-0 right-8 w-12 h-1 bg-[#FF5500] shadow-[0_0_10px_rgba(255,85,0,0.8)] -translate-y-1/2 rounded-full"></div>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-[#FF5500] transition-colors" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                {t("ride_logs_title").toLocaleUpperCase(i18n.language)}
              </h4>
              <p className="text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {t("ride_logs_desc")}
              </p>
            </div>
          </motion.div>

          {/* Feature 2: Global Rider Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FF5500]/40 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(255,85,0,0.1)]"
          >
            <div className="h-64 overflow-hidden relative bg-[#050505] flex items-center justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1547623641-82fbb83476e9?auto=format&fit=crop&w=1080&q=80"
                alt="Global rider connections"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-3 w-48 ml-auto translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="text-[#FF5500] text-[10px] font-bold tracking-widest mb-1">{t("lifetime_miles").toLocaleUpperCase(i18n.language)}</div>
                  <div className="text-white text-xl font-black" style={{ fontFamily: "'Orbitron', sans-serif" }}>12,450</div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2 z-20"
              >
                <User size={14} className="text-[#FF5500]" />
                <span className="text-xs text-white font-medium tracking-wider">{t("connect_globally").toLocaleUpperCase(i18n.language)}</span>
              </motion.div>
            </div>

            <div className="p-8 relative">
              <div className="absolute top-0 right-8 w-12 h-1 bg-[#FF5500] shadow-[0_0_10px_rgba(255,85,0,0.8)] -translate-y-1/2 rounded-full"></div>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-[#FF5500] transition-colors" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                {t("rider_profiles_title").toLocaleUpperCase(i18n.language)}
              </h4>
              <p className="text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {t("rider_profiles_desc")}
              </p>
            </div>
          </motion.div>

          {/* Feature 3: Global Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FF5500]/40 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(255,85,0,0.1)]"
          >
            <div className="h-64 overflow-hidden relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542362567-b0440bf39da5?auto=format&fit=crop&w=1080&q=80"
                alt="Motorcycle racing leaderboard"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-3 w-48 ml-auto translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="text-[#FF5500] text-[10px] font-bold tracking-widest mb-1">{t("weekly_ranking").toLocaleUpperCase(i18n.language)}</div>
                  <div className="text-white text-xl font-black" style={{ fontFamily: "'Orbitron', sans-serif" }}>#42</div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2"
              >
                <Trophy size={14} className="text-[#FF5500]" />
                <span className="text-xs text-white font-medium tracking-wider">{t("community_challenges").toLocaleUpperCase(i18n.language)}</span>
              </motion.div>
            </div>

            <div className="p-8 relative">
              <div className="absolute top-0 right-8 w-12 h-1 bg-[#FF5500] shadow-[0_0_10px_rgba(255,85,0,0.8)] -translate-y-1/2 rounded-full"></div>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-[#FF5500] transition-colors" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                {t("global_challenges_title").toLocaleUpperCase(i18n.language)}
              </h4>
              <p className="text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {t("global_challenges_desc")}
              </p>
            </div>
          </motion.div>

          {/* Feature 4: Hardware Sync */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FF5500]/40 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(255,85,0,0.1)]"
          >
            <div className="h-64 overflow-hidden relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1080&q=80"
                alt="Helmic hardware syncing"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-3 w-48 ml-auto translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="text-[#FF5500] text-[10px] font-bold tracking-widest mb-1">{t("satellites_active").toLocaleUpperCase(i18n.language)}</div>
                  <div className="text-white text-xl font-black" style={{ fontFamily: "'Orbitron', sans-serif" }}>08</div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2"
              >
                <Cpu size={14} className="text-[#FF5500]" />
                <span className="text-xs text-white font-medium tracking-wider">{t("hardware_sync").toLocaleUpperCase(i18n.language)}</span>
              </motion.div>
            </div>

            <div className="p-8 relative">
              <div className="absolute top-0 right-8 w-12 h-1 bg-[#FF5500] shadow-[0_0_10px_rgba(255,85,0,0.8)] -translate-y-1/2 rounded-full"></div>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-[#FF5500] transition-colors" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                {t("hardware_sync_title").toLocaleUpperCase(i18n.language)}
              </h4>
              <p className="text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {t("hardware_sync_desc")}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
