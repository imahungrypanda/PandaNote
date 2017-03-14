import * as APIUTIL from '../util/session_api_util';

export const RECIEVE_CURRENT_USER = "RECIEVE_CURRENT_USER";
export const RECIEVE_ERRORS = "RECIEVE_ERRORS";

export const login = user => dispatch => (
  APIUTIL.login(user)
    .then(usr => dispatch(receiveCurrentUser(usr)),
          err => dispatch(receiveErrors(err)))
);

export const logout = () => dispatch => {(
  APIUTIL.logout()
    .then(() => dispatch(receiveCurrentUser(null)),
          err => dispatch(receiveErrors(err.responseJSON)))
)};

export const signup = user => dispatch => {(
  APIUTIL.signup(user)
    .then(usr => dispatch(receiveCurrentUser(usr)),
          err => dispatch(receiveErrors(err.responseJSON)))
)};

export const receiveCurrentUser = currentUser => ({
  type: RECIEVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECIEVE_ERRORS,
  errors
});
