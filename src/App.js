import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/index';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Comentario from './pages/comentario/comentario';

function App() {
  return (
    <> {/*<---- This is a react.fragment*/}
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/contato' element={<Contato />}/>
            <Route path='/fotos' element={<Fotos />}/>
            <Route path='/comentario' element={<Comentario />}/>
          </Routes>
      </BrowserRouter>     
    </>
  );
}

export default App;
