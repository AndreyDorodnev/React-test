import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../styles/layout.scss';

export default props => {
    return (
        <div className="layout">
            <Router>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </Router>
        </div>
    )
}