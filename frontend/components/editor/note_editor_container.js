import { connect } from 'react-redux';
import NoteEditor from './note_editor';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentNote: state.notes.currentNote
  });
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEditor);
