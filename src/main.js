import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import LoginApp from './containers/login/login-container';
import createLogger from 'redux-logger';
import PaperList from './containers/paper-list/paper-list';
import PaperCreating from './containers/paper-creating/paper-creating';

const store = createStore(
  rootReducer,
  applyMiddleware(createLogger(), thunkMiddleware)
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path={URI_PROFIX} component={LoginApp}/>
      <Route path={URI_PROFIX + '/paperList'} components={PaperList}/>
      <Route path={URI_PROFIX + '/paperCreating'} components={PaperCreating}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);

