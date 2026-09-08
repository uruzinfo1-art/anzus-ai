import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

const CONTACT_EMAIL = 'info@ansuzstudio.com';
const CONTACT_PHONE_DISPLAY = '+57 320 728 3295';
const CONTACT_PHONE_TEL = '+573207283295';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Contacto desde la web — ${formData.name}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Section id="contacto" spacing="comfortable" className="relative bg-[#F7F8FA] py-24 overflow-hidden">
      {/* Top and Bottom Smooth Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FFFFFF] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F7F8FA] to-transparent pointer-events-none z-10" />
      <Container maxWidth="2xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#35507A]/30 text-[#35507A]">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">CONTACTO & CONSULTORÍA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight uppercase">
            AGENDA UNA <span className="silver-gradient-text">REUNIÓN</span>
          </h2>
          <p className="text-[#5B6472] text-base sm:text-lg leading-relaxed">
            Cuéntanos sobre tu proyecto o desafío. Responderemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 bg-[#FFFFFF] border-[#E2E5EA]">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-10 gap-3">
                  <CheckCircle2 className="w-10 h-10 text-[#35507A]" />
                  <p className="text-[#0F172A] font-semibold">Se abrió tu cliente de correo</p>
                  <p className="text-sm text-[#5B6472] max-w-sm">
                    Confirma el envío desde ahí. Si no se abrió automáticamente, escríbenos directamente a{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#35507A] hover:underline">{CONTACT_EMAIL}</a>.
                  </p>
                  <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)} className="mt-2">
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Tu correo"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Input
                    name="subject"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <Textarea
                    name="message"
                    placeholder="Cuéntanos sobre tu proyecto o desafío"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Button type="submit" variant="primary" rightIcon={<Send className="w-4 h-4" />} className="w-full sm:w-auto">
                    Enviar mensaje
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-8 bg-[#FFFFFF] border-[#E2E5EA]">
              <h3 className="text-lg font-bold text-[#0F172A] uppercase tracking-wider mb-6 font-display">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#E2E5EA] text-[#35507A] border border-[#35507A]/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5B6472] uppercase tracking-wider font-mono">CORREO ELECTRÓNICO</div>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-semibold text-[#0F172A] hover:text-[#35507A] transition-colors">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#E2E5EA] text-[#35507A] border border-[#35507A]/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5B6472] uppercase tracking-wider font-mono">TELÉFONO / WHATSAPP</div>
                    <a href={`tel:${CONTACT_PHONE_TEL}`} className="text-sm font-semibold text-[#0F172A] hover:text-[#35507A] transition-colors">
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#E2E5EA] text-[#35507A] border border-[#35507A]/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5B6472] uppercase tracking-wider font-mono">UBICACIÓN HEADQUARTERS</div>
                    <div className="text-sm font-semibold text-[#0F172A]">
                      Bogotá, Colombia
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-[#F7F8FA] border-[#E2E5EA] relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#35507A] animate-ping" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0F172A]">Respuesta Garantizada</span>
              </div>
              <p className="text-xs text-[#5B6472] mt-2 leading-relaxed">
                Evaluamos cada solicitud con un equipo de ingeniería para ofrecer respuestas técnicas precisas y accionables.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};
