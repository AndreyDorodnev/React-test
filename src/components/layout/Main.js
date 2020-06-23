import React from 'react';
import {Route, Switch, Link } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../auth/login';

export default props => {
    return (
        <div>
            <Link to="/login">TEST</Link>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact  path="/login" component={Login}/>
                {/* <Route render={()=><h2 className={Classes.errorMessage}>404 NOT FOUND</h2>}/> */}
            </Switch>
        </div>
    )
}