import { connect } from 'react-redux';
import React from 'react';
import DropZone from 'react-dropzone';
import { fetchBoards } from '../../actions/board_actions'

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
  }

  render() {
    const { boards } = this.props;
    const allBoards = Object.values(boards);

    return (
      <div className="boards">
        {allBoards.map((board) => (
          <div className="board-container">
            <div className="board"></div>
            <p className="board-title">{board.title}</p>
          </div>
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
  fetchBoards: () => dispatch(fetchBoards())
})

export default connect(msp, mdp)(ShowBoard);