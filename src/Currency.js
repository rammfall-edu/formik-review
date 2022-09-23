import React, { useEffect } from 'react';
import { Formik, Form, useField, useFormikContext } from 'formik';

const UahInput = ({ name }) => {
  const [{ onBlur, onChange, value }] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <input
      type="text"
      name={name}
      value={value}
      onInput={({ target: { value } }) => {
        setFieldValue('usd', +(value / 37).toFixed(2));
      }}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

const UsdInput = ({ name }) => {
  const [{ onBlur, onChange, value }] = useField(name);
  const { setFieldValue, values } = useFormikContext();

  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onInput={({ target: { value } }) => {
        setFieldValue('uah', +(value * 37).toFixed(2));
      }}
    />
  );
};

const Currency = () => {
  return (
    <div className="container">
      <h1>Currency</h1>

      <Formik initialValues={{ uah: '', usd: '' }} onSubmit={() => {}}>
        <Form>
          <UahInput name="uah" />
          <UsdInput name="usd" />
        </Form>
      </Formik>
    </div>
  );
};

export default Currency;
