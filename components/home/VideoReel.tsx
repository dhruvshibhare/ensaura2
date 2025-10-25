'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import OverlapSection from '@/components/ui/overlap-section';
import { Play, Pause } from 'lucide-react';

const reels = [
  {
    id: 1,
    videoUrl: 'https://res.cloudinary.com/dwoifav4o/video/upload/v1761407508/ensaurav2_gfgj1r.mp4',
  },
  {
    id: 2,
    videoUrl: 'https://res.cloudinary.com/dwoifav4o/video/upload/v1761407502/ensaurav1_ab62ec.mp4',
  },
  {
    id: 3,
    videoUrl: 'https://res.cloudinary.com/dwoifav4o/video/upload/v1761407463/ensaurav_lrxnqr.mp4',
  }
];

export default function VideoReel() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [videoPlayStates, setVideoPlayStates] = useState<boolean[]>(reels.map(() => true));
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setVideoPlayStates(prev => {
          const newStates = [...prev];
          newStates[index] = true;
          return newStates;
        });
      } else {
        video.pause();
        setVideoPlayStates(prev => {
          const newStates = [...prev];
          newStates[index] = false;
          return newStates;
        });
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          const index = videoRefs.current.findIndex(ref => ref === video);
          if (entry.isIntersecting) {
            video.play();
            if (index !== -1) {
              setVideoPlayStates(prev => {
                const newStates = [...prev];
                newStates[index] = true;
                return newStates;
              });
            }
          } else {
            video.pause();
            if (index !== -1) {
              setVideoPlayStates(prev => {
                const newStates = [...prev];
                newStates[index] = false;
                return newStates;
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <OverlapSection className="bg-gray-50 rounded-t-3xl shadow-xl">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Mobile: horizontal scroll reel */}
        <div className="md:hidden -mx-4 px-4 overflow-x-auto">
          <div className="flex gap-4 snap-x snap-mandatory">
            {reels.map((reel, index) => (
              <motion.div
                key={reel.id}
                className="relative min-w-[220px] aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer snap-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={reel.videoUrl} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex justify-end">
                    <button
                      onClick={() => togglePlay(index)}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
                    >
                      {videoPlayStates[index] ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={reel.videoUrl} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex justify-end">
                    <button
                      onClick={() => togglePlay(index)}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
                    >
                      {videoPlayStates[index] ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </OverlapSection>
  );
}