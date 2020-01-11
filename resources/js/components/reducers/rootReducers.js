import { combineReducers } from 'redux';
import editorReducer from './stores/editor';

const rootReducers = combineReducers({
    editorReducer
});

export default rootReducers;
