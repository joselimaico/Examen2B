import { Component, OnInit } from '@angular/core';
import {PadreService} from "../../Servicios/padre.service";
import {Hijo} from "../../Clases/hijo";

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  hijos:Hijo[]
  constructor(private _service: PadreService) { }

  ngOnInit() {
    // this._service.getHijos()
    //   .subscribe(
    //     res => this.hijos = res,
    //     err => console.log(err)
    //   )
    this.getHijos()

  }

  getHijos():void{
    this._service.getHijos()
      .subscribe(hijos => this.hijos = hijos);
  }

}
