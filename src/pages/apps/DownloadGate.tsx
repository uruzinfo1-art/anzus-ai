import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AlertTriangle, CheckCircle2, Download, Loader2, X } from 'lucide-react';
import type { AppInfo } from './appsData';
import { LEGAL_VERSION, RESPONSABLE } from '@/lib/legal';

// Antes de descargar, la persona deja sus datos y acepta Términos y Política.
// El registro se envía a /api/registro (función de Vercel) y solo después se muestra el enlace.

type GateContextValue = { open: (app: AppInfo) => void };
const GateContext = createContext<GateContextValue>({ open: () => {} });

export const useDownloadGate = () => useContext(GateContext);

type Estado = 'formulario' | 'enviando' | 'listo';

const LegalLink: React.FC<{ href: string; children: React.ReactNode; color: string }> = ({ href, children, color }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 font-semibold" style={{ color }}>
    {children}
  </a>
);

const Checkbox: React.FC<{
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
  accent: string;
  required?: boolean;
}> = ({ checked, onChange, children, accent, required }) => (
  <label className="flex items-start gap-3 text-sm leading-snug cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      required={required}
      className="mt-0.5 w-4 h-4 shrink-0 cursor-pointer"
      style={{ accentColor: accent }}
    />
    <span>{children}</span>
  </label>
);

