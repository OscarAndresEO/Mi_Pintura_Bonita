import { EventEmitter, Injectable , Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Bodega} from '../../models/bodegas';

@Injectable({
  providedIn: 'root'
})
export class BodegasService {
  
@Output() disparadorBodegas:EventEmitter<any> = new EventEmitter;
@Output() Bodegas:EventEmitter<any> = new EventEmitter;

  constructor(private http : HttpClient) { }
  API_B = "http://localhost:3000/api/bodegas/";

  getBodegas(){
    return this.http.get(this.API_B);
  }

  getBodega(id:string, bodega:String){
    return this.http.get(this.API_B+id+","+bodega)
  }

  addBodega(bodega : Bodega){
    return this.http.post(this.API_B,bodega);
  }

  deleteBodega(id:String){
    return this.http.delete(this.API_B+id)
  }

  updateBodega( bodega :Bodega, id:String){
    return this.http.put(this.API_B+id,bodega);
  }
}
