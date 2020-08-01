import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    // const currentUser: ownProps.match.params.username;
    const {userId} = this.props
  }
  
  // componentDidMount() {
    //   this.props.receiveCurrentUser();
    // }
    
    render() {
    const userId = this.props.match.params.userId;
    return (
      <div className="profile">
        <div className="profile-header">
          <img className="profile-img" src={window.profile_img} />
          <h1>{userId}</h1>
        </div>
        <div className="profile-sub-header">
          <Link className="login-btn" to={`/${userId}/edit`}>Edit</Link>
          <button className="boards-button">Boards</button>
        </div> 
        
        {/* <h1>{currentUser}</h1> */}
        {/* <h1>this.props.currentUser</h1>   */}
        {/* <h1>user</h1> */}
      </div>
    )
  }
}

export default Profile;