import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NotesReducer from './notes_reducer';
import NotebookReducer from './notebook_reducer';
import TagsReducer from './tag_reducer';

// const defaultState = (state, action) => {
//   if(action.type ===)
// }

const rootReducer = combineReducers({
  session:  SessionReducer,
  notes:    NotesReducer,
  notebook: NotebookReducer,
  tags:     TagsReducer
})

export default rootReducer;
