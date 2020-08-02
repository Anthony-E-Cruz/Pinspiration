export const fetchpins = data => (
  $.ajax({
    method: 'GET',
    url: 'api/pins',
    data
  })
);

export const fetchpin = id => (
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