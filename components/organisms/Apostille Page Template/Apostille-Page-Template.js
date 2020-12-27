import React, { useState, useEffect } from 'react';
import styles from './Apostille-Page-Template.module.css';
import Content from './apostillePageTemplateContent.json';

function ApostillePageTemplate(props) {
    const [currentPath, setCurrentPath] = useState('');

    useEffect((a) => {
        setCurrentPath(window.location.pathname);
    });
    return (
        <section className={styles['organism-apostille-page']}>
            <div className="container-fluid">
                <div className="row xs-mt-12 md-mt-30">
                    <div className="col-xs-12">
                        <div
                            className={styles['organism-apostille-page_headerImage']}
                            style={{ backgroundImage: `url('./images/3.jpg')` }}
                        ></div>
                        <h2 className="t-a:c xs-pl-6 xs-pr-6">{props.headline}</h2>
                    </div>
                </div>
                <div className="row xs-mt-12 md-mt-30">
                    <div className="col-xs-12 col-md-4 hidden-sm-down">
                        <table className={styles['organism-apostille-page_sidebar']}>
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
                    <div className={`${styles['children']} col-xs-12 col-md-8`}>{props.children}</div>
                </div>
            </div>
        </section>
    );
}

export default ApostillePageTemplate;
