
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import HomeSreen from './components/homeScreen/homeScreen';
import SortScreen from './components/sortScreen/sortScreenVisualizer';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={HomeSreen} />
                <Route path="/Sorting" component={SortScreen} />
            </Switch>
        )
    }
}