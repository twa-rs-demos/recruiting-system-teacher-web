import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import LoginApp from './containers/Login/login-container';
import createLogger from 'redux-logger';
import PaperList from './containers/paper-list/paper-list';

const store = createStore(
  rootReducer,
  applyMiddleware(createLogger(), thunkMiddleware)
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/teacher-admin-web' component={LoginApp}/>
      <Route path='/teacher-admin-web/paperList' components={PaperList}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);

