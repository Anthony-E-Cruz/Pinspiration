import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions'

const CreateBoard = props => {

  const { currentUserId } = props;
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const board = { title: title, creator_id: currentUserId };
    props.processForm(board)
      .then(document.location.href = `#/users/${currentUserId}/pins`);
  }

  return (
    <div className="create-board-form-container">
      <form
        className="create-board-form-container"
        onSubmit={e => handleSubmit(e)}
      >
        <div className="create-board-form">
          <h1 className="create-board-form-title">Create a Board!</h1>
          <label>
            Title
              <input
              type="text"
              id="post-body"
              value={title}
              onChange={e => setTitle(e.currentTarget.value)}
            />
          </label>
          <button className="create-board-button">Create!</button>
        </div>
      </form>
    </div>
  );

};

const msp = (state) => {
  return {
    boards: state.entities.boards,
    userBoards: state.entities.users.boards,
    currentUserId: state.session.id
  }
}

const mdp = dispatch => ({
  processForm: (board) => dispatch(createBoard(board))
})

export default connect(msp, mdp)(CreateBoard);