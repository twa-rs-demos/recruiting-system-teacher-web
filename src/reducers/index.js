import {combineReducers} from 'redux';
import paperList from './paper-list/paper-list';
import loginState from './login/login-reducer';
import paperMeta from './paper-meta/paper-meta';
import paperCreate from './paper-creating/paper-creating'

const rootReducer = combineReducers({
  loginState,
  paperList,
  paperMeta,
  paperCreate
});

export default rootReducer;