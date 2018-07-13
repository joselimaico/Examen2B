import {Component, OnInit} from '@angular/core';
import {Usuario} from "./Clases/usuario";
import {PadreService} from "./Servicios/padre.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'app';
  usuario:Usuario[]
  constructor(private _padreService: PadreService,){

  }

  ngOnInit() {
    // this._padreService.getPadres()
    //   .subscribe(
    //     res => this.padres = res,
    //     err => console.log(err)
    //   )
    this.getUsuario()

  }

  getUsuario(){
    this._padreService.getUsuario()
      .subscribe(usuario => this.usuario = usuario);

  }
}
