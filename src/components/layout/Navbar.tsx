import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';
import { AnsuzLogo } from '@/components/ui/AnsuzLogo';

export const navLinks = [
  { name: 'INICIO', href: '#inicio' },
  { name: 'SERVICIOS', href: '#servicios' },
  { name: 'DESARROLLOS', href: '#proyectos' },
  { name: 'NOSOTROS', href: '#nosotros' },
  { name: 'CONTACTO', href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/' + href);
      window.dispatchEvent(new Event('popstate'));
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div
          className="brushed-titanium-slab rounded-[18px] h-[74px] px-5 sm:px-7 transition-all duration-300"
        >
          <div className="h-full flex items-center justify-between">
            {/* Official ANSUZ Logo */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A] rounded-md transition-transform duration-300 hover:scale-[1.02]"
            >
              <AnsuzLogo variant="wordmark" theme="steel" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[12px] uppercase tracking-widest font-semibold text-[#0F172A] hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0F172A] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Button Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                onClick={() => {
                  const contactEl = document.querySelector('#contacto');
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[11px] tracking-wider"
              >
                AGENDAR UNA REUNIÓN
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#0F172A] hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A]"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Drawer Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="md:hidden border-t border-[#0F172A]/20 mt-4 pt-4 overflow-hidden"
              >
                <div className="flex flex-col gap-4">
                  <nav className="flex flex-col gap-3">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="px-4 py-2 text-xs uppercase tracking-widest font-semibold text-[#0F172A] hover:text-white hover:bg-black/10 rounded-lg transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>

                  <div className="pt-3 border-t border-[#0F172A]/20 flex flex-col gap-3">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full justify-center text-xs tracking-wider"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        const contactEl = document.querySelector('#contacto');
                        if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      AGENDAR UNA REUNIÓN
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
