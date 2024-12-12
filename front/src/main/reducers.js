import {combineReducers} from 'redux';
import todoReducer from '../todo/TodoReducer';

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer