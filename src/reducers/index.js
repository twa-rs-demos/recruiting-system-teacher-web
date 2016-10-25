import {combineReducers} from 'redux';
import paperListReducer from './paper-list/paperList';
import loginState from './Login/login-reducer';

const rootReducer = combineReducers({
    loginState,
    paperListReducer
});

export default rootReducer;