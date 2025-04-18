import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Only use StrictMode in development for better performance in production
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  process.env.NODE_ENV === 'development' ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  )
);

// Enable web vitals reporting in production
reportWebVitals(process.env.NODE_ENV === 'production' ? console.log : null);
