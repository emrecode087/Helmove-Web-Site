import { motion, Variants } from "motion/react";
import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router";

export function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for "easeOut" 
      } 
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1762618621440-7082e14bc8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZnV0dXJpc3RpYyUyMG1vdG9yY3ljbGUlMjBuaWdodHxlbnwxfHx8fDE3NzI5MjEwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Dark Futuristic Motorcycle"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,85,0,0.08)_0%,transparent_70%)] z-10"></div>
        
        {/* Floating grid/particles */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF5500_1px,transparent_1px),linear-gradient(to_bottom,#FF5500_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)] opacity-5 z-10"></div>
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-block border border-[#FF5500]/30 bg-[#FF5500]/5 px-4 py-1 rounded-full mb-6 backdrop-blur-sm shadow-[0_0_20px_rgba(255,85,0,0.2)]">
            <span className="text-[#FF5500] text-xs font-bold tracking-[0.2em] uppercase">{t('hero_badge')}</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-wider mb-8" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            {t('hero_title').split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br className="hidden md:block" />}
              </span>
            ))}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            {t('hero_subtitle')}
          </motion.p>

          <motion.div variants={itemVariants}>
              {/* Uygulamayı al butonu kaldırıldı */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}