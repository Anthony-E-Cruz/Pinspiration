import { connect } from 'react-redux';
import PinShow from './pin_show'
import { fetchPins } from '../../actions/pin_actions'

class Pins extends React.Component {
  constructor(props) {
    super(props)
    // const currentUser: ownProps.match.params.username;
    const { pins } = this.props
  }

  render() {
    const { props } = this.props
    return (
      <h1>{pins.title}</h1>
    )
  }
};

const msp = (state) => {
  return {
    pins: state.entities.pins
  }
}

const mdp = dispatch => ({
  fetchPins: (data) => dispatch(fetchPins(data))
})

export default connect(msp, mdp)(Pins)
