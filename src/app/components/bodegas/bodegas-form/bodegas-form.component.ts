import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'

import { Bodega } from 'src/app/models/bodegas';
import {BodegasService} from 'src/app/services/bodegas/bodegas.service'

@Component({
  selector: 'app-bodegas-form',
  templateUrl: './bodegas-form.component.html',
  styleUrls: ['./bodegas-form.component.css']
})
export class BodegasFormComponent implements OnInit {

  constructor(private bodegaService:BodegasService,private router:Router,private activatedRoute:ActivatedRoute) { }
 
  public bodega : Bodega = {
    ID:0,
    NOMBRE:'',
    DESCRIPCION :'',
    Bodega_Ventas:'',
    CREACION: new Date()
  };

  Id : any ;
  edit : boolean = false;
 

  ngOnInit(): void {
   const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.bodegaService.getBodega(params['id'],'0')
      .subscribe(
        res =>{
          console.log(res);
          this.bodega = res;
          this.edit = true;
         },
        err => console.error(err)
      )
    }
  }

  

  addBodega(){
    delete this.bodega.ID;
    delete this.bodega.CREACION;

    this.bodegaService.addBodega(this.bodega)
    .subscribe(
      res => {
        console.log(this.bodega);
        this.router.navigate(['/bodegas'])
      },err => console.error(err)
    );
  }

  updateBodega(){
    delete this.bodega.CREACION;
    this.Id  = this.bodega.ID;
    
    this.bodegaService.updateBodega(this.bodega, this.Id).subscribe(
      res => {
        console.log(this.bodega);
        this.router.navigate(['/bodegas']);
      },
      err => console.error(err)
    );
  }

}
