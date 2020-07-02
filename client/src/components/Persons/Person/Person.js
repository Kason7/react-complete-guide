import React, { children, useEffect } from 'react';
import Radium from 'radium';

// Import styling
import './Person.css';

export const Person = (props) => {
  useEffect(() => {
    console.log('Testing useEffect');
    // http request
    setTimeout(() => {
      alert('Hello');
    }, 1000);
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
    <div className='Person' style={style}>
      <p onClick={props.delete}>
        I'm {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(Person);
