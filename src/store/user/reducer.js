import { SUCCESS_LOGIN, SUCCESS_LOGOUT } from './types';

const initialState = {
  isLoggedIn: !!localStorage.userInfo,
  userInfo: localStorage.userInfo ? JSON.parse(localStorage.userInfo) : {},
};

export const user = (state = initialState, action) => {
  if (action.type === SUCCESS_LOGIN) {
    return {
      isLoggedIn: true,
      userInfo: action.userInfo,
    };
  }

  if (action.type === SUCCESS_LOGOUT) {
    return {
      isLoggedIn: false,
      userInfo: {},
    };
  }

  return state;
};
