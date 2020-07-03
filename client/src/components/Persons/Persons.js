import React from 'react';
import PropTypes from 'prop-types';

// Import components
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export const Persons = (props) =>
  props.persons.map((person, index) => (
    <ErrorBoundary key={index}>
      <Person
        name={person.name}
        age={person.age}
        delete={() => props.delete(index)}
        changed={(event) => props.changed(event, person.id)}
      />
    </ErrorBoundary>
  ));

Person.propTypes = {
  delete: PropTypes.func,
  age: PropTypes.number,
  changed: PropTypes.func,
  name: PropTypes.string,
};

export default Persons;
