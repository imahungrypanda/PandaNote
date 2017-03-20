import * as APIUTIL from '../util/notes_api_util';

export const RECIEVE_ALL_NOTES = "RECIEVE_ALL_NOTES";
export const RECIEVE_NOTE      = "RECIEVE_NOTE";
export const MAKE_NOTE         = "MAKE_NOTE";
export const UPDATE_NOTE       = "UPDATE_NOTE";
export const DELETE_NOTE       = "DELETE_NOTE";
export const CURRENT_NOTE      = "CURRENT_NOTE";

export const fetchNotes = () => dispatch => (
  APIUTIL.fetchNotes()
    .then(notes => dispatch(recieveNotes(notes)))
);

export const fetchNote = note => dispatch => (
  APIUTIL.fetchNote(note.id)
    .then(newNote => dispatch(recieveNote(newNote)))
);

export const createNote = note => dispatch => (
  APIUTIL.createNote(note)
    .then(newNote => dispatch(makeNote(newNote)))
)

export const updateNote = note => dispatch => (
  APIUTIL.updateNote(note)
    .then(newNote => dispatch(recieveNote(newNote)))
);

export const deleteNote = note => dispatch => (
  APIUTIL.deleteNote(note.id)
    .then(newNote => dispatch(removeNote(newNote)))
);

export const recieveNotes = notes => ({
  type: RECIEVE_ALL_NOTES,
  notes
});

export const recieveNote = note => ({
  type: RECIEVE_NOTE,
  note
});

export const makeNote = newNote => ({
  type: MAKE_NOTE,
  newNote
})

export const removeNote = deletedNote => ({
    type: DELETE_NOTE,
    deletedNote
});

export const setCurrentNote = note => ({
  type: CURRENT_NOTE,
  note
})
