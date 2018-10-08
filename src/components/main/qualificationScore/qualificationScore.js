import React from 'react';
// 
// QualificationScore component: learner's qualification score 
// 

// Components

// Wrap component
import Wrap from '../../hoc/wrap';
// Button component
import Button from '../../ui/button/button';
// Alert component
import Alert from '../../alert/alert';
// QualificatoinInfo component
import QualificationInfo from '../qualificationInfo/qualificationInfo';
// ScoreTotal component
import ScoreTotal from '../scoreTotal/scoreTotal';
// Subject 
import Subject from '../subject/subject';

// Style
import './qualificationScore.css';

const qualificationScore = ( props ) => (
    <Wrap>
        <section id="course-heading" >
            <div className="row">
                <div className="col-12 col-lg-7">
                    <div id="logo-container"></div>
                    <h2>university of pretoria</h2>
                </div>
                <div className="col-12 col-lg-5">
                    <Button>request for school to contact you</Button>
                </div>
            </div>
            <div id="qualification-name-score" className="row no-gutters justify-content-between" >
                <h2 id="course-title">BCom Accounting</h2>
                <Alert alertType="error" alertIcon="exclamation-triangle" alertMessage="Minimum requirements not met. You can improve your marks" />
            </div>
        </section>
        <section id="course-description">
            <div className="row">
                <div className="col-12">
                    <h6>description</h6>
                    <p>This degree programme (that is only presented on a full-time basis) is the specialised bachelor's degree for
candidates who are preparing for the relevant qualifying examinations of the South African Institute of Chartered
Accountants (SAICA) and the Independent Regulatory Board for Auditors (IRBA).</p>
                </div>
                <div className="col-12" style={{ marginTop: "2em " }} >
                    <div className="row">
                        <QualificationInfo qualificationInfoIcon="hourglass-half" qualificationInfoTitle="Period of study" qualificationInfoFoot="3 years"/>
                        <QualificationInfo qualificationInfoIcon="adjust" qualificationInfoTitle="Type of study" qualificationInfoFoot="Full time"/>
                        <QualificationInfo qualificationInfoIcon="bar-chart" qualificationInfoTitle="NBT Required" qualificationInfoFoot="Yes"/>
                        <QualificationInfo qualificationInfoIcon="briefcase" qualificationInfoTitle="Portfolio" qualificationInfoFoot="Required"/>
                    </div>                    
                </div>
            </div>
        </section>
        <section id="qualification-score">
            <div className="row no-gutters">
                <ScoreTotal scoreTotalTitle="my point" scoreTotal="24" />
                <ScoreTotal scoreTotalTitle="requored points" scoreTotal="30" />
                <ScoreTotal scoreTotalTitle="my subjects" scoreTotal="3/3" />
                <div className="col-12 col-lg-3 score-total">
                    <Button><i className="fa fa-caret-left fa-2x" aria-hidden="true"></i>SET A GOAL</Button>
                </div>
            </div>
        </section>
        <section id="subjects">
            <h6>required subjects</h6>
            <Subject marksCount="4" subjectScore="pass" subjectTitle="mathematics"  subjectMyMark="50%" subjectRequiredMark="50%" subjectAPSPoints="4" />
            <Subject marksCount="4" subjectScore="pass" subjectTitle="afrikaans first additional language"  subjectMyMark="50%" subjectRequiredMark="50%" subjectAPSPoints="4" />
            <Subject marksCount="4" subjectScore="pass" subjectTitle="english home language"  subjectMyMark="50%" subjectRequiredMark="50%" subjectAPSPoints="4" />
            <Subject marksCount="4" subjectScore="fail" subjectTitle="mathematics"  subjectMyMark="50%" subjectRequiredMark="50%" subjectAPSPoints="4" />
        </section>
        <section id="other-subjects">
            <h6>other subjects</h6>
            <Subject marksCount="6" subjectScore="pass" subjectTitle="mathematics"  subjectMyMark="50%" subjectAPSPoints="4" />
            <Subject marksCount="6" subjectScore="pass" subjectTitle="english home language"  subjectMyMark="50%" subjectAPSPoints="4" />
        </section>
    </Wrap>
);

export default qualificationScore;