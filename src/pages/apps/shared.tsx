import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'motion/react';
import type { AppInfo } from './appsData';
import { useDownloadGate } from './DownloadGate';

// Formato de pesos colombianos: 1230000 -> "$1.230.000".
export const formatCOP = (value: number) => `$${Math.round(value).toLocaleString('es-CO')}`;

// Número que cuenta desde 0 cuando aparece en pantalla.
export const Counter: React.FC<{ value: number; className?: string; format?: (v: number) => string }> = ({
  value,
  className = '',
  format = (v) => String(Math.round(v)),
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: setDisplay });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {format(display)}
    </span>
  );
};

// Etiqueta que aparece y flota sobre las ilustraciones.
export const FloatingChip: React.FC<{ children: React.ReactNode; className?: string; delay?: number; color: string }> = ({
  children,
  className = '',
  delay = 0,
  color,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
    transition={{
      opacity: { delay: 0.6 + delay, duration: 0.4 },
      scale: { delay: 0.6 + delay, duration: 0.4, type: 'spring' },
      y: { delay: 0.6 + delay, duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
    }}
    className={`absolute z-30 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md border ${className}`}
    style={{ backgroundColor: `${color}26`, borderColor: `${color}80`, color, boxShadow: `0 0 24px -6px ${color}` }}
  >
    {children}
  </motion.div>
);

// Botón grande de descarga con degradado propio de cada app.
// Abre el registro (datos + aceptación de términos) antes de entregar el enlace.
export const BigDownloadButton: React.FC<{
  app: AppInfo;
  gradient: string;
  glow: string;
  textColor?: string;
  className?: string;
  children?: React.ReactNode;
}> = ({ app, gradient, glow, textColor = '#FFFFFF', className = '', children = 'Descargar gratis' }) => {
  const { open } = useDownloadGate();
  return (
  <button
    type="button"
    onClick={() => open(app)}
    className={`group inline-flex items-center justify-center gap-3 h-14 px-8 rounded-2xl text-base font-bold border border-white/20 transition-all hover:-translate-y-0.5 ${className}`}
    style={{ backgroundImage: gradient, color: textColor, boxShadow: `0 0 40px -6px ${glow}` }}
  >
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
    {children}
    <svg viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </button>
  );
};
