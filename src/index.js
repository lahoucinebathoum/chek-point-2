import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Création de la racine React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mesure des performances
reportWebVitals();
