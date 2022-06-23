import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Registrar from './pages/cadastro/carro/carros';
import {Login} from './pages/cadastro/Vaga/login';

import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/Estacionamento" element={<App />} />

      <Route path="/Registrar" element={< Registrar/>} />

    </Routes>
  </BrowserRouter>
);