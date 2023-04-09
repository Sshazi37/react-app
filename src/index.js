import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Header />
    <AppRoutes />
  </BrowserRouter>
  // </React.StrictMode>
);
reportWebVitals();
