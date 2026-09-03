import { CommonModule } from '@angular/common';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { SistemasDisenoModule } from './modules/sistemas-diseno/sistemas-diseno.module';
import { SharedModule } from './modules/shared/shared-module';
import { ArquitecturaSoftwareModule } from './modules/arquitectura-software/arquitectura-software-module';
import { PrincipiosModule } from './modules/principios/principios-module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ArquitecturaSoftwareModule,
    PrincipiosModule,
    SistemasDisenoModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
