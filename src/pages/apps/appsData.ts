import {
  Activity,
  BarChart3,
  Bell,
  CalendarCheck,
  ClipboardCheck,
  FolderKanban,
  Gift,
  GraduationCap,
  Hammer,
  History,
  Layers,
  ListChecks,
  MessageCircle,
  PiggyBank,
  Receipt,
  Salad,
  Search,
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
    tagline: 'Tus finanzas, con solo escribir.',
    description:
      'Un asistente financiero personal y de negocios al que le hablas por WhatsApp o desde su app, como si fuera una persona. Sin formularios ni menús.',
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
        icon: MessageCircle,
        title: 'Registra con una frase',
        text: '"Gasté 20 mil en almuerzo" o "me pagaron 500 mil" y queda anotado.',
      },
      {
        icon: Search,
        title: 'Pregúntale lo que quieras',
        text: 'Cuánto gastaste, cuánto tienes disponible o el resumen del mes.',
      },
      {
        icon: PiggyBank,
        title: 'Bolsillos de ahorro',
        text: 'Guarda y saca plata para tus metas.',
      },
      {
        icon: CalendarCheck,
        title: 'Cierre de mes',
        text: 'Al terminar el mes, AMARA te pregunta qué hacer con el dinero que sobró.',
      },
      {
        icon: Receipt,
        title: 'Fotos, facturas y notas de voz',
        text: 'Lee fotos de recibos, PDF de facturas y audios: no tienes que escribirlo todo.',
      },
      {
        icon: Layers,
        title: 'Hogar y negocios',
        text: 'Perfiles para el hogar, para negocios de flujo continuo (tiendas, servicios) y de ciclo productivo (agro, con socios e inversión).',
      },
      {
        icon: BarChart3,
        title: 'Panel y estadísticas',
        text: 'En la app ves tu disponible, tus movimientos, estadísticas y ajustes.',
      },
    ],
    steps: [
      'Descarga e instala la app.',
      'Crea tu perfil: hogar o negocio.',
      'Escríbele a AMARA lo que gastas y lo que recibes.',
    ],
    screenshots: [
      { src: amaraBolsillos, alt: 'Bolsillos de ahorro en AMARA' },
      { src: amaraNuevoGasto, alt: 'Formulario para registrar un gasto en AMARA' },
    ],
    privacy: {
      title: 'Cómo se manejan tus datos',
      points: [
        'Tus datos financieros se guardan en la nube (Supabase) para que AMARA pueda responderte desde WhatsApp y desde la app.',
        'Los mensajes por WhatsApp llegan a través de la API oficial de WhatsApp Business (Meta).',
        'Para entender tus mensajes, fotos y audios, AMARA usa un modelo de inteligencia artificial de OpenAI.',
      ],
    },
    faq: [
      { q: '¿Es gratis?', a: 'Sí, esta versión de AMARA es gratuita.' },
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
];

export const findApp = (slug: string) => apps.find((app) => app.slug === slug);
