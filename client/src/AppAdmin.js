import React , {Suspense} from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/viewAdmin/dashboard";
import LoginAdmin from './components/viewAdmin/LoginAdmin';
import User from './components/viewAdmin/Data_user';


function AppAdmin() { 
  
    return (
        <div className="AppAdmin">
            <Suspense fallback={(<div>Loading...</div>)}>
                <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/adminlogin" component={LoginAdmin}/>
                <Route exact path="/user" component={User} />
                </Switch>
            </Suspense>
            
        </div>
      
    );
  }
  export default AppAdmin;