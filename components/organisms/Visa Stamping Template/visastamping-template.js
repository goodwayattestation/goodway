import React from 'react';
import Accordian from '../../atoms/Accordian/accordian.js';
import './visastamping-template.css';
import Content from './visastamping-template-content.json';

function VisastampingTemplate(props) {
    return (
        <section className="organism-visastamping">
            <div className="container-fluid">
                <div className="row xs-mt-12 md-mt-30">
                    <div className="col-xs-12">
                        <div className="organism-visastamping_headerImage" style={{ backgroundImage: `url('./images/3.jpg')` }}>
                        </div>
                        <h2 className="t-a:c xs-pl-6 xs-pr-6">{props.headline}</h2>
                    </div>
                </div>
                
                {props.children}
            </div>
        </section>
    );
}

export default VisastampingTemplate;
