import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import Form from '../../components/organisms/Form/form.js';
import Button from '../../components/atoms/Button/button.js';
import Layout from '../../components/layout';
import styles from './index.module.css';

function ContactUs() {
    return (
        <Layout
            title="GoodWay Attestation - One stop solution for all your attestation & apostille, Banglaore, India"
            description="Goodway Attestation & Apostille Service in Bangalore for Birth & Marriage Certificate, Education & Commercial Documents. For Quick Service Call:9148889666"
            keywords="Certificate Attestation Agency in Bangalore, attestation services near me, hrd attestation for nurses in bangalore, uae attestation services in bangalore, hrd attestation bangalore karnataka, apostille services in bangalore, Apostille Certification Services in Bangalore, Apostille Attestation in Bangalore, apostille attestation fee bangalore"
            canonical="https://www.goodwayattestation.com/contact-us"
            pageHeader="Attestation & Apostille Service in Bangalore"
        >
            <div className={styles['route-contact-us']}>
                <NavigationBar showTrackStatusBtn={true} />
                <section className={styles['route-contact-us-container']}>
                    <div className="container-fluid">
                        <div className="row xs-mt-12 md-mt-24">
                            <div className="col-xs-12">
                                <div
                                    className={styles['route-contact-us-container_headerImage']}
                                    style={{ backgroundImage: `url('./images/3.jpg')` }}
                                ></div>
                                <h2 className="t-a:c xs-pl-6 xs-pr-6">Contact Us</h2>
                            </div>
                        </div>
                        <div>
                            <h2 className="xs-mt-24 md-mt-24 t-a:c">Our Branches</h2>
                        </div>
                        <div className="row xs-mt-12 md-mt-24">
                            <div className="col-md-4 col-xs-12 xs-mt-12">
                                <div className="box">
                                    <h3>Oman</h3>
                                    <p className="xs-mt-12 md-mt-12 t-a:l f-w:600">
                                        Address: No 60, 6th Floor building No: 108 Toto Building, Al Ghubra, Muscat,
                                        Sultanate of Oman
                                    </p>
                                    <p className="t-a:l f-w:600">Email: omangoodway@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 xs-mt-12">
                                <div className="box">
                                    <h3>UAE</h3>
                                    <p className="xs-mt-12 md-mt-12 t-a:l f-w:600">
                                        Address: Anfar Al Falaj Building, Opp to Rak bank, Rolla,Sharjah United Arab
                                        Emirates
                                    </p>
                                    <p className="t-a:l f-w:600">Email: uaegoodway@gmail.com</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-xs-12 xs-mt-12">
                                <div className="box">
                                    <h3>Bengaluru</h3>
                                    <p className="xs-mt-12 md-mt-12 t-a:l f-w:600">
                                        Address: 134, 1st Floor, Temple Street, Malleshwaram, Bengaluru.
                                    </p>
                                    <p className="t-a:l f-w:600">Email: info@goodwayattestaion.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="row xs-mt-12 md-mt-24 center-xs">
                            <div className="col-xs-12">
                                <h2 className="col-xs-12 xs-mt-12 md-mt-24 t-a:c">Send Inquiry</h2>
                                <p className="col-xs-12 xs-mt-12 md-mt-24 t-a:c f-w:600">
                                    Please let us know if you have a question, want to leave a comment, or would like
                                    further information about our Services.
                                </p>
                                <Form>
                                    <div className="row xs-mt-12 md-mt-24">
                                        <div className="col-xs-12 col-sm-6">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div className="col-xs-12 col-sm-6 mobileSpecific">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6">
                                            <input type="text" placeholder="Mobile number" />
                                        </div>
                                        <div className="col-xs-12 col-sm-6 mobileSpecific">
                                            <input type="text" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <textarea placeholder="Your message" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <Button
                                                className="d:i-flex"
                                                color="dodgerblue"
                                                name="Submit"
                                                size={1}
                                                url="https://www.goodwayattestation.com"
                                            />
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>

                        <div className="row xs-pt-12">
                            <div className="col-xs-12">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5286927140614!2d77.56997611482231!3d13.001968790835967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d588d9caef%3A0x5ba382acaf05e1bd!2sGOODWAY+ATTESTATION%C2%AE!5e0!3m2!1sen!2sin!4v1546494171633"
                                    width="100%"
                                    height="480"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default ContactUs;
