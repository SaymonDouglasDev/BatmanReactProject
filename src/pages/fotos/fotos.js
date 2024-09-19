import React from 'react'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Pictures from '../../components/pictures/pictures';
import './styles.css';

function Fotos(){
    return (
        <>
            <Header/>
            <Pictures/>
            <div className='fotos-button'>
                <button className='button'>Comprar Ingressos</button>
            </div>
            <Footer/>
        </>
    )
}

export default Fotos;