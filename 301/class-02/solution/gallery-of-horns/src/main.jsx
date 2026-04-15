// LAB 02 - FEATURE TASKS
// Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.
// run `npm i react-bootstrap bootstrap` in command line to install

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // LAB 02
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

