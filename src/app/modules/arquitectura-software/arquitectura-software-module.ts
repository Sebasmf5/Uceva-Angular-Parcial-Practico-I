import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArquitecturaSoftwareRoutingModule } from './arquitectura-software-routing-module';
import { ConceptCardComponent } from './components/concept-card/concept-card';
import { HomeComponent } from './pages/home/home';


@NgModule({
  declarations: [
    ConceptCardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ArquitecturaSoftwareRoutingModule
  ]
})
export class ArquitecturaSoftwareModule { }
