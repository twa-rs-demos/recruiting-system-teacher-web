import {combineReducers} from 'redux';
import paperList from './paper-list/paper-list';
import loginState from './login/login-reducer';

const rootReducer = combineReducers({
  loginState,
  paperList
});

export default rootReducer;