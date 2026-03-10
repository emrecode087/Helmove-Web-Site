import { motion } from "motion/react";
import { Navigation2, Map, Crosshair } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from 'react-i18next';

export function DynamicRouting() {
  const { t } = useTranslation();
  return (
    <section className="relative py-32 bg-[#030303] border-t border-white/5 overflow-hidden">
      
      {/* Background Dark Map Image */}
      <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1602731465517-820d34d5a9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbWFwJTIwZGFyayUyMG5hdmlnYXRpb258ZW58MXx8fHwxNzcyOTIzMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Dark Map Navigation"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-full mb-6"
          >
            <Map size={16} className="text-[#FF5500]" />
            <span className="text-[#FF5500] text-xs font-bold tracking-[0.2em] uppercase">{t('dynamic_routing.badge')}</span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white tracking-wide mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {t('dynamic_routing.title')}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto"
          >
            {t('dynamic_routing.description')}
          </motion.p>
        </div>

        {/* Animated Route Visualization */}
        <div className="relative w-full max-w-5xl mx-auto h-[400px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center">
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

          <div className="relative w-full h-full px-12 md:px-24 py-16">
            
            {/* The SVG Route Path */}
            <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <motion.path
                d="M 50 150 C 200 150, 300 50, 500 100 C 700 150, 800 50, 950 50"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="4"
                strokeDasharray="8 8"
              />
              <motion.path
                d="M 50 150 C 200 150, 300 50, 500 100 C 700 150, 800 50, 950 50"
                fill="none"
                stroke="#FF5500"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ filter: 'drop-shadow(0 0 8px rgba(255,85,0,0.8))' }}
              />
            </svg>

            {/* Start Node */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute left-[5%] md:left-[10%] bottom-[20%] w-6 h-6 bg-black border-[3px] border-white rounded-full flex items-center justify-center z-10"
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </motion.div>
            
            {/* Waypoint Node */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.5 }}
              viewport={{ once: true }}
              className="absolute left-[50%] top-[45%] md:top-[40%] w-8 h-8 bg-black border-2 border-[#FF5500]/50 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,85,0,0.3)]"
            >
              <Crosshair size={14} className="text-[#FF5500]" />
              <div className="absolute top-10 w-max bg-black/80 px-2 py-1 rounded text-[10px] text-[#FF5500] font-bold tracking-widest border border-[#FF5500]/30 backdrop-blur-md uppercase">Checkpoint Alpha</div>
            </motion.div>

            {/* End Node (Moving Leader) */}
            <motion.div 
              initial={{ x: "-450px", y: "50px", opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute right-[5%] md:right-[5%] top-[15%] md:top-[20%] z-20 flex flex-col items-center"
            >
              <div className="w-10 h-10 bg-[#FF5500] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,85,0,1)] relative">
                <div className="absolute inset-0 bg-[#FF5500] rounded-full animate-ping opacity-40"></div>
                <Navigation2 size={20} className="text-black rotate-45" strokeWidth={3} />
              </div>
              <div className="mt-3 bg-[#FF5500]/10 border border-[#FF5500]/50 px-3 py-1.5 rounded-lg backdrop-blur-md flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse"></div>
                <span className="text-[#FF5500] text-xs font-bold tracking-widest uppercase">Lead Captain</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}