import { connect } from "react-redux";
import React from "react";
import { fetchPins, fetchPin } from "../../actions/pin_actions";

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
    this.props.fetchPin(47);
  }

  img() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    const { currentPinId } = this.props;
    const currentPin = pins[47];

    console.log(pins[47]);
    if (currentPin) {
      return (
        <div className="single-pin-show-inner-container">
          <div>
            <img className="pin-show-images" src={currentPin.photoUrl} />
          </div>
          <div className="pin-show-text-container">
            <div className="pin-show-header">PIN SHOW HEADER</div>
            <p className="pin-show-title">{currentPin.title}</p>
            <p className="pin-show-description">
              {currentPin.description} DESCRIPTION
            </p>
            <p className="pin-show-userId">{currentPin.user_id} USER</p>
            <p className="pin-show-boardId">{currentPin.board_id} BOARD</p>
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
    const currentPin = pins[47];

    console.log(pins[47]);

    return ( 
      <div className="single-pin-show-container">
        <div>{this.img()}</div>
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