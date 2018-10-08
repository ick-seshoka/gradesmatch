import React from 'react';
// 
// Mobile menu tigger button component
// 

// Style
import './mobileMenuTrigger.css';

// Components

// Button component
import Button from '../../button/button';

const mobileMenuTrigger = () => (
    <Button buttonId="mobile-menu-trigger">
        <i className="fa fa-bars" aria-hidden="true"></i>
    </Button>
);

export default mobileMenuTrigger;