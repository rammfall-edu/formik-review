const HOST = 'http://localhost:3001';

const request = async (url, method = 'GET', body = null) => {
  const token = localStorage.userInfo
    ? JSON.parse(localStorage.userInfo).token
    : null;
  const requestData = await fetch(`${HOST}${url}`, {
    method,
    body,
    headers: token ? { authorization: token } : {},
  });
  const serializedData = await requestData.json();

  if (!requestData.ok) {
    const error = new Error(serializedData);
    error.description = serializedData;

    throw error;
  }

  return serializedData;
};

export const registerUser = async (body) =>
  await request('/register', 'POST', body);

export const loginUser = async (body) => await request('/login', 'POST', body);

export const getForms = async () => await request('/form');

export const createForm = async (body) => await request('/form', 'POST', body);
