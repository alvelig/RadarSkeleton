import React, { Component } from 'react';
import './styles/styles';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './screens/Home';
import Login from './screens/Login';
import RegisterWizard from './screens/RegisterWizard/RegisterWizard';
import Radar from './screens/Radar';

class App extends Component {

    render() {

        const isAuthenticated = true;

        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={RegisterWizard} />
                    <Route path="/radar" component={Radar} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
