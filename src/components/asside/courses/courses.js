import React from 'react';
// 
// Courses component: Other similar course
// 

// Dependencies
import { Link } from 'react-router-dom';

// Style
import './courses.css';

// Components

// Alert component
import Alert from '../../alert/alert';

const course = ( props ) => (
    <div className="row no-gutters">
        <div className="col-12">
            <div className="course">
                <h4><i className="fa fa-university"></i>{ props.courseSchool }</h4>
                <h5>{ props.courseName }</h5>
                <Alert alertType={ props.courseStatus } alertIcon={ props.courseStatusIcon } alertMessage={ props.courseStatusMessage } />
                <div id="view-course-wrap">
                    <Link to="/">view</Link>
                </div>
            </div>
        </div>
    </div>
);

export default course;
