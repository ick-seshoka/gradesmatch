import React from 'react';
// 
// Alert message componet : displays alert icon and error message
// 

// Style 
import './alert.css';

const alert = ( props ) => (
    <p className={ "alert-message " + props.alertType}>
        <i className={ "fa fa-" + props.alertIcon }></i> 
        { props.alertMessage }
    </p>
);

export default alert;