import React from 'react';
// 
// QualificationScore component: learner's qualification score 
// 

// Components

// Wrap component
import Wrap from '../../hoc/wrap';
// Button component
import Button from '../../ui/button/button';
// Alert
import Alert from '../../alert/alert';

// Style
import './qualificationScore.css';

const qualificationScore = ( props ) => (
    <Wrap>
        <section id="course-heading" >
            <div className="row">
                <div className="col-7">
                    <div id="logo-container"></div>
                    <h2>university of pretoria</h2>
                </div>
                <div className="col-5">
                    <Button>request for school to contact you</Button>
                </div>
            </div>
            <div className="row no-gutters justify-content-between" style={{display: "flex", alignItems: "center", marginTop: " 2.275em"}} >
                <h2 id="course-title">BCom Accounting</h2>
                <Alert alertType="error" alertIcon="exclamation-triangle" alertMessage="Minimum requirements not met. You can improve your marks" />
            </div>
        </section>
    </Wrap>
);

export default qualificationScore;