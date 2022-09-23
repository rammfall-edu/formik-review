import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import Input from './Input';

const Application = () => {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  useEffect(() => {
    localStorage.notes = JSON.stringify(notes);
  }, [notes]);

  return (
    <div className="container">
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          setNotes((prevState) => {
            return [...prevState, values];
          });
          resetForm();
        }}
        validationSchema={yup.object().shape({
          title: yup.string().label('Title').min(4).max(16).required(),
          description: yup
            .string()
            .label('Description')
            .min(10)
            .max(300)
            .required(),
        })}
      >
        <Form>
          <Input name="title" />
          <Input name="description" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <ul>
        {notes.map(({ title, description }) => {
          return (
            <li key={nanoid()}>
              <h2>{title}</h2>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Application;
