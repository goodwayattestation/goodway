import React from 'react';
import Content from './footerContent.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhoneSquare, faEnvelope } from '@fortawesome/fontawesome-free-solid';
import styles from './Footer.module.css';

function Footer(props) {
    return (
        <section
            className={`${styles['organism-footer']} bg-color-black color-white md-pt-48 xs-mt-18`}
            style={{ backgroundImage: `url('./images/map.png')` }}
        >
            <div className="container-fluid">
                <div className="row xs-pb-6 md-pb-12">
                    <div className={`${styles['organism-footer_ourServices']} col-xs-12 start-md col-md-3 `}>
                        <h3 className={styles['headline-marginTop']}>
                            <b>{Content.quickLinks.headline}</b>
                        </h3>
                        <ul className="md-mt-12">
                            {Content.quickLinks.options.map((a, i) => (
                                <li className="xs-mb-6" key={i}>
                                    <a href={a.link} className="color-white">
                                        {a.text}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <h3 className={`${styles['headline-marginTop']} md-mt-24`}>
                            <b>{Content.ourServices.headline}</b>
                        </h3>
                        <ul className="md-mt-12">
                            {Content.ourServices.options.map((a, i) => (
                                <li className="xs-mb-6" key={i}>
                                    <a href={a.link} className="color-white">
                                        {a.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${styles['organism-footer_certificateAttestations']} col-xs-12 start-md col-md-3`}>
                        <h3 className={styles['headline-marginTop']}>
                            <b>{Content.certificateAttestations.headline}</b>
                        </h3>
                        <ul className="md-mt-12">
                            {Content.certificateAttestations.options.map((a, i) => (
                                <li className="xs-mb-6" key={i}>
                                    <a href={a.link} className="color-white">
                                        {a.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${styles['organism-footer_certificateApostille']} col-xs-12 start-md col-md-3`}>
                        <h3 className={styles['headline-marginTop']}>
                            <b>{Content.certificateApostille.headline}</b>
                        </h3>
                        <ul className="md-mt-12">
                            {Content.certificateApostille.options.map((a, i) => (
                                <li className="xs-mb-6" key={i}>
                                    <a href={a.link} className="color-white">
                                        {a.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${styles['organism-footer_contact']} col-md-3`}>
                        <h3 className={`${styles['headline-marginTop']} row col-xs-10`}>
                            <b>{Content.contactUs.headline}</b>
                        </h3>
                        <div className={`${styles['organism-footer_contact_address']} row`}>
                            <div className="col-xs-1 md-mt-12">
                                <FontAwesomeIcon className="xs-mr-6" icon={faHome} />
                            </div>
                            <div className="col-xs-11 start-xs md-mt-12 t-a:l">
                                #134 (Shop No. 2), 1st Floor, K.N Complex, 11th Cross, Temple Street, Opp. Canara Bank,
                                Malleshwaram, Bengaluru - 560003
                            </div>
                        </div>

                        <div className={`${styles['organism-footer_contact_phone']} row xs-mt-24`}>
                            <div className="col-xs-1">
                                <FontAwesomeIcon className="xs-mr-6" icon={faPhoneSquare} />
                            </div>
                            <div className="col-xs-11 start-xs">
                                <a href="tel:+919148889666" className="color-white d:b xs-mb-12">
                                    +91 9148889666
                                </a>
                                <a href="tel:+919148889444" className="color-white d:b">
                                    +91 9148889444
                                </a>
                            </div>
                        </div>

                        <div className={`${styles['organism-footer_contact_email']} row xs-mt-24`}>
                            <div className="col-xs-1">
                                <FontAwesomeIcon className="xs-mr-6" icon={faEnvelope} />
                            </div>
                            <div className="col-xs-11 start-xs">
                                <a href="mailTo:info@goodwayattestation.com" className="color-white d:b">
                                    info@goodwayattestation.com
                                </a>
                            </div>
                        </div>

                        <div className={`${styles['organism-footer-social']} xs-pl-36 xs-mt-36`}>
                            <a
                                className="c:p d:i-block xs-mr-42"
                                style={{ backgroundImage: `url('./images/twitter.png')` }}
                            ></a>

                            <a
                                className="c:p d:i-block xs-mr-42"
                                style={{ backgroundImage: `url('./images/facebook.png')` }}
                            ></a>

                            <a
                                className="c:p d:i-block xs-mr-42"
                                style={{ backgroundImage: `url('./images/linkedin.png')` }}
                            ></a>

                            <a
                                className="c:p d:i-block"
                                style={{ backgroundImage: `url('./images/instagram.png')` }}
                            ></a>

                            <a className="c:p d:n"></a>
                        </div>
                    </div>
                </div>

                <div className={`${styles['organism-footer_certifications']} row center-xs xs-pb-6 md-pb-18`}>
                    <div className="col-xs-3">
                        <img src="images/iso-9001.png" alt="ISO-image" />
                    </div>
                    <div className="col-xs-3">
                        <img src="images/IAF-Seal.png" alt="IAF-image" />
                    </div>
                    <div className="col-xs-3">
                        <img src="images/quality-check.png" alt="Quality-check-image" />
                    </div>
                    <div className="col-xs-3">
                        <img src="images/ft1.png" alt="FTL-image" />
                    </div>
                </div>

                <div className={`${styles['organism-footer_copyright']} row center-xs xs-pb-6 md-pb-18`}>
                    <div className="col-xs-12">
                        © {new Date().getFullYear()} GoodWay Attestation.{' '}
                        <span className="allRightsReserved">All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
