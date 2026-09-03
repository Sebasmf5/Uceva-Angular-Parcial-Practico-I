import { Component, Input } from '@angular/core';
import { Concept } from '../../interfaces/concept.interface';

/**
 * Muestra un concepto individual de principios de arquitectura.
 */
@Component({
  selector: 'app-concept-card',
  standalone: false,
  templateUrl: './concept-card.html',
  styleUrl: './concept-card.scss',
})
export class ConceptCard {
  /** Concepto que se renderiza en la tarjeta. */
  @Input() concept!: Concept;

  /** Número de orden que se muestra en la insignia. */
  @Input() index = 0;
}
