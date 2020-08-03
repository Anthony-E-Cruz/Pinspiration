import { connect } from "react-redux";
import React from "react";
// import PinShow from './pin_show'
import { fetchPins } from "../../actions/pin_actions";

class Pins extends React.Component {
  constructor(props) {
    super(props);
    // const currentUser: ownProps.match.params.username;
    const { pins } = this.props;
    const { currentUserId } = this.props;
    console.log(currentUserId);
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
    console.log(this.state);
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
    // .then((response) => console.log(response.message),
    // (response) => console.log(response.responseJSON),
    // );
  }

  pinDisplay() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    return (
      <div className="pin-show">
        <div className="pin-container">
          {allPins.map((pin) => (
            <div className="pins">
              <img className="pin-images" src={pin.photoUrl} />
              <p>{pin.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  pinCreateForm() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
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

    console.log(allPins);
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
  fetchPins: (dta) => dispatch(fetchPins()),
});

export default connect(msp, mdp)(Pins);
