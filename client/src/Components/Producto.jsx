import React from 'react';
import foto from '../assets/fondo.jpeg'
import style from '../Styles/producto.module.css';
import paquete from '../jsonPrueba/paquetes.json';
import medios from '../jsonPrueba/medios.json';
import cuartos from '../jsonPrueba/cuartos.json';

export default function Producto({nombre, img, descripcion, cant}){

    function cantidad(){
        if(cant === "paquete"){
            return(
            <div >
                <select class="form-select" aria-label="Default select example">
                    {paquete.paquetes.map(m => {
                        return <option value="1">{m}</option>
                    })} 
                </select>
            </div>
            )
        }
        else if(cant === "1/2kg"){
            return(
                <div>
                    <select class="form-select" aria-label="Default select example">
                        {medios.medios.map(m => {
                            return <option value="1">{m}</option>
                        })} 
                    </select>
                </div>
            )
        }
        else if(cant === '1/4kg'){
            return(
                <div>
                    <select class="form-select" aria-label="Default select example">
                        {cuartos.cuartos.map(c => {
                            return <option value="1">{c}</option>
                        })} 
                    </select>
                </div>
            )
        }
    }


    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className={style.contenedor}>
                <hr></hr>
                <h2>- {nombre} -</h2>
                <img alt='foto' src={foto} width='100%'/>
                <h6 style={{color: 'gray'}}>{descripcion}</h6>
                <div className='row' >
                    <div className='col'>
                        {cantidad()}
                    </div>
                
                    <div className='col'>
                        <button className='btn btn-outline-success'>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}