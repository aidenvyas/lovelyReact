import React, { useContext } from 'react';
import useForm from './useForm';
import Darkmode from './Darkmode';
export default () => {
  const [values, handleChange] = useForm({
    fName: '',
    email: '',
    password: ''
  });
  const { darkMode, setDarkMode } = useContext(Darkmode);
  return (
    <>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        Toggle View
      </button>
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
