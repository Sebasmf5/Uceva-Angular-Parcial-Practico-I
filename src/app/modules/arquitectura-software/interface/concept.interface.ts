/**
 * Representa un concepto clave del tema Arquitectura de Software,
 * sintetizado a partir del contenido visto en clase y en las diapositivas que se
 * encuentran en el moodle
 */
export interface Concept {
  /** Identificador único dentro del módulo */
  id: number;
  /** Título corto del concepto */
  title: string;
  /** Explicación breve, en palabras propias */
  summary: string;
  /** Categoría o parte del tema a la que pertenece */
  category: string;
  /** URL de la imagen asociada al concepto */
  imageUrl: string;
}