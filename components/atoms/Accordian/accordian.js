import React, { useState } from 'react';
import styles from './accordian.module.css';

function Accordian(props) {
    const [tabSelected, setTabSelected] = useState(0);

    let accordianRef = React.createRef();

    const tabs = props.tabs;

    return (
        <div className={styles['atom-accordian']} ref={accordianRef}>
            {tabs.map((a, i) => (
                <div className={`${styles['atom-accordian-tab']} xs-mb-12 md-mb-18`} id={`tab-${i}`}>
                    <div
                        className={`${styles['atom-accordian-tab-header']} color-black ${i === 0 ? 'open' : ''}`}
                        onClick={(e) => {
                            accordianRef.current
                                .querySelector(`#tab-${tabSelected} .${styles['atom-accordian-tab-content']}`)
                                .classList.remove(`${styles['active']}`);
                            accordianRef.current
                                .querySelector(`#tab-${tabSelected} .${styles['atom-accordian-tab-header-arrow']}`)
                                .classList.remove(`${styles['open']}`);
                            accordianRef.current
                                .querySelector(`#tab-${tabSelected} .${styles['atom-accordian-tab-header']}`)
                                .classList.remove(`${styles['open']}`);
                            setTabSelected(i);
                            accordianRef.current
                                .querySelector(`#tab-${i} .${styles['atom-accordian-tab-content']}`)
                                .classList.add(`${styles['active']}`);
                            accordianRef.current
                                .querySelector(`#tab-${i} .${styles['atom-accordian-tab-header-arrow']}`)
                                .classList.add(`${styles['open']}`);
                            accordianRef.current
                                .querySelector(`#tab-${i} .${styles['atom-accordian-tab-header']}`)
                                .classList.add(`${styles['open']}`);
                        }}
                    >
                        <h3 className="d:i-block">
                            <div
                                className={`${
                                    styles['atom-accordian-tab-header-arrow']
                                } xs-mr-6 md-mr-12 xs-ml-6 md-ml-12 ${i === 0 ? 'open' : ''}`}
                            />
                            {a.headline}
                        </h3>
                    </div>
                    <div className={`${styles['atom-accordian-tab-content']} color-black ${i === 0 ? 'active' : ''}`}>
                        {a.text}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordian;
