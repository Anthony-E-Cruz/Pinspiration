export const fetchBoards = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/boards'
  })
};

export const fetchBoard = id => (
  $.ajax({
    method: 'GET',
    url: `api/boards/${id}`,
    data
  })
);

export const createBoard = (boardForm) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: 'api/boards',
    data: {board: boardForm},
  }) 
};