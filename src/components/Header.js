import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Routes } from '../constants';
import { logoutUser } from '../store/user/actions';
import {
  isLoggedInSelector,
  userUsernameSelector,
} from '../store/user/selectors';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isLoggedInSelector);
  const username = useSelector(userUsernameSelector);

  return (
    <header>
      <div className="container">
        <Link to={Routes.DASHBOARD}>Former</Link>
        <nav>
          {isLoggedIn ? (
            <li>
              <span>{username}</span>
              <button
                onClick={() => {
                  delete localStorage.userInfo;
                  dispatch(logoutUser());
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <ul>
              <li>
                <Link to={Routes.REGISTER}>Register</Link>
              </li>
              <li>
                <Link to={Routes.LOGIN}>Login</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
