import React from "react";
import { Link } from "react-router-dom";
import BoardIndexContainer from "../board/board_profile_index_container";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    const { userId } = this.props;
    const { users } = this.props;
    const currentUser = users[userId];
  }

  render() {
    const { userId } = this.props;
    const { users } = this.props;
    const currentUser = users[userId];
    return (
      <div>
        <div className="profile">
          <div className="profile-header">
            <img className="profile-img" src={window.profile_img} />
            <h1 className="username-header">{currentUser.username}</h1>
          </div>
          <div className="profile-sub-header">
            <Link to={`/${userId}/edit`}>
              <FontAwesomeIcon
                className="profile-link-icons"
                icon={faPencilAlt}
              />
            </Link>
            <div>
              <Link
                className="current-page-bttn"
                to={`/users/${userId}/boards`}
              >
                Boards
              </Link>
              <Link className="other-page-bttn" to={`/users/${userId}/pins`}>
                Pins
              </Link>
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
          </div>
        </div>
        <BoardIndexContainer />
      </div>
    );
  }
}

export default Profile;
