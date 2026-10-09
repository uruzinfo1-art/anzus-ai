import {
  Activity,
  BarChart3,
  Bell,
  CalendarCheck,
  Clapperboard,
  ClipboardCheck,
  FolderKanban,
  Gift,
  GraduationCap,
  Hammer,
  History,
  Layers,
  ListChecks,
  MessageCircle,
  MessageSquareText,
  Music,
  PiggyBank,
  Salad,
  ScanEye,
  Smartphone,
  Store,
  Timer,
  Trophy,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react';
import mesterLogo from '@/assets/images/apps/mester-logo.png';
import mesterTeam from '@/assets/images/apps/mester-team.jpg';
import mesterMentor from '@/assets/images/apps/mester-mentor.jpg';
import amaraLogo from '@/assets/images/apps/amara-logo.png';
import amaraPerfiles from '@/assets/images/apps/amara-perfiles.jpg';
import amaraBolsillos from '@/assets/images/apps/amara-bolsillos.jpg';
import amaraNuevoGasto from '@/assets/images/apps/amara-nuevo-gasto.jpg';
import kenazLogo from '@/assets/images/apps/kenaz-logo.jpg';
import markSimbolo from '@/assets/images/apps/mark/simbolo.webp';

export type Platform = 'android' | 'windows';

export type AppFeature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type AppScreenshot = {
  src: string;
  alt: string;
};

// Colores y letra tomados del diseño de cada app.
export type AppTheme = {
  bg: string;
  surface: string;
  surfaceAlt: string;
  border: string;
  text: string;
  textMuted: string;
  accent: string;
  accentText: string;
  highlight: string;
  font: string;
  fontUrl?: string;
};

export type AppInfo = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  platform: Platform;
  version: string;
  fileLabel: string;
  fileSize: string;
  // Apps que todavía no se pueden descargar: se muestran como "Próximamente".
  comingSoon?: boolean;
  downloadNote?: string;
  requirements?: string;
  // Enlace público de descarga (Drive). Sin enlace, el botón muestra "Disponible muy pronto".
  downloadUrl?: string;
  logo: string;
  theme: AppTheme;
  hero: { type: 'photo' | 'phone' | 'logo'; src: string; alt: string };
  features: AppFeature[];
  steps: string[];
  screenshots: AppScreenshot[];
  privacy: { title: string; points: string[] };
  faq: { q: string; a: string }[];
};

const driveDownload = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

