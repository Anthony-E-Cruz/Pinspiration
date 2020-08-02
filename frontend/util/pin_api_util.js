export const fetchPins = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/pins',
  })
};

export const fetchPin = id => (
  $.ajax({
    method: 'GET',
    url: `api/pins/${id}`,
    data
  })
);

export const createPin = pinForm => (
  $.ajax({
    method: 'POST',
    url: 'api/pins',
    data: pinForm,
    contentType: false,
    processData: false
  })
);