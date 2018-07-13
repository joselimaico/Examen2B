import {Component, Input, OnInit} from '@angular/core';
import {PadreService} from "../../Servicios/padre.service";
import {Hijo} from "../../Clases/hijo";
import {ActivatedRoute} from "@angular/router";
import {Padre} from "../../Clases/padre";

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent implements OnInit {

  hijos:Hijo[]
  constructor(private _service: PadreService,
              private route:ActivatedRoute) { }

  ngOnInit() {


      this.getHijos()




  }

  getHijos():void{
    this._service.getHijos()
      .subscribe(hijos => this.hijos = hijos);
    console.log(this.hijos)
  }

  // getHijo(): void {
  //   //const id = +this.route.snapshot.paramMap.get('id');
  //   this._service.getHijo(this.id)
  //     .subscribe(hijo => this.hijo = hijo);
  // }

}
