import {combineReducers} from 'redux';
import paperList from './paper-list/paper-list';
import loginState from './Login/login-reducer';

const rootReducer = combineReducers({
  loginState,
  paperList
});

export default rootReducer;