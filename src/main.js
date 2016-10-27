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
import PaperCreating from './components/paper-creating/Paper-creating';

const store = createStore(
  rootReducer,
  applyMiddleware(createLogger(), thunkMiddleware)
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/teacher-admin-web' component={LoginApp}/>
      <Route path='/teacher-admin-web/paperList' components={PaperList}/>
      <Route path='/teacher-admin-web/paperCreating' components={PaperCreating}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);

