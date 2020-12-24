import React, { useState, useEffect } from 'react';
import './Apostille-Page-Template.css';
import Content from './apostillePageTemplateContent.json';

function ApostillePageTemplate(props) {
    return (
        <section className="organism-apostille-page">
            <div className="container-fluid">
                <div className="row xs-mt-12 md-mt-30">
                    <div className="col-xs-12">
                        <div className="organism-apostille-page_headerImage" style={{ backgroundImage: `url('./images/3.jpg')` }}>
                        </div>
                        <h2 className="t-a:c xs-pl-6 xs-pr-6">{props.headline}</h2>
                    </div>
                </div>
                <div className="row xs-mt-12 md-mt-30">
                    <div className="col-xs-12 col-md-4 hidden-sm-down">
                        <table className="organism-apostille-page_sidebar">
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
                    <div className="col-xs-12 col-md-8 children">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ApostillePageTemplate;
