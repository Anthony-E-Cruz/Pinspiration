import { connect } from "react-redux";
import React from "react";
import DropZone from "react-dropzone";
import { fetchBoards } from "../../actions/board_actions";
import { Link } from "react-router-dom";

class ShowBoard extends React.Component {
  constructor(props) {
    super(props);
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

  boardRender() {
    const { boards } = this.props;
    const allBoards = Object.values(boards);
    if (boards) {
      return (
        <div className="boards">
          {allBoards.map((board, idx) => (
            <Link key={idx} to={`/boards/${board.id}`}>
              <div key={idx} className="board-container">
                <div className="board"></div>
                <p className="board-title">{board.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    return this.boardRender();
  }
}

const msp = (state) => {
  const id = state.session.id;
  return {
    boards: state.entities.users[id].boards,
    currentUserId: state.session.id,
  };
};

const mdp = (dispatch) => ({
  fetchBoards: () => dispatch(fetchBoards()),
});

export default connect(msp, mdp)(ShowBoard);
