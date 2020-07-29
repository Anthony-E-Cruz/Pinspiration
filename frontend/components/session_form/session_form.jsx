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
    this.props.processForm(user).then(this.props.closeModal);;
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="modal-welcome">
            <p className="welcome">Welcome to Pinspiration</p> 
            <p className="modal-find-new">Find new inspiration</p> 
          </div>
          {/* <br /> */}
          {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
          {this.renderErrors()}
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
            <br />
            {/* <label>Password: */}
              <input type="password"
                className="login-credentials"
                placeholder={this.props.passwordText}
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            {/* </label> */}
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
            <p className="or">OR</p>
            <button className="demo-login" onClick={this.props.demoUser}>Demo Login</button>
            <br />
            {/* <Link className="login-btn" to={() => openModal('login')}>Log in</Link> */}
            {/* <Link to={this.props.otherForm}>{this.props.switchPages}</Link> */}
            {this.props.otherForm}
            <br /> 
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
