import { Concept } from '../../modules/principios/interfaces/concept.interface';

/**
 * Conceptos clave del tema "Principios de la Arquitectura de Software",
 * sintetizados a partir del contenido visto en clase.
 */
export const PRINCIPIOS_CONFIG: Concept[] = [
  {
    id: 1,
    title: 'Modularidad',
    summary: 'Dividir el sistema en módulos con una función clara y específica, que puedan desarrollarse, probarse y modificarse de forma independiente.',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Pantallas de una interfaz digital organizadas como módulos',
  },
  {
    id: 2,
    title: 'Cohesión Alta',
    summary: 'Un módulo con alta cohesión agrupa únicamente tareas relacionadas entre sí, con una responsabilidad clara y bien enfocada.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Equipo colaborando alrededor de una mesa de trabajo',
  },
  {
    id: 3,
    title: 'Acoplamiento Bajo',
    summary: 'Mide qué tan dependientes son los módulos entre sí. Con bajo acoplamiento, un módulo puede cambiar sin afectar a los demás.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Placa electrónica que representa conexiones entre componentes',
  },
  {
    id: 4,
    title: 'Separación de Responsabilidades',
    summary: 'Dividir el sistema por tipo de responsabilidad (presentación, lógica de negocio, acceso a datos) evitando mezclar capas.',
    imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Espacio de trabajo dividido en zonas funcionales',
  },
];