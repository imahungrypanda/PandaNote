import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NotesReducer from './notes_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  notes:   NotesReducer
})

export default rootReducer;
