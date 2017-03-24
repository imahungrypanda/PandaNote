import * as APIUTIL from '../util/tag_api_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG_NOTES = "RECEIVE_TAG_NOTES";
export const MAKE_TAG = "MAKE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const SET_CURRENT_TAG = "SET_CURRENT_TAG";
export const CLEAR_TAG = "CLEAR_TAG";

export const fetchTags = () => dispatch => (
  APIUTIL.fetchTags()
    .then(allTags => dispatch(receiveTags(allTags)))
);

export const fetchTagNotes = (id) => dispatch => (
  APIUTIL.fetchTagNotes(id)
    .then(notes => dispatch(receiveTagNotes(notes)))
);

export const createTag = (tag, noteId) => dispatch => (
  APIUTIL.createTag(tag, noteId)
    .then(newTag => dispatch(makeTag(newTag)))
);

export const deleteTag = (id, noteId) => dispatch => (
  APIUTIL.deleteTag(id, noteId)
    .then(deletedTag => dispatch(removeTag(deletedTag)))
);

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTagNotes = notes => ({
  type: RECEIVE_TAG_NOTES,
  notes
});

export const makeTag = tag => ({
  type: MAKE_TAG,
  tag
});

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const setCurrentTag = tag => ({
  type: SET_CURRENT_TAG,
  tag
});

export const clearTag = () => ({
  type: CLEAR_TAG
})
