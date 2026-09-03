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
  standalone: false,
})
export class HomeComponent implements OnInit {
  /** Conceptos a mostrar en la página */
  concepts: Concept[] = [];

  /**
   * Inicializa la página con el servicio de conceptos del módulo.
   * @param arquitecturaSoftwareService Servicio que expone los conceptos.
   */
  constructor(private arquitecturaSoftwareService: ArquitecturaSoftwareService) {}

  /** Carga los conceptos cuando se inicializa la página. */
  ngOnInit(): void {
    this.concepts = this.arquitecturaSoftwareService.getConcepts();
  }
}
