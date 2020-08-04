import React from "react";
import { Link } from "react-router-dom";
import BoardIndexContainer from "../board/board_profile_index_container";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // const currentUser: ownProps.match.params.username;
    const { userId } = this.props;
    const { users } = this.props;
    const currentUser = users[userId];
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
            <Link className="login-btn" to={`/${userId}/edit`}>
              Edit Profile
            </Link>
            <Link className="login-btn" to={`/pin/new`}>
              Create Pin
            </Link>
            <Link className="login-btn" to={`/users/${userId}/boards`}>
              Boards
            </Link>
            <Link className="login-btn" to={`/users/${userId}/pins`}>
              Pins
            </Link>
            <Link className="login-btn" to={`/boards/index`}>
              View Boards
            </Link>
            <Link className="login-btn" to={`/board/new`}>
              Create a Board
            </Link>
          </div>
        </div>
        <BoardIndexContainer />
      </div>
    );
  }
}

export default Profile;
