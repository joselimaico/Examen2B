import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './Componentes/buscador/buscador.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { PadreComponent } from './Componentes/padre/padre.component';
import {PadreService} from "./Servicios/padre.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule,} from "@angular/common/http";
import { HijoComponent } from './Componentes/hijo/hijo.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes";
import {FindService} from "./Servicios/find.service";
@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    ),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    PadreService,FindService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
