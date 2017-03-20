import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NotesReducer from './notes_reducer';
import NotebookReducer from './notebook_reducer';

// const defaultState = (state, action) => {
//   if(action.type ===)
// }

const rootReducer = combineReducers({
  session:  SessionReducer,
  notes:    NotesReducer,
  notebook: NotebookReducer
})

export default rootReducer;
