import { combineReducers } from 'redux';
import commentReducer from './comments.js';

const rootReducer = combineReducers({
  comments: commentReducer
});

export default rootReducer;
