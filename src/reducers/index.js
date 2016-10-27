import {combineReducers} from 'redux';
import paperList from './paper-list/paper-list';
import loginState from './login/login-reducer';
import paperMeta from './paper-meta/paper-meta';

const rootReducer = combineReducers({
  loginState,
  paperList,
  paperMeta
});

export default rootReducer;