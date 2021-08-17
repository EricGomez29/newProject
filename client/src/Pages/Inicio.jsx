import React from 'react';
import fondo from '../assets/fondo.jpeg';
import Logo from '../assets/Logo.png';
import '../Styles/inicio.css';

export default function Inicio(){
    return (
        <div className='container'>
            <img src={fondo} alt='fondo' className='imageFondo'/>
            <div className='cuadro'>
                <img src={Logo} alt='logo' className='logo'/>
                <div>
                    <h1>Eligí lo que quieras</h1>
                    <h1>Y envialo!</h1>
                </div>
                <button type="button" class="btn btn-dark" id='buttonDark'>
                    <h4>Continuar</h4> 
                    <i class="bi bi-arrow-right-short" style={{fontSize: 40}}></i>
                </button>
            </div>
        </div>
    )
}