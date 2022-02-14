import {  HostBinding,Component, OnInit } from '@angular/core';
import { BodegasService } from '../../../services/bodegas/bodegas.service';
@Component({
  selector: 'app-bodegas-list',
  templateUrl: './bodegas-list.component.html',
  styleUrls: ['./bodegas-list.component.css']
})
export class BodegasListComponent implements OnInit {

  constructor(private bodegaService : BodegasService) { }

  bodegaBuscar ='';

  ngOnInit(): void {
    this.bodegaService.disparadorBodegas.subscribe(name => {
      this.bodegaBuscar = name.name;
      this.getBodegas();
    });

    this.bodegaService.Bodegas.subscribe(todos => {
      this.bodegaBuscar ="";
      this.getBodegas();
    });
    
    this.getBodegas();
  }
  //Para que cada tarjeta aparezca a la par
  @HostBinding('class') classes = 'row';

  Bodegas: any = []
  Id='0';
  buscar = false;

  getBodegas() {
    if(this.bodegaBuscar === ""){
      this.bodegaService.getBodegas().subscribe(
      res => {
        this.Bodegas = res;
        this.buscar = false;
      },
      err => {
        console.log(err);
      }
    )
  }else{
    console.log(this.bodegaBuscar)
    this.bodegaService.getBodega(this.Id, this.bodegaBuscar).subscribe(
        res => {
          this.buscar = true;
          this.Bodegas = res;
        },
        err => console.log(err)
      );
  }}

  deleteBodega(id: String) {
    console.log(id)
    this.bodegaService.deleteBodega(id).subscribe(
      res => {
        console.log(res);
        this.getBodegas();
      },err => console.error(err)
    );
  }
}

