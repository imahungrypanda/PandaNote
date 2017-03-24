import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NoteIndex from './note_index';

import { fetchNotes,
         fetchNote,
         deleteNote,
         setCurrentNote } from '../../actions/notes_actions';
import { fetchNoteTags } from '../../actions/tag_actions';
import { notesToArray } from '../../actions/selector';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    notes: notesToArray(state.notes.allNotes),
    currentNote: state.notes.currentNote,
    currentNotebook: state.notebook.currentNotebook,
    currentTag: state.tags.currentTag
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: note => dispatch(fetchNote(note)),
  fetchNoteTags: note => dispatch(fetchNoteTags(note)),
  setCurrentNote: note => dispatch(setCurrentNote(note))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
