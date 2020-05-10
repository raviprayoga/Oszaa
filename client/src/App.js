import React , {Suspense} from 'react';
import AppNavbar from './components/Navbar';
import { Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';



//pages
import HomePage from "./components/views/HomePage.js";
import KatalogPage from "./components/views/KatalogPage.js";
import PromoPage from "./components/views/PromoPage.js";
import AboutPage from "./components/views/AboutPage.js";
import Login from "./components/views/Login";
import Regis from "./components/views/Regis";

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
      </Switch>
    </Suspense>
  );
}

export default App;
