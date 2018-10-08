import React from 'react';
// 
// Score somponent
// 

// Style
import './scoreTotal.css';

const scoreTotal = ( props ) => (
    <div className="col-4 col-lg-3 score-total">
        <h2>{ props.scoreTotalTitle }</h2>
        <p>{ props.scoreTotal }</p>
    </div>
);

export default scoreTotal;