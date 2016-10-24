import React from "react";
import {render} from "react-dom";
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from "./containers/App";
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import LoginForm from './containers/Login/login-container';
import createLogger from 'redux-logger';
import PaperList from './containers/paperList/paper-list';


const store = createStore(
    rootReducer,
    applyMiddleware(createLogger(), thunkMiddleware)
);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LoginForm}/>
                <Route path='/paperList' components={PaperList}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById('app'));

