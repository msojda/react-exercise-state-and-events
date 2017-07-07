import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as reducers from '../components/reducers';

export default () => createStore(combineReducers(reducers), applyMiddleware(logger))
