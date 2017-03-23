import * as APIUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const MAKE_TAG = "MAKE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const SET_CURRENT_TAG = "SET_CURRENT_TAG";

export const fetchTags = () => dispatch => (
  APIUtil.fetchTags()
    .then(allTags => dispatch(receiveTags(allTags)))
);

export const createTag = (tag, noteId) => dispatch) => {
  APIUtil.createTag(tag, noteId)
    .then(newTag => dispatch(makeTag(newTag)))
);

export const deleteTag = tag => dispatch => (
  APIUtil.deleteTag(tag)
    .then(deletedTag => dispatch(removeTag(deletedTag)))
);

export const receiveTags = allTags => ({
  type: RECEIVE_TAGS,
  allTags
});

export const makeTag = newTag => ({
  type: MAKE_TAG,
  newTag
});

export const removeTag = deletedTag => ({
  type: REMOVE_TAG,
  deletedTag
});

export const setCurrentTag = newCurrentTag => ({
  type: SET_CURRENT_TAG,
  newCurrentTag
});
