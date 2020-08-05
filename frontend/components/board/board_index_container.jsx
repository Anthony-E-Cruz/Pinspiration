import { connect } from 'react-redux';
import React from 'react';
import DropZone from 'react-dropzone';
import { fetchBoards } from '../../actions/board_actions'
import { Link } from "react-router-dom";
import { fetchPins } from "../../actions/pin_actions";


class ShowBoard extends React.Component {
  constructor(props) {
    super(props)
    // const currentUser: ownProps.match.params.username;
    const { boards } = this.props
    const { currentUserId } = this.props
    this.state = {
      title: "",
      user_id: currentUserId
    };
  }

  componentDidMount() {
    this.props.fetchBoards();
    this.props.fetchPins();
  }

  render() {
    const { boards } = this.props;
    const allBoards = Object.values(boards);
    // const board
    // console.log(allBoards);
    // console.log(allBoards[0]);
    // console.log(allBoards[0].pins);
    // if ()
    return (
      <div className="boards">
        {allBoards.map((board, idx) => (
          <Link key={idx} to={`/boards/${board.id}`}>
            <div key={idx} className="board-container">
              <div className="board">
                {/* {console.log(board.pins.length)} */}
                {/* {if ((board.pins.length) > 0){
                  
                }} */}
                {/* {console.log(pins)} */}
                {/* { const pins = Object.assign(board[board.id]) } */}
                {/* <img className="pin-images" src={board[board.id][0].photoUrl} /> */}
              </div>
              <p className="board-title">{board.title}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
};

const msp = (state) => {
  return {
    boards: state.entities.boards,
    currentUserId: state.session.id
  }
}

const mdp = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards()),
  fetchPins: () => dispatch(fetchPins())
})

export default connect(msp, mdp)(ShowBoard);