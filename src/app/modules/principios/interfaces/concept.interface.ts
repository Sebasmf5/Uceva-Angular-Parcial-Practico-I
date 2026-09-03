/**
 * Representa un concepto clave del tema Principios de la Arquitectura de Software,
 * sintetizado a partir del contenido visto en clase.
 */
export interface Concept {
  /** Identificador único dentro del módulo */
  id: number;
  /** Título corto del concepto */
  title: string;
  /** Explicación breve, en palabras propias */
  summary: string;
}