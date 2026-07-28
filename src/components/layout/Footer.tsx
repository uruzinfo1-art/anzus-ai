import React from 'react';
import { Container } from './Container';
import { Linkedin, Instagram, Youtube, Github, Mail, Phone, MapPin } from 'lucide-react';
import { AnsuzLogo } from '@/components/ui/AnsuzLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.06] bg-[#090C11] text-[#E6E8EB] pt-16 pb-12 relative overflow-hidden">
      <Container maxWidth="2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-16 border-b border-[#1A1F27]">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="inline-block hover:opacity-90 transition-opacity">
              <AnsuzLogo variant="wordmark" theme="metallic" />
            </a>
            <p className="text-[11px] font-mono tracking-wider text-[#6B7280] uppercase leading-relaxed max-w-xs">
              CONOCIMIENTO QUE CONECTA.<br />TECNOLOGÍA QUE TRANSFORMA.
            </p>

            {/* Social Icons Circle */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#1A1F27] bg-[#11161D] flex items-center justify-center text-[#6B7280] hover:text-[#BFC5CC] hover:border-[#BFC5CC]/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#1A1F27] bg-[#11161D] flex items-center justify-center text-[#6B7280] hover:text-[#BFC5CC] hover:border-[#BFC5CC]/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#1A1F27] bg-[#11161D] flex items-center justify-center text-[#6B7280] hover:text-[#BFC5CC] hover:border-[#BFC5CC]/50 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#1A1F27] bg-[#11161D] flex items-center justify-center text-[#6B7280] hover:text-[#BFC5CC] hover:border-[#BFC5CC]/50 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Líneas de Solución */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider font-mono">
              SOLUCIONES
            </h4>
            <ul className="space-y-2 text-xs text-[#6B7280]">
              <li>
                <a
                  href="/personas"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/personas');
                    window.dispatchEvent(new Event('popstate'));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#BFC5CC] transition-colors"
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
                  className="hover:text-[#BFC5CC] transition-colors"
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
                  className="hover:text-[#BFC5CC] transition-colors"
                >
                  🏢 Empresas
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Desarrollos */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider font-mono">
              DESARROLLOS
            </h4>
            <ul className="space-y-2 text-xs text-[#6B7280]">
              <li><a href="#proyectos" className="hover:text-[#BFC5CC] transition-colors font-semibold text-[#E6E8EB]">AMARA</a></li>
              <li><a href="#proyectos" className="hover:text-[#BFC5CC] transition-colors">Próximamente</a></li>
              <li><a href="#proyectos" className="hover:text-[#BFC5CC] transition-colors">Soluciones Empresariales</a></li>
            </ul>
          </div>

          {/* Column 3: Nosotros */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider font-mono">
              NOSOTROS
            </h4>
            <ul className="space-y-2 text-xs text-[#6B7280]">
              <li><a href="#nosotros" className="hover:text-[#BFC5CC] transition-colors">Quiénes somos</a></li>
              <li><a href="#nosotros" className="hover:text-[#BFC5CC] transition-colors">Equipo</a></li>
              <li><a href="#nosotros" className="hover:text-[#BFC5CC] transition-colors">Nuestra filosofía</a></li>
              <li><a href="#contacto" className="hover:text-[#BFC5CC] transition-colors">Trabaja con nosotros</a></li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider font-mono">
              CONTACTO
            </h4>
            <ul className="space-y-2.5 text-xs text-[#6B7280]">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#BFC5CC]" />
                <a href="mailto:hola@ansuz.com" className="hover:text-[#E6E8EB]">hola@ansuz.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#BFC5CC]" />
                <a href="tel:+573001234567" className="hover:text-[#E6E8EB]">+57 300 123 4567</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#BFC5CC]" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8E98A5]">
          <p>© 2024 ANSUZ. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#E6E8EB] transition-colors">
              Política de privacidad
            </a>
            <span className="text-[#1A1F27]">|</span>
            <a href="#terms" className="hover:text-[#E6E8EB] transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
