import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    // const currentUser: ownProps.match.params.username;
  }

  // componentDidMount() {
  //   this.props.receiveCurrentUser();
  // }

  render() {
    const currentUser = this.props.match.params.username;
    return (
      <div> 
        <div className="profile">
          <div className="profile-header">
            <img className="profile-img" src={window.profile_img} />
            <h1>{currentUser}</h1>
          </div>
        </div>
        <div className="edit-profile-form">
          <label>First name
            <input type="text" placeholder="First name"/>
          </label>
          <label>Last name
            <input type="text" placeholder="Last name" placeholder="Last name"/>
          </label>
          <label>Username
            <input type="text" value={currentUser} />
          </label>
          <label>About you 
            <textarea type="textarea" />
          </label>
          <label>Location 
            <input type="text" placeholder="New York City, San Francisco, .ect"/>
          </label>
        </div>
      </div>
    )
  }
};

export default Profile;