import { motion } from 'framer-motion';
import { useState } from 'react';
import StarField from '@/components/StarField';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Instagram, Send, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });

    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

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
              Contact
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg px-2">
              Une question ? N'hésitez pas à me contacter. 
              Je vous répondrai avec plaisir.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="font-heading text-xl md:text-2xl text-cosmic-gold mb-4 md:mb-6">
                  Restons en Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                  Je suis disponible pour répondre à toutes vos questions concernant mes soins. 
                  Vous pouvez me contacter par email, téléphone ou via les réseaux sociaux.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <a
                  href="mailto:aurabylaurie@gmail.com"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card/40 border border-border/50 rounded-xl hover:border-cosmic-gold/50 transition-colors group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cosmic-indigo/30 rounded-xl flex items-center justify-center group-hover:bg-cosmic-gold/20 transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-cosmic-gold" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground text-sm md:text-base truncate">aurabylaurie@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+33761576249"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card/40 border border-border/50 rounded-xl hover:border-cosmic-gold/50 transition-colors group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cosmic-indigo/30 rounded-xl flex items-center justify-center group-hover:bg-cosmic-gold/20 transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-cosmic-gold" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Téléphone / WhatsApp</p>
                    <p className="text-foreground text-sm md:text-base">07 61 57 62 49</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/l.aurabylaurie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card/40 border border-border/50 rounded-xl hover:border-cosmic-gold/50 transition-colors group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cosmic-indigo/30 rounded-xl flex items-center justify-center group-hover:bg-cosmic-gold/20 transition-colors flex-shrink-0">
                    <Instagram className="w-4 h-4 md:w-5 md:h-5 text-cosmic-gold" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Instagram</p>
                    <p className="text-foreground text-sm md:text-base">@l.aurabylaurie</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl md:rounded-3xl p-6 md:p-8 space-y-4 md:space-y-6"
              >
                <h2 className="font-heading text-xl md:text-2xl text-cosmic-gold mb-2">
                  Envoyez-moi un message
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground text-sm">Nom</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-cosmic-navy/50 border-border/50 focus:border-cosmic-gold h-10 md:h-11"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground text-sm">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-cosmic-navy/50 border-border/50 focus:border-cosmic-gold h-10 md:h-11"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground text-sm">Téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-cosmic-navy/50 border-border/50 focus:border-cosmic-gold h-10 md:h-11"
                      placeholder="06 00 00 00 00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground text-sm">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-cosmic-navy/50 border-border/50 focus:border-cosmic-gold h-10 md:h-11"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground text-sm">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-cosmic-navy/50 border-border/50 focus:border-cosmic-gold resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cosmic-gold hover:bg-cosmic-gold-light text-cosmic-deep font-medium py-5 md:py-6 glow-gold"
                >
                  {isSubmitting ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
