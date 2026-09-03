import { Component, OnInit } from '@angular/core';
import { Concept } from '../../interfaces/concept.interface';
import { SistemasDisenoService } from '../../services/sistemas-diseno.service';

/**
 * Página principal del módulo Sistemas de Diseño.
 * Presenta el listado de conceptos clave del tema.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  /** Conceptos a mostrar en la página */
  concepts: Concept[] = [];

  /** Obtiene el servicio que proporciona los conceptos del módulo. */
  constructor(private sistemasDisenoService: SistemasDisenoService) {}

  /** Carga los conceptos al inicializar la página. */
  ngOnInit(): void {
    this.sistemasDisenoService.getConcepts().subscribe({
      next: (concepts) => {
        this.concepts = concepts;
      },
      error: () => {
        this.concepts = [];
      },
    });
  }
}