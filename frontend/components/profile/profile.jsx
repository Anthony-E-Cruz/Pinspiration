import React from 'react';
import { Link } from 'react-router-dom';
import PinIndexContainer from '../pin_show/pin_show_container'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    // const currentUser: ownProps.match.params.username;
    const {userId} = this.props;
    const {users} = this.props
    const currentUser = users[userId]
    console.log(currentUser)
  }
  
  // componentDidMount() {
    //   this.props.receiveCurrentUser();
    // }
    
    render() {
      const { userId } = this.props;
      const { users } = this.props;
      const currentUser = users[userId];
    return (
      <div>
      <div className="profile">
        <div className="profile-header">
          <img className="profile-img" src={window.profile_img} />
          <h1>{currentUser.username}</h1>
        </div>
        <div className="profile-sub-header">
          <Link className="login-btn" to={`/${userId}/edit`}>Edit Profile</Link>
          <Link className="login-btn" to={`/pins/new`}>Create Pin</Link>
          <Link className="login-btn" to={`/boards/index`}>View Boards</Link>
          <Link className="login-btn" to={`/boards/new`}>Create a Board</Link>
        </div>
      </div>
        <PinIndexContainer />
      </div>
    )
  }
}

export default Profile;