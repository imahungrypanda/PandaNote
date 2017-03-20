import * as APIUTIL from '../util/notebook_api_util';

export const RECIEVE_NOTEBOOKS = "RECIEVE_NOTEBOOKS";
export const RECIEVE_NOTEBOOK  = "RECIEVE_NOTEBOOK";
export const MAKE_NOTEBOOK     = "MAKE_NOTEBOOK";
export const DELETE_NOTEBOOK   = "DELETE_NOTEBOOK";
export const CURRENT_NOTEBOOK  = "CURRENT_NOTEBOOK";


export const fetchNotebooks = () => dispatch => (
  APIUTIL.fetchNotebooks()
    .then(notebooks => dispatch(recieveNotebooks(notebooks)))
);

export const fetchNotebook = id => dispatch => (
  APIUTIL.fetchNotebook(id)
    .then(notebook => dispatch(recieveNotebook(notebook)))
);

export const createNotebook = notebook => dispatch => (
  APIUTIL.createNotebook(notebook)
    .then(newNotebook => dispatch(makeNotebook(newNotebook)))
);

export const deleteNotebook = notebook => dispatch => (
  APIUTIL.deleteNotebook(notebook)
    .then(newNotebook => dispatch(removeNotebook(newNotebook)))
)

export const recieveNotebooks = notebooks => ({
  type: RECIEVE_NOTEBOOKS,
  notebooks
});

export const recieveNotebook = notebook => ({
  type: RECIEVE_NOTEBOOK,
  notebook
});

export const makeNotebook = notebook => ({
  type: MAKE_NOTEBOOK,
  notebook
});

export const removeNotebook = notebook => ({
  type: DELETE_NOTEBOOK,
  notebook
})

export const setCurrentNotebook = notebook => ({
  type: CURRENT_NOTEBOOK,
  notebook
})
