import { combineReducers } from 'redux';
import * as text from './text';
import * as locations from './locations';

export default combineReducers(Object.assign({},
    text,
    locations
));