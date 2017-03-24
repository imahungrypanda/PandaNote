import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createNote } from '../../actions/notes_actions';
import Sidebar from './sidebar';
import { selectFirstNotebook } from '../../actions/selector';
import { setCurrentNotebook } from '../../actions/notebook_actions';
import { clearTag } from '../../actions/tag_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentNotebook: state.notebook.currentNotebook,
  allNotebooks: state.notebook.allNotebooks
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createNote: note => dispatch(createNote(note)),
  selectFirstNotebook: notebooks => selectFirstNotebook(notebooks),
  setCurrentNotebook: notebook => dispatch(setCurrentNotebook(notebook)),
  clearTag: () => dispatch(clearTag())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
