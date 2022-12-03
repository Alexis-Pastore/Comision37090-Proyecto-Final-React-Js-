import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import './assets/Test.js'
//import './assets/funciones.js';
//comentar para que no se dupliquen los productos una vez cargados

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
    <App />
//  </React.StrictMode>
);
  