import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class signupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      age: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.resetErrors()
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
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.map((error, i) => (
            <p key={`error-${i}`}>
              {error}
            </p>
          ))}
        </ul>
      );
    };
  }

  render() {
    return (
      <div className="full-login">
        <div className="login-form-container">
          <div>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="welcome">
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
                <input type="text"
                  className="login-credentials"
                  placeholder={"Age"}
                  value={this.state.age}
                  onChange={this.update('age')}
                  className="login-input"
                />
                {this.renderErrors()}
                {/* </label> */}
                <input className="session-submit" type="submit" value={this.props.formType} />
                <p className="or">OR</p>
                {/* <Link className="login-btn" to={() => openModal('login')}>Log in</Link> */}
                <Link to={this.props.otherForm}>{this.props.switchPages}</Link>
              </div>
            </form>
            <div className="demo-login-container">
              <button className="demo-login" onClick={this.props.demoUser}>Demo Login</button>
              <p className="switch-form"> {this.props.otherForm} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default signupForm;
