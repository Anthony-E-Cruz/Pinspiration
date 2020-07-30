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

export const demoUser = () => (
  $.ajax({
    method: "POST",
    url: '/api/session',
    data: { user: { email: 'demologin@gmail.com' , password: 'hunter12' } } 
  })
);
