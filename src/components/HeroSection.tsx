import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 pb-8 overflow-hidden">
      {/* Dynamic background glows */}
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-b from-cosmic-gold/40 via-cosmic-purple/20 to-transparent blur-3xl rounded-full" 
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-b from-cosmic-indigo/40 via-cosmic-purple/20 to-transparent blur-3xl rounded-full" 
      />
      <motion.div 
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-b from-cosmic-light-blue/30 via-cosmic-purple/10 to-transparent blur-3xl rounded-full" 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Moon element with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center mb-8 md:mb-12"
          >
            <div className="relative">
              {/* Glow layers */}
              <div className="absolute inset-0 w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gradient-to-b from-cosmic-gold/50 to-transparent rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-0 w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gradient-to-b from-cosmic-light-blue/40 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
              
              {/* Moon sphere */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-b from-cosmic-light-blue via-cosmic-gold to-cosmic-purple shadow-2xl">
                <div className="absolute inset-2 md:inset-4 rounded-full bg-gradient-to-br from-white/20 via-cosmic-purple/20 to-cosmic-purple/40" />
                <div className="absolute top-4 md:top-8 left-6 md:left-12 w-3 md:w-6 h-3 md:h-6 rounded-full bg-cosmic-purple/30 blur-sm" />
                <div className="absolute top-8 md:top-16 right-5 md:right-10 w-4 md:w-8 h-4 md:h-8 rounded-full bg-cosmic-purple/25 blur-sm" />
                <div className="absolute bottom-6 md:bottom-12 left-4 md:left-8 w-3 md:w-5 h-3 md:h-5 rounded-full bg-cosmic-purple/30 blur-sm" />
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-4 md:mb-6 tracking-wide"
          >
            <span className="bg-gradient-to-r from-cosmic-light-blue via-cosmic-gold to-cosmic-purple bg-clip-text text-transparent">L'Aura By Laurie</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-cosmic-gold font-heading italic tracking-wide mb-4 md:mb-6"
          >
            Reconnexion à Soi
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2"
          >
            Découvrez votre chemin de guérison à travers les soins énergétiques. 
            Guidance, clarté et sérénité pour éclairer vos choix de vie.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cosmic-gold to-cosmic-light-blue hover:from-cosmic-gold hover:to-cosmic-light-blue text-cosmic-deep font-medium px-6 md:px-10 py-5 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/rendez-vous">
                Prendre Rendez-vous
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cosmic-gold text-cosmic-gold hover:bg-cosmic-gold/10 px-6 md:px-10 py-5 md:py-6 text-base md:text-lg rounded-full"
            >
              <Link to="/prestations">
                Découvrir les prestations
              </Link>
            </Button>
          </motion.div>

      {/* Animated scroll indicator with glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-cosmic-gold/70 hover:text-cosmic-gold transition-colors cursor-pointer drop-shadow-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-40 bg-gradient-to-t from-cosmic-deep via-cosmic-deep/80 to-transparent" />
    </section>
  );
};

export default HeroSection;
