import React from 'react';
import Nav from '../Components/Nav';
import Catalogo from '../Components/Catalogo'

export default function Home(){
    return(
        <div style={{width: '100vw'}}>
            <Nav></Nav>
            <div style={{margin: 15}}>
                <h2>¡Arma tu pedido!</h2>     
            </div>
            <Catalogo></Catalogo>
        </div>
    )
}