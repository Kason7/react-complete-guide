import React, { useState } from 'react';
import Radium, { StyleRoot } from 'radium';

// Import styling
import './App.css';
import initialStyles from '../components/Cockpit/initialStyles';

// Import components
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// Import context props
import AuthContext from '../context/auth-context';

const App = (props) => {
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
    isAuthenticated: false,
  });

  // Delete person handler
  const deletePersonHandler = (index) => {
    // const persons = personsState.persons.slice(); (also works for Updating State Immutably / safely with a copy)
    const persons = [...personsState.persons];
    persons.splice(index, 1);

    const styles = [personsState.classes.subtitle];

    const nameLength = persons.length;

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

  // Toogle login handler
  const loginHandler = () => {
    const isAuthenticated = personsState.isAuthenticated;
    setPersonsState({
      ...personsState,
      isAuthenticated: true,
    });
    console.log(isAuthenticated);
  };

  return (
    <StyleRoot>
      <AuthContext.Provider
        value={{
          authenticated: personsState.isAuthenticated,
          login: loginHandler,
        }}
      >
        <div className='App'>
          <Cockpit
            appTitle={props.appTitle}
            togglePersonsHandler={togglePersonsHandler}
            personsState={personsState}
          />
          {personsState.showPersons ? (
            <div>
              {
                <Persons
                  persons={personsState.persons}
                  delete={deletePersonHandler}
                  changed={nameChangedHandler}
                />
              }
            </div>
          ) : null}
        </div>
      </AuthContext.Provider>
    </StyleRoot>
  );
};

export default Radium(App);
