import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, ArrowLeft, Download, ShieldCheck, Smartphone, Monitor, Clock, MessageCircle } from 'lucide-react';
import { navigateTo } from '@/lib/navigate';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import type { AppInfo, AppTheme } from './appsData';
import { useDownloadGate } from './DownloadGate';

const WHATSAPP_NUMBER = '573207283295';

// Drive muestra un aviso antes de descargar cualquier instalador (APK o .exe).
const DRIVE_WARNING_STEP =
  'Google Drive mostrará un aviso antes de descargar, porque es un instalador. Toca "Descargar de todas formas".';

const buildInstallSteps = (app: AppInfo): string[] => {
  if (app.platform === 'windows') {
    return [
      'Toca "Descargar" desde tu computador.',
      DRIVE_WARNING_STEP,
      'Abre el instalador. Si Windows muestra "Windows protegió su PC", toca "Más información" y luego "Ejecutar de todas formas".',
      'Sigue los pasos del instalador y abre la app.',
    ];
  }
  return [
    'Desde tu celular, toca "Descargar".',
    DRIVE_WARNING_STEP,
    'Ábrelo. Android te pedirá permitir la instalación de apps de origen desconocido para tu navegador o para Drive: actívala.',
    'Si Google Play Protect muestra un aviso, elige "Instalar de todas formas".',
    'Listo: la app queda junto a las demás en tu celular.',
  ];
};

const installNote: Record<AppInfo['platform'], string> = {
  android:
    'Estos avisos aparecen con cualquier app que se descarga e instala por fuera de Play Store. No significan que el archivo tenga un problema.',
  windows:
    'Estos avisos aparecen con las apps independientes que todavía no tienen firma digital de Microsoft. No significan que el archivo tenga un problema.',
};

// Carga la letra de la app (solo cuando se abre su página) y pone el título de la pestaña.
export const useAppPageSetup = (app: AppInfo) => {
  const url = app.theme.fontUrl;
  useEffect(() => {
    if (!url || document.querySelector(`link[href="${url}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
  }, [url]);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${app.name} | ${app.tagline} — ANSUZ`;
    return () => {
      document.title = previousTitle;
    };
  }, [app]);
};

export const themeVarsFor = (theme: AppTheme) =>
  ({
    '--app-bg': theme.bg,
    '--app-surface': theme.surface,
    '--app-surface-alt': theme.surfaceAlt,
    '--app-border': theme.border,
    '--app-text': theme.text,
    '--app-text-muted': theme.textMuted,
    '--app-accent': theme.accent,
    '--app-accent-text': theme.accentText,
    '--app-highlight': theme.highlight,
    '--font-display': theme.font,
    '--font-sans': theme.font,
    fontFamily: theme.font,
  }) as React.CSSProperties;

export const DownloadButton: React.FC<{ app: AppInfo; className?: string }> = ({ app, className = '' }) => {
  const { open } = useDownloadGate();
  if (!app.downloadUrl) {
    return (
      <span
        className={`inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[var(--app-surface-alt)] text-[var(--app-text-muted)] text-sm font-semibold cursor-not-allowed ${className}`}
        aria-disabled="true"
      >
        <Clock className="w-4 h-4" aria-hidden="true" />
        Disponible muy pronto
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => open(app)}
      className={`inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[var(--app-accent)] text-[var(--app-accent-text)] text-sm font-bold shadow-[0_10px_30px_-10px_var(--app-accent)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--app-bg)] focus-visible:ring-[var(--app-accent)] ${className}`}
    >
      <Download className="w-4 h-4" aria-hidden="true" />
      Descargar gratis
    </button>
  );
};

export const PhoneFrame: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => (
  <div
    className={`rounded-[2rem] border-[6px] border-[var(--app-surface-alt)] bg-black shadow-[0_30px_80px_-30px_var(--app-accent)] overflow-hidden ${className}`}
  >
    <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
  </div>
);

export const BackToAppsLink: React.FC = () => (
  <a
    href="/#proyectos"
    onClick={(e) => {
      e.preventDefault();
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new Event('popstate'));
      setTimeout(() => document.querySelector('#proyectos')?.scrollIntoView({ block: 'start' }), 50);
    }}
    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--app-text-muted)] hover:text-[var(--app-text)] transition-colors"
  >
    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
    Todas las apps
  </a>
);

