import React, { children, useEffect, Fragment } from 'react';
import Radium from 'radium';

// Import styling
import './Person.css';

// Import context props
import AuthContext from '../../../context/auth-context';

export const Person = (props) => {
  useEffect(() => {
    console.log('Testing useEffect');
    // http request

    return () => {
      console.log('Cleanup work in useEffect');
    };
  }, []);

  const style = {
    '@media (min-width: 500px)': {
      width: '450px',
    },
  };

  return (
    <AuthContext.Consumer>
      {(context) => (
        <Fragment>
          <p onClick={props.delete}>
            I'm {props.name} and I am {props.age} years old.
          </p>
          <p>{props.children}</p>
          <input type='text' onChange={props.changed} value={props.name} />
        </Fragment>
      )}
    </AuthContext.Consumer>
  );
};

export default React.memo(Radium(Person));
