import React from 'react';
import useForm from './useForm';
export default () => {
  const [values, handleChange] = useForm({
    fName: '',
    email: '',
    password: ''
  });
  return (
    <>
      <h1>Hey</h1>
      <form>
        <input
          type='text'
          name='fName'
          value={values.fName}
          placeholder='First Name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='email'
          value={values.email}
          placeholder='Email'
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          value={values.password}
          placeholder='Password'
          onChange={handleChange}
        />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};
