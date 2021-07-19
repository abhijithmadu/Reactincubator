import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import  Login  from './pages/Login'
import Config from './utils/config';
import {PrivateRoute} from "./utils/PrivateRoute"
import LogoutComponent from "./pages/LogoutComponent"


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component= {Login}></Route>
            <Route exact path={Config.logoutPageUrl} component= {LogoutComponent}></Route>
            <PrivateRoute exact path="/home" component= {MainComponent}></PrivateRoute>
        </Switch>
    </Router>
    
    
    ,document.getElementById("root"))