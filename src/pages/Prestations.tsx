import { motion } from 'framer-motion';
import StarField from '@/components/StarField';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Euro, Sparkles, Heart, User, CheckCircle, MapPin, Calendar, ArrowRight } from 'lucide-react';

const seanceIncludes = [
  {
    title: 'Nettoyage énergétique',
    description: 'Purification de votre champ énergétique pour éliminer les énergies stagnantes ou négatives accumulées',
  },
  {
    title: 'Harmonisation des chakras',
    description: 'Rééquilibrage de vos centres énergétiques pour retrouver vitalité et alignement',
  },
  {
    title: 'Soin des corps subtils',
    description: 'Travail sur vos différentes enveloppes énergétiques (corps éthérique, émotionnel, mental...)',
  },
  {
    title: 'Libération de l\'enfant intérieur',
    description: 'Accompagnement en douceur des blessures émotionnelles et des mémoires inconscientes',
  },
  {
    title: 'Soulagement des douleurs',
    description: 'Action ciblée sur les tensions physiques et les inconforts du corps',
  },
];

const benefits = [
  'Apaisement du stress et des angoisses',
  'Amélioration du sommeil et de la vitalité',
  'Soulagement des douleurs chroniques ou ponctuelles',
  'Clarté mentale et émotionnelle',
  'Sentiment de paix intérieure et de reconnexion à soi',
];

