import * as APIUTIL from '../util/notes_api_util';

export const RECIEVE_ALL_NOTES = "RECIEVE_ALL_NOTES";
export const RECIEVE_NOTE      = "RECIEVE_NOTE";
export const UPDATE_NOTE       = "UPDATE_NOTE";
export const DELETE_NOTE       = "DELETE_NOTE";

export const fetchNotes = () => dispatch => (
  APIUTIL.fetchNotes()
    .then(notes => dispatch(recieveNotes(notes)))
);

export const fetchNote = note => dispatch => (
  APIUTIL.fetchNote(note.id)
    .then(nt => dispatch(recieveNote(nt)))
);

export const createNote = note => dispatch => (
  APIUTIL.createNote(note)
    .then(nt => dispatch(recieveNote(nt)))
)

export const updateNote = note => dispatch => (
  APIUTIL.updateNote(note)
    .then(nt => dispatch(recieveNote(nt)))
);

export const deleteNote = note => dispatch => (
  APIUTIL.deleteNote(note.id)
    .then(nt => dispatch(recieveNote()))
);

export const recieveNotes = notes => ({
  type: RECIEVE_ALL_NOTES,
  notes
});

export const recieveNote = note => ({
  type: RECIEVE_NOTE,
  note
});
