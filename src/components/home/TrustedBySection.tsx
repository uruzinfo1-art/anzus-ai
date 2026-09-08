import React from 'react';
import { motion } from 'motion/react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

interface TechPlatform {
  name: string;
  icon: React.FC<{ className?: string }>;
}

const techPlatforms: TechPlatform[] = [
  {
    name: 'ChatGPT',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.52-2.82 6.07 6.07 0 0 0-4.83-2.31 6.06 6.06 0 0 0-5.61 3.8 6.06 6.06 0 0 0-4.32 3.12 6.05 6.05 0 0 0 .78 6.53 5.98 5.98 0 0 0 .52 4.91 6.05 6.05 0 0 0 6.52 2.82 6.07 6.07 0 0 0 4.83 2.31 6.06 6.06 0 0 0 5.61-3.8 6.06 6.06 0 0 0 4.32-3.12 6.05 6.05 0 0 0-.78-6.53zm-9.18 10.48a4.27 4.27 0 0 1-2.61-.91l.14-.08 4.35-2.51a.88.88 0 0 0 .44-.76v-5.18l1.55.9v4.29a4.25 4.25 0 0 1-3.87 4.25zm-8.38-4.2a4.26 4.26 0 0 1 .37-2.74l.14.08 4.35 2.51a.88.88 0 0 0 .88 0l4.49-2.59v1.79l-3.71 2.14a4.25 4.25 0 0 1-6.52-1.19zm-1.12-8.35a4.26 4.26 0 0 1 2.24-1.83l.01.16v5.02a.88.88 0 0 0 .44.76l4.49 2.59-1.55.9-3.71-2.14a4.25 4.25 0 0 1-1.92-5.46zm11.75-2.27-4.49 2.59-1.55-.9 3.71-2.14a4.25 4.25 0 0 1 6.52 1.19 4.26 4.26 0 0 1-.37 2.74l-.14-.08-4.35-2.51a.88.88 0 0 0-.88 0zm4.26 5.61-.14-.08-4.35-2.51a.88.88 0 0 0-.44.76v5.18l-1.55-.9V9.56a4.25 4.25 0 0 1 6.48-1.89 4.26 4.26 0 0 1 0 4.22zM10.9 9.17l-4.49 2.59v-1.79l3.71-2.14a4.25 4.25 0 0 1 6.52 1.19 4.26 4.26 0 0 1-.37 2.74l-.14-.08-4.35-2.51a.88.88 0 0 0-.88 0z" />
      </svg>
    ),
  },
  {
    name: 'Claude',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2l1.6 4.8L18 8l-4.4 1.2L12 14l-1.6-4.8L6 8l4.4-1.2L12 2zm6 11l.9 2.7L21 16l-2.1.9-.9 2.7-.9-2.7L15 16l2.1-.9.9-2.7zM6 14l.9 2.7L9 17.5l-2.1.9-.9 2.7-.9-2.7L3 17.5l2.1-.9L6 14z" />
      </svg>
    ),
  },
  {
    name: 'Google Gemini',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Microsoft Copilot',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5zm3 8a3 3 0 0 1-6 0V7a3 3 0 0 1 6 0v3zm-3 4a7 7 0 0 0-7 7h2a5 5 0 0 1 10 0h2a7 7 0 0 0-7-7z" />
      </svg>
    ),
  },
  {
    name: 'Perplexity',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2L4.5 6.5v11L12 22l7.5-4.5v-11L12 2zm5.5 14.8L12 19.8l-5.5-3V9.2L12 6.2l5.5 3v7.6zM12 8.5L9 10.2v3.6l3 1.7 3-1.7v-3.6L12 8.5z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp Business',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm3.8-5.7c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.3-.4c.1-.1.2-.3.2-.4s0-.3-.1-.4c-.1-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.1.5 1.8.6 2.3.5.7-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.1-1.3 0-.1-.2-.2-.4-.3z" />
      </svg>
    ),
  },
  {
    name: 'n8n',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V14.5A2.5 2.5 0 0 1 7.5 17H6a3 3 0 1 0 0 2h1.5A4.5 4.5 0 0 0 12 14.5V9.5a2.5 2.5 0 0 1 2.5-2.5H16a3 3 0 1 0 0-2h-1.5A4.5 4.5 0 0 0 12 9.5V6a4 4 0 0 0-4-4zm8 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
      </svg>
    ),
  },
  {
    name: 'Make',
    icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        {...props}
      >
        <circle cx="5" cy="8" r="2" fill="currentColor" />
        <circle cx="19" cy="8" r="2" fill="currentColor" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <circle cx="5" cy="18" r="2" fill="currentColor" />
        <circle cx="19" cy="18" r="2" fill="currentColor" />
        <path d="M6.5 9.1l4 2.1m0 1.6l-4 2.1m7-3.7l4-2.1m-4 3.7l4 2.1" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M6.7 13.6c-.7 0-1.3.1-1.9.4-.6.3-1 .7-1.2 1.2-.2.5-.3 1.1-.3 1.8 0 .8.2 1.4.6 1.9.4.5 1 .7 1.8.7.6 0 1.2-.1 1.7-.4.5-.3.9-.7 1.1-1.2v1.3h2.3v-6.3H8.5v.9zm.3 4.2c-.4 0-.8-.1-1-.3-.3-.2-.4-.5-.4-.9 0-.4.1-.7.4-.9.3-.2.6-.3 1-.3.5 0 .9.1 1.1.3.3.2.4.6.4 1 0 .4-.1.7-.4.9-.2.2-.6.2-1.1.2zm6.9-4.2h-2.3l1.8 6.3h2.4l1.3-4.5 1.3 4.5h2.4l1.8-6.3h-2.3l-1 4.2-1.3-4.2h-1.8l-1.3 4.2-1.2-4.2zM2.8 21.2c5.8 2 12.6 2 18.4-.2.3-.1.5.1.3.3-1.6 1.3-4.7 2.2-8.5 2.2-4.3 0-8.2-1.1-10.4-2.5-.2-.1 0-.3.2-.2z" />
      </svg>
    ),
  },
  {
    name: 'Microsoft Azure',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M5.4 20h11.2l-5.6-10.2L5.4 20zm.8-1.5l3.8-6.8 3.8 6.8H6.2zm7.4-14L7 16.5l2.4 3.5L20 4.5h-6.4z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const TrustedBySection: React.FC = () => {
  return (
    <Section
      spacing="compact"
      className="relative border-y border-[#0F172A]/[0.06] bg-[#FFFFFF] py-16 md:py-24 overflow-hidden"
    >
      {/* Top and Bottom Smooth Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F7F8FA] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F7F8FA] to-transparent pointer-events-none z-10" />

      {/* Background Radial Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(72,113,184,0.12)_0%,transparent_65%)] blur-2xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center"
        >
          {/* Header */}
          <div className="space-y-4 sm:space-y-5 max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight leading-tight">
              Impulsamos empresas con las tecnologías que están transformando el mundo.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5B6472] max-w-2xl mx-auto leading-relaxed font-normal">
              Construimos soluciones sobre plataformas líderes en inteligencia artificial, automatización y computación en la nube.
            </p>
          </div>

          {/* Premium Horizontal Logo Band Container */}
          <div className="relative">
            {/* Subtle backlight glow directly behind the band */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-transparent via-[#35507A]/15 to-transparent blur-xl pointer-events-none" />

            <div className="relative rounded-2xl md:rounded-3xl border border-[#0F172A]/[0.08] bg-[#FFFFFF]/65 backdrop-blur-[12px] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.5)]">
              {/* Desktop / Tablet Horizontal Grid Band */}
              <div className="hidden sm:flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 lg:gap-x-14 gap-y-7 md:gap-y-8">
                {techPlatforms.map((platform) => {
                  const IconComponent = platform.icon;
                  return (
                    <motion.div
                      key={platform.name}
                      variants={itemVariants}
                      className="flex items-center gap-3 text-[#5B6472] hover:text-white hover:scale-105 hover:brightness-125 transition-all duration-250 ease-out cursor-default select-none group py-1"
                    >
                      <IconComponent className="w-6 h-6 shrink-0 text-[#5B6472] group-hover:text-white transition-colors duration-250" />
                      <span className="font-sans font-semibold text-sm sm:text-base tracking-wide whitespace-nowrap">
                        {platform.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Touch Carousel */}
              <div className="sm:hidden flex items-center gap-7 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 px-2 -mx-2">
                {techPlatforms.map((platform) => {
                  const IconComponent = platform.icon;
                  return (
                    <motion.div
                      key={platform.name}
                      variants={itemVariants}
                      className="flex items-center gap-2.5 text-[#5B6472] active:text-white hover:scale-105 transition-all duration-250 ease-out shrink-0 snap-center py-1"
                    >
                      <IconComponent className="w-5 h-5 shrink-0 text-[#5B6472]" />
                      <span className="font-sans font-semibold text-xs sm:text-sm tracking-wide whitespace-nowrap">
                        {platform.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
