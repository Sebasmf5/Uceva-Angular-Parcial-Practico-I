import { Injectable } from '@angular/core';
import { SISTEMAS_DISENO_CONFIG } from '../../../core/config/sistemas-diseno.config';
import { Concept } from '../interfaces/concept.interface';

/**
 * Servicio encargado de exponer el contenido del módulo
 * Sistemas de Diseño, proveniente del Core.
 */
@Injectable({
  providedIn: 'root',
})
export class SistemasDisenoService {
  /**
   * Retorna los conceptos clave del tema.
   */
  getConcepts(): Concept[] {
    return SISTEMAS_DISENO_CONFIG;
  }
}