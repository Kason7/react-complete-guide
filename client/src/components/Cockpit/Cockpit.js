import React, { useEffect, useRef, useContext } from 'react';

// Import context props
import AuthContext from '../../context/auth-context';

export const Cockpit = (props) => {
  // Defining refs to DOM elements with useRef
  const toggleBtnRef = useRef(null);

  // Calling context with useContext React Hook
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);

  // Calling behavior timing with useEffect
  useEffect(() => {
    // Stuff happening before load
    console.log('[Cockpit.js] useEffect before');
    // http requests etc.
    toggleBtnRef.current.click();

    return () => {
      // Stuff happening after load
      console.log('[Cockpit.js] useEffect after');
    };
  }, []);

  return (
    <div>
      <h1>{props.appTitle}</h1>
      <p className={props.personsState.classes.subtitle}>
        This is really working!
      </p>
      <button
        ref={toggleBtnRef}
        style={props.personsState.buttonStyles}
        onClick={props.togglePersonsHandler}
      >
        Switch name
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default Cockpit;
