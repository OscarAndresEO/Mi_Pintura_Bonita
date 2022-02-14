import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Producto} from '../../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

@Output() disparadorProducto:EventEmitter<any> = new EventEmitter;
@Output() Productos:EventEmitter<any> = new EventEmitter;

  constructor(private http : HttpClient) { }

  API_P = "http://localhost:3000/api/productos/";

  getProductos(){
    return this.http.get(this.API_P);
  }

  getProducto(id:string, nombre :String){
    return this.http.get(this.API_P+id+","+nombre)
  }

  addProducto(producto : Producto){
    return this.http.post(this.API_P,producto);
  }

  deleteProducto(id:String){
    return this.http.delete(this.API_P+id)
  }

  updateProducto( producto :Producto, id:String){
    return this.http.put(this.API_P+id,producto);
  }
}
