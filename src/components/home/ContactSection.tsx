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

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    agreePrivacy: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <Section id="contacto" spacing="comfortable" className="relative bg-[#0E1520] py-24 overflow-hidden">
      {/* Top and Bottom Smooth Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#1B2940] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#090C11] to-transparent pointer-events-none z-10" />
      <Container maxWidth="2xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11161D] border border-[#BFC5CC]/30 text-[#BFC5CC]">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">CONTACTO & CONSULTORÍA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E6E8EB] font-display tracking-tight uppercase">
            AGENDA UNA <span className="silver-gradient-text">REUNIÓN</span>
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">
            Cuéntanos sobre tu proyecto o desafío. Responderemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 bg-[#11161D] border-[#1A1F27] shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1A1F27] border border-[#BFC5CC]/50 text-[#BFC5CC] flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#E6E8EB] font-display uppercase tracking-wider">
                    ¡Mensaje Enviado con Éxito!
                  </h3>
                  <p className="text-[#6B7280] text-sm max-w-md mx-auto leading-relaxed">
                    Gracias por comunicarte con ANSUZ, <strong className="text-[#E6E8EB]">{formData.name}</strong>. Un equipo de arquitectura revisará tu mensaje y responderá a <strong className="text-[#BFC5CC]">{formData.email}</strong> a la brevedad.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          subject: '',
                          message: '',
                          agreePrivacy: true,
                        });
                      }}
                      className="border-[#BFC5CC] text-[#BFC5CC] hover:bg-[#BFC5CC] hover:text-[#0F172A]"
                    >
                      ENVIAR OTRO MENSAJE
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Campo de texto: Nombre */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-medium text-[#6B7280]">
                      Campo de texto
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Escribe tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Correo electrónico */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-medium text-[#6B7280]">
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="ejemplo@ansuz.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Asunto */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-medium text-[#6B7280]">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="¿En qué podemos ayudarte?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-medium text-[#6B7280]">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Cuéntanos sobre tu proyecto o desafío"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-[#0B0F14] border-[#1A1F27] text-[#E6E8EB] focus:border-[#BFC5CC] focus:ring-1 focus:ring-[#BFC5CC] transition-all"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="agreePrivacy"
                      name="agreePrivacy"
                      checked={formData.agreePrivacy}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-[#1A1F27] bg-[#0B0F14] text-[#BFC5CC] focus:ring-[#BFC5CC]"
                    />
                    <label htmlFor="agreePrivacy" className="text-xs text-[#6B7280]">
                      Acepto la <a href="#privacy" className="text-[#BFC5CC] underline hover:text-[#FFFFFF]">política de privacidad</a>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading}
                    className="w-full justify-center uppercase text-xs tracking-wider font-semibold py-3"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    ENVIAR MENSAJE
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-8 bg-[#11161D] border-[#1A1F27]">
              <h3 className="text-lg font-bold text-[#E6E8EB] uppercase tracking-wider mb-6 font-display">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#1A1F27] text-[#BFC5CC] border border-[#BFC5CC]/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280] uppercase tracking-wider font-mono">CORREO ELECTRÓNICO</div>
                    <a href="mailto:hola@ansuz.com" className="text-sm font-semibold text-[#E6E8EB] hover:text-[#BFC5CC] transition-colors">
                      hola@ansuz.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#1A1F27] text-[#BFC5CC] border border-[#BFC5CC]/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280] uppercase tracking-wider font-mono">TELÉFONO / WHATSAPP</div>
                    <a href="tel:+573001234567" className="text-sm font-semibold text-[#E6E8EB] hover:text-[#BFC5CC] transition-colors">
                      +57 300 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#1A1F27] text-[#BFC5CC] border border-[#BFC5CC]/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280] uppercase tracking-wider font-mono">UBICACIÓN HEADQUARTERS</div>
                    <div className="text-sm font-semibold text-[#E6E8EB]">
                      Bogotá, Colombia
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-[#0B0F14] border-[#1A1F27] relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#BFC5CC] animate-ping" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E6E8EB]">Respuesta Garantizada</span>
              </div>
              <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                Evaluamos cada solicitud con un equipo de ingeniería para ofrecer respuestas técnicas precisas y accionables.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};
