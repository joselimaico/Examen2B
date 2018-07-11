import { Component, OnInit } from '@angular/core';
import {PadreService} from "../../Servicios/padre.service";

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  hijos = []
  constructor(private _hijoService: PadreService) { }

  ngOnInit() {
    this._hijoService.getPadres()
      .subscribe(
        res => this.hijos = res,
        err => console.log(err)
      )
  }


}
