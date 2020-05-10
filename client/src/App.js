import React , {Suspense} from 'react';
import AppNavbar from './components/Navbar';
import { Route, Switch } from "react-router-dom";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';



//pages
import HomePage from "./components/viewsUser/HomePage/HomePage.js";
import KatalogPage from "./components/viewsUser/KatalogPage.js";
import PromoPage from "./components/viewsUser/PromoPage.js";
import AboutPage from "./components/viewsUser/AboutPage.js";
import Login from "./components/views/Login";
import Regis from "./components/views/Regis";
import KatalogPriaPage from "./components/viewsUser/KatalogPriaPage.js";
import KatalogWanitaPage from "./components/viewsUser/KatalogWanitaPage.js";

function App() { 
  return (
    //<div className="App">
      //<AppNavbar/>
    //</div>
    
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
    </Suspense>
  );
}

export default App;
