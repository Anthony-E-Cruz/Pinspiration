import React from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    // .then(this.props.closeModal);;
  }

  renderErrors() {
    return (
      <ul className="errors" >
        {this.props.errors.map((error, i) => (
          <p className="errors" key={`error-${i}`}>
            {error}
          </p>
        ))}
      </ul>
    );
  }

  render() {
    return (
      // <div> 
      //   <div onClick={this.props.closeModal} className="close-x">X</div>
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="modal-welcome">
            <img className="welcome-logo" src={window.logo} />
            <p className="welcome">Welcome to Pinspiration</p>
            {this.props.findNew} 
          </div>
          {/* <br /> */}
          <div className="login-form">
            {/* <br /> */}
            {/* <label>Email: */}
              <input type="text"
                className="login-credentials"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                />
            {/* </label> */}
            {/* <br /> */}
            {/* <label>Password: */}
              <input type="password"
                className="login-credentials"
                placeholder={this.props.passwordText}
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            {this.renderErrors()}
            {/* </label> */}
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
            <p className="or">OR</p>
            <button className="demo-login" onClick={this.props.demoUser}>Demo Login</button>
            <br />
            {/* <Link className="login-btn" to={() => openModal('login')}>Log in</Link> */}
            <Link to={this.props.otherForm}>{this.props.switchPages}</Link>
            {this.props.otherForm}
            <br /> 
          </div>
        </form>
      {/* </div> */}
      </div>
    );
  }
}

export default SessionForm;
