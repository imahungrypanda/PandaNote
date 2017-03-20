import merge from 'lodash/merge';
import { RECIEVE_NOTE,
         RECIEVE_ALL_NOTES,
         MAKE_NOTE,
         DELETE_NOTE,
         CURRENT_NOTE } from '../actions/notes_actions';
import { notesToArray } from '../actions/selector';

let _nullState = {
  currentNote: null,
  allNotes: {}
};

const NotesReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECIEVE_ALL_NOTES:
      newState.allNotes = action.notes;
      return newState;

    case RECIEVE_NOTE:
      newState.currentNote = action.note;
      return newState;

    case MAKE_NOTE:
      newState.allNotes[action.newNote.id] = action.newNote;
      return newState;

    case DELETE_NOTE:
      delete newState.allNotes[action.deletedNote.id];
      return newState;

    case CURRENT_NOTE:
      newState.currentNote = action.note;
      return newState;

    default:
      return state;
  }
}

export default NotesReducer;
