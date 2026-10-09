import React, { useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { LEGAL_VERSION } from '@/lib/legal';

// Estructura común de las páginas legales: título, fecha de vigencia y secciones numeradas.

export const LegalSection: React.FC<{ n: number; title: string; children: React.ReactNode }> = ({ n, title, children }) => (
  <section className="scroll-mt-28" id={`seccion-${n}`}>
    <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-3">
      {n}. {title}
    </h2>
    <div className="space-y-3 text-[15px] leading-relaxed text-[#334155] [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_strong]:text-[#0F172A]">
      {children}
    </div>
  </section>
);

const fechaLegible = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' });

export const LegalLayout: React.FC<{ title: string; intro: React.ReactNode; children: React.ReactNode }> = ({ title, intro, children }) => {
  useEffect(() => {
    const anterior = document.title;
    document.title = `${title} — ANSUZ`;
    window.scrollTo({ top: 0 });
    return () => {
      document.title = anterior;
    };
  }, [title]);

  return (
    <Section className="bg-[#F7F8FA] pt-32 pb-20 md:pt-40">
      <Container maxWidth="md">
        <article className="mx-auto max-w-3xl rounded-3xl bg-white border border-[#E2E5EA] p-6 sm:p-12 shadow-sm">
          <p className="text-sm font-semibold text-[#35507A]">ANSUZ</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">{title}</h1>
          <p className="mt-2 text-sm text-[#5B6472]">Vigente desde el {fechaLegible(LEGAL_VERSION)}.</p>
          <div className="mt-6 text-[15px] leading-relaxed text-[#334155]">{intro}</div>
          <div className="mt-10 space-y-10">{children}</div>
        </article>
      </Container>
    </Section>
  );
};
