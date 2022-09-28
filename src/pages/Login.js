import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import Input from '../components/Input';
import { loginUser } from '../api';
import { useSubmit } from '../hooks/useSubmit';
import { Routes } from '../constants';
import { successLogin } from '../store/user/actions';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit } = useSubmit({
    requestHandler: loginUser,
    afterRequestHandler: (data) => {
      localStorage.userInfo = JSON.stringify(data);
      navigate(Routes.DASHBOARD);
      dispatch(successLogin({ userInfo: data }));
    },
  });
  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={yup.object().shape({
          email: yup.string().label('Email').email().min(5).max(30).required(),
          password: yup.string().label('Password').min(4).max(30).required(),
        })}
      >
        <Form>
          <Input name="email" label="Email" type="email" />
          <Input name="password" label="Password" type="password" />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
