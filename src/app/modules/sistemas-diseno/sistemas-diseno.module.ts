import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConceptCardComponent } from './components/concept-card/concept-card.component';
import { HomeComponent } from './pages/home/home.component';
import { SistemasDisenoRoutingModule } from './sistemas-diseno-routing.module';

@NgModule({
  declarations: [ConceptCardComponent, HomeComponent],
  imports: [CommonModule, SistemasDisenoRoutingModule],
})
export class SistemasDisenoModule {}