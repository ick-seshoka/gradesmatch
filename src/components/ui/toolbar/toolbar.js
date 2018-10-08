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
// Mobile menu trigger button component
import MobileMenutrigger from './mobileMenuTrigger/mobileMenutrigger';

const toolbar = ( props ) => (
    <Wrap>
        <header>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-5 col-md-5 col-lg-5 toolbarLogoWrap">
                        <Link to="/" className="logo" href="#">gradesmatch</Link>
                        <Searchbar />
                    </div>
                    <div className="col-1 col-md-1 offset-md-6 col-lg-6 offset-5 offset-lg-1">
                        <NavigationItems />
                        <MobileMenutrigger />
                    </div>
                </div>
            </div>
        </header>
    </Wrap>
    
);

export default toolbar;