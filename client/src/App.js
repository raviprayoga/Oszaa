import React , {Suspense} from 'react';
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import {faMapMarkerAlt, 
        faPhoneAlt, 
        faEnvelope,
        faSearch, 
        faUser, 
        faShoppingCart, 
        faCopyright,
        faCaretDown,
        faStar, 
} from '@fortawesome/free-solid-svg-icons';
import {faInstagram, 
        faTwitter, 
        faFacebook
} from '@fortawesome/free-brands-svg-icons';
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
import KatalogIn1 from "./components/viewsUser/KatalogIn1.js";
import KatalogIn2 from "./components/viewsUser/KatalogIn2.js";
import KatalogIn3 from "./components/viewsUser/KatalogIn3.js";
import KatalogIn4 from "./components/viewsUser/KatalogIn4.js";
import KatalogIn5 from "./components/viewsUser/KatalogIn5.js";
import KatalogIn6 from "./components/viewsUser/KatalogIn6.js";
import KatalogIn7 from "./components/viewsUser/KatalogIn7.js";
import KatalogIn8 from "./components/viewsUser/KatalogIn8.js";
import KatalogIn9 from "./components/viewsUser/KatalogIn9.js";
import KatalogIn10 from "./components/viewsUser/KatalogIn10.js";
import KatalogIn11 from "./components/viewsUser/KatalogIn11.js";
import AksesorisPage from "./components/viewsUser/AksesorisPage.js";
import AksesorisIn1 from "./components/viewsUser/AksesorisIn1.js";
import AksesorisIn2 from "./components/viewsUser/AksesorisIn2.js";
import AksesorisIn3 from "./components/viewsUser/AksesorisIn3.js";
import AksesorisIn4 from "./components/viewsUser/AksesorisIn4.js";
import AksesorisIn5 from "./components/viewsUser/AksesorisIn5.js";
import AksesorisIn6 from "./components/viewsUser/AksesorisIn6.js";
import AksesorisIn7 from "./components/viewsUser/AksesorisIn7.js";
import AksesorisIn8 from "./components/viewsUser/AksesorisIn8.js";
import AksesorisIn9 from "./components/viewsUser/AksesorisIn9.js";
import Cekout from "./components/viewsUser/cekout";
import Cekout2 from "./components/viewsUser/cekout2";
import Cekout3 from "./components/viewsUser/cekout3";

function App() { 
  library.add(faMapMarkerAlt, 
              faPhoneAlt, 
              faEnvelope, 
              faInstagram, 
              faTwitter, 
              faFacebook,
              faSearch, 
              faUser, 
              faShoppingCart, 
              faCopyright,
              faCaretDown,
              faStar);
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
        <Route exact path="/katalog/pria" component={KatalogPriaPage} />
        <Route exact path="/katalog/wanita" component={KatalogWanitaPage} />
        <Route exact path="/katalog/detail/1" component={KatalogIn1} />
        <Route exact path="/katalog/detail/2" component={KatalogIn2} />
        <Route exact path="/katalog/detail/3" component={KatalogIn3} />
        <Route exact path="/katalog/detail/4" component={KatalogIn4} />
        <Route exact path="/katalog/detail/5" component={KatalogIn5} />
        <Route exact path="/katalog/detail/6" component={KatalogIn6} />
        <Route exact path="/katalog/detail/7" component={KatalogIn7} />
        <Route exact path="/katalog/detail/8" component={KatalogIn8} />
        <Route exact path="/katalog/detail/9" component={KatalogIn9} />
        <Route exact path="/katalog/detail/10" component={KatalogIn10} />
        <Route exact path="/katalog/detail/11" component={KatalogIn11} />
        <Route exact path="/aksesoris" component={AksesorisPage} />
        <Route exact path="/aksesoris/detail/1" component={AksesorisIn1} />
        <Route exact path="/aksesoris/detail/2" component={AksesorisIn2} />
        <Route exact path="/aksesoris/detail/3" component={AksesorisIn3} />
        <Route exact path="/aksesoris/detail/4" component={AksesorisIn4} />
        <Route exact path="/aksesoris/detail/5" component={AksesorisIn5} />
        <Route exact path="/aksesoris/detail/6" component={AksesorisIn6} />
        <Route exact path="/aksesoris/detail/7" component={AksesorisIn7} />
        <Route exact path="/aksesoris/detail/8" component={AksesorisIn8} />
        <Route exact path="/aksesoris/detail/9" component={AksesorisIn9} />
        <Route exact path="/keranjang/cekout" component ={Cekout} />
        <Route exact path="/keranjang/cekout2" component ={Cekout2} />
        <Route exact path="/keranjang/cekout3" component ={Cekout3} />
      </Switch>
      <Footer />
    </Suspense>
    </div>
    </Router>
    
  );
}




export default App;
