import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';

import { ProductosFormComponent } from './components/productos/productos-form/productos-form.component';
import { ProductosListComponent } from './components/productos/productos-list/productos-list.component';

import { BodegasFormComponent } from './components/bodegas/bodegas-form/bodegas-form.component';
import { BodegasListComponent } from './components/bodegas/bodegas-list/bodegas-list.component';

import {ProductosService} from './services/productos/productos.service';
import {BodegasService} from './services/bodegas/bodegas.service';
import { ProductosBodegasListComponent } from './components/productos-bodegas/productos-bodegas-list/productos-bodegas-list.component';
import { ProductosBodegasFormComponent } from './components/productos-bodegas/productos-bodegas-form/productos-bodegas-form.component';
import { AgregarProductoService } from './services/agregar-producto/agregar-producto.service';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    ProductosFormComponent,
    ProductosListComponent,
    BodegasFormComponent,
    BodegasListComponent,
    ProductosBodegasListComponent,
    ProductosBodegasFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BodegasService,ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
