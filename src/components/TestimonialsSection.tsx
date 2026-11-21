import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Laurie a su identifier mes blocages et m'aider à les libérer. Une séance transformatrice qui m'a permis de retrouver mon équilibre intérieur.",
    author: "Marie L.",
    rating: 5,
  },
  {
    text: "Une expérience apaisante et ressourçante. Je me suis sentie comprise et soutenue tout au long de la séance. Je recommande vivement.",
    author: "Sophie D.",
    rating: 5,
  },
  {
    text: "Après plusieurs séances, j'ai constaté une amélioration significative de mes douleurs chroniques. Merci Laurie pour ta bienveillance.",
    author: "Thomas R.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-cosmic-navy/30 overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-b from-cosmic-gold/20 via-cosmic-purple/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-b from-cosmic-indigo/20 via-cosmic-purple/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with enhanced glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cosmic-gold via-cosmic-light-blue to-cosmic-gold bg-clip-text text-transparent">
            Témoignages
          </h2>
          <motion.p 
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg"
          >
            Ce que disent ceux qui m'ont fait confiance
          </motion.p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-gradient-to-br from-cosmic-purple/30 to-cosmic-indigo/20 backdrop-blur-sm border border-cosmic-gold/30 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-cosmic-gold/70 transition-all duration-300 hover:shadow-lg hover:shadow-cosmic-gold/20"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cosmic-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl md:rounded-2xl" />
              
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-cosmic-gold/60 mb-3 md:mb-4 group-hover:text-cosmic-gold transition-colors" />
              
              <p className="text-foreground/90 leading-relaxed mb-4 md:mb-6 italic text-sm md:text-base">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-2 relative z-10">
                <span className="font-heading text-cosmic-gold text-sm md:text-base group-hover:text-cosmic-light-blue transition-colors">
                  {testimonial.author}
                </span>
                <div className="flex gap-0.5 md:gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-cosmic-gold text-cosmic-gold group-hover:fill-cosmic-light-blue group-hover:text-cosmic-light-blue transition-colors" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
