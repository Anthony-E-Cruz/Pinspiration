import React from 'react';
import { Link } from 'react-router-dom';
import PinIndexContainer from '../pin_show/pin_index_container'
import PinProfileShowContainer from "../pin_show/pin_profile_show_container";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Profile extends React.Component {
  constructor(props) {
    super(props)
    // const currentUser: ownProps.match.params.username;
    const {userId} = this.props;
    const {users} = this.props
    const currentUser = users[userId]
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
            <Link to={`/${userId}/edit`}>
              <FontAwesomeIcon
                className="profile-link-icons"
                icon={faPencilAlt}
              />
            </Link>
            {/* <FontAwesomeIcon icon="check-square" /> */}
            {/* <button type="submit">
                <i icon={faCoffee}></i>
              </button> */}
            {/* <i class="fas fa-pencil">Edit Profile</i> */}

            {/* <Link className="login-btn" to={`/pin/new`}>
              Create Pin
            </Link> */}
            <div>
              <Link className="other-page-bttn" to={`/users/${userId}/boards`}>
                Boards
              </Link>
              <Link className="current-page-bttn" to={`/users/${userId}/pins`}>
                Pins
              </Link>
              {/* <Link className="login-btn" to={`/boards/index`}>
                View Boards
              </Link> */}
            </div>
            <div>
              <div className="dropdown-parent">
              <FontAwesomeIcon className="profile-link-icons" icon={faPlus} />
              <div className="dropdown-child">
                <ul>
                  <li className="dropdown-links">Create</li>
                  <li className="dropdown-links">
                    <Link className="dropdown-links-text" to={`/pin/new`}>
                      Pin
                    </Link>
                  </li>
                  <li className="dropdown-links">
                    <Link className="dropdown-links-text" to={`/board/new`}>
                      Board
                    </Link>
                  </li>
                </ul>
              </div>
              </div>
            </div>
            {/* <Link className="" to={`/board/new`}></Link> */}
          </div>
        </div>
        <PinProfileShowContainer />
      </div>
    );
  }
}

export default Profile;