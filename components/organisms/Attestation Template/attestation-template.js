import React from 'react';
import Accordian from '../../atoms/Accordian/accordian.js';
import './attestation-template.css';
import Content from './attestation-template-content.json';

function AttestationTemplate(props) {
    return (
        <section className="organism-attestation">
            <div className="container-fluid">
                <div className="row xs-mt-12 md-mt-30">
                    <div className="col-xs-12">
                        <div className="organism-attestation_headerImage" style={{ backgroundImage: `url('./images/3.jpg')` }}>
                        </div>
                        <h2 className="t-a:c xs-pl-6 xs-pr-6">{props.headline}</h2>
                    </div>
                </div>
                <div className="row xs-mt-12 md-mt-30">
                    <div className="col-md-4 hidden-sm-down">
                        <table className="organism-attestation_sidebar">
                            {Content.sidebar.map((a, i) => (
                                <tr>
                                    {a.headline ? (
                                        <th>
                                            <b className="color-black">{a.text}</b>
                                        </th>
                                    ) : (
                                        <td>
                                            {a.link !== '' ? (
                                                <a href={a.link} className={`color-black ${(a.link === window.location.pathname)?'selected':''}`}>
                                                    {a.text}
                                                </a>
                                            ) : (
                                                a.text
                                            )}
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </table>
                    </div>
                    <div className="col-xs-12 col-md-8">
                        <Accordian tabs={props.tabs} />
                    </div>
                </div>
                <span className="children">
                {props.children}
                </span>
            </div>
        </section>
    );
}

export default AttestationTemplate;
