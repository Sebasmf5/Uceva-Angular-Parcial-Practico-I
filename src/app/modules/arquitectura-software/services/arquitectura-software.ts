import { Injectable } from '@angular/core';
import { Concept } from '../interface/concept.interface';
import { ARQUITECTURA_SOFTWARE_CONFIG } from '../../../core/config/arquitectura-software.config';

/**
 * Servicio encargado de exponer el contenido del módulo
 * Arquitectura de Software, proveniente del Core.
 */
@Injectable({ providedIn: 'root' })
export class ArquitecturaSoftwareService {
  /**
   * Retorna los conceptos clave del tema.
   */
  getConcepts(): Concept[] {
    return ARQUITECTURA_SOFTWARE_CONFIG;
  }
}