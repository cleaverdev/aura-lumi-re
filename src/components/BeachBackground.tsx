import { motion } from 'framer-motion';

const BeachBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-50 bg-gradient-to-b from-cosmic-deep via-cosmic-navy to-cosmic-deep">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-navy/90 via-cosmic-deep/80 to-cosmic-deep" />
      
      {/* Aurora-like glow */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-2/5 bg-gradient-to-b from-cosmic-purple/10 via-cosmic-gold/5 to-transparent pointer-events-none"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Enhanced twinkling stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 70 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() > 0.7 ? '2px' : '1px',
              height: Math.random() > 0.7 ? '2px' : '1px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 55}%`,
              backgroundColor: Math.random() > 0.5 ? '#fff' : '#93c5fd',
            }}
            animate={{ 
              opacity: [0.1, 0.8, 0.1],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Enhanced Moon with complex animation */}
      <motion.div
        animate={{ 
          y: [0, -40, 0],
          rotateZ: [-2, 3, -2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 md:top-12 left-1/2 -translate-x-1/2 w-28 md:w-64 h-28 md:h-64 rounded-full pointer-events-none"
      >
        {/* Outer atmospheric glow */}
        <motion.div 
          className="absolute -inset-6 rounded-full bg-gradient-to-b from-cosmic-gold/50 via-cosmic-light-blue/30 to-transparent blur-3xl"
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Moon surface */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-cosmic-light-blue/60 to-cosmic-gold/80 shadow-2xl" />
        {/* Moon texture craters */}
        <div className="absolute inset-4 md:inset-8 rounded-full bg-gradient-to-br from-white/25 via-cosmic-purple/15 to-transparent" />
      </motion.div>

      {/* Floating mystical particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cosmic-gold/80 to-cosmic-light-blue/80 blur-sm"
            animate={{
              x: [0, Math.sin(i) * 100, 0],
              y: [0, Math.cos(i) * 100, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 45}%`,
            }}
          />
        ))}
      </div>

      {/* Sand/Beach with animated shimmer */}
      <div className="absolute bottom-0 w-full h-1/4 md:h-1/3 bg-gradient-to-b from-amber-900/60 via-amber-800/50 to-amber-900/70 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/15 to-transparent"
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Water with dynamic shimmer */}
      <div className="absolute bottom-1/4 md:bottom-1/3 w-full h-1/2 md:h-1/3 bg-gradient-to-b from-cosmic-deep/30 via-cosmic-navy/50 to-cosmic-navy/70 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cosmic-light-blue/15 via-cosmic-gold/10 to-cosmic-light-blue/15"
          animate={{ x: [-800, 800], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Waves container */}
      <div className="absolute bottom-1/4 md:bottom-1/3 w-full h-40 md:h-64 overflow-hidden">
        {/* Wave 1 - Back wave */}
        <motion.svg
          className="absolute w-full h-full bottom-0 left-0"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          animate={{ x: [-1200, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="url(#waveGradient1)"
            opacity="0.25"
          />
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Wave 2 - Middle wave */}
        <motion.svg
          className="absolute w-full h-full bottom-6 md:bottom-12 left-0"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M0,55 Q300,35 600,55 T1200,55 L1200,120 L0,120 Z"
            fill="url(#waveGradient2)"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Wave 3 - Front wave (faster) */}
        <motion.svg
          className="absolute w-full h-full bottom-3 md:bottom-8 left-0"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          animate={{ x: [-1200, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M0,60 Q300,35 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient3)"
            opacity="0.7"
          />
          <defs>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Wave 4 - Extra layer */}
        <motion.svg
          className="absolute w-full h-full bottom-0 left-0"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M0,70 Q300,50 600,70 T1200,70 L1200,120 L0,120 Z"
            fill="url(#waveGradient4)"
            opacity="0.8"
          />
          <defs>
            <linearGradient id="waveGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      {/* Animated light reflection on water */}
      <motion.div
        className="absolute bottom-1/4 md:bottom-1/3 left-1/2 -translate-x-1/2 w-48 md:w-96 h-24 md:h-40 bg-gradient-to-b from-cosmic-gold/50 via-cosmic-light-blue/40 to-transparent blur-3xl pointer-events-none"
        animate={{ 
          opacity: [0.15, 0.7, 0.15],
          scaleY: [0.8, 1.2, 0.8]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ambient glow effects for depth */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-b from-cosmic-gold/12 via-cosmic-purple/6 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cosmic-light-blue/12 via-cosmic-indigo/6 to-transparent rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default BeachBackground;
