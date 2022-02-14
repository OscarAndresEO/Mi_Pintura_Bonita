import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Producto } from 'src/app/models/productos';
import {ProductosService} from'../../../services/productos/productos.service'

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  constructor(private productosService:ProductosService,private router:Router,private activatedRoute:ActivatedRoute) { }
 
  public producto : Producto = {
    ID:0,
    NOMBRE:'',
    DESCRIPCION :'',
    Precio_Compra: 0,
    Precio_Venta:0,
    CREACION: new Date()
  };

  Id : any ;
  edit : boolean = false;
 

  ngOnInit(): void {
   const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      console.log(params['id'])
      this.productosService.getProducto(params['id'],'0')
      .subscribe(
        res =>{
          console.log(res);
          this.producto = res;
          this.edit = true;
         },
        err => console.error(err)
      )
    }
  }

  

  addProducto(){
    delete this.producto.ID;
    delete this.producto.CREACION;

    this.productosService.addProducto(this.producto)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/productos'])
      },err => console.error(err)
    );
  }

  updateProducto(){
    delete this.producto.CREACION;
    this.Id  = this.producto.ID;
    
    this.productosService.updateProducto(this.producto, this.Id).subscribe(
      res => {
        console.log(this.producto);
        this.router.navigate(['/productos']);
      },
      err => console.error(err)
    );
  }
}
