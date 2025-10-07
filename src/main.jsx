import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

  <App />

// Enable web vitals reporting in production
reportWebVitals(process.env.NODE_ENV === 'production' ? console.log : null);
