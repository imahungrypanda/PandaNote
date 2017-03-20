import merge from 'lodash/merge';
import { RECIEVE_NOTE,
         RECIEVE_ALL_NOTES,
         MAKE_NOTE,
         DELETE_NOTE,
         CURRENT_NOTE } from '../actions/notes_actions';
import { notesToArray } from '../actions/selector';

let _nullState = {
  currentNote: null,
  allNotes: []
};

const NotesReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECIEVE_ALL_NOTES:
      const allNotes = notesToArray(action.notes);
      return merge(newState, {allNotes});

    case RECIEVE_NOTE:
      newState.currentNote = action.note;
      return newState;

    case MAKE_NOTE:
      newState[action.newNote.note.id] = action.newNote.note;
      newState.allNotes.unshift(action.newNote.note);
      return newState;

    case DELETE_NOTE:
      delete newState[action.deletedNote.note.id];
      return newState;

    case CURRENT_NOTE:
      console.log(action);
      newState.currentNote = action.note;
      return newState;

    default:
      return state;
  }
}

export default NotesReducer;
