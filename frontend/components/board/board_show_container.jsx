import { connect } from "react-redux";
import React from "react";
import DropZone from "react-dropzone";
import { fetchBoards } from "../../actions/board_actions";
import { Link, Redirect } from "react-router-dom";

class ShowBoard extends React.Component {
  constructor(props) {
    super(props);
    // const currentUser: ownProps.match.params.username;
    const { boards } = this.props;
    const { currentUserId } = this.props;
    this.state = {
      title: "",
      user_id: currentUserId,
    };
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  boardDisplay() {
    const { boards } = this.props;
    const { boardId } = this.props;
    console.log(boards[boardId]);
    const currentBoard = boards[boardId];
    if (currentBoard) {
      const pins = Object.values(currentBoard[boardId]);
      return (
        <div className="board-show-page-container">
          <h1 className="board-show-title">{currentBoard.title}</h1>
          <div className="board-show-container">
            {pins.map((pin, idx) => (
              <div key={idx} className="pins">
                <Link to={`./pins/${pin.id}`}>
                  <img className="pin-images" src={pin.photoUrl} />
                  {/* <p>{pin.title}</p>
                <p>{pin.id}</p> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const { boards } = this.props;
    const { boardId } = this.props;
    console.log(boards[boardId]);
    return (
      <div className="boards">
        {this.boardDisplay()}
        {/* <h1>{boards[boardId].title}</h1> */}
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  return {
    boardId: ownProps.match.params.boardId,
    boards: state.entities.boards,
    currentUserId: state.session.id,
  };
};

const mdp = (dispatch) => ({
  fetchBoards: () => dispatch(fetchBoards()),
});

export default connect(msp, mdp)(ShowBoard);
