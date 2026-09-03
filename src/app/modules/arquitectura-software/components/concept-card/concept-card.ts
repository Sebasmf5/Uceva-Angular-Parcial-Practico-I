import { Component, Input } from '@angular/core';
import { Concept } from '../../interface/concept.interface';
/**
 * Muestra un concepto individual (número, título y resumen) en formato de tarjeta.
 */
@Component({
  selector: 'app-concept-card',
  templateUrl: './concept-card.html',
  styleUrls: ['./concept-card.scss'],
})
export class ConceptCardComponent {
  /** Concepto a renderizar en la tarjeta */
  @Input() concept!: Concept;
  /** Número de orden mostrado en la insignia circular */
  @Input() index = 0;
}