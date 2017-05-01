import * as APIUTIL from '../util/session_api_util';
import { fetchNotebooks, createNotebook, setCurrentNotebook } from './notebook_actions';
import { fetchNotes } from "./notes_actions";
import { fetchTags } from "./tag_actions";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const login = user => dispatch => (
  APIUTIL.login(user)
    .then(usr => dispatch(receiveCurrentUser(usr)),
          err => dispatch(receiveErrors(err.responseJSON)))
    .then(() => dispatch(fetchNotes()))
    .then(() => dispatch(fetchNotebooks()))
    .then(() => dispatch(fetchTags()))
);

export const logout = () => dispatch => (
  APIUTIL.logout()
    .then(() => dispatch(receiveCurrentUser(null)),
          err => dispatch(receiveErrors(err)))
);

export const signup = user => dispatch => (
  APIUTIL.signup(user)
    .then(usr => dispatch(receiveCurrentUser(usr)),
          err => dispatch(receiveErrors(err.responseJSON)))
    .then(usr => dispatch(createNotebook({ title: usr.currentUser.username })))
    .then(()  => dispatch(setCurrentNotebook(null)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
