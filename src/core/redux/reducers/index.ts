import { combineReducers } from 'redux';
import todoReducer from './TodoReducer';
import loginReducer from './LoginReducer';

const reducers = combineReducers({
    loginReducer,
    todoReducer
});

export default reducers;
