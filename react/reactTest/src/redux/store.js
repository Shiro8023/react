import {createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers';
import { applyMiddleware } from 'redux';

let store = createStore(combineReducers,applyMiddleware(thunkMiddleware));
export default store;