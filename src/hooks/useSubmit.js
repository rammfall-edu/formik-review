export const useSubmit = ({
  requestHandler,
  afterRequestHandler = () => {},
  isResetAfterRequest = true,
}) => {
  return {
    handleSubmit: async (values, { resetForm, setFieldError }) => {
      const body = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        key !== 'confirmPassword' && body.append(key, value);
      });

      try {
        const data = await requestHandler(body);
        await afterRequestHandler(data);
        isResetAfterRequest && resetForm();
      } catch ({ description: { name, info } }) {
        setFieldError(name, info);
      }
    },
  };
};
