import { connect } from 'react-redux';
import TagForm from './tag_form';

import { fetchNoteTags, createTag, deleteTag } from '../../../actions/tag_actions';
import { tagName } from '../../../actions/selector';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentNote: state.notes.currentNote,
    allTags: tagName(state.tags.allTags)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchNoteTags: note => dispatch(fetchNoteTags(note)),
  saveTag: (tag, note) => dispatch(createTag(tag, note)),
  deleteTag: (id, noteId) => dispatch(deleteTag(id, noteId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);
