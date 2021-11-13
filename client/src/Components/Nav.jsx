import React from 'react';
import style from '../Styles/nav.module.css';
import Logo from '../assets/Logo.png';

export default function Nav(){
    return(
        <div className={style.container}>
            <div className="navbar navbar-dark bg-dark ">
                <div className="row d-flex align-items-center" style={{width: '95%', margin: 0}} >
                    <div className="col d-flex">
                        <img src={Logo} alt='logo' className={style.logo}/>
                    </div>
                    {/* <div className="col-7">
                        <form class={style.form}>
                            <input class={style.inputSearch} type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-light" type="submit" style={{margin: 5}}>Search</button>
                        </form>
                    </div> */}
                    <div className="col text-light" style={{display: 'flex', justifyContent: 'end'}}>
                        <h1>=</h1>
                    </div>
                </div>
                
            </div>
        </div>
    )
}