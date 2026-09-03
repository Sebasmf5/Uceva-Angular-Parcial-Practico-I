import { Component, OnInit } from '@angular/core';
import { Concept } from '../../interface/concept.interface';
import { ArquitecturaSoftwareService } from '../../services/arquitectura-software';

/**
 * Página principal del módulo Arquitectura de Software.
 * Presenta el listado de conceptos clave del tema.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent implements OnInit {
  /** Conceptos a mostrar en la página */
  concepts: Concept[] = [];

  constructor(private arquitecturaSoftwareService: ArquitecturaSoftwareService) {}

  ngOnInit(): void {
    this.concepts = this.arquitecturaSoftwareService.getConcepts();
  }
}
