import {combineReducers} from 'redux';
import paperList from './paper-list/paper-list';
import loginReducer from './Login/login-reducer';

const rootReducer = combineReducers({
  loginReducer,
  paperList
});

export default rootReducer;