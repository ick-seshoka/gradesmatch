import React from 'react';
// 
// Search bar component : search text field
// 

// Style
import './searchbar.css';

const searchbar =  () => (
    <form>
        <div id="search-bar">
            <div className="row no-gutters justify-content-between">
                <div className="col-11">
                    <input type="text" placeholder="SEARCH..."></input>
                </div>
                <div className="col-1">
                    <button>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </form>
);

export default searchbar;