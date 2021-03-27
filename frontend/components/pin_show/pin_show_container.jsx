import React from "react";
import { connect } from "react-redux";
import { fetchPins, fetchPin } from "../../actions/pin_actions";
import PinIndexContainer from './pin_index_container'
import { Link } from "react-router-dom";

class Pin extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { currentPinId } = this.props;
    this.props.fetchPin(currentPinId);
  }

  img() {
    const { pins } = this.props;
    const { currentPinId } = this.props;
    const currentPin = pins[currentPinId];
    if (currentPin) {
      const owner = currentPin.user
      const board = currentPin.board
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
      );
    } else {
      return (
        <h1>Pin Not Found</h1>
      )
    };
  };

  render() {
    return (
      <div className="outerrr">
        <div className="single-pin-show-container">
          <div>{this.img()}</div>
        </div>
        <p className="single-pin-text">
          Explore More Pins
        </p>
        <PinIndexContainer />
      </div>
    );
  }
}

const msp = (state, ownProps) => {
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