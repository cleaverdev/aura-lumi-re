import StarField from '@/components/StarField';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, Clock, Euro, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CAL_LINK = 'https://cal.com/laurie-baillard/seance-energetique';

const RendezVous = () => {
  return (
    <div className="relative min-h-screen bg-cosmic-gradient overflow-x-hidden">
      <StarField />
      <Navbar />
      
      <main className="relative z-10 pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-cosmic-gold mx-auto mb-4" />
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-cosmic-gold">
              Prendre Rendez-vous
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg px-2">
              Réservez votre séance énergétique directement en ligne. 
              Choisissez le créneau qui vous convient le mieux.
            </p>
          </div>

          {/* Info Card */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-5 md:p-6">
              <h2 className="font-heading text-lg md:text-xl text-cosmic-gold mb-4">
                Séance Énergétique
              </h2>
              <div className="grid sm:grid-cols-3 gap-3 text-sm md:text-base text-muted-foreground mb-4">
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
                  <span className="text-foreground">Ascain, 64310 ou à distance</span>
                </div>
              </div>
              <p className="text-muted-foreground text-xs md:text-sm">
                Les séances à distance sont tout aussi efficaces que les séances en présentiel.
              </p>
            </div>
          </div>

          {/* Cal.com Embed */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl md:rounded-3xl p-4 md:p-6 overflow-hidden">
              {/* Mobile: Button to open Cal.com */}
              <div className="md:hidden text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  Cliquez sur le bouton ci-dessous pour accéder au calendrier de réservation.
                </p>
                <Button
                  asChild
                  className="bg-cosmic-gold hover:bg-cosmic-gold-light text-cosmic-deep font-medium w-full py-6 glow-gold"
                >
                  <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                    Réserver ma séance
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Desktop: Cal.com iframe */}
              <div className="hidden md:block">
                <iframe
                  src={`${CAL_LINK}?embed=true&theme=dark`}
                  width="100%"
                  height="700"
                  frameBorder="0"
                  className="rounded-xl"
                  title="Calendrier de réservation"
                  allow="payment"
                />
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 md:mt-12 text-center">
            <p className="text-muted-foreground text-xs md:text-sm max-w-lg mx-auto">
              En réservant, vous acceptez d'être recontacté(e) pour confirmer votre rendez-vous. 
              Pour toute question, n'hésitez pas à me contacter directement.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RendezVous;
