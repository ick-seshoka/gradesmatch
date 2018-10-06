import React from 'react';
// 
// Navigation items component: navigation links
// 

// Link compoent
import { NavLink, Link } from 'react-router-dom';

// Style
import './navigationItems.css';

const navigationItems = () => (
    <nav>
        <ul>
            <li>
                <NavLink to="/"><i className="fa fa-home" aria-hidden="true"></i>home</NavLink>
            </li>
            <li>
                <NavLink to="/"><i className="fa fa-book" aria-hidden="true"></i>subject</NavLink>
            </li>
            <li>
                <NavLink to="/"><i className="fa fa-briefcase" aria-hidden="true"></i>careers</NavLink>
            </li>
            <li>
                <NavLink to="/"><i className="fa fa-certificate" aria-hidden="true"></i>qualifications</NavLink>
            </li>
            <li>
                <NavLink to="/"><i className="fa fa-cubes" aria-hidden="true"></i>modules</NavLink>
            </li>
            <li>
                <NavLink to="/"><i className="fa fa-stop-circle" aria-hidden="true"></i>modules</NavLink>
            </li>
            <li>
                <Link to="/"><i className="fa fa-bell" aria-hidden="true"></i></Link>
            </li>
        </ul>
    </nav>
);

export default navigationItems;