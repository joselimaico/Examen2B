import {Component, Input, OnInit} from '@angular/core';
import {PadreService} from "../../Servicios/padre.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import { Location } from '@angular/common';
import {Padre} from "../../Clases/padre";

@Component({
  selector: 'app-descripcion-padre',
  templateUrl: './descripcion-padre.component.html',
  styleUrls: ['./descripcion-padre.component.css']
})
export class DescripcionPadreComponent implements OnInit {


  @Input() padre:Padre

  constructor(private _service:PadreService,
              private route:ActivatedRoute,
              private _location: Location) {
  }

  ngOnInit() {
    // this._service.getPadres()
    //   .subscribe(
    //     res => this.padres= res,
    //     err => console.log(err)
    //   )

    //console.log(this.padres)
    // this.route.paramMap.subscribe(
    //   (params:ParamMap)=>{
    //     let id = params.get('id');
    //     this.idPadre =id;
    //     console.log(this.idPadre);
    //
    //   }
    // )
    // this.selectPadre(this.idPadre)
    this.getPadre()
  }
  // selectPadre(id:string){
  //   console.log(this.padres)
  //   let padre= [this.padres.find( dad => dad._id===id)]
  //   console.log(padre)
  //   this.descripcionPadre=padre
  //   //console.log("padre encontrado: ",this.descripcionPadre)
  //
  //
  //
  // }

  getPadre(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._service.getPadre(id)
      .subscribe(padre => this.padre = padre);
  }

  goBack(): void {
    this._location.back();
  }

}


