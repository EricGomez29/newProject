import React from 'react';
import products from '../jsonPrueba/productos.json';
import Producto from './Producto';

var arrayProducts = products.products

export default function Catalogo(){
    return(
        <div>
            {arrayProducts.map(p => {
                return <Producto 
                nombre={p.nombre}
                imagen={p.img}
                descripcion={p.descripcion}
                cant={p.cant}/>
            })}
        </div>
    )
}