import React, { useEffect } from 'react';

export const Cockpit = (props) => {
  return (
    <div>
      <h1>{props.appTitle}</h1>
      <p className={props.personsState.classes.subtitle}>
        This is really working!
      </p>
      <button
        style={props.personsState.buttonStyles}
        onClick={props.togglePersonsHandler}
      >
        Switch name
      </button>
    </div>
  );
};

export default Cockpit;
