import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createNote } from '../../actions/notes_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createNote: note => dispatch(createNote(note))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
