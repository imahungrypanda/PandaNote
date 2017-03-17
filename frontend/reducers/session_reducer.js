import merge from 'lodash/merge';
import { RECIEVE_CURRENT_USER,
         RECIEVE_ERRORS,
         logout } from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECIEVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });

    case RECIEVE_ERRORS:
      const errors = action.errors.responseJSON;
      return merge({}, _nullUser, { errors });

    default:
      return state;
  }
};

export default SessionReducer;
