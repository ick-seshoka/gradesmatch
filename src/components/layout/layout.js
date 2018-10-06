import React, { Component } from 'react';
// 
// Layout component : main content wrapper
// 

// Components
// Toolbar component
import Toolbar from '../ui/toolbar/toolbar';
// Wrap component
import Wrap from '../hoc/wrap';

class Layout extends Component {
    render() {
        return(
            <Wrap>
                <Toolbar></Toolbar>
            </Wrap>
        );
    }
}

export default Layout;