export const apps: AppInfo[] = [
  {
    slug: 'mester',
    name: 'MESTER',
    tagline: 'Tu entrenador personal, convertido en juego.',
    description:
      'Entrena, gana XP, sube de nivel y llena tu propio espacio de entrenamiento. Un entrenador con personalidad te acompaña en cada rutina, en casa, en el gym o en el parque.',
    platform: 'android',
    version: '1.0.0',
    fileLabel: 'APK para Android',
    fileSize: '285 MB',
    downloadNote: 'Pesa 285 MB: te recomendamos descargarla con wifi.',
    downloadUrl: driveDownload('1L-ZGz6mejvUZz4Y28eqH_BBCa8AoSQsj'),
    logo: mesterLogo,
    theme: {
      bg: '#0A0A0A',
      surface: '#1B1B1D',
      surfaceAlt: '#131315',
      border: '#2A2A2C',
      text: '#E4E2E4',
      textMuted: '#CFC2D7',
      accent: '#9333EA',
      accentText: '#FFFFFF',
      highlight: '#4AE176',
      font: "'Space Grotesk', system-ui, sans-serif",
      fontUrl: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap',
    },
    hero: { type: 'photo', src: mesterTeam, alt: 'Los entrenadores de MESTER en su gimnasio' },
    features: [
      {
        icon: Users,
        title: '7 entrenadores con personalidad',
        text: 'Bruno (fuerza), Bunny (glúteos y piernas), Paco (principiantes), Luna (HIIT y resistencia), Nala (tonificación), Axel (técnica) y Tito (movilidad y recuperación). Cambiar de entrenador no te quita progreso.',
      },
      {
        icon: ListChecks,
        title: 'Rutinas a tu medida',
        text: 'Según tu objetivo, tu nivel y dónde entrenas. También puedes armarlas tú con un mapa corporal interactivo, sobre una base de 876 ejercicios reales con fotos.',
      },
      {
        icon: Timer,
        title: 'Entrenamiento guiado',
        text: 'La pantalla "A darle" te lleva con cronómetro, series y descansos. Registrar peso y repeticiones es opcional y te da bonus cuando rompes un récord.',
      },
      {
        icon: Trophy,
        title: '100 niveles y 100 logros',
        text: 'Cada sesión completa te da XP, con un tope diario para que subir de nivel refleje entrenamiento real.',
      },
      {
        icon: Gift,
        title: 'Recompensas que se ven',
        text: 'Los Tarros de Proteína desbloquean decoración: tu espacio de entrenamiento empieza vacío y se llena con lo que ganas.',
      },
      {
        icon: Salad,
        title: 'Nutrición',
        text: 'Un cuestionario de tus alimentos habituales y "Arma tu plato", que calcula las cantidades según tus macros y tu objetivo.',
      },
      {
        icon: Activity,
        title: 'Tu progreso',
        text: 'Mapa de calor del cuerpo con lo que más has trabajado, mejora mensual por músculo e historial de entrenamientos.',
      },
    ],
    steps: [
      'Elige a tu entrenador.',
      'Arma tu rutina según tu objetivo, tu nivel y dónde entrenas.',
      'Entrena con "A darle", gana XP y sube de nivel.',
    ],
    screenshots: [{ src: mesterMentor, alt: 'Pantalla para elegir entrenador en MESTER' }],
    privacy: {
      title: 'Tus datos se quedan en tu teléfono',
      points: [
        'Tu progreso, rutinas y registros se guardan solo en tu celular.',
        'No tiene servidor ni cuentas: no enviamos tu información a ninguna parte.',
      ],
    },
    faq: [
      { q: '¿Es gratis?', a: 'Sí, esta versión de MESTER es gratuita.' },
      { q: '¿Funciona en iPhone?', a: 'Por ahora no: MESTER está disponible solo para Android.' },
      {
        q: '¿Si cambio de entrenador pierdo mi progreso?',
        a: 'No. El progreso es tuyo: niveles, logros y recompensas se mantienen con cualquier entrenador.',
      },
    ],
  },
  {
    slug: 'amara',
    name: 'AMARA',
    tagline: 'Tus finanzas, en orden.',
    description:
      'Lleva las cuentas de tu casa y de tu negocio desde el celular: registra gastos e ingresos, ahorra en bolsillos y mira en qué se va tu plata. Próximamente, una versión paga con asistente por WhatsApp.',
    platform: 'android',
    version: '1.1',
    fileLabel: 'APK para Android',
    fileSize: '21 MB',
    downloadUrl: driveDownload('1A9Okdy1UYnNgCuF_VxkBo0-SCE1BOhib'),
    logo: amaraLogo,
    theme: {
      bg: '#05070A',
      surface: '#0B0F14',
      surfaceAlt: '#0D121B',
      border: 'rgba(0, 255, 150, 0.12)',
      text: '#FFFFFF',
      textMuted: '#A1A1AA',
      accent: '#00E676',
      accentText: '#000000',
      highlight: '#00E676',
      font: "'Inter', system-ui, sans-serif",
      fontUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    },
    hero: { type: 'phone', src: amaraPerfiles, alt: 'Panel principal de AMARA con sus perfiles' },
    features: [
      {
        icon: Wallet,
        title: 'Registra gastos e ingresos',
        text: 'Cada movimiento con su monto, su categoría y una descripción, en segundos.',
      },
      {
        icon: CalendarCheck,
        title: 'Gastos fijos y categorías',
        text: 'Carga tus gastos fijos y organiza todo con tus propias categorías.',
      },
      {
        icon: PiggyBank,
        title: 'Bolsillos de ahorro',
        text: 'Separa plata para tus metas: deposita, retira y mira el historial de cada bolsillo.',
      },
      {
        icon: BarChart3,
        title: 'Panel y estadísticas',
        text: 'Tu disponible del mes, tus ingresos y gastos, y la evolución de los últimos meses.',
      },
      {
        icon: Layers,
        title: 'Hogar y negocios',
        text: 'Perfiles para el hogar, para negocios de flujo continuo (tiendas, servicios) y de ciclo productivo (agro, con socios e inversión).',
      },
      {
        icon: MessageCircle,
        title: 'Próximamente en la versión paga: asistente por WhatsApp',
        text: 'No incluido en la versión gratis. Registrarás tus cuentas con una frase, un audio o la foto de un recibo.',
      },
    ],
    steps: [
      'Descarga e instala la app.',
      'Crea tu perfil: hogar o negocio.',
      'Registra tus gastos e ingresos y aparta plata en tus bolsillos.',
    ],
    screenshots: [
      { src: amaraBolsillos, alt: 'Bolsillos de ahorro en AMARA' },
      { src: amaraNuevoGasto, alt: 'Formulario para registrar un gasto en AMARA' },
    ],
    privacy: {
      title: 'Cómo se manejan tus datos',
      points: [
        'Tus datos financieros se guardan en la nube (Supabase) para que puedas verlos desde la app.',
        'El asistente por WhatsApp (versión paga) todavía no está disponible. Cuando llegue, sus mensajes pasarán por la API oficial de WhatsApp Business (Meta) y se procesarán con inteligencia artificial de OpenAI.',
      ],
    },
    faq: [
      { q: '¿Es gratis?', a: 'Sí, esta versión de AMARA es gratuita. El asistente por WhatsApp llegará más adelante en una versión paga.' },
      {
        q: '¿La versión gratis incluye el asistente por WhatsApp?',
        a: 'No. El asistente llegará próximamente en una versión paga. La versión gratis ya te deja registrar tus finanzas, ahorrar en bolsillos y ver tus estadísticas.',
      },
      { q: '¿Funciona en iPhone?', a: 'La app es para Android. En iPhone, por ahora, no se puede instalar.' },
      {
        q: '¿Sirve para mi negocio?',
        a: 'Sí. Además del perfil de hogar, tiene perfiles para negocios con ventas diarias y para negocios por ciclos, como el agro.',
      },
    ],
  },
  {
    slug: 'kenaz',
    name: 'KENAZ',
    tagline: 'Organiza tus negocios desde un botón.',
    description:
      'Una aplicación de escritorio para emprendedores y personas que manejan varios negocios o proyectos a la vez. Un botón flotante, siempre visible en tu pantalla, te da acceso inmediato a todo lo pendiente.',
    platform: 'windows',
    version: '2.3.0',
    fileLabel: 'Instalador para Windows',
    fileSize: '112 MB',
    requirements: 'Windows 10 u 11 de 64 bits',
    downloadUrl: driveDownload('1114yEU05fOagUqZVLyqx19AgyXBznHVM'),
    logo: kenazLogo,
    theme: {
      bg: '#0B0F0E',
      surface: '#121A17',
      surfaceAlt: '#1A2521',
      border: '#1F2D28',
      text: '#ECF5F1',
      textMuted: '#8FA89E',
      accent: '#34D399',
      accentText: '#04130E',
      highlight: '#F5C451',
      font: "'Segoe UI', system-ui, sans-serif",
    },
    hero: { type: 'logo', src: kenazLogo, alt: 'Logo de KENAZ' },
    features: [
      {
        icon: FolderKanban,
        title: 'Un proyecto por negocio',
        text: 'Crea un proyecto por cada negocio y ponle nombre y color.',
      },
      {
        icon: ClipboardCheck,
        title: 'Servicios para clientes',
        text: 'Registra trabajos con cliente, valor total y abonos. KENAZ calcula cuánto te deben.',
      },
      {
        icon: Hammer,
        title: 'Proyectos internos',
        text: 'Mejoras, compras o mantenimiento con presupuesto. Al terminar, te dice si te sobró o te pasaste.',
      },
      {
        icon: History,
        title: 'Cierre e historial',
        text: 'Al terminar cada tarea anotas gastos y detalles, y queda en el historial por proyecto y fecha.',
      },
      {
        icon: Wallet,
        title: 'Cobros',
        text: 'Quién te debe y cuánto, con un botón para registrar pagos al instante.',
      },
      {
        icon: BarChart3,
        title: 'Finanzas por mes',
        text: 'Ingresos, gastos y ganancia de cada proyecto, con una gráfica de los últimos 6 meses.',
      },
      {
        icon: Bell,
        title: 'Avisos',
        text: 'El botón flotante te recuerda las tareas vencidas, las de hoy y las próximas. Puedes silenciarlos o ajustar su frecuencia.',
      },
      {
        icon: GraduationCap,
        title: 'Tutorial integrado',
        text: 'La primera vez, unas burbujas te explican cada pantalla.',
      },
    ],
    steps: [
      'Instala KENAZ en tu computador.',
      'Crea un proyecto por cada negocio.',
      'Registra trabajos y cobros, y deja que el botón flotante te avise.',
    ],
    screenshots: [],
    privacy: {
      title: 'Tus datos nunca salen de tu computador',
      points: [
        'Se guardan solo en tu computador (Documentos\\Tareas Negocios), con copias de respaldo automáticas.',
        'No tiene cuentas, publicidad, analítica ni conexión a internet.',
        'Si la desinstalas, tus datos no se borran.',
      ],
    },
    faq: [
      { q: '¿Es gratis?', a: 'Sí, esta versión de KENAZ es gratuita.' },
      { q: '¿Funciona en Mac?', a: 'No. KENAZ funciona en Windows 10 u 11 de 64 bits.' },
      {
        q: '¿Necesito internet?',
        a: 'No. KENAZ funciona sin conexión y guarda todo en tu computador.',
      },
    ],
  },
  {
    slug: 'mark',
    name: 'MARK',
    tagline: 'Videos para redes, editados por IA.',
    description:
      'Sube tus videos y fotos, cuéntale con tus palabras qué necesitas y MARK arma un video vertical con tu marca, listo para Instagram, TikTok o WhatsApp.',
    platform: 'windows',
    version: '0.3.0',
    fileLabel: 'Programa para Windows',
    fileSize: '104 MB',
    comingSoon: true,
    logo: markSimbolo,
    theme: {
      bg: '#0E0E11',
      surface: '#16161A',
      surfaceAlt: '#1E1E23',
      border: '#33333B',
      text: '#E9E9EC',
      textMuted: '#8B8B95',
      accent: '#D71920',
      accentText: '#FFFFFF',
      highlight: '#FF4D4D',
      font: "'Segoe UI', system-ui, sans-serif",
    },
    hero: { type: 'logo', src: markSimbolo, alt: 'Símbolo de MARK' },
    features: [
      {
        icon: ScanEye,
        title: 'Analiza tus videos',
        text: 'Revisa tus clips con inteligencia artificial para entender qué muestra cada uno.',
      },
      {
        icon: Clapperboard,
        title: 'Arma el plan y edita',
        text: 'Decide escenas, cortes, textos y transiciones, y produce el video por ti.',
      },
      {
        icon: Smartphone,
        title: 'Vertical 9:16',
        text: 'Listo para Reels, TikTok y estados de WhatsApp.',
      },
      {
        icon: Store,
        title: 'Tu marca guardada',
        text: 'Cada negocio con su logo, redes, estilo y llamado a la acción, para no repetirlos en cada video.',
      },
      {
        icon: Music,
        title: 'Música y sonidos',
        text: 'Elige un estilo (tecnológica, energética, elegante o corporativa) o sube tu propia pista.',
      },
      {
        icon: MessageSquareText,
        title: 'Descripciones para publicar',
        text: 'Además del video, te propone textos para acompañarlo en tus redes.',
      },
    ],
    steps: [
      'Sube tus videos, fotos y, si quieres, tu logo.',
      'Escribe con tus palabras el video que necesitas.',
      'MARK lo planea, lo edita y te lo entrega listo para publicar.',
    ],
    screenshots: [],
    privacy: {
      title: 'Tus videos y tu marca',
      points: [
        'Tus proyectos y archivos se guardan en tu computador.',
        'Para entender tus videos, MARK envía algunas imágenes de ellos a un servicio de inteligencia artificial (Anthropic).',
      ],
    },
    faq: [
      {
        q: '¿Cuándo sale MARK?',
        a: 'Estamos terminando de prepararla. Escríbenos por WhatsApp y te avisamos cuando esté lista.',
      },
      { q: '¿En qué computadores funciona?', a: 'MARK es un programa para Windows.' },
      {
        q: '¿Mis videos se suben a internet?',
        a: 'Tus proyectos se guardan en tu computador. Para entender tus videos, MARK envía algunas imágenes de ellos a un servicio de inteligencia artificial.',
      },
    ],
  },
];

export const findApp = (slug: string) => apps.find((app) => app.slug === slug);
