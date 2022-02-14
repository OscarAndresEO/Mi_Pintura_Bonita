import {Producto} from './productos';

export interface Bodega{
    ID? : Number;
    NOMBRE?: String;
    DESCRIPCION?: String;
    Bodega_Ventas?: String;
    CREACION?: Date;
    MODIFICACION?: Date;
    agregar_productos?: Producto[];
}