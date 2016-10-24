/**
 * Created by ritter on 16-10-22.
 */
import {combineReducers} from 'redux';

import paperListReducer from './paper-list/paperList';
import loginReducer from './Login/login-reducer';

const rootReducer = combineReducers({
    loginReducer,
    paperListReducer
});

export default rootReducer;