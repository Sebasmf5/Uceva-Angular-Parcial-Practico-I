import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArquitecturaSoftwareRoutingModule } from './arquitectura-software-routing-module';
import { ConceptCardComponent } from './components/concept-card/concept-card';


@NgModule({
  declarations: [
    ConceptCardComponent
  ],
  imports: [
    CommonModule,
    ArquitecturaSoftwareRoutingModule
  ]
})
export class ArquitecturaSoftwareModule { }
