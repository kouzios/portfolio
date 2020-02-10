/* Plugin imports */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Our css */
import './styles/common.scss';

/* jsx */
import Homepage from './views/homepage';
import Header from './components/header';

/* Fonts */
import './fonts/Roboto-Light.ttf'
import './fonts/Roboto-Regular.ttf'
import './fonts/Roboto-Thin.ttf'

/**
 * Switches between different routes based on the url
 */
const routing = (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={Homepage} />
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();