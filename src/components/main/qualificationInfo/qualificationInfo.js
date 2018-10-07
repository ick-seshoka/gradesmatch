import React from 'react';
// 
// QualificationInfo component
// 

// Style
import './qualificationInfo.css';

const qualificationInfo = ( props ) => (
    <div className="col-3 qualification-info">
        <i className={ "fa fa-" + props.qualificationInfoIcon + " fa-2x"}></i>
        <h6>{ props.qualificationInfoTitle }</h6>
        <p>{ props.qualificationInfoFoot }</p>
    </div>
);

export default qualificationInfo;