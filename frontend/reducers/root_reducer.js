import { CombineReducers } from 'redux';
import SessionReducer from './session_reducer';

cosnt rootReducer = CombineReducers({
  SessionReducer: SessionReducer
});

export default rootReducer;
