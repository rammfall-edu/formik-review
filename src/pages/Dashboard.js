import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { createForm, getForms } from '../api';
import Input from '../components/Input';
import { useSubmit } from '../hooks/useSubmit';

const Dashboard = () => {
  const [forms, setForms] = useState([]);
  const { handleSubmit } = useSubmit({
    requestHandler: createForm,
    afterRequestHandler: ({ data }) => {
      setForms((prevState) => {
        return [...prevState, data];
      });
    },
  });

  useEffect(() => {
    getForms().then((forms) => setForms(forms));
  }, []);

  return (
    <div className="container dashboard">
      <Formik
        validationSchema={yup.object().shape({
          title: yup.string().label('Title').min(8).max(40).required(),
        })}
        initialValues={{ title: '', isOpen: true }}
        onSubmit={handleSubmit}
      >
        <Form className="create-form">
          <Input name="title" label="Title" />
          <Input name="isOpen" label="Is open" type="checkbox" />
          <button type="submit">Create</button>
        </Form>
      </Formik>

      <ul>
        {forms.map(({ title, isOpen, id }) => {
          return (
            <li key={id}>
              <h2>{title}</h2>
              <p>{isOpen ? '🔓' : '🔒'}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dashboard;
