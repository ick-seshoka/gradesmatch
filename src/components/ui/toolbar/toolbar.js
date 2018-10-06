import React from 'react';
// 
// Toolbar component: header with navigation items and logo
// 

// Link compoent
import { Link } from "react-router-dom";

// Style
import './toolbar.css';

// Components

// Wrap component
import Wrap from '../../hoc/wrap';
// Searchbar component
import Searchbar from './searchbar/searchbar';
// Navigation items component
import NavigationItems from './navigationItems/navigationItems';

const toolbar = ( props ) => (
    <Wrap>
        <header>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-6" style={{display: "flex", alignItems: "center"}}>
                        <Link to="/" className="logo" href="#">gradesmatch</Link>
                        <Searchbar />
                    </div>
                    <div className="col-6">
                        <NavigationItems />
                    </div>
                </div>
            </div>
        </header>
    </Wrap>
    
);

export default toolbar;