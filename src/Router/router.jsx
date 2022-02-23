
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from 'react'
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Pages/Dashboard/dashboard";


function Router1() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/dashboard" component={Dashboard} />
                   
                 </Switch>
            </BrowserRouter>
        </>
    )
}

export default Router1;