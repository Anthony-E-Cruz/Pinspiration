import { RECEIVE_BOARDS, RECEIVE_BOARD } from '../actions/board_actions'

const boardsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOARDS:
      return action.boards;
    case RECEIVE_BOARD:
      const newBoard = { [action.board.id]: action.board };
      return Object.assign({}, oldState, newBoard);
    default:
      return oldState;
  };
};

export default boardsReducer;