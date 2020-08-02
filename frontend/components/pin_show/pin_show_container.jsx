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

  render() {
    // debugger
    const { pins } = this.props;
    const allPins = Object.values(pins);
    console.log(allPins);
    return (
      <ul>
        <li>{allPins.map(pin => pin.title )}</li>  
      </ul>
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
