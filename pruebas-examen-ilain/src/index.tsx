import React from 'react';
import ReactDOM from 'react-dom/client';
import JugandoDados from './JugandoDados';
import ActividadComunicacionHijoPadreAleatorios from './ComunicacionHijoPadre/ActividadComunicacionHijoPadreAleatorios';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ActividadComunicacionHijoPadreAleatorios />
  </React.StrictMode>
);

