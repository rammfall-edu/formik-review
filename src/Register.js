import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import Input from './Input';

const Register = () => {
  return (
    <div className="container">
      <h1>Register</h1>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        onSubmit={async (values, formikHelpers) => {
          const body = new FormData();
          Object.entries(values).forEach(([key, value]) => {
            key !== 'confirmPassword' && body.append(key, value);
          });

          const data = await fetch(
            'https://links-server-id.herokuapp.com/register',
            {
              method: 'POST',
              body,
            }
          );

          const result = await data.json();

          if (!data.ok) {
            formikHelpers.setFieldError(result.field, result.info);

            return;
          }

          formikHelpers.resetForm();
        }}
        validationSchema={yup.object().shape({
          email: yup.string().email().min(5).max(30).required(),
          password: yup.string().min(8).max(20).required(),
          confirmPassword: yup
            .string()
            .min(8)
            .max(20)
            .required()
            .oneOf([yup.ref('password')], 'Passwords must match'),
        })}
      >
        <Form>
          <Input name="email" label="Email" type="email" />
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
