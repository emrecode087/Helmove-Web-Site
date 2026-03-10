import { ReactNode } from "react";
import { motion } from "motion/react";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-b border-white/10 pb-8"
        >
          {subtitle && (
            <h2 className="text-[#FF5500] text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              {subtitle}
            </h2>
          )}
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-wide uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            {title}
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-p:text-gray-400 prose-headings:text-white prose-a:text-[#FF5500] max-w-none"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}