
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import HomeSreen from './components/homeScreen/homeScreen';
import SortScreen from './components/sortScreen/sortScreen';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomeSreen} />
                    <Route path="/Sorting" component={SortScreen} />
                </Switch>
            </Router>
        )
    }
}