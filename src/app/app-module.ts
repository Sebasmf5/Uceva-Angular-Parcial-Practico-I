import { CommonModule } from '@angular/common';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared-module';
import { ArquitecturaSoftwareModule } from './modules/arquitectura-software/arquitectura-software-module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ArquitecturaSoftwareModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
