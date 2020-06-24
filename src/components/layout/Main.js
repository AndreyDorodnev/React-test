import React from 'react';
import {Route, Switch, Link,withRouter } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../auth/login';
import Vacancy from '../home/Vacancy';


function Main(props) {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact  path="/login" component={Login}/>
                <Route exact path="/vacancy/:id" component={Vacancy}/>
            </Switch>
        </div>
    )
}
export default Main;