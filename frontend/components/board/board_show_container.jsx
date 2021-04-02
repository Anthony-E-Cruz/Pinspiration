import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBoards } from "../../actions/board_actions";
import { Link } from "react-router-dom";

const ShowBoard = props => {

  useEffect(() => {
    props.fetchBoards();
  }, []);

  const boardDisplay = () => {
    const { boards } = props;
    const { boardId } = props;
    const currentBoard = boards[boardId];
    if (currentBoard && currentBoard.pins.length > 0) {
      const pins = Object.values(currentBoard[boardId]);
      return (
        <div className="board-show-page-container">
          <h1 className="board-show-title">{currentBoard.title}</h1>
          <div className="board-show-container">
            {pins.map((pin, idx) => (
              <div key={idx} className="pins">
                <Link
                  className="board-pin-show-link"
                  to={`/pins/${currentBoard.pins[idx].id}`}
                >
                  <img className="pin-images" src={pin.photoUrl} />
                  <p>{currentBoard.pins[idx].title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="no-pins-container">
          <p>There aren’t any Pins on this board yet</p>
          <Link to="/">
            <button className="find-pins-btn">New ideas</button>
          </Link>
        </div>
      );
    }
  }

  return (
    <div className="boards">
      {boardDisplay()}
    </div>
  );
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