# Registro de descargas (Supabase)

Antes de descargar una app, la persona deja sus datos y acepta los Términos y la Política.
El formulario envía todo a `/api/registro` (función de Vercel), que valida y guarda en Supabase.

La tabla vive en el proyecto de Supabase **mester** (el plan gratis solo permite 2 proyectos).
Para no exponer ese proyecto, el sitio usa la **llave pública (anon)** y la tabla solo permite
*agregar* registros con esa llave: no se pueden leer, cambiar ni borrar. Nunca pongas la llave
`service_role` en el sitio.

## Configuración (una sola vez)

1. En Supabase, abre el proyecto **mester** → **SQL Editor** → **New query**.
2. Pega todo el contenido de `registros_descarga.sql` y toca **Run** (debe decir "Success").
3. En **Project Settings → API** copia:
   - **Project URL**
   - la llave **anon / public**
4. En Vercel, proyecto **anzus-ai** → **Settings → Environment Variables**, agrega
   (para Production y Preview):
   - `SUPABASE_URL` = la Project URL
   - `SUPABASE_ANON_KEY` = la llave anon
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
