import React from "react";
import './styles.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/BatmanLogo.jpg';

function Header(){
    return (
        <>
        <header>
            <img id="logo" src={logo}/>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='contato'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='comentario'>
                        <li>Comentario</li>
                    </Link>
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Header;