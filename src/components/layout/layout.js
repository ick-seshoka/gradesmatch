import React, { Component } from 'react';
// 
// Layout component : main content wrapper
// 

// Style
import './layout.css';

// Components
// Toolbar component
import Toolbar from '../ui/toolbar/toolbar';
// Wrap component
import Wrap from '../hoc/wrap';
// Qualifications component
import QualificationScore from '../main/qualificationScore/qualificationScore';
// Courses component 
import Courses from '../asside/courses/courses';

class Layout extends Component {
    render() {
        return(
            <Wrap>
                <Toolbar />
                <main>
                    <div className="container">
                        <div className="row">
                            <section id="course-info" className="col-12 col-lg-9">
                                <QualificationScore />
                            </section>
                            <aside className="col-12 col-lg-3">
                                <h6>similar qualifications</h6>
                                <Courses 
                                    courseSchool="university of south africa" 
                                    courseName="financial accounting" 
                                    courseStatus="success" 
                                    courseStatusIcon="thumbs-up" 
                                    courseStatusMessage="congrates you meet all the requirements"
                                    />
                                <Courses 
                                    courseSchool="walter sisulu university" 
                                    courseName="B accounting" 
                                    courseStatus="error" 
                                    courseStatusIcon="thumbs-down" 
                                    courseStatusMessage="minimun requirements not met"
                                    />
                                <Courses 
                                    courseSchool="wits university" 
                                    courseName="computer science" 
                                    courseStatus="success" 
                                    courseStatusIcon="thumbs-up" 
                                    courseStatusMessage="congrates you meet all the requirements"
                                    />
                                <Courses 
                                    courseSchool="University of pretoria" 
                                    courseName="electrican engineering" 
                                    courseStatus="error" 
                                    courseStatusIcon="thumbs-down" 
                                    courseStatusMessage="minimun requirements not met"
                                    />
                            </aside>
                        </div>
                    </div>
                </main>
            </Wrap>
        );
    }
}

export default Layout;
