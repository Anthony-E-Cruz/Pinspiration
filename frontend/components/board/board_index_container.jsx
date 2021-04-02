import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchBoards } from '../../actions/board_actions'
import { Link } from "react-router-dom";
import { fetchPins } from "../../actions/pin_actions";

const ShowBoard = props => {

  useEffect(() => {
    props.fetchBoards();
    props.fetchPins();
  })

  const renderCollage = (board) => {
    if (board[board.id]) {
      let pins = board[board.id]
      let pinUrls = Object.values(pins);

      if (pinUrls.length > 2) {
        let url = Object.values(pinUrls[0]);
        let url2 = Object.values(pinUrls[1]);
        let url3 = Object.values(pinUrls[2]);
        return (
          <div className="board-collage-container">
            <img className="board-icon-large" src={url} />
            <div>
              <img className="board-icon-small-top" src={url2} />
              <img className="board-icon-small-bottom" src={url3} />
            </div>
          </div>
        );
      } else if (pinUrls.length > 1) {
        let url = Object.values(pinUrls[0]);
        let url2 = Object.values(pinUrls[1]);
        return (
          <div className="board-collage-container">
            <img className="board-icon-large" src={url} />
            <div>
              <img className="board-icon-small-top" src={url2} />

              <div className="board-icon-small-bottom"></div>
            </div>
          </div>
        );
      } else if (pinUrls.length > 0) {
        let url = Object.values(pinUrls[0]);
        return (
          <div className="board-collage-container">
            <img className="board-icon-large" src={url} />
            <div>
              <div className="board-icon-small-top"></div>
              <div className="board-icon-small-bottom-placeholder"></div>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="board-collage-container">
          <div className="board-icon-large" ></div>
          <div>
            <div className="board-icon-small-top"></div>
            <div className="board-icon-small-bottom-placeholder"></div>
          </div>
        </div>
      );
    };
  };

  const { boards } = props;
  const allBoards = Object.values(boards);
  return (
    <div className="boards">
      {allBoards.map((board, idx) => (
        <Link key={idx} to={`/boards/${board.id}`}>
          <div key={idx} className="board-container">
            <div className="board">
              {renderCollage(board)}
            </div>
            <p className="board-title">{board.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );

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