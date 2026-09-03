import { Injectable } from '@angular/core';
import { Concept } from '../interfaces/concept.interface';
import { PRINCIPIOS_CONFIG } from '../../../core/config/principios.config';

/**
 * Servicio encargado de exponer el contenido del módulo
 * Principios de la Arquitectura de Software, proveniente del Core.
 */
@Injectable({ providedIn: 'root' })
export class PrincipiosService {
  /**
   * Retorna los conceptos clave del tema.
   */
  getConcepts(): Concept[] {
    return PRINCIPIOS_CONFIG;
  }
}