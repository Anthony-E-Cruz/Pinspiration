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

  // renderPins

  pinDisplay() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    if (allPins) {
      console.log(allPins);
    return (
      <div className="pin-show">
        <div className="pin-container">
          {allPins.map((pin, idx) => (
            <div key={idx} className="pins">
              <Link to={`/pins/${pin.id}`}>
                <img className="pin-images" src={pin.photoUrl} />
                {/* <p>{pin.title}</p>
                <p>{pin.id}</p> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
              }
  }

  pinCreateForm() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    // console.log(pins)
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h1>Create a Pin!</h1>
        <input
          type="file"
          onChange={this.handleFile.bind(this)}
          name=""
          id=""
        />
        <input type="text" onChange={this.handleFile.bind(this)} />
        <input
          type="text"
          id="post-body"
          value={this.state.title}
          onChange={this.handleInput.bind(this)}
        />
        <input type="file" onChange={this.handleFile.bind(this)} />
        <button>Submit!</button>
      </form>
    );
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
