import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import LoginApp from './containers/login/login-container';
import createLogger from 'redux-logger';
import PaperCreating from './containers/paper-creating/paper-creating';
import Teacher from './components/teacher/Teacher';
import PaperMeta from './containers/paper-meta/paper-meta';

const store = createStore(
  rootReducer,
  applyMiddleware(createLogger(), thunkMiddleware)
);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path={URI_PROFIX} component={LoginApp}/>
            <Route path={URI_PROFIX + '/teacher'} components={Teacher}/>
            <Route path={URI_PROFIX + '/paperMeta'} components={PaperMeta}/>
            <Route path={URI_PROFIX + '/paperCreate'} components={PaperCreating}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);

