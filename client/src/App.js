import React , {Suspense} from 'react';
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';


//pages
import HomePage from "./components/viewsUser/HomePage.js";
import KatalogPage from "./components/viewsUser/KatalogPage.js";
import PromoPage from "./components/viewsUser/PromoPage.js";
import AboutPage from "./components/viewsUser/AboutPage.js";
import Login from "./components/auth/Login";
import Regis from "./components/auth/Regis";
import KatalogPriaPage from "./components/viewsUser/KatalogPriaPage.js";
import KatalogWanitaPage from "./components/viewsUser/KatalogWanitaPage.js";



function App() { 
  library.add(faMapMarkerAlt, faPhoneAlt, faEnvelope, faInstagram, faTwitter, faFacebook);
  return (
    <Router>
  <div className="App">
    <Suspense fallback={(<div>Loading...</div>)}>
    <AppNavbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/katalog" component={KatalogPage} />
          <Route exact path="/promo" component={PromoPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/regis" component={Regis} />
          <Route exact path="/pria" component={KatalogPriaPage} />
          <Route exact path="/wanita" component={KatalogWanitaPage} />
        </Switch>
        <Footer />
    </Suspense>
    </div>
    </Router>
    
  );
}




export default App;
