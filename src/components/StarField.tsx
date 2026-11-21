import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  brightness: number;
}

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 120; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.5 + 0.5,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
          brightness: Math.random() * 0.5 + 0.5,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep cosmic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-deep via-cosmic-navy to-cosmic-deep" />
      
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            backgroundColor: `hsl(${220 + Math.random() * 60} ${30 + Math.random() * 40}% ${85 + Math.random() * 15}%)`,
          }}
          animate={{
            opacity: [0.2 * star.brightness, star.brightness, 0.2 * star.brightness],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Large atmospheric glowing orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cosmic-purple/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cosmic-indigo/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cosmic-glow/5 rounded-full blur-3xl" />
      
      {/* Subtle nebula-like wisps */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[200px] bg-gradient-to-b from-cosmic-purple/15 to-transparent blur-2xl rotate-12" />
      <div className="absolute bottom-1/3 left-1/6 w-[250px] h-[150px] bg-gradient-to-t from-cosmic-indigo/10 to-transparent blur-2xl -rotate-12" />
    </div>
  );
};

export default StarField;