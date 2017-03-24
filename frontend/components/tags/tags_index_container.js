import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { deleteTag,
         setCurrentTag
       } from '../../actions/tag_actions';

const mapStateToProps = (state) => {
  return ({
    allTags: state.tags.allTags,
    currentTag: state.tags.currentTag,
    tagCount: state.tags.allTags.length
  });
};

const mapDispatchToProps = dispatch => ({
  deleteTag: (tagId, noteId) => dispatch(deleteTag(tagId, noteId)),
  setCurrentTag: tag => dispatch(setCurrentTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndex);
