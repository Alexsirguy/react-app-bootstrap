import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Index from  "../views/index"

import DashboardRoutes from "./dashboard";

import Logout from "../views/logout";
import Home from "../views/dashboard/home";

export default function Routes() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Index}/>
         
            <Route path="/logout" component={Logout}/>
            <DashboardRoutes title="Home" exact path="/dashboard/home" component={Home} />
           
          </Switch>    
            
        </Router>    
    );
  }