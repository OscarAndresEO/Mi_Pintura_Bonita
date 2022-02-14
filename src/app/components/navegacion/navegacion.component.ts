import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ProductosService} from 'src/app/services/productos/productos.service';
import {BodegasService} from 'src/app/services/bodegas/bodegas.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  public navProductos : boolean = false;
  navBodegas : boolean = false;
  miPintura : boolean = true;
  navProductos_Bodegas :boolean = false;

  constructor(private router : Router, private serviceProducto:ProductosService,private serviceBodega:BodegasService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
                     
  }
  productoB: any = {
    nombre: ''
  }
  
  bodegaB:any = {
    nombre:''
  }
  
  
  productos(){
    this.navProductos = true;
    this.navBodegas   = false;
    this.miPintura   = false;
    this.navProductos_Bodegas   = false;
    this.router.navigate(['/productos']);
  }
  bodegas(){
    this.navProductos  = false;
    this.navBodegas   = true;
    this.miPintura   = false;
    this.navProductos_Bodegas   = false;
    this.router.navigate(['/bodegas']);
  }

  productos_bodega(){
    this.navProductos = false;
    this.navBodegas   = false;
    this.miPintura   = false;
    this.navProductos_Bodegas   = true;
    this.router.navigate(['/productos-bodega']);
  }

  bucarProducto(){
    this.serviceProducto.disparadorProducto.emit({
      name: this.productoB.nombre
    });
  }

  losProductos(){
    this.serviceProducto.Productos.emit({
      todos:false
    });
    this.router.navigate(['/productos']);
  }

  bucarBodega(){
    this.serviceBodega.disparadorBodegas.emit({
      name: this.bodegaB.nombre
    });
    console.log(this.bodegaB.nombre)
  }

  lasBodegas(){
    this.serviceBodega.Bodegas.emit({
      todos:false
    });
    this.router.navigate(['/bodegas']);
  }
}
