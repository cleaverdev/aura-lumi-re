import { forwardRef } from 'react';
import { Sparkles, Mail, Phone, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="relative bg-cosmic-navy/50 border-t border-border/30 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cosmic-gold flex-shrink-0" />
              <span className="font-heading text-xl font-medium text-cosmic-gold">
                L'Aura By Laurie
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Soins énergétiques et magnétisme pour retrouver harmonie et équilibre. 
              Laissez-vous guider vers votre lumière intérieure.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg text-cosmic-gold">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-cosmic-gold transition-colors w-fit">
                Accueil
              </Link>
              <Link to="/prestations" className="text-sm text-muted-foreground hover:text-cosmic-gold transition-colors w-fit">
                Prestations
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-cosmic-gold transition-colors w-fit">
                Contact
              </Link>
              <Link to="/rendez-vous" className="text-sm text-muted-foreground hover:text-cosmic-gold transition-colors w-fit">
                Prendre RDV
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg text-cosmic-gold">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:aurabylaurie@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cosmic-gold transition-colors w-fit"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">aurabylaurie@gmail.com</span>
              </a>
              <a
                href="tel:+33761576249"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cosmic-gold transition-colors w-fit"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                07 61 57 62 49
              </a>
              <a
                href="https://instagram.com/l.aurabylaurie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cosmic-gold transition-colors w-fit"
              >
                <Instagram className="w-4 h-4 flex-shrink-0" />
                @l.aurabylaurie
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} L'Aura By Laurie. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <a
              href="https://visionare.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-cosmic-gold transition-colors w-fit"
            >
              Made By Visionare
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
