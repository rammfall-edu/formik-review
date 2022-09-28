import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import Input from './../components/Input';
import { registerUser } from '../api';
import { useSubmit } from '../hooks/useSubmit';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../constants';

const Register = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useSubmit({
    requestHandler: registerUser,
    afterRequestHandler: () => {
      navigate(Routes.LOGIN);
    },
  });

  return (
    <div className="container">
      <h1>Register</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          username: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={yup.object().shape({
          email: yup.string().label('Email').email().min(5).max(30).required(),
          password: yup.string().label('Password').min(4).max(30).required(),
          username: yup.string().label('Username').min(4).max(30).required(),
          confirmPassword: yup
            .string()
            .label('Confirmation password')
            .min(4, ({ label }) => `${label} to small`)
            .max(30)
            .required()
            .oneOf([yup.ref('password')], 'Passwords must match'),
        })}
      >
        <Form>
          <Input name="email" label="Email" type="email" />
          <Input name="username" label="Username" />
          <Input name="password" label="Password" type="password" />
          <Input
            name="confirmPassword"
            label="Confirm password"
            type="password"
          />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
