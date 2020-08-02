import { connect } from 'react-redux';
import React from 'react';
// import PinShow from './pin_show'
import { fetchPins } from '../../actions/pin_actions'

class Pins extends React.Component {
  constructor(props) {
    super(props)
    // const currentUser: ownProps.match.params.username;
    const { pins } = this.props
    this.state = {
      title: "",
      description: "",
      photoFile: null,
      photo: null
    };
  }

  componentDidMount() {
    this.props.fetchPins()
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
    console.log(this.state)
    formData.append('pin[title]', this.state.title);
    formData.append('pin[photo]', this.state.photoFile);
    $.ajax({
      url: 'api/pins',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    })
    // .then((response) => console.log(response.message),
            // (response) => console.log(response.responseJSON),
    // );
  }


  render() {
    // debugger
    // console.log(this.props.pins);
    const { pins } = this.props;
    const allPins = Object.values(pins);
    // console.log(allPins);
    return (
      <div>
        <ul>
          <li>{allPins.map(pin => pin.title )}</li>  
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1>Body of Pin</h1>
          {/* <input type="file" onChange={this.handleFile.bind(this)} name="" id=""/>
          <input type="text" onChange={this.handleFile.bind(this)} /> */}
          <input type="text"
            id="post-body"
            value={this.state.title}
            onChange={this.handleInput.bind(this)} />
          <input type="file"
            onChange={this.handleFile.bind(this)} />
          <button>Submit!</button>
        </form>
      </div>
    )
  }
};

const msp = (state) => {
  // debugger
  // console.log(state.entities.pins);
  return {
    pins: state.entities.pins
  }
}

const mdp = dispatch => ({
  fetchPins: (dta) => dispatch(fetchPins())
})

export default connect(msp, mdp)(Pins)
