import { combineReducers } from 'redux';
import * as text from './text';

export default combineReducers(Object.assign({},
    text
));