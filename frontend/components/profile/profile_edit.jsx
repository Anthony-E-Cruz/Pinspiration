import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    const { user } = this.props;
    debugger
    this.state = {
      email: user.email,
      age: user.age,
      email: user.email, 
      first_name: user.first_name, 
      last_name: user.last_name, 
      about_you: user.about_you, 
      location: user.location
    };
    // const currentUser: ownProps.match.params.username;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    debugger
    this.props.processForm(user);
  }


  render() {
    const currentUser = this.props.match.params.username;
    const {checkingstate} = this.state;

    debugger
    return (
      <div> 
        {/* <h1>{checkingstate.email}</h1> */}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="profile">
            <div className="profile-header">
              <img className="profile-img" src={window.profile_img} />
              <h1>{currentUser}</h1>
            </div>
          </div>
          <div className="edit-profile-form">
            <label>First name
              <input type="text" 
                placeholder="First name"
                onChange={this.update('email')}
              />
            </label>
            <label>Last name
              <input type="text" 
                placeholder="Last name" 
              />
            </label>
            <label>Username
              <input type="text" 
                value={currentUser} 
                onChange={this.update('username')}
              />
            </label>
            <label>About you 
              <textarea type="textarea" />
            </label>
            <label>Location 
              <input type="text" 
                placeholder="New York City, San Francisco, .ect"
                onChange={this.update('Location')}
              />
            </label>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    )
  }
};

export default Profile;