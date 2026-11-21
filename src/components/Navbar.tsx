import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/prestations', label: 'Prestations' },
  { path: '/contact', label: 'Contact' },
  { path: '/rendez-vous', label: 'Prendre RDV' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmic-deep/95 backdrop-blur-md border-b border-cosmic-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <Moon className="w-5 h-5 md:w-6 md:h-6 text-cosmic-gold group-hover:animate-pulse flex-shrink-0" />
            <span className="font-heading text-lg sm:text-xl md:text-2xl font-medium text-foreground tracking-wide truncate">
              L'Aura By Laurie
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-body text-sm tracking-wide transition-colors hover:text-cosmic-gold ${
                  location.pathname === item.path
                    ? 'text-cosmic-gold'
                    : 'text-foreground/80'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cosmic-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-cosmic-navy/98 backdrop-blur-md border-b border-cosmic-purple/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-body text-base py-3 px-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'text-cosmic-gold bg-cosmic-gold/10'
                      : 'text-foreground/80 hover:text-cosmic-gold hover:bg-cosmic-gold/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
