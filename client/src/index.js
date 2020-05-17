import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppAdmin from './AppAdmin';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

// import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(
 <BrowserRouter>
  <AppAdmin />
  <App />
  
 
 </BrowserRouter>
 , document.getElementById('root'));

serviceWorker.unregister();
