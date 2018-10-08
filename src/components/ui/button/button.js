import React from 'react';
// 
// Button component
// 

const button = ( props ) => (
    <button id={props.buttonId ? "" + props.buttonId + "" : ""} >
        { props.children }
    </button>
);

export default button;