const GateModal: React.FC<{ app: AppInfo; onClose: () => void }> = ({ app, onClose }) => {
  const { theme } = app;
  const [estado, setEstado] = useState<Estado>('formulario');
  const [error, setError] = useState('');
  const [modoPrueba, setModoPrueba] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    celular: '',
    empresa: '',
    mayorDeEdad: false,
    aceptaTerminos: false,
    aceptaPolitica: false,
    aceptaNovedades: false,
  });
  const primerCampo = useRef<HTMLInputElement>(null);

  useEffect(() => {
    primerCampo.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  const set = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => setForm((f) => ({ ...f, [key]: value }));
  const puedeEnviar = form.mayorDeEdad && form.aceptaTerminos && form.aceptaPolitica && estado !== 'enviando';

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!puedeEnviar) return;
    setError('');
    setEstado('enviando');
    try {
      const respuesta = await fetch('/api/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, app: app.slug, versionDocumentos: LEGAL_VERSION }),
      });
      const datos = await respuesta.json().catch(() => ({ ok: false }));
      if (!respuesta.ok || !datos.ok) {
        setError(datos.error || 'No pudimos registrar tus datos. Intenta de nuevo.');
        setEstado('formulario');
        return;
      }
      setModoPrueba(Boolean(datos.prueba));
      setEstado('listo');
    } catch {
      setError('No hay conexión. Revisa tu internet e intenta de nuevo.');
      setEstado('formulario');
    }
  };

  const inputClass =
    'w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--gate-accent)] bg-black/30';

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gate-titulo"
        initial={{ y: 40, scale: 0.97 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 40, scale: 0.97 }}
        transition={{ type: 'spring', bounce: 0.25, duration: 0.45 }}
        className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border p-6 sm:p-8 shadow-2xl"
        style={
          {
            background: theme.surface,
            borderColor: theme.border,
            color: theme.text,
            fontFamily: theme.font,
            '--gate-accent': theme.accent,
          } as React.CSSProperties
        }
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-white/10 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5 pr-8">
          <img src={app.logo} alt="" className="w-12 h-12 rounded-xl object-contain bg-black p-1" />
          <div>
            <h2 id="gate-titulo" className="text-xl font-bold leading-tight">
              Descarga {app.name}
            </h2>
            <p className="text-xs" style={{ color: theme.textMuted }}>
              {app.fileLabel} · Versión {app.version} · {app.fileSize} · Gratis
            </p>
          </div>
        </div>

        {estado !== 'listo' ? (
          <form onSubmit={enviar} noValidate className="space-y-4">
            <p className="text-sm" style={{ color: theme.textMuted }}>
              Déjanos tus datos para registrar tu descarga y avisarte de actualizaciones de la app.
            </p>

            <div className="space-y-3">
              <input
                ref={primerCampo}
                type="text"
                name="nombre"
                autoComplete="name"
                placeholder="Tu nombre"
                maxLength={100}
                required
                value={form.nombre}
                onChange={(e) => set('nombre', e.target.value)}
                className={inputClass}
                style={{ borderColor: theme.border, color: theme.text }}
              />
              <input
                type="email"
                name="correo"
                autoComplete="email"
                placeholder="Tu correo"
                maxLength={254}
                required
                value={form.correo}
                onChange={(e) => set('correo', e.target.value)}
                className={inputClass}
                style={{ borderColor: theme.border, color: theme.text }}
              />
              <input
                type="tel"
                name="celular"
                autoComplete="tel"
                placeholder="Tu celular (opcional)"
                maxLength={20}
                value={form.celular}
                onChange={(e) => set('celular', e.target.value)}
                className={inputClass}
                style={{ borderColor: theme.border, color: theme.text }}
              />
              {/* Campo trampa para robots: oculto para las personas. */}
              <input
                type="text"
                name="empresa"
                tabIndex={-1}
                autoComplete="off"
                value={form.empresa}
                onChange={(e) => set('empresa', e.target.value)}
                className="hidden"
                aria-hidden="true"
              />
            </div>

            <div className="flex gap-3 rounded-2xl border p-4 text-xs leading-relaxed" style={{ borderColor: theme.border, background: 'rgba(0,0,0,0.25)' }}>
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: theme.highlight }} aria-hidden="true" />
              <p>
                <span className="font-semibold">Uso bajo tu responsabilidad.</span> {app.disclaimer}
              </p>
            </div>

            <div className="space-y-3">
              <Checkbox checked={form.mayorDeEdad} onChange={(v) => set('mayorDeEdad', v)} accent={theme.accent} required>
                Soy mayor de 18 años.
              </Checkbox>
              <Checkbox checked={form.aceptaTerminos} onChange={(v) => set('aceptaTerminos', v)} accent={theme.accent} required>
                Acepto los <LegalLink href="/terminos" color={theme.accent}>Términos y condiciones</LegalLink> y entiendo que uso la app bajo
                mi propia responsabilidad.
              </Checkbox>
              <Checkbox checked={form.aceptaPolitica} onChange={(v) => set('aceptaPolitica', v)} accent={theme.accent} required>
                Autorizo a {RESPONSABLE.nombre} ({RESPONSABLE.marca}) a tratar mis datos para registrar mi descarga y avisarme de
                actualizaciones, según la <LegalLink href="/privacidad" color={theme.accent}>Política de tratamiento de datos</LegalLink>.
              </Checkbox>
              <Checkbox checked={form.aceptaNovedades} onChange={(v) => set('aceptaNovedades', v)} accent={theme.accent}>
                <span style={{ color: theme.textMuted }}>(Opcional)</span> Quiero recibir novedades y promociones de {RESPONSABLE.marca}.
              </Checkbox>
            </div>

            {error && (
              <p role="alert" className="rounded-xl bg-red-500/15 border border-red-500/40 px-4 py-3 text-sm text-red-200">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!puedeEnviar}
              className="w-full inline-flex items-center justify-center gap-2 h-13 py-3.5 rounded-xl text-base font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:-translate-y-0.5"
              style={{ background: theme.accent, color: theme.accentText }}
            >
              {estado === 'enviando' ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Download className="w-5 h-5" aria-hidden="true" />}
              {estado === 'enviando' ? 'Registrando…' : 'Registrarme y descargar'}
            </button>
            <p className="text-[11px] leading-relaxed" style={{ color: theme.textMuted }}>
              Puedes pedir consultar, corregir o borrar tus datos cuando quieras escribiendo a{' '}
              <a href={`mailto:${RESPONSABLE.correo}`} className="underline">{RESPONSABLE.correo}</a>.
            </p>
          </form>
        ) : (
          <div className="text-center py-4 space-y-5">
            <CheckCircle2 className="w-14 h-14 mx-auto" style={{ color: theme.highlight }} aria-hidden="true" />
            <div>
              <p className="text-xl font-bold">¡Listo, {form.nombre.trim().split(' ')[0]}!</p>
              <p className="mt-1 text-sm" style={{ color: theme.textMuted }}>
                Tu descarga está lista. Google Drive te mostrará un aviso antes de descargar: toca "Descargar de todas formas".
              </p>
              {modoPrueba && (
                <p className="mt-2 text-xs font-semibold text-amber-300">Modo prueba (servidor local): este registro no se guardó.</p>
              )}
            </div>
            <a
              href={app.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 py-3.5 rounded-xl text-base font-bold transition-transform hover:-translate-y-0.5"
              style={{ background: theme.accent, color: theme.accentText }}
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              Descargar {app.name}
            </a>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export const DownloadGateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [app, setApp] = useState<AppInfo | null>(null);
  const open = useCallback((a: AppInfo) => setApp(a), []);
  const close = useCallback(() => setApp(null), []);
  return (
    <GateContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>{app && <GateModal key={app.slug} app={app} onClose={close} />}</AnimatePresence>
    </GateContext.Provider>
  );
};
