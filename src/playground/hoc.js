// HOC -  a component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation 
// Abstract state
import React from 'react';

const hoc = (props) => {
  console.log('props', props)
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
  );
};

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin ? <WrappedComponent {...props} /> : <p>Please login to see the info</p>}
    </div>
  );
};



export default withAdminWarning(hoc);