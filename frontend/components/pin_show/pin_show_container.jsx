import { connect } from "react-redux";
import React from "react";
// import PinShow from './pin_show'
import { receivepin } from "../../actions/pin_actions";

class Pins extends React.Component {
  constructor(props) {
    super(props);
    // const currentUser: ownProps.match.params.username;
    const { pins } = this.props;
    const { currentUserId } = this.props;
    this.state = {
      title: "",
      description: "",
      photoFile: null,
      photo: null,
      user_id: currentUserId,
      // board_id: ""
    };
  }

  // componentDidMount() { 
  //   this.props.receivepin(0);
  // }



  // pinDisplay() {
  //   const { pins } = this.props;
  //   const allPins = Object.values(pins);
  //   return (
  //     <div className="pin-show">
  //       <div className="pin-container">
  //         {allPins.map((pin, idx) => (
  //           <div key={idx} className="pins">
  //             {/* <img className="pin-images" src={pin.photoUrl} /> */}
  //             {/* <p>{pin.title}</p>
  //             <p>{pin.id}</p> */}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    const {currentPinId} = this.props;
    const currentPin = pins[currentPinId];
    console.log(currentPinId);
    console.log(pins);
    return (
      <div>
        <h1>THIS IS PIN SHOWWWWW</h1>
        {/* <img className="pin-images" src={currentPin.photoUrl} /> */}
        {/* <h1>{currentPin.title}</h1> */}
        {/* {this.pinDisplay()} */}
        {/* {this.pinCreateForm()}  */}
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  // debugger
  return {
    currentPinId: ownProps.match.params.pinId,
    pins: state.entities.pins,
    currentUserId: state.session.id,
  };
};

const mdp = (dispatch) => ({
  receivepin: (id) => dispatch(receivepin(id)),
});

export default connect(msp, mdp)(Pins);