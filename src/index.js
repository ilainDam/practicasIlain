import React from 'react';
import ReactDOM from 'react-dom/client';
import Practica2 from './Practica2';
import Practica4 from './Practica4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Practica4 n1={3} n2={4}/>
  </React.StrictMode>
);

