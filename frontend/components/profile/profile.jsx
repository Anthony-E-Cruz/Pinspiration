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
      <div className="profile">
        <div className="profile-header">
          <img className="profile-img" src={window.profile_img} />
          <h1>{currentUser}</h1>
        </div>
        <div className="profile-sub-header">
          <Link className="login-btn" to={`/${currentUser}/edit`}>Edit</Link>
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