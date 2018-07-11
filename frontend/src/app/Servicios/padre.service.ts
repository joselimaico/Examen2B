import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable(
  // {providedIn: 'root'}
  )
export class PadreService {
  private _padreUrl = "http://localhost:1337/api/padres";
  private _hijoUrl = "http://localhost:1337/api/hijos";

  constructor(private http: HttpClient) {

  }
  getPadres() {
    return this.http.get<any>(this._padreUrl)
  }

  getHijos(){
    return this.http.get<any>(this._hijoUrl)
  }

}
