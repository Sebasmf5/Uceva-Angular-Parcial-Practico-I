import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipiosRoutingModule } from './principios-routing-module';
import { ConceptCard } from './components/concept-card/concept-card';
import { Home } from './pages/home/home';


@NgModule({
  declarations: [
    ConceptCard,
    Home
  ],
  imports: [
    CommonModule,
    PrincipiosRoutingModule
  ]
})
export class PrincipiosModule { }
