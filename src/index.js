import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter here
import App from './App.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap BrowserRouter only here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
