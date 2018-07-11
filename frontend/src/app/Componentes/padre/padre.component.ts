import { Component, OnInit } from '@angular/core';
import {PadreService} from "../../Servicios/padre.service";

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

 padres = []
  constructor(private _padreService: PadreService) { }

  ngOnInit() {
    this._padreService.getPadres()
      .subscribe(
        res => this.padres = res,
        err => console.log(err)
      )
  }

}
