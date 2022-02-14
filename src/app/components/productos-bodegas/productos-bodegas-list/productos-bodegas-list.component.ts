import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgregarProductoService } from 'src/app/services/agregar-producto/agregar-producto.service';

@Component({
  selector: 'app-productos-bodegas-list',
  templateUrl: './productos-bodegas-list.component.html',
  styleUrls: ['./productos-bodegas-list.component.css']
})
export class ProductosBodegasListComponent implements OnInit {
  Productos_Bodega: any = []
  descripcion: string = '';
  nombreBodega: string = '';

  constructor(private agregarService: AgregarProductoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.agregarService.getProducto_Bodega(params['id'])
        .subscribe(
          res => {
            this.Productos_Bodega = res;
            this.descripcion = this.Productos_Bodega[0].Descripcion_Bodega;
            this.nombreBodega = this.Productos_Bodega[0].Nombre_Bodega;
            this.unaBodega = true;
            this.todas = false;
          },
          err => console.log(err)
        )
    }
    this.getProductos_Bodegas();
  }

  unaBodega: boolean = false;
  todas: boolean = true;

  getProductos_Bodegas() {
    


      /*
      this.agregarService.getProductos_Bodegas().subscribe((res: any) => {
        this.Productos_Bodega = res;
        let bodegas : any;
        for(let i = 0; i < this.Productos_Bodega.length; i ++){
          let y = 0;
          if( this.Productos_Bodega[i+1] === this.Productos_Bodega[i]){
            this.Productos_Bodega[i] = res[i].
          }
        }
      })
      /*this.agregarService.getProductos_Bodegas().subscribe(res => {
          this.Productos_Bodega = res;
  
        },
        err => console.log(err)
      );
      this.agregarService.getProductos_Bodegas().subscribe((res: any) => {
        this.Productos_Bodega = res;
        let bodega : any;
        let contado = 0;
        for(let i=0; i<this.Productos_Bodega.length; i++){
          bodega = res[i].bodegaID;
          console.log('for de bodegas', bodega);
          if(bodega == bodega){
            console.log('las bodegas se repite');
          }
        }
        
        this.nombreBodega =  res[0].Nombre_Bodega;
        this.descripcion =  res[0].Descripcion_Bodega
        console.log('Informacion de bodegas ==>', this.Productos_Bodega);
      });*/
    
  }

}


