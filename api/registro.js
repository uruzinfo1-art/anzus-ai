// Endpoint de Vercel: POST /api/registro
// Recibe el formulario de descarga, lo valida y lo guarda en Supabase.
// Variables de entorno (se configuran en Vercel, nunca en el código):
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
import { procesarRegistro } from './_lib/registro-core.js';

export default async function handler(req, res) {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : req.socket?.remoteAddress;

  const { status, json } = await procesarRegistro({
    method: req.method,
    origin: req.headers.origin,
    ip,
    body: req.body,
    env: process.env,
  });

  res.setHeader('Cache-Control', 'no-store');
  res.status(status).json(json);
}
