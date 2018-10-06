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
                            <section id="course-info" className="col-9">
                                <QualificationScore />
                            </section>
                            <aside className="col-3">
                                <Courses />
                            </aside>
                        </div>
                    </div>
                </main>
            </Wrap>
        );
    }
}

export default Layout;
