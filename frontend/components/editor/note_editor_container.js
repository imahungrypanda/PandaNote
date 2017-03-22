import { connect } from 'react-redux';
import NoteEditor from './note_editor';
import { updateNote } from '../../actions/notes_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentNote: state.notes.currentNote,
    allNotes: state.notes.allNotes
  });
};

const mapDispatchToProps = dispatch => ({
  save: note => dispatch(updateNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEditor);
