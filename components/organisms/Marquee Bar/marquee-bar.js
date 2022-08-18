import React from 'react';
import Marquee from 'marquee-react-dwyer';

import styles from './marquee-bar.module.css';

function MarqueeBar(props) {
    return (
        <section className={`container-fluid xs-pb-6 md-pt-6 md-pb-12`}>
            <div className="row middle-xs">
                <div className="col-xs-12 col-md-8">
                    <Marquee
                        className={styles['organism-marqueeBar-marquee']}
                        Size={'h3'}
                        NumberOfOptions={'1'}
                        Index0={
                            'An ISO 9001:2015 certified company and approved by Government Embassies. Our offices in Bengaluru, Delhi, Hyderabad, Chennai, UAE, Oman'
                        }
                        TimeToCross={'20000'}
                        TimeToChange={'0'}
                        Color={'red'}
                    />
                </div>
                <div className="col-xs-12 col-md-4 center-xs end-md hidden-sm-down">
                    <a href="https://twitter.com/Goodway_India" target="_blank"
                        className={`${styles['organism-marqueeBar-social']} c:p d:i-block xs-mr-6 md-mr-12`}
                        style={{ backgroundImage: `url('./images/twitter.png')` }}
                    ></a>

                    <a href="https://www.facebook.com/goodwayattestation" target="_blank"
                        className={`${styles['organism-marqueeBar-social']} c:p d:i-block xs-mr-6 md-mr-12`}
                        style={{ backgroundImage: `url('./images/facebook.png')` }}
                    ></a>

                    <a href="https://www.linkedin.com/company/goodway-attestation/" target="_blank"
                        className={`${styles['organism-marqueeBar-social']} c:p d:i-block xs-mr-6 md-mr-12`}
                        style={{ backgroundImage: `url('./images/linkedin.png')` }}
                    ></a>

                    <a href="https://www.instagram.com/goodwayattestation.india/" target="_blank"
                        className={`${styles['organism-marqueeBar-social']} c:p d:i-block`}
                        style={{ backgroundImage: `url('./images/instagram.png')` }}
                    ></a>

                    <a className={`${styles['organism-marqueeBar-social']} c:p d:n`}></a>
                </div>
            </div>
        </section>
    );
}

export default MarqueeBar;
