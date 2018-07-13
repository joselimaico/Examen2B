import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Padre} from "../Clases/padre";
//import {PADRES} from "../Clases/mock-padres";
import { Observable, of } from 'rxjs';
import {catchError,map,tap} from "rxjs/operators";
import {Hijo} from "../Clases/hijo";
@Injectable(
   {providedIn: 'root'}
  )
export class PadreService {
  private _padresUrl = "http://localhost:1337/api";
  private _hijoUrl = "http://localhost:1337/aplicaciones";

  constructor(private http: HttpClient) {

  }
  getPadres():Observable<Padre[]> {
    return this.http.get<Padre[]>(this._padresUrl)
      // .pipe(
      //   tap(heroes => this.log('fetched heroes')),
      //   catchError(this.handleError('getPadres', []))
      // );
    //return of(PADRES)
  }

  getPadre(id: number): Observable<Padre> {
    // TODO: send the message _after_ fetching the hero
    const url = `${this._padresUrl}/${id}`;
    console.log(url)
    return this.http.get<Padre>(url)

    //return of(PADRES.find(padre => padre._id === id));
  }



   getHijos():Observable<Hijo[]>{
     return this.http.get<Hijo[]>(this._hijoUrl)
   }

}
