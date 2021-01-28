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
    super(props);
    const { userId } = this.props;
    const { users } = this.props;
    const currentUser = users[userId];
    this.state = {
      columns: 0,
      pins: [],
      randomized: false
    }
    this.getColumns = this.getColumns.bind(this)
    this.setPins = this.setPins.bind(this)
    this.randomizePins = this.randomizePins.bind(this)
  }

  componentDidMount() {
    const { userId } = this.props;
    this.props.fetchUser(userId);
    window.addEventListener('resize', this.getColumns);
    this.props.fetchPins();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getColumns);
  }

  scroll() {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  }

  getColumns() {
    let columns = Math.floor((window.innerWidth - 100) / 200)
    this.setState({ columns: columns })
  }

  randomizePins() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    const { userId } = this.props;
    const userPins = allPins.filter(pin => pin.user.id === userId);
    if (!this.state.randomized && userPins.length > 0) {
      let pinIndex = userPins.length,
        pinHolder, randomPinIndex;
      while (pinIndex > 0) {
        randomPinIndex = Math.floor(Math.random() * pinIndex);
        pinIndex -= 1;

        pinHolder = userPins[pinIndex];
        userPins[pinIndex] = userPins[randomPinIndex];
        userPins[randomPinIndex] = pinHolder;
      }
      this.setState({ pins: userPins, randomized: true })
    }
  }

  setPins() {
    const { pins } = this.state;
    const allPins = Object.values(pins);
    const { columns } = this.state
    if (columns !== 0) {
      this.randomizePins()
      let itemsPerColumn = Math.floor(allPins.length / columns)
      let count = itemsPerColumn
      let tempArray = [];
      let index = 0
      for (let j = 0; j < columns; j++) {
        let subArray = [];
        for (let i = index; i < count; i++) {
          subArray.push(allPins[i])
          index++
        }
        count += itemsPerColumn
        tempArray.push(subArray)
      };
      return tempArray
    } else {
      return 20
    }
  }

  pinDisplay() {
    const { currentUserId } = this.props;
    const allPins1 = this.state;
    const { userId } = this.props;
    const { users } = this.props;
    const pins = (users[userId].pins);
    const pinUrls = users[userId][userId]
    if (pins) {
      const allPins = Object.values(pinUrls);
      return (
        <div className="pin-show">
          <div className="pin-container">
            {allPins.map((pin, idx) => (
              <div key={idx} className="pins">
                <Link to={`/pins/${pins[idx].id}`}>
                  <img className="pin-images" src={pin.photoUrl} />
                  {/* <p>{pin.title}</p>
                <p>{pin.id}</p> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="no-pins-container">
          <p>You haven't saved any Pins yet</p>
          <Link to="/">
            <button className="find-pins-btn">Find ideas</button>
          </Link>
        </div>
      );
    }
  }

  render() {
    const { userId } = this.props;
    const { users } = this.props;
    const currentUser = users[userId];
    this.randomizePins();
    if (currentUser) {
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
              {/* <FontAwesomeIcon icon="check-square" /> */}
              {/* <button type="submit">
                <i icon={faCoffee}></i>
              </button> */}
              {/* <i class="fas fa-pencil">Edit Profile</i> */}

              {/* <Link className="login-btn" to={`/pin/new`}>
              Create Pin
            </Link> */}
              <div>
                <Link
                  className="other-page-bttn"
                  to={`/users/${userId}/boards`}
                >
                  Boards
                </Link>
                <Link
                  className="current-page-bttn"
                  to={`/users/${userId}/pins`}
                >
                  Pins
                </Link>
                {/* <Link className="login-btn" to={`/boards/index`}>
                View Boards
              </Link> */}
              </div>
              <div>
                <div className="dropdown-parent">
                  <FontAwesomeIcon
                    className="profile-link-icons"
                    icon={faPlus}
                  />
                  <div className="dropdown-child">
                    <ul>
                      <li className="dropdown-links-header">Create</li>
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
          {this.pinDisplay()}
        </div>
      );
    } else {
      return 20;
    }
  }
}

export default Profile;