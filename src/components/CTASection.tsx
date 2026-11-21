import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Multiple dynamic background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-b from-cosmic-gold/40 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-b from-cosmic-indigo/40 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-gradient-to-b from-cosmic-light-blue/30 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-br from-cosmic-purple/40 via-cosmic-indigo/30 to-cosmic-purple/20 backdrop-blur-md border border-cosmic-gold/50 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl shadow-cosmic-gold/20"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Moon className="w-10 h-10 md:w-12 md:h-12 text-cosmic-gold mx-auto mb-4 md:mb-6 drop-shadow-lg" />
          </motion.div>
          
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-4 text-foreground">
            Prêt(e) à Retrouver Votre <span className="bg-gradient-to-r from-cosmic-gold to-cosmic-light-blue bg-clip-text text-transparent">Équilibre</span> ?
          </h2>
          
          <p className="text-muted-foreground mb-6 md:mb-8 text-base md:text-lg px-2">
            Réservez dès maintenant votre séance et commencez votre voyage vers le bien-être et la transformation intérieure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cosmic-gold to-cosmic-light-blue hover:from-cosmic-gold hover:to-cosmic-light-blue text-cosmic-deep font-medium px-6 md:px-10 py-5 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-2xl transition-all"
            >
              <Link to="/rendez-vous">
                Réserver Ma Séance
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cosmic-gold/60 text-cosmic-gold hover:bg-cosmic-gold/10 px-6 md:px-10 py-5 md:py-6 text-base md:text-lg rounded-full"
            >
              <Link to="/contact">
                Me Contacter
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
