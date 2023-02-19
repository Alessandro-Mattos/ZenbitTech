const validate = {
    name: {
      required: true
    },
    email: {
      required: true,
      pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    message: {
      required: true,
      minLength: 20
    }
  };

  export default validate;