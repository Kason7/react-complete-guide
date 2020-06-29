import React from 'react';

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

export default Persons;
