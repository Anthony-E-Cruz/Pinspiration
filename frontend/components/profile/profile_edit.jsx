import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    // const userId = ownProps.match.params.userId;
    const { userId } = this.props;
    const { user } = this.props;
    console.log(user)
    console.log(userId)
    const currentUser = user[userId]
    console.log(currentUser)
    this.state = {
      photoUrl: currentUser.photoUrl,
      first_name: currentUser.first_name, 
      last_name: currentUser.last_name, 
      username: currentUser.username,
      about_you: currentUser.about_you, 
      location: currentUser.location
    };
    console.log(this.state)
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleFile(e) {
    debugger
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    const { userId } = this.props;
    this.props.processForm(user, userId);
  }


  render() {
    const currentUserId = this.props.match.params.userId;
    const {user} = this.props;
    // console.log(currentUserId);
    // console.log(user[1]);
    // console.log(user[currentUserId]);
    const currentUser = user[currentUserId] ;
    // debugger
    return (
      // <div>
      //   <h1>Edit Page</h1>
      //   <h1>{currentUser.email}</h1>
      //   <input type="file" onChange={this.handleFile} name="" id=""/>
      // </div>
      <div> 
        {/* <img src={currentUser.photoUrl}/> */}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="profile">
            <div className="profile-header">
              <img className="profile-img" src={window.profile_img} />
              <input type="file" onChange={this.handleFile} name="" id="" />
              <h1>{currentUser.username}</h1>
            </div>
          </div>
          <div className="edit-profile-form">
            <label>First name
              <input type="text" 
                placeholder={currentUser.first_name}
                onChange={this.update('first_name')}
              />
            </label>
            <label>Last name
              <input type="text" 
                // placeholder="Last name"
                onChange={this.update('last_name')} 
              />
            </label>
            <label>Username
              <input type="text" 
                value={currentUser.username} 
                onChange={this.update('username')}
              />
            </label>
            <label>About you 
              <input type="textarea" 
                placeholder="Write a little bit about yourself here"
                onChange={this.update('about_you')}
              />
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