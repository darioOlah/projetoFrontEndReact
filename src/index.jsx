import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.css';

import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './Routes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AuthProvider from './Providers/AuthContext';
import ThemeProvider from './Providers/ThemeProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));

//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <AppRoutes />
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
