import { connect } from "react-redux";
import React from "react";
// import PinShow from './pin_show'
import { Link } from "react-router-dom";
import { fetchPins } from "../../actions/pin_actions";
// import { debug } from "webpack";

class Pins extends React.Component {
  constructor(props) {
    super(props);
    // const currentUser: ownProps.match.params.username;
    const { pins } = this.props;
    const { currentUserId } = this.props;
    this.state = {
      user_id: currentUserId,
      columns: 0,
      pins: [],
      randomized: false
    };
    this.getColumns = this.getColumns.bind(this)
    this.setPins = this.setPins.bind(this)
    this.randomizePins = this.randomizePins.bind(this)
  }

  componentDidMount() {
    this.props.fetchPins();
    this.getColumns();
    this.randomizePins();
    window.addEventListener('resize', this.getColumns);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getColumns);
  }

  scroll() {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        100
      );
  }

  getColumns() {
    console.log(window.innerWidth)
    let columns = Math.floor((window.innerWidth - 155)/ 200)
    this.setState({ columns: columns })
    console.log(columns)
  }

  randomizePins() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    if(!this.state.randomized && allPins.length > 0){
      let pinIndex = allPins.length,
      pinHolder, randomPinIndex;
      while (pinIndex > 0) {
        randomPinIndex = Math.floor(Math.random() * pinIndex);
        pinIndex -= 1;
        
        pinHolder = allPins[pinIndex];
        allPins[pinIndex] = allPins[randomPinIndex];
        allPins[randomPinIndex] = pinHolder;
      }
      this.setState({pins: allPins, randomized: true})
    } 
  }

  setPins() {
    const { pins } = this.state;
    const allPins = Object.values(pins);
    const { columns } = this.state
    if (columns !== 0 ) {
      this.randomizePins()
      let itemsPerColumn = Math.floor(allPins.length / columns)
      let count = itemsPerColumn
    let tempArray = [];
    let index = 0
    for (let j = 0; j < columns; j++) {
      let subArray = [];
      for (let i = index; i < count; i ++) {
        subArray.push(allPins[i])
        index ++
      }
      count += itemsPerColumn
      tempArray.push(subArray)
    };
    return tempArray
    } else {
      return 20
    }
  }

  mapPins(pins) {
    return(
      <div ref={this.pinsContainer} className="pin-show">
      {pins.map((pin, idx) => (
        <div key={idx} className="pins">
          <Link to={`/pins/${pin.id}`}>
            <img onClick={this.scroll} className="pin-images" src={pin.photoUrl} />
          </Link>
        </div>
      ))}
        </div>
    )
  }

  pinDisplay() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    const { columns } = this.state
    const allPins1 = (this.setPins())
    if (allPins1 !== 20) {
    return (
      <div className="pin-container">
        {allPins1.map((pins) => (
          this.mapPins(pins)
        ))}
      </div>
    );
   }
  }

  render() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    return (
      <div>
        {this.pinDisplay()}
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
