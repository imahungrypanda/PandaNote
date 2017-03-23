import { connect } from 'react-redux';
import NoteEditor from './note_editor';
import { updateNote, setCurrentNote } from '../../actions/notes_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentNote: state.notes.currentNote,
    allNotes: state.notes.allNotes
  });
};

const mapDispatchToProps = dispatch => ({
  setCurrentNote: note => dispatch(setCurrentNote(note)),
  save: note => dispatch(updateNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEditor);
