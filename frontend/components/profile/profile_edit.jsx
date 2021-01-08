import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    const { userId } = this.props;
    const { user } = this.props;
    const currentUser = user[userId]
    this.state = {
      first_name: currentUser.first_name || "first name", 
      last_name: currentUser.last_name, 
      username: currentUser.username,
      about_you: currentUser.about_you, 
      location: currentUser.location
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    const { userId } = this.props;
    this.props.processForm(user, userId)
      .then(document.location.href = `#/users/${userId}/pins`);
  }

  render() {
    const currentUserId = this.props.match.params.userId;
    const {user} = this.props;
    const currentUser = user[currentUserId] ;
    return (
      <div className="edit-form-container">
        <img src={currentUser.photoUrl} alt="" />
        <form onSubmit={this.handleSubmit} className="edit-form-box">
          <div className="profile">
            <div className="profile-header">
              <img className="profile-img" src={window.profile_img} />
              <h1>{currentUser.username}</h1>
            </div>
          </div>
          <div className="edit-profile-form">
            <label>
              First name
              <input
                type="text"
                placeholder={currentUser.first_name}
                onChange={this.update("first_name")}
              />
            </label>
            <label>
              Last name
              <input
                type="text"
                placeholder={currentUser.last_name}
                onChange={this.update("last_name")}
              />
            </label>
            <label>
              Username
              <input
                type="text"
                placeholder={currentUser.username}
                onChange={this.update("username")}
              />
            </label>
            <label>
              About you
              <input
                type="textarea"
                placeholder={currentUser.about_you}
                onChange={this.update("about_you")}
              />
            </label>
            <label>
              Location
              <input
                type="text"
                placeholder={currentUser.location}
                onChange={this.update("location")}
              />
            </label>
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default Profile;