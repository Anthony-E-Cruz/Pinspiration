export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const update = (user, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: { user },
    // contentType: false,
    // processData: false
  })
};

export const demoUser = () => (
  $.ajax({
    method: "POST",
    url: '/api/session',
    data: { user: { email: 'demouser@gmail.com' , password: 'hunter12' } } 
  })
);




