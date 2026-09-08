import React from 'react';
import { Container } from './Container';
import { Linkedin, Instagram, Youtube, Github, Mail, Phone, MapPin } from 'lucide-react';
import { AnsuzLogo } from '@/components/ui/AnsuzLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E2E5EA] bg-[#EEF1F5] text-[#0F172A] pt-16 pb-12 relative overflow-hidden">
      <Container maxWidth="2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-16 border-b border-[#E2E5EA]">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="inline-block hover:opacity-90 transition-opacity">
              <AnsuzLogo variant="wordmark" theme="metallic" />
            </a>
            <p className="text-[11px] font-mono tracking-wider text-[#5B6472] uppercase leading-relaxed max-w-xs">
              CONOCIMIENTO QUE CONECTA.<br />TECNOLOGÍA QUE TRANSFORMA.
            </p>

            {/* Social Icons Circle */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E2E5EA] bg-white flex items-center justify-center text-[#5B6472] hover:text-[#35507A] hover:border-[#35507A]/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E2E5EA] bg-white flex items-center justify-center text-[#5B6472] hover:text-[#35507A] hover:border-[#35507A]/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E2E5EA] bg-white flex items-center justify-center text-[#5B6472] hover:text-[#35507A] hover:border-[#35507A]/50 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E2E5EA] bg-white flex items-center justify-center text-[#5B6472] hover:text-[#35507A] hover:border-[#35507A]/50 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Líneas de Solución */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider font-mono">
              SOLUCIONES
            </h4>
            <ul className="space-y-2 text-xs text-[#5B6472]">
              <li>
                <a
                  href="/personas"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/personas');
                    window.dispatchEvent(new Event('popstate'));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#35507A] transition-colors"
                >
                  👤 Personas
                </a>
              </li>
              <li>
                <a
                  href="/negocios"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/negocios');
                    window.dispatchEvent(new Event('popstate'));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#35507A] transition-colors"
                >
                  🚀 Negocios
                </a>
              </li>
              <li>
                <a
                  href="/empresas"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/empresas');
                    window.dispatchEvent(new Event('popstate'));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#35507A] transition-colors"
                >
                  🏢 Empresas
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Desarrollos */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider font-mono">
              DESARROLLOS
            </h4>
            <ul className="space-y-2 text-xs text-[#5B6472]">
              <li><a href="https://amara-weld.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#35507A] transition-colors font-semibold text-[#0F172A]">AMARA</a></li>
              <li><a href="https://3dsnaptech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#35507A] transition-colors font-semibold text-[#0F172A]">3DSnapTech</a></li>
            </ul>
          </div>

          {/* Column 3: Nosotros */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider font-mono">
              NOSOTROS
            </h4>
            <ul className="space-y-2 text-xs text-[#5B6472]">
              <li><a href="#nosotros" className="hover:text-[#35507A] transition-colors">Quiénes somos</a></li>
              <li><a href="#nosotros" className="hover:text-[#35507A] transition-colors">Equipo</a></li>
              <li><a href="#nosotros" className="hover:text-[#35507A] transition-colors">Nuestra filosofía</a></li>
              <li><a href="#contacto" className="hover:text-[#35507A] transition-colors">Trabaja con nosotros</a></li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider font-mono">
              CONTACTO
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5B6472]">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#35507A]" />
                <a href="mailto:info@ansuzstudio.com" className="hover:text-[#0F172A]">info@ansuzstudio.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#35507A]" />
                <a href="tel:+573207283295" className="hover:text-[#0F172A]">+57 320 728 3295</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#35507A]" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5B6472]">
          <p>© 2024 ANSUZ. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#0F172A] transition-colors">
              Política de privacidad
            </a>
            <span className="text-[#5B6472]">|</span>
            <a href="#terms" className="hover:text-[#0F172A] transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
