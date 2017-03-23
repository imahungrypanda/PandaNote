import * as APIUTIL from '../util/notes_api_util';

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const RECEIVE_NOTE      = "RECEIVE_NOTE";
export const MAKE_NOTE         = "MAKE_NOTE";
export const UPDATE_NOTE       = "UPDATE_NOTE";
export const DELETE_NOTE       = "DELETE_NOTE";
export const CURRENT_NOTE      = "CURRENT_NOTE";

export const fetchNotes = () => dispatch => (
  APIUTIL.fetchNotes()
    .then(notes => dispatch(receiveNotes(notes)))
);

export const fetchNote = note => dispatch => (
  APIUTIL.fetchNote(note.id)
    .then(newNote => dispatch(receiveNote(newNote)))
);

export const createNote = note => dispatch => (
  APIUTIL.createNote(note)
    .then(newNote => dispatch(makeNote(newNote)))
);

export const updateNote = note => dispatch => (
  APIUTIL.updateNote(note)
    .then(newNote => dispatch(patchNote(newNote)))
);

export const deleteNote = note => dispatch => (
  APIUTIL.deleteNote(note.id)
    .then(newNote => dispatch(removeNote(newNote)))
);

export const receiveNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes
});

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const patchNote = note => ({
  type: UPDATE_NOTE,
  note
});

export const makeNote = newNote => ({
  type: MAKE_NOTE,
  newNote
});

export const removeNote = deletedNote => ({
    type: DELETE_NOTE,
    deletedNote
});

export const setCurrentNote = note => ({
  type: CURRENT_NOTE,
  note,
  junk: console.log(note)
});
