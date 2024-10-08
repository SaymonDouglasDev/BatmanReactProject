import React from 'react';
import Header from '../../components/header/header';
import './styles.css';
import Video from '../../assets/BatmanMainTrailer.mp4';
import Cards from '../../components/cards/index';
import Footer from '../../components/footer/footer';

function Home(){
    return (
        <>
            <Header/>
            <div id='banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                        <source src={Video}/>
                        Seu navegador não possuí suporte para vídeos.
                    </video>
                    <div id='sinopse'>
                        <p className='description'>
                            Após dois anos espreitando as ruas como Batman, Bruce Wayne 
                            se encontra nas profundezas mais sombrias de Gotham City. 
                            Com poucos aliados confiáveis, o vigilante solitário se 
                            estabelece como a personificação da vingança para a população.
                        </p>
                        <div className='first-button'>
                            <button className='button'>Comprar Ingressos</button>
                        </div>
                    </div>
                </div>    
            </div>
            <Cards/>
            <Footer/>
        </>
    )
}

export default Home;