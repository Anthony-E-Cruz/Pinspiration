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
      columns: 0,
      pins: []
    };
    this.getColumns = this.getColumns.bind(this)
    this.setPins = this.setPins.bind(this)
  }

  componentDidMount() {
    this.props.fetchPins();
    console.log(window.innerWidth)
    window.addEventListener('resize', this.getColumns);
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

  getColumns() {
    let columns = Math.floor((window.innerWidth - 100)/ 200)
    this.setState({ columns: columns })
    // console.log(this.state.columns)
  }

  setPins() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    const { columns } = this.state
    if (columns !== 0 ) {
      let itemsPerColumn = Math.floor(allPins.length / columns)
      let count = itemsPerColumn
    let tempArray = [];
    let index = 0
    // console.log(columns)
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
    console.log(allPins1)
    if (allPins1 !== 20) {
    return (
      <div className="pin-container">
        {/* <div ref={this.pinsContainer} className="pin-show"> */}
          {allPins1.map((pins) => (
            this.mapPins(pins)
          ))}
          {/* {allPins.map((pin, idx) => (
            <div key={idx} className="pins">
              <Link to={`/pins/${pin.id}`}>
                <img onClick={this.scroll} className="pin-images" src={pin.photoUrl} />
              </Link>
            </div>
          ))} */}
          
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
