import { SUCCESS_LOGIN, SUCCESS_LOGOUT } from './types';

export const successLogin = ({ userInfo }) => {
  return {
    type: SUCCESS_LOGIN,
    userInfo,
  };
};

export const logoutUser = () => {
  return {
    type: SUCCESS_LOGOUT,
  };
};
