import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductosListComponent } from './components/productos/productos-list/productos-list.component';
import { ProductosFormComponent } from './components/productos/productos-form/productos-form.component';
import {BodegasListComponent} from './components/bodegas/bodegas-list/bodegas-list.component';
import {BodegasFormComponent} from './components/bodegas/bodegas-form/bodegas-form.component';
import {ProductosBodegasListComponent} from './components/productos-bodegas/productos-bodegas-list/productos-bodegas-list.component';
import {ProductosBodegasFormComponent} from './components/productos-bodegas/productos-bodegas-form/productos-bodegas-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: ProductosListComponent
  },
  {
    path: 'producto/add',
    component: ProductosFormComponent
  },
  {
    path: 'producto/edit/:id',
    component: ProductosFormComponent
  },
  {
    path: 'bodegas',
    component: BodegasListComponent
  },
  {
    path: 'bodega/add',
    component: BodegasFormComponent
  },
  {
    path: 'bodega/edit/:id',
    component: BodegasFormComponent
  },
  {
    path: 'productos-bodega',
    component: ProductosBodegasListComponent
  },
  {
    path: 'productos-bodega/:id',
    component: ProductosBodegasListComponent
  },
  {
    path: 'productos-bodega/add',
    component: ProductosBodegasFormComponent
  },
  {
    path: 'productos-bodega/edit/:id',
    component: ProductosBodegasFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
