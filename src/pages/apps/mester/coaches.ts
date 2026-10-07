// Entrenadores de MESTER: nombre, especie, especialidad, color y frase tomados de la app (personajes.json).
import brunoSaludo from '@/assets/images/apps/mester/bruno-saludo.webp';
import brunoCelebra from '@/assets/images/apps/mester/bruno-celebra.webp';
import bunnySaludo from '@/assets/images/apps/mester/bunny-saludo.webp';
import bunnyCelebra from '@/assets/images/apps/mester/bunny-celebra.webp';
import pacoSaludo from '@/assets/images/apps/mester/paco-saludo.webp';
import pacoCelebra from '@/assets/images/apps/mester/paco-celebra.webp';
import lunaSaludo from '@/assets/images/apps/mester/luna-saludo.webp';
import lunaCelebra from '@/assets/images/apps/mester/luna-celebra.webp';
import nalaSaludo from '@/assets/images/apps/mester/nala-saludo.webp';
import nalaCelebra from '@/assets/images/apps/mester/nala-celebra.webp';
import axelSaludo from '@/assets/images/apps/mester/axel-saludo.webp';
import axelCelebra from '@/assets/images/apps/mester/axel-celebra.webp';
import titoSaludo from '@/assets/images/apps/mester/tito-saludo.webp';
import titoCelebra from '@/assets/images/apps/mester/tito-celebra.webp';

export type Coach = {
  id: string;
  name: string;
  species: string;
  specialty: string;
  quote: string;
  style: string;
  // color: el de la app (brillos). text: versión legible sobre fondo oscuro.
  color: string;
  text: string;
  saludo: string;
  celebra: string;
};

export const coaches: Coach[] = [
  {
    id: 'bruno',
    name: 'Bruno',
    species: 'Gorila',
    specialty: 'Fuerza e hipertrofia',
    quote: 'Disciplina construye libertad.',
    style: 'directo, disciplinado y competitivo.',
    color: '#2C5AA0',
    text: '#60A5FA',
    saludo: brunoSaludo,
    celebra: brunoCelebra,
  },
  {
    id: 'bunny',
    name: 'Bunny',
    species: 'Coneja',
    specialty: 'Glúteos, piernas y motivación',
    quote: 'Vamos, tú puedes.',
    style: 'divertida, positiva y energética.',
    color: '#EC4899',
    text: '#F472B6',
    saludo: bunnySaludo,
    celebra: bunnyCelebra,
  },
  {
    id: 'paco',
    name: 'Paco',
    species: 'Panda',
    specialty: 'Principiantes, hábitos y adaptación',
    quote: 'Paso a paso, todo suma.',
    style: 'amigable, divertido, accesible y constante.',
    color: '#4B5563',
    text: '#D1D5DB',
    saludo: pacoSaludo,
    celebra: pacoCelebra,
  },
  {
    id: 'luna',
    name: 'Luna',
    species: 'Loba',
    specialty: 'HIIT, cardio y resistencia',
    quote: 'La intensidad también se entrena.',
    style: 'intensa, segura, competitiva y determinada.',
    color: '#9333EA',
    text: '#C084FC',
    saludo: lunaSaludo,
    celebra: lunaCelebra,
  },
  {
    id: 'nala',
    name: 'Nala',
    species: 'Gata',
    specialty: 'Tonificación, definición y estilo de vida',
    quote: 'Disciplina hoy. Tu mejor versión mañana.',
    style: 'elegante, disciplinada y segura.',
    color: '#D4A017',
    text: '#FACC15',
    saludo: nalaSaludo,
    celebra: nalaCelebra,
  },
  {
    id: 'axel',
    name: 'Axel',
    species: 'Zorro',
    specialty: 'Técnica y entrenamiento inteligente',
    quote: 'Entrena con cabeza, no solo con esfuerzo.',
    style: 'analítico, moderno y minimalista.',
    color: '#F97316',
    text: '#FB923C',
    saludo: axelSaludo,
    celebra: axelCelebra,
  },
  {
    id: 'tito',
    name: 'Tito',
    species: 'Tortuga',
    specialty: 'Movilidad, recuperación y longevidad',
    quote: 'Un cuerpo fuerte también necesita equilibrio.',
    style: 'tranquilo, positivo, relajado y motivador.',
    color: '#22C55E',
    text: '#4ADE80',
    saludo: titoSaludo,
    celebra: titoCelebra,
  },
];
