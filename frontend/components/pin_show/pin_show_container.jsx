import { connect } from 'react-redux';
import React from 'react';
// import PinShow from './pin_show'
import { fetchPins } from '../../actions/pin_actions'

class Pins extends React.Component {
  constructor(props) {
    super(props)
    // const currentUser: ownProps.match.params.username;
    const { pins } = this.props
  }

  componentDidMount() {
    this.props.fetchPins()
  }

  handleFile(e) {
    this.setState({photoUrl: e.currentTarget.files[0]})
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new formData();
    formData.append('pin[title]', this.state.title);
    formData.append('pin[photo]', this.state.photoFile);
    $.ajax({
      URL: 'api/pins',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then((response) => console.log(response))
  }


  render() {
    // debugger
    const { pins } = this.props;
    const allPins = Object.values(pins);
    console.log(allPins);
    return (
      <div>
        <input type="file" onChange={this.handleFile} name="" id=""/>
        <ul>
          <li>{allPins.map(pin => pin.title )}</li>  
        </ul>
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
  fetchPins: (data) => dispatch(fetchPins(data))
})

export default connect(msp, mdp)(Pins)
