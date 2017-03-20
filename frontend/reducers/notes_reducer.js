import merge from 'lodash/merge';
import { RECIEVE_NOTE,
         RECIEVE_ALL_NOTES,
         MAKE_NOTE,
         DELETE_NOTE } from '../actions/notes_actions';


const NotesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECIEVE_ALL_NOTES:
      const notes = action.notes;
      newState = merge(newState, notes);
      return newState;

    case RECIEVE_NOTE:
      const note = action.note;
      return merge({}, state, note);

    case MAKE_NOTE:
      newState[action.newNote.note.id] = action.newNote.note;
      return newState;

    case DELETE_NOTE:
      delete newState[action.deletedNote.note.id];
      return newState;

    default:
      return state;
  }
}

export default NotesReducer;
