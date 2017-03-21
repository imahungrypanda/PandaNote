import { connect } from 'react-redux';
import Home from './home';
import { fetchNotebooks } from '../../actions/notebook_actions';
import { fetchNotes } from '../../actions/notes_actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNotebooks: () => dispatch(fetchNotebooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