// Guía de instalación, privacidad, preguntas frecuentes y llamado final: comunes a todas las apps.
export const AppBottomSections: React.FC<{ app: AppInfo }> = ({ app }) => {
  const { theme } = app;
  const platformName = app.platform === 'android' ? 'Android' : 'Windows';
  const installSteps = buildInstallSteps(app);
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola ANSUZ, tengo una pregunta sobre ${app.name}.`
  )}`;

  return (
    <>
      {/* Install guide + Privacy */}
      <Section id="instalar" className="bg-[var(--app-surface-alt)] py-20 md:py-24">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-7 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight mb-1">Cómo instalarla</h2>
              <p className="text-sm text-[var(--app-text-muted)] mb-6">En {platformName}, toma pocos minutos.</p>
              <ol className="space-y-4 list-decimal pl-5 marker:font-bold marker:text-[var(--app-accent)]">
                {installSteps.map((step) => (
                  <li key={step} className="text-sm leading-relaxed pl-1">
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-xs text-[var(--app-text-muted)] leading-relaxed">{installNote[app.platform]}</p>
            </div>

            <div className="rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-7 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-[var(--app-highlight)] shrink-0" aria-hidden="true" />
                <h2 className="text-2xl font-bold tracking-tight">{app.privacy.title}</h2>
              </div>
              <ul className="space-y-3">
                {app.privacy.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--app-highlight)] shrink-0" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex gap-4 rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-6 sm:p-7">
            <AlertTriangle className="w-6 h-6 shrink-0 text-[var(--app-highlight)]" aria-hidden="true" />
            <div>
              <h2 className="text-lg font-bold">Uso bajo tu responsabilidad</h2>
              <p className="mt-1 text-sm leading-relaxed text-[var(--app-text-muted)]">{app.disclaimer}</p>
              <p className="mt-3 text-sm">
                Al descargar aceptas los{' '}
                <a href="/terminos" onClick={(e) => navigateTo(e, '/terminos')} className="font-semibold underline underline-offset-2 text-[var(--app-accent)]">
                  Términos y condiciones
                </a>{' '}
                y la{' '}
                <a href="/privacidad" onClick={(e) => navigateTo(e, '/privacidad')} className="font-semibold underline underline-offset-2 text-[var(--app-accent)]">
                  Política de tratamiento de datos
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ + CTA */}
      <Section className="bg-[var(--app-bg)] py-20 md:py-24">
        <Container maxWidth="md">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-3 mb-16">
            {app.faq.map((item) => (
              <details key={item.q} className="group rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] px-5 py-4">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold">
                  {item.q}
                  <span
                    className="text-[var(--app-accent)] transition-transform group-open:rotate-45 text-xl leading-none"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-[var(--app-text-muted)] leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>

          <div
            className="rounded-3xl border border-[var(--app-border)] px-6 py-12 sm:px-12 text-center"
            style={{ background: `radial-gradient(ellipse at top, ${theme.accent}33, transparent 70%), ${theme.surface}` }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Prueba {app.name} hoy</h2>
            <p className="text-[var(--app-text-muted)] mb-8">Es gratis. Si tienes dudas, escríbenos.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <DownloadButton app={app} className="w-full sm:w-auto" />
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl border border-[var(--app-border)] text-sm font-semibold hover:bg-white/5 transition-colors w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Preguntar por WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export const AppPage: React.FC<{ app: AppInfo }> = ({ app }) => {
  const { theme } = app;
  useAppPageSetup(app);
  const PlatformIcon = app.platform === 'android' ? Smartphone : Monitor;

  return (
    <div style={themeVarsFor(theme)} className="bg-[var(--app-bg)] text-[var(--app-text)] overflow-x-clip">
      {/* Hero */}
      <Section className="relative overflow-hidden bg-[var(--app-bg)] pt-28 pb-16 md:pt-36 md:pb-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 55% 65% at 80% 25%, ${theme.accent}33, transparent 70%)` }}
        />
        <Container maxWidth="xl" className="relative">
          <div className="mb-10">
            <BackToAppsLink />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <img
                  src={app.logo}
                  alt={`Logo de ${app.name}`}
                  className="w-16 h-16 rounded-2xl object-contain bg-black border border-[var(--app-border)] p-1.5"
                />
                <div className="text-left">
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{app.name}</h1>
                  <p className="text-sm text-[var(--app-text-muted)]">por ANSUZ</p>
                </div>
              </div>

              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                {app.tagline}
              </p>

              <p className="text-base sm:text-lg text-[var(--app-text-muted)] leading-relaxed max-w-xl mx-auto lg:mx-0">
                {app.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <DownloadButton app={app} className="w-full sm:w-auto" />
              </div>

              <p className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-sm text-[var(--app-text-muted)]">
                <span className="inline-flex items-center gap-1.5">
                  <PlatformIcon className="w-4 h-4" aria-hidden="true" />
                  {app.fileLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>Versión {app.version}</span>
                <span aria-hidden="true">·</span>
                <span>{app.fileSize}</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-[var(--app-highlight)]">Gratis</span>
              </p>
              {(app.requirements || app.downloadNote) && (
                <p className="text-xs text-[var(--app-text-muted)]">
                  {app.requirements && <>Requisitos: {app.requirements}. </>}
                  {app.downloadNote}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-5 flex justify-center"
            >
              {app.hero.type === 'photo' && (
                <img
                  src={app.hero.src}
                  alt={app.hero.alt}
                  className="w-full max-w-sm rounded-3xl border border-[var(--app-border)] shadow-[0_30px_80px_-30px_var(--app-accent)] object-cover aspect-[4/5]"
                />
              )}
              {app.hero.type === 'phone' && <PhoneFrame src={app.hero.src} alt={app.hero.alt} className="w-full max-w-[280px]" />}
              {app.hero.type === 'logo' && (
                <div className="w-full max-w-sm aspect-square rounded-3xl bg-black border border-[var(--app-border)] shadow-[0_30px_80px_-30px_var(--app-accent)] overflow-hidden">
                  <img src={app.hero.src} alt={app.hero.alt} className="w-full h-full object-contain" />
                </div>
              )}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section className="bg-[var(--app-surface-alt)] py-20 md:py-24">
        <Container maxWidth="xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-center lg:text-left">
            Qué puedes hacer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {app.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-6 transition-colors hover:border-[var(--app-accent)]"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-[var(--app-accent)]"
                    style={{ backgroundColor: `${theme.accent}26` }}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-[var(--app-text-muted)] leading-relaxed">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* How it works + Screenshots */}
      <Section className="bg-[var(--app-bg)] py-20 md:py-24">
        <Container maxWidth="xl">
          <div className={`grid grid-cols-1 gap-12 ${app.screenshots.length > 0 ? 'lg:grid-cols-12 items-center' : ''}`}>
            <div className={app.screenshots.length > 0 ? 'lg:col-span-5' : 'max-w-2xl'}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">Cómo funciona</h2>
              <ol className="space-y-5">
                {app.steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-sm font-bold bg-[var(--app-accent)] text-[var(--app-accent-text)]">
                      {i + 1}
                    </span>
                    <span className="pt-1.5 text-base">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            {app.screenshots.length > 0 && (
              <div className="lg:col-span-7 flex gap-5 justify-center overflow-x-auto pb-2">
                {app.screenshots.map((shot) => (
                  <PhoneFrame key={shot.src} src={shot.src} alt={shot.alt} className="w-[200px] sm:w-[220px] shrink-0" />
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      <AppBottomSections app={app} />
    </div>
  );
};
