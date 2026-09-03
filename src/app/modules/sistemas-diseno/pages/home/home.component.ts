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

  constructor(private sistemasDisenoService: SistemasDisenoService) {}

  ngOnInit(): void {
    this.concepts = this.sistemasDisenoService.getConcepts();
  }
}