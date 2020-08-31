import { connect } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
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
    this.resizeAllGridItems()
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

  resizeInstance(instance) {
    item = instance.elements[0];
    resizeGridItem(item);
  }

  resizeAllGridItems() {
    let allItems = ReactDOM.findDOMNode(this).getElementsByClassName("pins");
    // debugger
    if (allItems)
    console.log(allItems[0]);
    // var arr = Array.prototype.slice.call(htmlCollection)
    // console.log([].slice.call(allItems));
    for (let x = 0; x < allItems.length; x++) {
      // debugger 
      // console.log(allItems[x]);
      this.resizeGridItem(allItems[x], this.resizeInstance);
    }
  }
  
  resizeGridItem(item) {
    debugger
    grid = ReactDOM.findDOMNode(this).getElementsByClassName("grid")[0];
    console.log(grid);
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
  }

  randomizePins(pins) {
    let pinIndex = pins.length, 
    pinHolder, randomPinIndex;

    while (pinIndex > 0) {
      randomPinIndex = Math.floor(Math.random() * pinIndex);
      pinIndex -= 1;

      pinHolder = pins[pinIndex];
      pins[pinIndex] = pins[randomPinIndex];
      pins[randomPinIndex] = pinHolder;
    }

    return pins;
  }

  resizeInstance(instance) {
    item = instance.elements[0];
    resizeGridItem(item);
  }

  pinDisplay() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    const shuffledPins = this.randomizePins(allPins);

    if (allPins) {

      return (
      // <div className="pin-show">
      <div className="grid">
        {/* <div className="pin-container"> */}
          {shuffledPins.map((pin, idx) => (
            // <div key={idx} className="pins">
            <div key={idx} className="pins">
              <Link to={`/pins/${pin.id}`}>
                {/* <a href="#"> */}
                {/* <img onClick={this.scroll} className="pin-images" src={pin.photoUrl} /> */}
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
