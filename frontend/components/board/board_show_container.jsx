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
      <div>
        {allBoards.map(board => (
          board.title
        ))}
      </div>
    );
  }
};

const msp = (state) => {
  console.log(state.entities);
  return {
    boards: state.entities.boards,
    currentUserId: state.session.id
  }
}

const mdp = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards())
})

export default connect(msp, mdp)(ShowBoard);