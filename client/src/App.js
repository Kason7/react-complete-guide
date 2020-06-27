import React, { useState } from 'react';
import Radium, { StyleRoot } from 'radium';

// Import styling
import './App.css';

// IMport components
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import './Person/Person.css';

const App = () => {
  const initialStyles = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black',
    },
    ':focus': {
      outline: 'none',
    },
  };

  const [personsState, setPersonsState] = useState({
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 },
    ],
    showPersons: false,
    classes: {
      subtitle: ['subtitle'],
    },
    buttonStyles: initialStyles,
  });

  // Delete person handler
  const deletePersonHandler = (index) => {
    // const persons = personsState.persons.slice(); (also works for Updating State Immutably / safely with a copy)
    const persons = [...personsState.persons];
    persons.splice(index, 1);

    const styles = [personsState.classes.subtitle];

    const nameLength = persons.length;
    console.log(styles);
    console.log(nameLength);
    if (nameLength === 2) {
      styles.push('red');
    }
    if (nameLength === 1) {
      styles.push('bold');
    }
    setPersonsState({
      ...personsState,
      persons: persons,
      classes: {
        subtitle: styles.join(' '),
      },
    });
  };

  // Change name handler
  const nameChangedHandler = (event, id) => {
    const personIndex = id;
    const persons = [...personsState.persons];
    const person = persons.find((x) => x.id === personIndex);

    person.name = event.target.value;

    setPersonsState({ ...personsState, persons: persons });
  };

  // Toggle list handler
  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    const buttonStyles = personsState.buttonStyles;

    console.log(buttonStyles);
    console.log(initialStyles);
    /*
    if (!doesShow) {
      styles.push('redBackground');
    }
    if (doesShow) {
      styles.push('greenBackground');
    }*/

    const styles = {
      backgroundColor: 'red',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'salmon',
        color: 'black',
      },
      ':focus': {
        outline: 'none',
      },
    };

    setPersonsState({
      ...personsState,
      showPersons: !doesShow,
      buttonStyles: !doesShow ? styles : initialStyles,
    });
  };

  const style = {
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black',
    },
  };

  /* const myFunction = () => {
    const doesShow = personsState.showPersons;
    if (doesShow) {
      style.backgroundColor = 'red';
    }

    const classes = [...personsState.classes];
    const nameLength = personsState.persons.length;
    if (nameLength <= 2) {
      classes.push('red');
    }
    if (nameLength <= 1) {
      classes.push('bold');
    }

    console.log(nameLength);
    console.log(classes);
  }; */

  return (
    <StyleRoot>
      <div className='App'>
        <h1>Hi I am a React App</h1>

        <p className={personsState.classes.subtitle}>This is really working!</p>
        <button
          style={personsState.buttonStyles}
          onClick={togglePersonsHandler}
        >
          Switch name
        </button>
        {personsState.showPersons ? (
          <div>
            {personsState.persons.map((person, index) => (
              <ErrorBoundary key={index}>
                <Person
                  name={person.name}
                  age={person.age}
                  delete={() => deletePersonHandler(index)}
                  changed={(event) => nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            ))}
          </div>
        ) : null}
      </div>
    </StyleRoot>
  );
};

export default Radium(App);
