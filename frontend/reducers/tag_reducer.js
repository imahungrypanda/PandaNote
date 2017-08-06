import merge from 'lodash/merge';
import { RECEIVE_TAGS,
         RECEIVE_TAG_NOTES,
         MAKE_TAG,
         REMOVE_TAG,
         SET_CURRENT_TAG,
         CLEAR_TAG
       } from '../actions/tag_actions';

const _nullTag = {
  currentTag: null,
  allTags: [],
  currentTagNotes: []
};

const TagsReducer = (state = _nullTag, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  debugger

  switch (action.type) {
    case RECEIVE_TAGS:
      newState.allTags = action.tags;
      return newState;

    case RECEIVE_TAG_NOTES:
      newState.currentTagNotes = action.notes
      return newState;

    case MAKE_TAG:
      let tagCount = newState.allTags.filter(tag => tag.name === action.tag.name).length
      if (tagCount === 0) {
        newState.allTags.push(action.tag);
      }
      return newState;

    case REMOVE_TAG:
      // debugger
      // tagCount = newState.allTags.filter(tag => tag.name === action.tag.name).length
      // if (tagCount === 1) {
        newState.allTags = newState.allTags.filter(tag => tag.name !== action.tag.name);
      // }
      return newState;

    case SET_CURRENT_TAG:
      newState.currentTag = action.tag;
      return newState;

    case CLEAR_TAG:
      newState.currentTag = null;
      newState.currentTagNotes = [];
      return newState;

    default:
      return newState;
  }
};

export default TagsReducer;
