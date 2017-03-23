import merge from 'lodash/merge';
import { RECEIVE_TAGS,
         RECEIVE_NOTE_TAGS,
         MAKE_TAG,
         REMOVE_TAG,
         REMOVE_TAGGING,
         SET_CURRENT_TAG
       } from '../actions/tag_actions';

const _nullTag = {
  currentTag: null,
  allTags: [],
  currentNoteTags: []
};

const TagsReducer = (state = _nullTag, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_TAGS:
      newState.allTags = action.tags;
      return newState;

    case RECEIVE_NOTE_TAGS:
      console.log(action.tags);
      newState.currentNoteTags = action.tags;
      return newState;

    case MAKE_TAG:
      newState.allTags.push(action.tag);
      return newState;

    case REMOVE_TAG:
      newState.allTags.filter(tag => tag !== action.tag)
      return newState;

    case SET_CURRENT_TAG:
      newState.currentTag = action.tag;
      return newState;

    default:
      return newState;
  }
};

export default TagsReducer;
