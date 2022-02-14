import { HostBinding, Component, OnInit, Input } from '@angular/core';
import { ProductosService } from '../../../services/productos/productos.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  constructor(private productoService: ProductosService) { }

  productoBuscar = '';

  ngOnInit(): void {
    this.productoService.disparadorProducto.subscribe(name => {
      this.productoBuscar = name.name;
      this.getProductos();
    });

    this.productoService.Productos.subscribe(todos => {
      this.productoBuscar ="";
      this.getProductos();
    });

    this.getProductos();
  }

  //Para que cada tarjeta aparezca a la par
  @HostBinding('class') classes = 'row';


  productos: any = [];
  buscar : boolean = false;
  Id = '0';

  getProductos() {
    if (this.productoBuscar === "") {

      this.productoService.getProductos().subscribe(
        res => {
          this.productos = res;
          this.buscar = false;
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.productoService.getProducto(this.Id, this.productoBuscar).subscribe(
        res => {
          this.buscar = true;
          this.productos = res;
        },
        err => console.log(err)
      );
    }
  }

  deleteProducto(id: String) {
    this.productoService.deleteProducto(id).subscribe(
      res => {
        console.log(res);
        this.getProductos();
      }, err => console.log(err)
    );
  }
}
