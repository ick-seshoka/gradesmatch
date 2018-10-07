import React from 'react';
// 
// Mark component
// 

// Style
import './mark.css';

const mark = ( props ) => {
    let marks = "";

    if ( props.markScore ) {
        marks = (
            <div className="col-4">
                <div className={ "mark " + props.markClassName}>
                    <p>{ props.markTitle }</p>
                    <span>{ props.markScore }</span>
                </div>
            </div>
        );
    }

    return marks;
}

export default mark;