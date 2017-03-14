import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';

const rootReducer = combineReducers({
  SessionReducer: SessionReducer
})

export default rootReducer;
