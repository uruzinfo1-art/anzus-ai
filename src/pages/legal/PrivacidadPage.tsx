import React from 'react';
import { RESPONSABLE } from '@/lib/legal';
import { LegalLayout, LegalSection } from './LegalLayout';

// Borrador de Política de tratamiento de datos personales (Ley 1581 de 2012 y Decreto 1377 de 2013,
// compilado en el Decreto 1074 de 2015). Debe revisarlo un abogado.

export const PrivacidadPage: React.FC = () => (
  <LegalLayout
    title="Política de tratamiento de datos personales"
    intro={
      <p>
        Esta política explica cómo tratamos los datos personales que nos entregas al registrarte para descargar las apps de{' '}
        {RESPONSABLE.marca} en {RESPONSABLE.sitio}, conforme a la Ley 1581 de 2012 y sus decretos reglamentarios.
      </p>
    }
  >
    <LegalSection n={1} title="Responsable del tratamiento">
      <ul>
        <li>
          <strong>Nombre:</strong> {RESPONSABLE.nombre} (marca {RESPONSABLE.marca})
        </li>
        <li>
          <strong>Domicilio y dirección:</strong> {RESPONSABLE.direccion}
        </li>
        <li>
          <strong>Correo:</strong> {RESPONSABLE.correo}
        </li>
        <li>
          <strong>Teléfono:</strong> {RESPONSABLE.telefono}
        </li>
      </ul>
    </LegalSection>

    <LegalSection n={2} title="Datos que recogemos">
      <ul>
        <li>Nombre.</li>
        <li>Correo electrónico.</li>
        <li>Número de celular, solo si decides darlo.</li>
        <li>La app que descargaste, la fecha y las autorizaciones que diste (mayoría de edad, términos, política y novedades).</li>
      </ul>
      <p>
        No pedimos datos sensibles ni recogemos datos de menores de edad. Las apps son solo para mayores de 18 años.
      </p>
    </LegalSection>

    <LegalSection n={3} title="Para qué usamos tus datos">
      <ul>
        <li>Registrar tu descarga y guardar la constancia de que aceptaste los Términos y esta Política.</li>
        <li>Avisarte de actualizaciones, cambios importantes o problemas de las apps que descargaste.</li>
        <li>
          <strong>Solo si lo autorizas aparte:</strong> enviarte novedades y promociones de {RESPONSABLE.marca}, como nuevas apps,
          versiones pagas y lanzamientos. Puedes retirar esta autorización cuando quieras.
        </li>
      </ul>
      <p>No vendemos ni alquilamos tus datos, ni los usamos para fines distintos a los anteriores.</p>
    </LegalSection>

    <LegalSection n={4} title="Quién más los procesa">
      <p>Para guardar tus datos y comunicarnos contigo usamos proveedores que actúan por cuenta nuestra (encargados):</p>
      <ul>
        <li>Supabase, para almacenar los registros en la nube.</li>
        <li>Vercel, que aloja este sitio web y recibe el formulario.</li>
        <li>Un proveedor de envío de correos electrónicos, cuando te enviemos mensajes.</li>
      </ul>
      <p>
        Estos proveedores pueden tener servidores fuera de Colombia, por lo que tus datos pueden almacenarse o procesarse en otros
        países. Al autorizar el tratamiento aceptas esta transmisión. Exigimos a los proveedores medidas de seguridad y
        confidencialidad.
      </p>
    </LegalSection>

    <LegalSection n={5} title="Tus derechos">
      <p>Como titular de tus datos puedes, en cualquier momento y de forma gratuita:</p>
      <ul>
        <li>Conocer, actualizar y corregir tus datos.</li>
        <li>Pedir prueba de la autorización que nos diste.</li>
        <li>Saber qué uso les hemos dado.</li>
        <li>Revocar la autorización o pedir que borremos tus datos, cuando no exista un deber legal de conservarlos.</li>
        <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC), después de haber acudido a nosotros.</li>
      </ul>
    </LegalSection>

    <LegalSection n={6} title="Cómo ejercer tus derechos">
      <p>
        Escribe a <strong>{RESPONSABLE.correo}</strong> con el asunto "Datos personales", tu nombre, el correo con el que te
        registraste y lo que necesitas.
      </p>
      <ul>
        <li>
          <strong>Consultas:</strong> respondemos en máximo 10 días hábiles. Si no es posible, te avisamos el motivo y respondemos
          en máximo 5 días hábiles más.
        </li>
        <li>
          <strong>Reclamos</strong> (corrección, actualización, borrado o revocatoria): respondemos en máximo 15 días hábiles. Si
          no es posible, te avisamos el motivo y respondemos en máximo 8 días hábiles más.
        </li>
      </ul>
      <p>
        Para dejar de recibir novedades y promociones también puedes usar el enlace "darme de baja" que incluye cada correo.
      </p>
    </LegalSection>

    <LegalSection n={7} title="Cuánto tiempo guardamos tus datos">
      <p>
        Conservamos tus datos hasta que pidas borrarlos o revoques tu autorización, salvo que una norma nos obligue a conservarlos
        por más tiempo.
      </p>
    </LegalSection>

    <LegalSection n={8} title="Seguridad">
      <p>
        Tus datos se guardan en una base de datos que no es accesible desde este sitio web: solo el responsable puede consultarla.
        El formulario viaja cifrado (HTTPS) y se valida antes de guardarse.
      </p>
    </LegalSection>

    <LegalSection n={9} title="Datos dentro de cada app">
      <p>
        Esta política cubre los datos del registro de descarga. Cómo maneja sus propios datos cada app se explica en su página. Por
        ejemplo, MESTER y KENAZ guardan tu información solo en tu dispositivo.
      </p>
    </LegalSection>

    <LegalSection n={10} title="Cambios a esta política">
      <p>
        Si cambiamos esta política, publicaremos la nueva versión en esta página con su fecha de vigencia. Si el cambio afecta las
        finalidades, te pediremos una nueva autorización.
      </p>
    </LegalSection>
  </LegalLayout>
);
