import { connect } from "react-redux";
import React from "react";
import { fetchPins, fetchPin } from "../../actions/pin_actions";
import PinIndexContainer from './pin_index_container'
import * as Scroll from "react-scroll";
import { Link } from "react-router-dom";


class Pin extends React.Component {
  constructor(props) {
    super(props);
    // const currentUser: ownProps.match.params.username;
    const { pins } = this.props;
    const { currentUserId } = this.props;
    const allPins = Object.values(pins);
    const { currentPinId } = this.props;
    const currentPin = pins[currentPinId];

  }

  componentDidMount() { 
    const { currentPinId } = this.props;
    this.props.fetchPin(currentPinId);
    // this.props.fetch
    // console.log(this.props.fetchPin(currentPinId))
    $.ajax({
      url: `api/users/${"2"}`,
      method: "GET",
    });
  }

  img() {
    const { pins } = this.props;
    const { currentPinId } = this.props;
    const currentPin = pins[currentPinId];
    if (currentPin) {
      const owner = currentPin.user
      const board = currentPin.board

      const ownerId = currentPin.user_id;
      const ownerUsername = currentPin.username
      // const { user } = this.props;

      return (
        <div className="single-pin-show-inner-container">
          <a name="top-of-page"></a>
          <div>
            <img className="pin-show-images" src={currentPin.photoUrl} />
          </div>
          <div className="pin-show-text-container">
            <div className="pin-show-header"></div>
            <p className="pin-show-title">{currentPin.title}</p>
            <p className="pin-show-description">
              {currentPin.description} 
            </p>
            <div className="owner-pin-links">
              <Link className="pin-show-link" to={`/users/${owner.id}/pins`}>
                <p className="pin-show-userId">{owner.username}</p>
              </Link>
              saved to
              <Link className="pin-show-link" to={`/boards/${board.id}`}>
                <p className="pin-show-boardId">{board.title}</p>
              </Link>
            </div>
          </div>
        </div>
      );} else { 
      return "20"
    };
  };

  render() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    const {currentPinId} = this.props;
    const currentPin = pins[currentPinId];
    const {user} = this.props;
    // const pinOwnerId = currentPin.user_id
    
    // console.log(pins[47]);

    return (
      <div className="outerrr">
        <div className="single-pin-show-container">
          <div>{this.img()}</div>
        </div>
        <p className="single-pin-text">
        More Like This
        </p>
        <PinIndexContainer />
      </div>
    );
  }
} 

const msp = (state, ownProps) => {
  // const currentPinId = ownProps.match.params.pinId;
  return {
    currentPinId: ownProps.match.params.pinId,
    pins: state.entities.pins,
    currentUserId: state.session.id,
  };
};

const mdp = (dispatch) => ({
  fetchPins: () => dispatch(fetchPins()),
  fetchPin: id => dispatch(fetchPin(id)),
});

export default connect(msp, mdp)(Pin);