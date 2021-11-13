import React from 'react';
import fondo from '../assets/fondo.jpeg';
import Logo from '../assets/Logo.png';
import style from '../Styles/inicio.module.css';
import {Link} from 'react-router-dom'

export default function Inicio(){
    return (
        <div className={style.container}>
            <img src={fondo} alt='fondo' className={style.imageFondo}/>
            <div className={style.cuadro}>
                <img src={Logo} alt='logo' className={style.logo}/>
                <div>
                    <h1>Eligí lo que quieras</h1>
                    <h1>Y envialo!</h1>
                </div>
                <button type="button" className="btn btn-dark" id='buttonDark' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Link to='/home' style={{textDecoration: 'none', color: 'white'}}><h4>Continuar</h4></Link> 
                    <i class="bi bi-arrow-right-short" style={{fontSize: 40}}></i>
                </button>
            </div>
        </div>
    )
}