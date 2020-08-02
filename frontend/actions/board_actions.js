import * as boardsAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards,
});

export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board,
});

export const fetchBoards = () => dispatch => (
  boardsAPIUtil.fetchBoards().then(boards => (
    dispatch(receiveBoards(boards))
  ))
);

export const createBoard = board => dispatch => (
  boardsAPIUtil.createBoard(board).then(board => (
    dispatch(receiveBoard(board))
  ))
);