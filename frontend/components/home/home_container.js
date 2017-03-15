import { connect } from 'react-redux';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => (
  
);
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    login: user => dispatch(login(user))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
