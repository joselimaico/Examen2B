import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";

export const RUTAS_APP: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path:'Home',
    component: AppComponent
  },



];
