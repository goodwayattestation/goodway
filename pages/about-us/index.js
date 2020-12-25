import React, { useEffect } from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import VisastampingTemplate from '../../components/organisms/Visa Stamping Template/visastamping-template.js';
import Editorial from '../../components/organisms/Editorial/editorial.js';
import Layout from '../../components/layout';
import styles from './index.module.css';

function AboutUs() {
    return (
        <Layout
            title="GoodWay Attestation - One stop solution for all your attestation & apostille, Banglaore, India"
            description="Goodway Attestation & Apostille Service in Bangalore for Birth & Marriage Certificate, Education & Commercial Documents. For Quick Service Call:9148889666"
            keywords="Certificate Attestation Agency in Bangalore, attestation services near me, hrd attestation for nurses in bangalore, uae attestation services in bangalore, hrd attestation bangalore karnataka, apostille services in bangalore, Apostille Certification Services in Bangalore, Apostille Attestation in Bangalore, apostille attestation fee bangalore"
            canonical="https://www.goodwayattestation.com/about-us"
            pageHeader="Attestation & Apostille Service in Bangalore"
        >
            <div className={styles['route-about-us']}>
                <NavigationBar showTrackStatusBtn={true} />
                <section className={styles['route-about-us-container']}>
                    <div className="container-fluid">
                        <div className="row xs-mt-12 md-mt-24">
                            <div className="col-xs-12">
                                <div
                                    className={styles['route-about-us-container_headerImage']}
                                    style={{ backgroundImage: `url('./images/3.jpg')` }}
                                ></div>
                                <h2 className="t-a:c xs-pl-6 xs-pr-6">About Us</h2>
                            </div>
                        </div>

                        <div className="row xs-mt-12 md-mt-24">
                            <div className="col-xs-12">
                                <Editorial
                                    headline="How We Do It?"
                                    headlinePosition="center"
                                    headlineSize="2"
                                    verticalAlign="top"
                                    side="right"
                                    img="./images/service-7.jpg"
                                >
                                    <p className="xs-mt-12 ">
                                        Employing our services as an expert Document Apostille, Authentication and
                                        Embassy Legalization company can not only expedite the legalization process, but
                                        also give you the assurance that your documents have been processed in the
                                        correct manner as required by government authorities all over the world.
                                    </p>
                                    <p className="xs-mt-12">
                                        We handle it all for you! Please review the descriptions for personal and
                                        corporate documents on this page to get more information.
                                    </p>
                                </Editorial>
                            </div>
                        </div>

                        <div className="row xs-mt-12 md-mt-24">
                            <div className="col-xs-12">
                                <h2>Why Use Our Services?</h2>
                                <div className="box xs-mt-12 md-mt-24">
                                    <ul className={`${styles['edu']} t-a:l f-w:500`}>
                                        <li className="xs-mb-6">
                                            {' '}
                                            We save you valuable time in researching the various State, Federal and
                                            Foreign Embassy regulations.{' '}
                                        </li>
                                        <li className="xs-mb-6">
                                            {' '}
                                            We are experts in the field and carry out the certification process per the
                                            exact requirements.{' '}
                                        </li>
                                        <li className="xs-mb-6">
                                            {' '}
                                            We expedite the processing time to have documents certified because we
                                            submit your documents in person to the authorities versus by mail.{' '}
                                        </li>
                                        <li className="xs-mb-6">
                                            {' '}
                                            We act as your agent and handle your documents no matter where you are
                                            located.{' '}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row xs-mt-12 md-mt-24">
                            <div className="col-xs-12">
                                <Editorial
                                    headline="Individual Documents"
                                    headlinePosition="center"
                                    headlineSize="2"
                                    side="left"
                                    img="./images/service-10.jpg"
                                >
                                    <p className="xs-mt-12">
                                        We serve clients including Residents, International Students, Teaching
                                        Candidates & Families looking to move outside the country to get educational,
                                        vital, legal and personal documents certified. For example, moving of the
                                        country can be an exciting time, but it can also be a stressful transition;
                                        especially for individuals or families who need to present documents for legal
                                        purposes. Many of these documents need to be certified and approved by
                                        governmental authorities at both the state and federal level. Authenticating and
                                        verifying documents to move abroad is a time-consuming task. Why not let someone
                                        else handle the logistics for you, so you can concentrate on your move?
                                    </p>
                                    <p className="xs-mt-12">
                                        Do not allow any unnecessary delays in Document Apostille, Authentication and
                                        Embassy Legalization to get in the way of your commitments. Contact us today to
                                        learn about the wide variety of services that we can offer you. We’re
                                        competitively priced and we offer expedited services to get you legally settled
                                        in your new host country in as little time as possible.
                                    </p>
                                </Editorial>
                            </div>
                        </div>

                        <div className={`${styles['what-we-do']} row xs-mt-12 md-mt-24`}>
                            <div className="col-xs-12">
                                <div>
                                    <h2 className="md-mt-24 center-xs">What We Do?</h2>
                                    <div className="box xs-mt-12 md-mt-24">
                                        <h3>Corporate Customers</h3>
                                        <p className="xs-mt-12 md-mt-24 f-w:500">
                                            Corporate organizations all over India, and globally, entrust us with their
                                            legal documents to get them certified accurately and in a timely manner. The
                                            experience and expertise of the team here at GoodWay Services allows us to
                                            help corporations gather the legal documents necessary for expanding their
                                            business internationally. All of this is done with precise handling to
                                            protect your sensitive documents and guard your personal information.
                                        </p>
                                        <p className="xs-mt-12 md-mt-24 f-w:500">
                                            We handle the legalization process for your corporate documents such as:
                                        </p>
                                        <ul className={`${styles['edu']} t-a:l xs-mt-18 md-mt-24 f-w:500`}>
                                            <li className="xs-mb-6"> Trade and Partnership Agreements </li>
                                            <li className="xs-mb-6"> Appointment of Agents </li>
                                            <li className="xs-mb-6"> Board Resolutions </li>
                                            <li className="xs-mb-6"> Incorporation documents </li>
                                            <li className="xs-mb-6"> Tax and Federal documents and many more </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="box xs-mt-12 md-mt-24">
                                    <h3>We Can Fast Track the Legalization Process</h3>
                                    <p className="xs-mt-12 md-mt-24 f-w:500">
                                        When you need the assurance that your documents are being processed in the right
                                        manner for use overseas as required by Government authorities, it’s time to turn
                                        to us! We handle all the hard work for you. We can handle the certification
                                        related to your documents regardless of where you are located. Just mail your
                                        documents to us and we will finish the process in a fast and efficient manner as
                                        per our quote.
                                    </p>
                                    <p className="xs-mt-12 md-mt-24 f-w:500">
                                        Our corporate customers depend on us for affordable and timely services for all
                                        of their legal documents. We will precisely manage your sensitive documents for
                                        trade partnership agreements, board resolutions, appointment of agents, tax and
                                        federal documents, incorporation documents, educational documents, background
                                        checks, vital documents and much more.
                                    </p>
                                </div>

                                <div className="box xs-mt-12 md-mt-24">
                                    <h3>Utilize Our Safe, Fleeting and Protected Document Certification Services</h3>
                                    <p className="xs-mt-12 md-mt-24 f-w:500">
                                        At GoodWay Services we can handle Corporate and Personal documents to get them
                                        certified for submission in a foreign country. We serve Corporations and
                                        Individuals that need to have documents certified by Foreign embassies. When you
                                        need assurance that your documents are being processed in the applicable manner
                                        by the Government authorities, our document authentication services can expedite
                                        the process.
                                    </p>
                                    <p className="xs-mt-12 md-mt-24 f-w:500">
                                        You can trust our firm GoodWay Services to be a fleeting one, which is
                                        registered from the Government. We also provide Apostille services for
                                        countries, which require an Apostille Seal instead.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default AboutUs;
