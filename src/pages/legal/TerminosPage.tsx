import React from 'react';
import { apps } from '@/pages/apps/appsData';
import { RESPONSABLE } from '@/lib/legal';
import { navigateTo } from '@/lib/navigate';
import { LegalLayout, LegalSection } from './LegalLayout';

// Borrador de Términos y condiciones de uso de las apps de ANSUZ. Debe revisarlo un abogado.

const LinkPolitica: React.FC = () => (
  <a href="/privacidad" onClick={(e) => navigateTo(e, '/privacidad')} className="font-semibold text-[#35507A] underline underline-offset-2">
    Política de tratamiento de datos
  </a>
);

export const TerminosPage: React.FC = () => (
  <LegalLayout
    title="Términos y condiciones de uso"
    intro={
      <p>
        Estos términos regulan la descarga y el uso de las aplicaciones de {RESPONSABLE.marca} (MESTER, AMARA, KENAZ y las que
        se publiquen más adelante). Las aplicaciones las ofrece {RESPONSABLE.nombre}, con domicilio en {RESPONSABLE.ciudad}, bajo la
        marca {RESPONSABLE.marca}. Al descargar o usar cualquiera de las apps aceptas estos términos. Si no estás de acuerdo, no las
        descargues ni las uses.
      </p>
    }
  >
    <LegalSection n={1} title="Quién puede usar las apps">
      <p>
        Las apps son solo para <strong>personas mayores de 18 años</strong>. Al descargarlas declaras que tienes esa edad y que
        puedes aceptar estos términos.
      </p>
    </LegalSection>

    <LegalSection n={2} title="Licencia de uso">
      <p>
        Te damos un permiso <strong>gratuito, personal, no exclusivo, intransferible y revocable</strong> para instalar y usar
        las versiones gratuitas de las apps. No puedes vender, alquilar, redistribuir, modificar, descompilar ni copiar las apps,
        ni usarlas para actividades ilegales o que afecten a otras personas.
      </p>
      <p>
        Las apps, sus nombres, logos, personajes, diseños y contenidos son propiedad de {RESPONSABLE.nombre} ({RESPONSABLE.marca}) y
        están protegidos por las normas de propiedad intelectual.
      </p>
    </LegalSection>

    <LegalSection n={3} title="Uso bajo tu propia responsabilidad">
      <p>
        Las apps son <strong>herramientas de apoyo</strong>. Se entregan <strong>"tal como están"</strong> y "según
        disponibilidad": pueden tener errores, interrupciones o cambios, y no garantizamos que sirvan para un propósito
        específico. Tú decides cómo usarlas y eres responsable de las decisiones que tomes con base en ellas.
      </p>
      <p>Te recomendamos hacer copias de respaldo de tu información.</p>
    </LegalSection>

    <LegalSection n={4} title="Avisos de cada app">
      <ul>
        {apps.map((app) => (
          <li key={app.slug}>
            <strong>{app.name}:</strong> {app.disclaimer}
          </li>
        ))}
      </ul>
      <p>
        Ninguna de las apps presta servicios médicos, de salud, nutricionales, financieros, contables, tributarios, legales ni de
        inversión.
      </p>
    </LegalSection>

    <LegalSection n={5} title="Instalación y descargas">
      <p>
        Los instaladores se descargan desde Google Drive y se instalan por fuera de las tiendas oficiales (Play Store o Microsoft
        Store). Por eso tu dispositivo, Google Drive o Windows pueden mostrar avisos de seguridad. Descarga las apps solo desde{' '}
        {RESPONSABLE.sitio}; no respondemos por copias obtenidas en otros sitios.
      </p>
    </LegalSection>

    <LegalSection n={6} title="Límite de responsabilidad">
      <p>
        En la medida en que lo permita la ley colombiana, {RESPONSABLE.nombre} no responde por daños indirectos, pérdida de
        información, pérdida de ingresos o ganancias, lesiones derivadas de actividades físicas, ni por decisiones económicas o de
        salud tomadas con base en las apps. Esto no limita los derechos que la ley te reconoce como consumidor y que no pueden
        renunciarse.
      </p>
    </LegalSection>

    <LegalSection n={7} title="Tus datos personales">
      <p>
        Para descargar te pedimos algunos datos. Su tratamiento se explica en la <LinkPolitica />, que aceptas por separado al
        registrarte.
      </p>
    </LegalSection>

    <LegalSection n={8} title="Servicios de terceros">
      <p>
        Algunas funciones dependen de servicios de terceros (por ejemplo, Google Drive para las descargas o servicios en la nube
        usados por ciertas apps). Su funcionamiento y sus condiciones no dependen de nosotros.
      </p>
    </LegalSection>

    <LegalSection n={9} title="Versiones pagas y cambios">
      <p>
        Podemos lanzar versiones pagas o funciones adicionales con condiciones propias, que se informarán antes de que las
        contrates. También podemos actualizar, suspender o retirar las apps, y modificar estos términos. Si los cambios son
        importantes, publicaremos la nueva versión en esta página con su fecha de vigencia.
      </p>
    </LegalSection>

    <LegalSection n={10} title="Ley aplicable y contacto">
      <p>Estos términos se rigen por las leyes de la República de Colombia.</p>
      <p>
        Para dudas o reclamos: <strong>{RESPONSABLE.correo}</strong> o <strong>{RESPONSABLE.telefono}</strong> (WhatsApp).
      </p>
    </LegalSection>
  </LegalLayout>
);
