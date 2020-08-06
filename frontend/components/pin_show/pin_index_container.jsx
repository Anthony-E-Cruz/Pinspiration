import { connect } from "react-redux";
import React from "react";
// import PinShow from './pin_show'
import { Link } from "react-router-dom";
import { fetchPins } from "../../actions/pin_actions";

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

  componentDidMount() {
    this.props.fetchPins();
  }

  handleInput(e) {
    this.setState({ title: e.currentTarget.value });
  }

  scroll() {
    
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        100
      );
    
  }

  pinDisplay() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    if (allPins) {
      // console.log(allPins);
    

    return (
      <div className="pin-show">
        {/* <div className="pin-container"> */}
          {allPins.map((pin, idx) => (
            <div key={idx} className="pins">
              <Link to={`/pins/${pin.id}`}>
                {/* <a href="#"> */}
                  <img onClick={this.scroll} className="pin-images" src={pin.photoUrl} />
                  {/* <p>{pin.title}</p>
                <p>{pin.id}</p> */}
                
                 {/* <p> {$("html, body").animate(
                     {
                       scrollTop: 0,
                     },
                     400
                   )
                } </p> */}
                {/* </a> */}
              </Link>
            </div>
          ))}
        {/* </div> */}
      </div>
    );
   }
  }

  render() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    // console.log(pins);
    return (
      <div>
        {this.pinDisplay()}
        {/* {this.pinCreateForm()}  */}
      </div>
    );
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
