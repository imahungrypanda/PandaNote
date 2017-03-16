import { connect } from 'react-redux';
// import { login, logout, signup } from '../../actions/session_actions';
import Note from './note';

const mapStateToProps = ({ session }) => ({
  session,
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({

})


export default connect(
  mapStateToProps
)(Note);
