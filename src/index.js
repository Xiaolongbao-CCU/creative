import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './index.css';
import App from './App';
import Game from './Game'
import {Provider} from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

<Provider store = {store}>
    <Router >
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Game" component={Game} />
        </Switch>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
