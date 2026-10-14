// Lógica del registro antes de descargar: valida los datos y los guarda en Supabase.
// Está separada del endpoint para poder probarla y para reutilizarla en el servidor local.
// Los archivos que empiezan por "_" dentro de /api no se publican como endpoints en Vercel.

export const APPS_PERMITIDAS = ['mester', 'amara', 'kenaz'];

const ORIGENES_PERMITIDOS = [
  'https://www.ansuzstudio.com',
  'https://ansuzstudio.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

const CORREO_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;
const CELULAR_RE = /^\+?\d{7,15}$/;
const VERSION_RE = /^\d{4}-\d{2}-\d{2}$/;
// Letras (con tildes), espacios y signos comunes en nombres; nada de < > ni caracteres de control.
const NOMBRE_RE = /^[\p{L}\p{M}][\p{L}\p{M} .'-]{1,99}$/u;

export const origenPermitido = (origin) =>
  typeof origin === 'string' &&
  (ORIGENES_PERMITIDOS.includes(origin) || /^https:\/\/[a-z0-9-]+\.vercel\.app$/.test(origin));

/**
 * Valida el cuerpo enviado por el formulario.
 * Devuelve { ok: true, datos } con los datos limpios, { ok: true, ignorar: true } si parece un robot,
 * o { ok: false, error } con un mensaje para mostrar a la persona.
 */
export function validarRegistro(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, error: 'Solicitud inválida.' };
  }

  // Campo trampa: las personas no lo ven; si viene lleno, es un robot. Se responde "ok" sin guardar.
  if (typeof body.empresa === 'string' && body.empresa.trim() !== '') {
    return { ok: true, ignorar: true };
  }

  const nombre = typeof body.nombre === 'string' ? body.nombre.trim().replace(/\s+/g, ' ') : '';
  if (!NOMBRE_RE.test(nombre)) {
    return { ok: false, error: 'Escribe tu nombre (solo letras, entre 2 y 100 caracteres).' };
  }

  const correo = typeof body.correo === 'string' ? body.correo.trim().toLowerCase() : '';
  if (correo.length > 254 || !CORREO_RE.test(correo)) {
    return { ok: false, error: 'Escribe un correo válido.' };
  }

  let celular = null;
  if (body.celular !== undefined && body.celular !== null && String(body.celular).trim() !== '') {
    if (typeof body.celular !== 'string') return { ok: false, error: 'El celular no es válido.' };
    const limpio = body.celular.replace(/[\s()-]/g, '');
    if (!CELULAR_RE.test(limpio)) {
      return { ok: false, error: 'El celular debe tener entre 7 y 15 números.' };
    }
    celular = limpio;
  }

  if (!APPS_PERMITIDAS.includes(body.app)) {
    return { ok: false, error: 'La app no es válida.' };
  }

  if (body.mayorDeEdad !== true) {
    return { ok: false, error: 'Debes ser mayor de 18 años para descargar.' };
  }
  if (body.aceptaTerminos !== true) {
    return { ok: false, error: 'Debes aceptar los Términos y condiciones.' };
  }
  if (body.aceptaPolitica !== true) {
    return { ok: false, error: 'Debes autorizar el tratamiento de tus datos.' };
  }
  if (typeof body.aceptaNovedades !== 'boolean') {
    return { ok: false, error: 'Solicitud inválida.' };
  }
  if (typeof body.versionDocumentos !== 'string' || !VERSION_RE.test(body.versionDocumentos)) {
    return { ok: false, error: 'Solicitud inválida.' };
  }

  return {
    ok: true,
    datos: {
      nombre,
      correo,
      celular,
      app: body.app,
      mayor_de_edad: true,
      acepta_terminos: true,
      acepta_politica: true,
      acepta_novedades: body.aceptaNovedades,
      version_documentos: body.versionDocumentos,
    },
  };
}

// Inserta el registro con la llave pública (anon). En Supabase, la tabla solo permite INSERTAR con esa llave:
// no se puede leer, cambiar ni borrar nada (ver supabase/registros_descarga.sql).
export async function guardarRegistro(datos, { url, key, fetchImpl = fetch }) {
  // Acepta la URL con o sin "/rest/v1/" al final (Supabase la muestra de las dos formas).
  const base = url.trim().replace(/\/+$/, '').replace(/\/rest\/v1$/, '');
  const respuesta = await fetchImpl(`${base}/rest/v1/registros_descarga`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(datos),
  });
  return respuesta.ok;
}

// Límite simple por IP: 5 registros cada 10 minutos por instancia del servidor.
const intentos = new Map();
const VENTANA_MS = 10 * 60 * 1000;
const MAX_INTENTOS = 5;

export function superaLimite(ip, ahora = Date.now()) {
  if (!ip) return false;
  const recientes = (intentos.get(ip) || []).filter((t) => ahora - t < VENTANA_MS);
  recientes.push(ahora);
  intentos.set(ip, recientes);
  if (intentos.size > 5000) intentos.clear();
  return recientes.length > MAX_INTENTOS;
}

/**
 * Procesa una solicitud completa y devuelve { status, json }.
 * @param {{
 *   method?: string,
 *   origin?: string,
 *   ip?: string,
 *   body: unknown,
 *   env: { SUPABASE_URL?: string, SUPABASE_ANON_KEY?: string },
 *   fetchImpl?: typeof fetch,
 * }} solicitud
 * @returns {Promise<{ status: number, json: Record<string, unknown> }>}
 */
export async function procesarRegistro({ method, origin, ip, body, env, fetchImpl }) {
  if (method !== 'POST') return { status: 405, json: { ok: false, error: 'Método no permitido.' } };
  if (!origenPermitido(origin)) return { status: 403, json: { ok: false, error: 'Origen no permitido.' } };
  if (superaLimite(ip)) {
    return { status: 429, json: { ok: false, error: 'Demasiados intentos. Prueba de nuevo en unos minutos.' } };
  }

  const resultado = validarRegistro(body);
  if (!resultado.ok) return { status: 400, json: { ok: false, error: resultado.error } };
  if (resultado.ignorar) return { status: 200, json: { ok: true } };

  if (!env.SUPABASE_URL || !env.SUPABASE_ANON_KEY) {
    console.error('registro: faltan SUPABASE_URL o SUPABASE_ANON_KEY');
    return { status: 503, json: { ok: false, error: 'El registro no está disponible en este momento.' } };
  }

  try {
    const guardado = await guardarRegistro(resultado.datos, {
      url: env.SUPABASE_URL,
      key: env.SUPABASE_ANON_KEY,
      fetchImpl,
    });
    if (!guardado) {
      console.error('registro: Supabase rechazó la inserción');
      return { status: 502, json: { ok: false, error: 'No pudimos guardar tu registro. Intenta de nuevo.' } };
    }
  } catch {
    console.error('registro: error de conexión con Supabase');
    return { status: 502, json: { ok: false, error: 'No pudimos guardar tu registro. Intenta de nuevo.' } };
  }

  return { status: 200, json: { ok: true } };
}
