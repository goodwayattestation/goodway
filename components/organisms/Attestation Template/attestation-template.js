import React, { useState, useEffect } from 'react';
import Accordian from '../../atoms/Accordian/accordian.js';
import styles from './attestation-template.module.css';
import Content from './attestation-template-content.json';

function AttestationTemplate(props) {
    const [currentPath, setCurrentPath] = useState('');

    useEffect((a) => {
        setCurrentPath(window.location.pathname);
    });

    return (
        <section className={styles['organism-attestation']}>
            <div className="container-fluid">
                <div className="row xs-mt-12 md-mt-30">
                    <div className="col-xs-12">
                        <div
                            className={styles['organism-attestation_headerImage']}
                            style={{ backgroundImage: `url('./images/3.jpg')` }}
                        ></div>
                        <h2 className="t-a:c xs-pl-6 xs-pr-6">{props.headline}</h2>
                    </div>
                </div>
                <div className="row xs-mt-12 md-mt-30">
                    <div className="col-md-4 hidden-sm-down">
                        <table className={styles['organism-attestation_sidebar']}>
                            {Content.sidebar.map((a, i) => (
                                <tr key={a.text}>
                                    {a.headline ? (
                                        <th>
                                            <b className="color-black">{a.text}</b>
                                        </th>
                                    ) : (
                                        <td>
                                            {a.link !== '' ? (
                                                <a
                                                    href={a.link}
                                                    className={`color-black ${
                                                        a.link === currentPath ? 'selected' : ''
                                                    }`}
                                                >
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
                <span className={styles['children']}>{props.children}</span>
            </div>
        </section>
    );
}

export default AttestationTemplate;
