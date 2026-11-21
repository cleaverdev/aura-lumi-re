import { motion } from 'framer-motion';
import { Heart, Moon, Sun, Star } from 'lucide-react';

const features = [
  {
    icon: Moon,
    title: 'Magnétisme',
    description: 'Rééquilibrage des énergies pour soulager les maux physiques et émotionnels.',
  },
  {
    icon: Sun,
    title: 'Soins Énergétiques',
    description: 'Harmonisation des chakras et libération des blocages énergétiques.',
  },
  {
    icon: Heart,
    title: 'Bien-être Global',
    description: 'Accompagnement personnalisé vers un équilibre corps-âme-esprit.',
  },
  {
    icon: Star,
    title: 'Guidance Spirituelle',
    description: 'Connexion à votre intuition et à votre chemin de vie.',
  },
];

const AboutSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-cosmic-radial overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-b from-cosmic-gold/20 via-cosmic-purple/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-b from-cosmic-indigo/20 via-cosmic-purple/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground">
            Mon <span className="bg-gradient-to-r from-cosmic-gold via-cosmic-light-blue to-cosmic-gold bg-clip-text text-transparent">Approche</span>
          </h2>
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg px-2"
          >
            Je vous accompagne avec bienveillance dans votre parcours de guérison et de transformation personnelle.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-cosmic-purple/30 to-cosmic-indigo/20 backdrop-blur-sm border border-cosmic-gold/30 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-cosmic-gold/70 transition-all duration-300 hover:shadow-lg hover:shadow-cosmic-gold/20"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cosmic-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl md:rounded-2xl" />
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cosmic-gold/40 to-cosmic-light-blue/30 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:from-cosmic-gold/60 group-hover:to-cosmic-light-blue/50 transition-all shadow-lg shadow-cosmic-gold/30">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-cosmic-gold group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-lg md:text-xl mb-2 md:mb-3 text-foreground group-hover:text-cosmic-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
