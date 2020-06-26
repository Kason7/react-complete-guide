import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

import './Person/Person.css';

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 },
    ],
    showPersons: false,
  });

  // Delete person handler
  const deletePersonHandler = (index) => {
    // const persons = personsState.persons.slice(); (also works for Updating State Immutably / safely with a copy)
    const persons = [...personsState.persons];
    persons.splice(index, 1);
    setPersonsState({ ...personsState, persons: persons });
  };

  // Change name handler
  const nameChangedHandler = (event, id) => {
    const personIndex = id;
    console.log(personIndex);

    const persons = [...personsState.persons];
    console.log(persons);

    const person = persons.find((x) => x.id === personIndex);
    console.log(person);

    person.name = event.target.value;
    console.log(person);

    setPersonsState({ ...personsState, persons: persons });
  };

  // Toggle list handler
  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({ ...personsState, showPersons: !doesShow });
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  return (
    <div className='App'>
      <h1>Hi I am a React App</h1>
      <p>This is really working!</p>
      <button style={style} onClick={togglePersonsHandler}>
        Switch name
      </button>
      {personsState.showPersons ? (
        <div>
          {personsState.persons.map((person, index) => (
            <Person
              name={person.name}
              age={person.age}
              key={index}
              delete={() => deletePersonHandler(index)}
              changed={(event) => nameChangedHandler(event, person.id)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default App;
