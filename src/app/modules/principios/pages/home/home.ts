import { Component, OnInit } from '@angular/core';
import { Concept } from '../../interfaces/concept.interface';
import { PrincipiosService } from '../../services/principios.service';

/**
 * Página principal del módulo Principios de la Arquitectura de Software.
 */
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  /** Conceptos que se muestran en la página. */
  concepts: Concept[] = [];

  /** Obtiene el servicio que proporciona los conceptos del módulo. */
  constructor(private principiosService: PrincipiosService) {}

  /** Carga los conceptos al inicializar la página. */
  ngOnInit(): void {
    this.principiosService.getConcepts().subscribe({
      next: (concepts) => {
        this.concepts = concepts;
      },
      error: () => {
        this.concepts = [];
      },
    });
  }
}
