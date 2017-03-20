import { connect } from 'react-redux';
import NoteIndexItem from './note_index_item';
import { deleteNote,
         setCurrentNote } from '../../../actions/notes_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentNote: state.notes.currentNote
  });
};

const mapDispatchToProps = dispatch => ({
  deleteNote: note => dispatch(deleteNote(note)),
  setCurrentNote: note => dispatch(setCurrentNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndexItem);
