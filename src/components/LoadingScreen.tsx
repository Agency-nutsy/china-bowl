import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import heroSlide4 from "@/assets/hero-slide-4.png";

const heroImages = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Preload all hero images
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Fast to 65% in ~800ms, then to 100% by 2s
    const t1 = setTimeout(() => setProgress(65), 100);
    const t2 = setTimeout(() => setProgress(85), 1000);
    const t3 = setTimeout(() => setProgress(100), 1700);
    const t4 = setTimeout(() => onComplete(), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050000] overflow-hidden"
        // Cinematic dark fade exit
        exit={{ opacity: 0, scale: 0.95, filter: "blur(12px)" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Deep Crimson Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(220, 38, 38, 0.08) 0%, rgba(0,0,0,0) 65%)",
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center">
          
          {/* Top Text - Imperial Gold */}
          <motion.h1
            className="font-display text-5xl sm:text-7xl font-black tracking-[0.2em] uppercase text-center ml-4"
            initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span 
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(to bottom, #FDE68A, #F59E0B)" }}
            >
              China
            </span>
          </motion.h1>

          {/* Slicing Progress Bar */}
          <div className="flex items-center gap-4 my-6 w-full max-w-sm px-6">
            <motion.span 
              className="text-[#F59E0B] text-xs font-mono w-8 text-right"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {progress}%
            </motion.span>
            
            <motion.div 
              className="flex-1 h-[2px] bg-[#3f0000] relative overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div
                className="absolute top-0 left-0 bottom-0"
                style={{
                  background: "linear-gradient(90deg, #F59E0B, #DC2626)",
                  boxShadow: "0 0 10px rgba(220, 38, 38, 0.8)"
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>
          </div>

          {/* Bottom Text - Dragon Red Glow */}
          <motion.h1
            className="font-display text-5xl sm:text-7xl font-black tracking-[0.2em] uppercase text-center ml-4"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span 
              className="text-[#DC2626]"
              style={{ textShadow: "0 0 25px rgba(220, 38, 38, 0.5)" }}
            >
              Bowl
            </span>
          </motion.h1>

          {/* Minimal Tagline */}
          <motion.p
            className="mt-12 text-[10px] sm:text-xs tracking-[0.4em] text-zinc-400 font-medium uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Premium Pan-Asian • Satya Niketan
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;