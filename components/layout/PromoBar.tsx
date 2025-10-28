'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export default function PromoBar() {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-amber-900 to-gray-900 text-white py-1.5 sm:py-2.5 text-sm font-medium text-center overflow-hidden"
      style={{ zIndex: 9999 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-amber-950 to-gray-800 animate-gradient-xy opacity-75" />
      
      {/* Content - Desktop */}
      <div className="hidden sm:flex items-center justify-center gap-2 px-4 relative z-10">
        <Instagram className="h-4 w-4 animate-pulse flex-shrink-0 text-amber-200" />
        <span className="text-sm">Launch Offer: Follow <a href="https://www.instagram.com/ensauraa?igsh=dTMyOWZ4aWQ2NTFz" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:no-underline transition-all text-amber-200">@ensauraa</a> & DM us &quot;hi&quot; on Instagram to unlock your <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">15% OFF</span> code!</span>
      </div>

      {/* Content - Mobile */}
      <div className="sm:hidden flex items-center justify-center px-3 relative z-10">
        <span className="text-[9px] leading-tight text-center">Follow <a href="https://www.instagram.com/ensauraa?igsh=dTMyOWZ4aWQ2NTFz" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:no-underline text-amber-200">@ensauraa</a> & DM &quot;hi&quot; to unlock your <span className="bg-amber-100 text-amber-900 px-1 py-0.5 rounded font-bold">15% OFF</span> code!</span>
      </div>

      {/* Animated sparkle effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-200 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: '50%',
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 4s ease infinite;
        }
      `}</style>
    </motion.div>
  );
}

