import * as boardsAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';

export const receiveboards = boards => ({
  type: RECEIVE_BOARDS,
  boards,
});

export const receiveboard = board => ({
  type: RECEIVE_BOARD,
  board,
});

export const fetchboards = () => dispatch => (
  boardsAPIUtil.fetchboards().then(boards => (
    dispatch(receiveboards(boards))
  ))
);

export const createboard = board => dispatch => (
  boardsAPIUtil.createboard(board).then(board => (
    dispatch(receiveboard(board))
  ))
);