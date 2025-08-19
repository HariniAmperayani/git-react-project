import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import auth0Config from './auth0_config.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const config = auth0Config();
console.log("Auth0 Domain:", config.domain);
console.log("Auth0 ClientId:", config.clientId);


root.render(
  <React.StrictMode>
    <BrowserRouter>
        
    <Auth0Provider

      domain = {config.domain}
      clientId = {config.clientId}
      authorizationParams={{ 
        redirect_uri: window.location.origin + "/cookbook/dashboard",
        audience : config.audience}}
      
    >
      <App />

    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
