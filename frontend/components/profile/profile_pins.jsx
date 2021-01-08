import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { fetchPins } from "../../actions/pin_actions";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "./profile_boards";

class Pins extends React.Component {
  constructor(props) {
    super(props);
    const { pins } = this.props;
    const { currentUserId } = this.props;
    this.state = {
      user_id: currentUserId,
      columns: 0,
      pins: [],
      randomized: false
    };
    this.getColumns = this.getColumns.bind(this)
    this.setPins = this.setPins.bind(this)
    this.randomizePins = this.randomizePins.bind(this)
  }

  componentDidMount() {
    this.props.fetchPins();
    this.props.fetchUsers();
    this.getColumns();
    this.randomizePins();
    window.addEventListener('resize', this.getColumns);
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
    const userPins = allPins.filter(pin => parseInt(pin.user.id) === parseInt(userId));
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

  mapPins(pins) {
    return (
      <div ref={this.pinsContainer} className="pin-show">
        {pins.map((pin, idx) => (
          <div key={idx} className="pins">
            <Link to={`/pins/${pin.id}`}>
              <img onClick={this.scroll} className="pin-images" src={pin.photoUrl} />
            </Link>
          </div>
        ))}
      </div>
    )
  }

  pinDisplay() {
    const allPins1 = (this.setPins())
    if (allPins1 !== 20) {
      return (
        <div className="pin-container">
          {allPins1.map((pins) => (
            this.mapPins(pins)
          ))}
        </div>
      );
    }
  }

  render() {
    const { userId } = this.props;
    const { users } = this.props;
    const currentUser = users[userId];
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

const msp = (state) => {
  return {
    pins: state.entities.pins,
    currentUserId: state.session.id,
  };
};

const mdp = (dispatch) => ({
  fetchPins: () => dispatch(fetchPins()),
});

export default connect(msp, mdp)(Pins);
