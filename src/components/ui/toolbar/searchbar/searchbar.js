import React from 'react';
// 
// Search bar component : search text field
// 

// Style
import './searchbar.css';

const searchbar =  () => (
    <form>
        <div>
            <input type="text" placeholder="SEARCH..."></input>
            <button>
                <i className="fa fa-search"></i>
            </button>
        </div>
    </form>
);

export default searchbar;