const Prestations = () => {
  return (
    <div className="relative min-h-screen bg-cosmic-gradient overflow-x-hidden">
      <StarField />
      <Navbar />
      
      <main className="relative z-10 pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-cosmic-gold mx-auto mb-4" />
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-cosmic-gold">
              Mes Prestations
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg px-2">
              Découvrez les soins que je propose pour vous accompagner 
              dans votre chemin vers l'équilibre et le bien-être.
            </p>
          </div>

          {/* Qui suis-je Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mb-8 md:mb-12"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cosmic-indigo/30 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 md:w-7 md:h-7 text-cosmic-gold" />
              </div>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground">
                Qui suis-je ?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p className="text-cosmic-gold font-medium text-base md:text-lg">
                  Laurie - Énergéticienne, Magnétiseuse & Praticienne Reiki
                </p>
                <p>
                  Passionnée par les soins énergétiques et le bien-être holistique, je vous accompagne sur le chemin de l'équilibre et de l'harmonisation intérieure. Formée aux techniques de magnétisme et certifiée Reiki, je mets mon savoir-faire au service de votre mieux-être physique, émotionnel et spirituel.
                </p>
                <p>
                  Mon approche bienveillante et intuitive me permet de vous guider vers un état de paix profonde et de reconnexion à vous-même. Que vous veniez pour soulager des maux physiques, libérer des blocages émotionnels ou simplement retrouver votre équilibre intérieur, je vous accueille dans un espace sécurisant et sans jugement.
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-cosmic-gold mt-0.5 flex-shrink-0" />
                  <span>
                    Basée à <span className="text-foreground font-medium">Ascain, 64310</span>, je reçois en cabinet ou propose des séances à distance pour m'adapter à vos besoins et contraintes.
                  </span>
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://i.ibb.co/3ymB9swH/laurie.jpg" 
                  alt="Laurie - Énergéticienne" 
                  className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Séance Énergétique */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 hover:border-cosmic-gold/40 transition-all group"
          >
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-cosmic-indigo/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-cosmic-indigo/30 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-cosmic-gold/20 transition-colors flex-shrink-0">
                    <Heart className="w-6 h-6 md:w-7 md:h-7 text-cosmic-gold" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground group-hover:text-cosmic-gold transition-colors">
                      Séance Énergétique
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mt-1">
                      Un soin complet pour votre bien-être global
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <div className="flex items-center gap-2 bg-cosmic-navy/50 px-3 py-2 rounded-lg">
                    <Clock className="w-4 h-4 text-cosmic-light-blue" />
                    <span className="text-sm text-foreground">1h15</span>
                  </div>
                  <div className="flex items-center gap-2 bg-cosmic-gold/20 px-3 py-2 rounded-lg">
                    <Euro className="w-4 h-4 text-cosmic-gold" />
                    <span className="text-sm text-cosmic-gold font-medium">60€</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Cette séance énergétique est un moment privilégié dédié à votre équilibre et à votre harmonisation intérieure. À travers différentes techniques douces et naturelles, je travaille en profondeur sur vos différents corps pour libérer les tensions et restaurer la circulation de votre énergie vitale.
              </p>

              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                {/* Ce que comprend la séance */}
                <div className="bg-cosmic-navy/50 rounded-xl md:rounded-2xl p-5 md:p-6">
                  <h3 className="font-heading text-base md:text-lg text-cosmic-gold mb-4 md:mb-5">
                    Ce que comprend la séance
                  </h3>
                  <div className="space-y-4">
                    {seanceIncludes.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cosmic-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-foreground text-sm md:text-base font-medium">{item.title}</p>
                          <p className="text-muted-foreground text-xs md:text-sm mt-0.5">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bénéfices */}
                <div className="bg-cosmic-navy/50 rounded-xl md:rounded-2xl p-5 md:p-6">
                  <h3 className="font-heading text-base md:text-lg text-cosmic-gold mb-4 md:mb-5">
                    Bénéfices de la séance
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/80 text-sm md:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-cosmic-gold mt-2 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modalités */}
              <div className="mt-6 md:mt-8 p-4 md:p-5 bg-cosmic-indigo/20 border border-cosmic-indigo/30 rounded-xl md:rounded-2xl">
                <h3 className="font-heading text-base md:text-lg text-cosmic-gold mb-3">
                  Modalités
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 text-sm md:text-base text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cosmic-light-blue flex-shrink-0" />
                    <span>Durée : <span className="text-foreground">1h15</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Euro className="w-4 h-4 text-cosmic-gold flex-shrink-0" />
                    <span>Tarif : <span className="text-foreground">60€</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cosmic-gold flex-shrink-0" />
                    <span>En présentiel à <span className="text-foreground">Ascain, 64310</span> ou à distance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cosmic-gold flex-shrink-0" />
                    <span>Sur rendez-vous uniquement</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <p className="text-muted-foreground text-xs md:text-sm italic max-w-lg">
                  Les séances à distance sont tout aussi efficaces que les séances en présentiel, l'énergie n'ayant pas de limite dans l'espace.
                </p>
                <Button
                  asChild
                  className="bg-cosmic-gold hover:bg-cosmic-gold-light text-cosmic-deep font-medium w-full sm:w-auto"
                >
                  <Link to="/rendez-vous">
                    Réserver une séance
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Nettoyage & Rééquilibrage de l'habitat */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 hover:border-cosmic-gold/40 transition-all group"
          >
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-cosmic-indigo/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-cosmic-indigo/30 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-cosmic-gold/20 transition-colors flex-shrink-0">
                    <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-cosmic-gold" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground group-hover:text-cosmic-gold transition-colors">
                      Nettoyage & Rééquilibrage de votre habitat
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mt-1">
                      Harmonisez l'énergie de votre maison ou appartement
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <div className="flex items-center gap-2 bg-cosmic-navy/50 px-3 py-2 rounded-lg">
                    <Euro className="w-4 h-4 text-cosmic-light-blue" />
                    <span className="text-sm text-foreground">Sur devis</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Votre habitat est un reflet de votre énergie intérieure et a un impact direct sur votre bien-être. Un espace encombré ou chargé énergétiquement peut affecter votre vitalité, votre sommeil et votre équilibre émotionnel. Je vous propose un nettoyage et un rééquilibrage complet de votre habitat pour restaurer une circulation fluide de l'énergie positive.
              </p>

              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                {/* Ce que comprend le service */}
                <div className="bg-cosmic-navy/50 rounded-xl md:rounded-2xl p-5 md:p-6">
                  <h3 className="font-heading text-base md:text-lg text-cosmic-gold mb-4 md:mb-5">
                    Ce que comprend le service
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cosmic-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-foreground text-sm md:text-base font-medium">Diagnostic énergétique</p>
                        <p className="text-muted-foreground text-xs md:text-sm mt-0.5">Évaluation complète de l'énergie et des blocages présents dans votre habitat</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cosmic-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-foreground text-sm md:text-base font-medium">Nettoyage énergétique profond</p>
                        <p className="text-muted-foreground text-xs md:text-sm mt-0.5">Purification complète de tous les espaces et élimination des énergies négatives</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cosmic-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-foreground text-sm md:text-base font-medium">Rééquilibrage des énergies</p>
                        <p className="text-muted-foreground text-xs md:text-sm mt-0.5">Harmonisation et rééquilibrage pour une meilleure circulation énergétique</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cosmic-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-foreground text-sm md:text-base font-medium">Protection et scellage</p>
                        <p className="text-muted-foreground text-xs md:text-sm mt-0.5">Mise en place de protections énergétiques pour maintenir l'harmonie</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bénéfices */}
                <div className="bg-cosmic-navy/50 rounded-xl md:rounded-2xl p-5 md:p-6">
                  <h3 className="font-heading text-base md:text-lg text-cosmic-gold mb-4 md:mb-5">
                    Bénéfices pour votre habitat
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-foreground/80 text-sm md:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-cosmic-gold mt-2 shrink-0" />
                      Atmosphère plus légère et apaisante
                    </li>
                    <li className="flex items-start gap-3 text-foreground/80 text-sm md:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-cosmic-gold mt-2 shrink-0" />
                      Amélioration du bien-être des occupants
                    </li>
                    <li className="flex items-start gap-3 text-foreground/80 text-sm md:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-cosmic-gold mt-2 shrink-0" />
                      Meilleure qualité de sommeil
                    </li>
                    <li className="flex items-start gap-3 text-foreground/80 text-sm md:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-cosmic-gold mt-2 shrink-0" />
                      Harmonie et équilibre dans les relations familiales
                    </li>
                    <li className="flex items-start gap-3 text-foreground/80 text-sm md:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-cosmic-gold mt-2 shrink-0" />
                      Circulation fluide de l'énergie positive
                    </li>
                  </ul>
                </div>
              </div>

              {/* Modalités */}
              <div className="mt-6 md:mt-8 p-4 md:p-5 bg-cosmic-indigo/20 border border-cosmic-indigo/30 rounded-xl md:rounded-2xl">
                <h3 className="font-heading text-base md:text-lg text-cosmic-gold mb-3">
                  Modalités
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 text-sm md:text-base text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cosmic-gold flex-shrink-0" />
                    <span>À votre domicile ou lieu d'habitation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Euro className="w-4 h-4 text-cosmic-gold flex-shrink-0" />
                    <span>Tarif : <span className="text-foreground">Sur devis selon l'habitat</span></span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <p className="text-muted-foreground text-xs md:text-sm italic max-w-lg">
                  Le tarif dépendra de la surface de l'habitat, du type d'espace et du niveau de nettoyage énergétique nécessaire. Contactez-moi pour discuter de votre projet.
                </p>
                <Button
                  asChild
                  className="bg-cosmic-gold hover:bg-cosmic-gold-light text-cosmic-deep font-medium w-full sm:w-auto"
                >
                  <Link to="/contact">
                    Me contacter
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Note */}
          <div className="mt-10 md:mt-16 text-center">
            <div className="inline-block bg-cosmic-indigo/20 border border-cosmic-indigo/30 rounded-xl md:rounded-2xl px-6 md:px-8 py-5 md:py-6 max-w-2xl">
              <p className="text-muted-foreground text-xs md:text-sm">
                <span className="text-cosmic-gold font-medium">Note importante :</span> Les soins énergétiques 
                ne remplacent pas un traitement médical. Ils agissent en complément de la médecine traditionnelle 
                pour favoriser votre bien-être global.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Prestations;
