import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchBoards } from '../../actions/board_actions';
import { Link } from "react-router-dom";
import { fetchPins } from "../../actions/pin_actions";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ShowBoard = props => {

  useEffect(() => {
    props.fetchBoards();
    props.fetchPins();
  }, []);

  const renderCollage = (board) => {
    const { userId } = props;
    if (board[board.id]) {
      let pins = board[board.id]
      let pinUrls = Object.values(pins);
      const { userId } = props;

      if (pinUrls.length > 2 && (parseInt(board.creator_id) === parseInt(userId))) {
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
      } else if (pinUrls.length > 1 && (parseInt(board.creator_id) === parseInt(userId))) {
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
      } else if (pinUrls.length > 0 && (parseInt(board.creator_id) === parseInt(userId))) {
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
    } else if ((parseInt(board.creator_id) === parseInt(userId))) {
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

  const renderBoard = (allBoards) => {
    const { userId } = props;
    return (
      allBoards.map((board, idx) => {
        if (parseInt(board.creator_id) === parseInt(userId)) {
          return (
            <Link className="board-title-link" key={idx} to={`/boards/${board.id}`}>
              <div key={idx} className="board-container">
                <div className="board">
                  {renderCollage(board)}
                </div>
                <p className="board-title">{board.title}</p>
              </div>
            </Link>
          )
        }
      }));
  }

  const { boards } = props;
  const allBoards = Object.values(boards);
  const { userId } = props;
  const { users } = props;
  const currentUser = users[userId];
  if (currentUser) {
    return (
      <div>
        <div>
          <div className="profile">
            <div className="profile-header">
              <img className="profile-img" src={window.profile_img} />
              <h1 className="username-header">{currentUser.username}</h1>
            </div>
            <div className="profile-sub-header">
              <Link to={`/${userId}/edit`}>
                <FontAwesomeIcon
                  className="profile-link-icons"
                  icon={faPencilAlt}
                />
              </Link>
              <div>
                <Link
                  className="current-page-bttn"
                  to={`/users/${userId}/boards`}
                >
                  Boards
              </Link>
                <Link className="other-page-bttn" to={`/users/${userId}/pins`}>
                  Pins
              </Link>
              </div>
              <div>
                <div className="dropdown-parent">
                  <FontAwesomeIcon className="profile-link-icons" icon={faPlus} />

                  <div className="dropdown-child">
                    <ul>
                      <li className="dropdown-links-header">Create</li>
                      <li className="dropdown-links">
                        <Link className="dropdown-links-text" to={`/pin/new`}>
                          Pin
                      </Link>
                      </li>
                      <li className="dropdown-links">
                        <Link className="dropdown-links-text" to={`/board/new`}>
                          Board
                      </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="boards">
          {renderBoard(allBoards)}
        </div>
      </div>
    );
  }
};

const msp = (state, ownProps) => {
  return {
    users: state.entities.users,
    userId: ownProps.match.params.userId,
    boards: state.entities.boards,
    currentUserId: state.session.id
  }
}

const mdp = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards()),
  fetchPins: () => dispatch(fetchPins()),
})

export default connect(msp, mdp)(ShowBoard);