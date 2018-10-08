import React from 'react';
// 
// Subject component
//

// Style 
import './subject.css';

// Components
import Mark from './mark/mark';

const subject = ( props ) => {
    let subjectStatusIcon = "";

    switch( props.subjectScore ){
        case "pass":
            subjectStatusIcon = "smile";
            break;

        case "fail":
            subjectStatusIcon = "frown";
            break;

        default:
                subjectStatusIcon = "";
            break;
    }

    return (
        <div className="row no-gutters">
            <div className="col-12 col-lg-5 subject">
                <p className={ props.subjectScore }><i className={ "fa fa-" + subjectStatusIcon + "-o " }></i> { props.subjectTitle }</p>
            </div>
            <div className="col-12 col-lg-7 subjectMarks">
                <div className="row no-gutters justify-content-end">
                    <Mark markColumns={ props.marksCount } markClassName="my-mark" markTitle="my mark" markScore={ props.subjectMyMark } />
                    <Mark markColumns={ props.marksCount } markClassName="required-mark" markTitle="required mark" markScore={ props.subjectRequiredMark } />
                    <Mark markColumns={ props.marksCount } markClassName="aps-points" markTitle="APS points" markScore={ props.subjectAPSPoints } />
                </div>
            </div>
        </div>
    );
};

export default subject;