import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AgregarProductoService {
  constructor(private http : HttpClient) { }
  API_ = "http://localhost:3000/api/productos-bodegas/";

  getProductos_Bodegas(){
    return this.http.get(this.API_);
  }
  getProducto_Bodega(id : String){
    return this.http.get(this.API_+id);
  }
  /*
  getBodega(id:string, bodega:String){
    return this.http.get(this.API_+id+","+bodega)
  }

  addBodega(bodega : Bodega){
    return this.http.post(this.API_,bodega);
  }

  deleteBodega(id:String){
    return this.http.delete(this.API_+id)
  }

  updateBodega( bodega :Bodega, id:String){
    return this.http.put(this.API_+id,bodega);
  }*/
}
