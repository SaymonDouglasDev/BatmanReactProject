import React from 'react'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './styles.css';

function Contato(){
    return (
        <>
            <Header/>
            <div id='banner'></div>
            <div id="contato-container">
            <div id="contato-principal">
                <h1 class="titulocontato">Entre em contato</h1>
                <h6 class="textocontato">responderemos quando possível para retornar as perguntas</h6>               
                    <div class='contact-content'>
                        <label for="email"></label>
                        <input id="email" type="email" name="Email" placeholder="endereço de email" />
                        <label for="text"></label>
                        <input id="nome" type="text" name="Nome" placeholder="nome" />
                        <label for="text"></label>
                        <input id="mensagem" type="text" name="Mensagem" placeholder="mensagem" />

                        <button id="enviarcontato">Enviar</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contato;