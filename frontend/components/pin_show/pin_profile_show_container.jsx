import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { fetchPins } from "../../actions/pin_actions";

class Pins extends React.Component {
  constructor(props) {
    super(props);
    const { pins } = this.props;
    const { currentUserId } = this.props;
    this.state = {
      title: "",
      description: "",
      photoFile: null,
      photo: null,
      user_id: currentUserId,
    };
  }

  componentDidMount() {
    this.props.fetchPins();
  }

  handleInput(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pin[title]", this.state.title);
    formData.append("pin[photo]", this.state.photoFile);
    formData.append("pin[user_id]", this.state.user_id);
    $.ajax({
      url: "api/pins",
      method: "POST",
      data: formData,
      contentType: false,
      processData: false,
    });
  }

  pinDisplay() {
    const { pins } = this.props;
    const { currentUserId } = this.props;
    const { userPins } = this.props
    if (pins) {
      const allPins = Object.values(pins);
      return (
        <div className="pin-show">
          <div className="pin-container">
            {allPins.map((pin, idx) => (
              <div key={idx} className="pins">
                <Link to={`/pins/${userPins[idx].id}`}>
                  <img className="pin-images" src={pin.photoUrl} />
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
    const { user } = this.props;
    return (
      <div>
        {this.pinDisplay()}
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  const id = state.session.id;
  const pins = state.entities.users[id][id];
  const userPins = state.entities.users[id].pins;
  return {
    userPins: userPins,
    pins: pins,
    currentUserId: state.session.id,
  };
};

const mdp = (dispatch) => ({
  fetchPins: () => dispatch(fetchPins()),
});

export default connect(msp, mdp)(Pins);
