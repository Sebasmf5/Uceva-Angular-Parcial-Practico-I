import { Concept } from '../../modules/sistemas-diseno/interfaces/concept.interface';

/**
 * Conceptos clave del tema "Sistemas de Diseño".
 *
 * La configuración centraliza el contenido sintetizado para que el servicio
 * del módulo pueda consumirlo sin duplicar texto en componentes.
 */
export const SISTEMAS_DISENO_CONFIG: Concept[] = [
  {
    id: 1,
    title: '¿Qué es un Sistema de Diseño?',
    summary:
      'Conjunto de principios, reglas, componentes y patrones reutilizables que ayudan a mantener consistencia visual y funcional en un producto digital.',
  },
  {
    id: 2,
    title: 'Problemas sin un Sistema de Diseño',
    summary:
      'Sin una guía común aparecen interfaces inconsistentes, duplicación de componentes, deuda técnica visual y más dificultad para escalar el producto.',
  },
  {
    id: 3,
    title: 'Diseño Atómico',
    summary:
      'Metodología de Brad Frost que organiza la interfaz en niveles: átomos, moléculas, organismos, plantillas y páginas.',
  },
  {
    id: 4,
    title: 'Átomos',
    summary:
      'Son los elementos básicos de una interfaz, como un botón, un input o un badge. Por sí solos son pequeños, pero sirven como base para piezas mayores.',
  },
  {
    id: 5,
    title: 'Moléculas y Organismos',
    summary:
      'Las moléculas combinan átomos para cumplir una función simple; los organismos agrupan varias piezas y forman secciones completas como un navbar o una tabla.',
  },
];