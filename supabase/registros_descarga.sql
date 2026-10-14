-- Tabla de registros de quienes descargan las apps de ANSUZ.
-- Cómo usarlo: en Supabase, abre "SQL Editor", pega todo este archivo y toca "Run".
-- Se puede ejecutar en un proyecto que ya tenga otras tablas: solo crea esta tabla y su vista.

create table if not exists public.registros_descarga (
  id uuid primary key default gen_random_uuid(),
  creado_en timestamptz not null default now(),
  nombre text not null check (char_length(nombre) between 2 and 100),
  correo text not null check (char_length(correo) <= 254 and correo ~* '^[^@[:space:]]+@[^@[:space:]]+\.[a-z]{2,}$'),
  celular text check (celular is null or celular ~ '^\+?[0-9]{7,15}$'),
  app text not null check (app in ('mester', 'amara', 'kenaz')),
  mayor_de_edad boolean not null check (mayor_de_edad),
  acepta_terminos boolean not null check (acepta_terminos),
  acepta_politica boolean not null check (acepta_politica),
  -- Autorización aparte y opcional para novedades y promociones.
  acepta_novedades boolean not null default false,
  -- Fecha (versión) de los Términos y la Política que aceptó la persona.
  version_documentos text not null,
  -- Para no volver a escribirle promociones a quien se dio de baja.
  dado_de_baja boolean not null default false,
  dado_de_baja_en timestamptz
);

create index if not exists registros_descarga_correo_idx on public.registros_descarga (lower(correo));

-- Seguridad. El sitio usa la llave pública (anon), así que con esa llave solo se permite
-- AGREGAR registros válidos: no se puede leer, cambiar ni borrar nada. Tú ves la tabla
-- desde el panel de Supabase.
alter table public.registros_descarga enable row level security;

revoke all on public.registros_descarga from anon, authenticated;
grant insert (nombre, correo, celular, app, mayor_de_edad, acepta_terminos, acepta_politica,
              acepta_novedades, version_documentos)
  on public.registros_descarga to anon;

drop policy if exists "registro publico solo insertar" on public.registros_descarga;
create policy "registro publico solo insertar"
  on public.registros_descarga
  for insert
  to anon
  with check (mayor_de_edad and acepta_terminos and acepta_politica and not dado_de_baja and dado_de_baja_en is null);

-- Vista de ayuda para enviar correos: un registro por persona (el más reciente),
-- con su permiso de novedades. Úsala para exportar listas.
create or replace view public.contactos_correo
with (security_invoker = true) as
select distinct on (lower(correo))
  lower(correo) as correo,
  nombre,
  celular,
  bool_or(acepta_novedades) over (partition by lower(correo)) as acepta_novedades,
  bool_or(dado_de_baja) over (partition by lower(correo)) as dado_de_baja,
  array_agg(app) over (partition by lower(correo)) as apps,
  creado_en as ultimo_registro
from public.registros_descarga
order by lower(correo), creado_en desc;

-- La vista tampoco se puede leer con las llaves públicas.
revoke all on public.contactos_correo from anon, authenticated;
