import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  getConcepts(): Observable<Concept[]> {
    return of(SISTEMAS_DISENO_CONFIG);
  }
}