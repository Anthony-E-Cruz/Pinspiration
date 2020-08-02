export const fetchBoards = () => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: 'api/boards',
  })
};

export const fetchBoard = id => (
  $.ajax({
    method: 'GET',
    url: `api/boards/${id}`,
    data
  })
);

export const createBoard = boardForm => (
  $.ajax({
    method: 'POST',
    url: 'api/boards',
    data: boardForm,
  })
);