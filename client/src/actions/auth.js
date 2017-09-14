const KEYS = ['id', 'uid', 'access-token', 'client', 'expiry'];

export const login = (id, headers) => {
  for ( let token of KEYS ) {
    localStorage.setItem(token, headers[token])
  };

  localStorage.setItem('id', id)
}

export const logout = () => {
  KEYS.forEach( token => {
    localStorage.removeItem(token);
  });
}