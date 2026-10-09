# Registro de descargas (Supabase)

Antes de descargar una app, la persona deja sus datos y acepta los Términos y la Política.
El formulario envía todo a `/api/registro` (función de Vercel), que valida y guarda en Supabase.

## Configuración (una sola vez)

1. Crea un proyecto nuevo en <https://supabase.com> (por ejemplo `ansuz-registros`).
2. En el proyecto, abre **SQL Editor**, pega el contenido de `registros_descarga.sql` y toca **Run**.
3. En **Project Settings → API** copia:
   - **Project URL**
   - la llave **service_role** (es secreta: no la compartas ni la pegues en el código ni en chats).
4. En Vercel, abre el proyecto del sitio → **Settings → Environment Variables** y agrega:
   - `SUPABASE_URL` = la Project URL
   - `SUPABASE_SERVICE_ROLE_KEY` = la llave service_role
5. Vuelve a desplegar el sitio para que tome las variables.

Mientras esas variables no existan, el formulario muestra "El registro no está disponible en este momento"
y no entrega el enlace de descarga.

## Probar en tu computador

`npm run dev` funciona sin llaves en **modo prueba**: valida el formulario pero no guarda nada.
Para probar contra Supabase de verdad, crea `.env.local` (ya está en `.gitignore`) con las dos variables.

## Ver y exportar los registros

- Tabla completa: **Table Editor → registros_descarga**.
- Lista para correos (un registro por persona): **Table Editor → contactos_correo**.
  - Actualizaciones de las apps: todas las filas con `dado_de_baja = false`.
  - Novedades y promociones: solo `acepta_novedades = true` y `dado_de_baja = false`.
- Si alguien pide darse de baja: marca `dado_de_baja = true` en sus filas.
- Si alguien pide borrar sus datos: elimina sus filas de `registros_descarga`.
