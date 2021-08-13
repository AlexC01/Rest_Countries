import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Inicio } from './components/Inicio';

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Inicio}></Route>
            </Switch>
        </Router>
    )
}
