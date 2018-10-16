import React from 'react';


function Image (props) {
  
    return (
      <div>
        <img className="img" src={props.myImage} alt="Bread Cat" />
        <h1>Bread Cat</h1>
      </div>
    );
  }

  export default Image;