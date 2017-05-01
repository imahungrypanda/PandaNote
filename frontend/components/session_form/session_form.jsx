import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = { username: "", password: "", modalIsOpen: false };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.demo = this.demo.bind(this);
      this.form = this.form.bind(this);
  }

  componentWillMount() {
    this.openModal();
    Modal.setAppElement('body');
    if (this.props.formType === "demo_login") {
      this.demo();
    }
 }

 componentDidUpdate() {
   if (this.props.loggedIn) {
     this.props.router.push("/home");
   }
 }

  openModal() {
    this.setState({modalIsOpen: true});
    this.props.clearErrors();
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.router.push("/");
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit");
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demo() {
    console.log("demo");
    const user = Object.assign({}, {username: "guest", password: "password"}) ;
    this.props.login(user);
  }

  navLink() {
    if (this.props.formType !== "signup") {
        return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  form() {

  }

  renderErrors() {
    return(
      <ul className="auth-form-error">
        { this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{ error }</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="auth-form">
        <Modal isOpen={this.state.modalIsOpen}
          contentLabel="Modal"
          className="auth-form-modal"
          onRequestClose={this.closeModal} >

          <form onSubmit={this.handleSubmit} className="login-form-box">
            Welcome to PandaNote!
            <br/>
            Please {this.props.formType}
            <br/>
            or {this.navLink()}

            {this.renderErrors()}

            <div className="login-form">
              <br/>

              <input type="text"
                className="login-input"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username" />

              <br/>

              <input type="password"
                className="login-input"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password" />

              <br/>
              <br/>

              <input className="button cancel" type="button" value="Cancel" onClick={this.closeModal} />
              <input className="button submit" type="submit" value="Submit" />
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default SessionForm;


// <input className="button demo" type="button" value="Demo" onClick={this.demo} />
