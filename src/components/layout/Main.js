import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../home/Home';
import Login from '../auth/login';
import Vacancy from '../home/Vacancy';
import ErrorPage from '../ErrorPage';

function Main(props) {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact  path="/login" component={Login}/>
                <Route exact path="/vacancy/:id" component={Vacancy}/>
                <Route ><ErrorPage message="Error 404. Page not Found"></ErrorPage></Route>
            </Switch>
        </div>
    )
}
export default Main;