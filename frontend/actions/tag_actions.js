import * as APIUTIL from '../util/tag_api_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_NOTE_TAGS = "RECEIVE_NOTE_TAGS";
export const MAKE_TAG = "MAKE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const REMOVE_TAGGING = "REMOVE_TAGGING";
export const SET_CURRENT_TAG = "SET_CURRENT_TAG";

export const fetchTags = () => dispatch => (
  APIUTIL.fetchTags()
    .then(allTags => dispatch(receiveTags(allTags)))
);

export const fetchNoteTags = note => dispatch => (
  APIUTIL.fetchNoteTags(note.id)
    .then(tags => dispatch(receiveNoteTags(tags)))
);

export const createTag = (tag, noteId) => dispatch => (
  APIUTIL.createTag(tag, noteId)
    .then(newTag => dispatch(makeTag(newTag)))
);

export const deleteTag = tag => dispatch => (
  APIUTIL.deleteTag(tag)
    .then(deletedTag => dispatch(removeTag(deletedTag)))
);

export const deleteTagging = (tag, note) => dispatch => (
  APIUTIL.deleteTagging(tag, note.id)
    .then(tag => dispatch(removeTagging(tag)))
)

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveNoteTags = tags => ({
  type: RECEIVE_NOTE_TAGS,
  tags
})

export const makeTag = tag => ({
  type: MAKE_TAG,
  tag,
  junk: console.log("makeTag: ",tag)
});

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const removeTagging = tag => ({
  type: REMOVE_TAGGING,
  tag
})

export const setCurrentTag = tag => ({
  type: SET_CURRENT_TAG,
  tag
});
