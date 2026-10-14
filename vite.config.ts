import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';
import {procesarRegistro} from './api/_lib/registro-core.js';

// Solo en el servidor local (npm run dev): responde POST /api/registro con la misma lógica de Vercel.
// Si no hay llaves de Supabase en .env.local, responde en "modo prueba" sin guardar nada.
const registroLocal = (env: Record<string, string>): Plugin => ({
  name: 'registro-local',
  configureServer(server) {
    server.middlewares.use('/api/registro', (req, res) => {
      let raw = '';
      req.on('data', (chunk) => {
        raw += chunk;
        if (raw.length > 10_000) req.destroy();
      });
      req.on('end', async () => {
        let body: unknown = null;
        try {
          body = raw ? JSON.parse(raw) : null;
        } catch {
          body = null;
        }
        const sinLlaves = !env.SUPABASE_URL || !env.SUPABASE_ANON_KEY;
        const {status, json} = sinLlaves
          ? await procesarRegistro({
              method: req.method,
              origin: req.headers.origin,
              ip: req.socket.remoteAddress,
              body,
              env: {SUPABASE_URL: 'http://modo-prueba', SUPABASE_ANON_KEY: 'modo-prueba'},
              fetchImpl: async () => new Response(null, {status: 201}),
            }).then((r) => (r.status === 200 ? {...r, json: {...r.json, prueba: true}} : r))
          : await procesarRegistro({
              method: req.method,
              origin: req.headers.origin,
              ip: req.socket.remoteAddress,
              body,
              env,
            });
        res.statusCode = status;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(json));
      });
    });
  },
});

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), tailwindcss(), registroLocal(env)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
