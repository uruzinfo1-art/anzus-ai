import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Printer, ArrowUpRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Card } from '@/components/ui/Card';

const projects = [
  {
    id: 'amara',
    icon: MessageCircle,
    name: 'AMARA',
    tag: 'Agente de IA · Finanzas por WhatsApp',
    description:
      'AMARA es un asistente financiero que vive dentro de WhatsApp. Le escribes "gasté 30.000 en mercado" o "me pagaron 500.000" y ella lo registra y categoriza sola, sin que tengas que abrir ninguna app. Pensado para llevar las finanzas de tu casa o tu negocio sin fricción.',
    url: 'https://amara-weld.vercel.app/',
  },
  {
    id: '3dsnaptech',
    icon: Printer,
    name: '3DSnapTech',
    tag: 'Sitio web · Taller de impresión 3D',
    description:
      'El sitio web de 3DSnapTech, un taller de impresión 3D: catálogo de productos, prototipado rápido y contenido educativo sobre impresión 3D para sus clientes. Un ejemplo de cómo llevamos un negocio físico a tener presencia digital completa.',
    url: 'https://3dsnaptech.com/',
  },
];

export const DevelopmentsSection: React.FC = () => {
  return (
    <Section id="proyectos" spacing="comfortable" className="relative bg-[#FFFFFF] py-24">
      <Container maxWidth="2xl">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8FA] border border-[#35507A]/30 text-[#35507A]">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">NUESTROS DESARROLLOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight uppercase">
            LO QUE YA <span className="silver-gradient-text">CONSTRUIMOS</span>
          </h2>
          <p className="text-[#5B6472] text-base sm:text-lg leading-relaxed">
            No solo hablamos de inteligencia artificial: la construimos y la usamos todos los días.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block"
            >
              <Card variant="interactive" className="p-7 h-full flex flex-col bg-[#FFFFFF] border-[#E2E5EA]">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F8FA] border border-[#E2E5EA] text-[#35507A] flex items-center justify-center group-hover:bg-[#35507A] group-hover:text-white transition-all duration-300">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#5B6472] group-hover:text-[#35507A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] font-display mb-1">
                  {project.name}
                </h3>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#35507A] mb-3">
                  {project.tag}
                </p>
                <p className="text-sm text-[#5B6472] leading-relaxed flex-1">
                  {project.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#35507A] mt-5">
                  Ver proyecto <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Card>
            </motion.a>
          ))}
        </div>
      </Container>
    </Section>
  );
};
