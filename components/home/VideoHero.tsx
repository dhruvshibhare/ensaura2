'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function VideoHero() {


  return (
    <section className="sticky top-0 h-screen w-full overflow-hidden z-10">
      {/* Image Background */}
      <img
        src="https://res.cloudinary.com/dwoifav4o/image/upload/v1761424092/Editorial_Photographer_sp42gz.png"
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Illuminate Your
            <span className="block text-primary/70">Auro Drop</span>
          </motion.h1>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/collections/shirts">
              <Button 
                size="lg" 
                className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Shop Shirts
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
