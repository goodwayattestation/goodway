import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import Editorial from '../../components/organisms/Editorial/editorial.js';
import Showcase from '../../components/organisms/Showcase/showcase.js';
import content from './index.json';
import Layout from '../../components/layout';
import styles from './index.module.css';

function Attestation() {
    return (
        <Layout
            title="Certificate Attestation in Bangalore for UAE, Qatar, Kuwait, Bahrain, Egypt"
            description="GoodWay Attestation does everything you need with respect to proper legal stuff required by most of the organizations or nations."
            keywords="Certificate Attestation Agency in Bangalore, Degree Certificate Attestation in Bangalore, certificate attestation in bangalore for qatar, marriage certificate attestation in bangalore, embassy attestation in bangalore, certificate attestation in bangalore for uae"
            canonical="https://www.goodwayattestation.com/certificate-attestaion-bangalore"
            pageHeader="Certificate Attestation in Bangalore for UAE, Qatar, Kuwait, Bahrain, Egypt"
        >
            <div className={styles['route-attestation']}>
                <NavigationBar showTrackStatusBtn={true} />
                <section className={styles['route-attestation-container']}>
                    <div className="container-fluid">
                        <div className="row xs-mt-12 md-mt-30">
                            <div className="col-xs-12">
                                <div
                                    className={styles['route-attestation-container_headerImage']}
                                    style={{ backgroundImage: `url('./images/3.jpg')` }}
                                ></div>
                                <h2 className="t-a:c xs-pl-6 xs-pr-6">Attestation Services in Bengaluru</h2>
                            </div>
                        </div>

                        <div className="row xs-mt-12 md-mt-24">
                            <div className={`${styles['route-attestation-container_editorial']} col-xs-12`}>
                                <Editorial
                                    headline="Certificate Attestation In India"
                                    headlinePosition="center"
                                    headlineSize="2"
                                    side="left"
                                    img="./images/my-bg.jpg"
                                >
                                    <p className="xs-mt-12">
                                        Earth is very small to shift from one place to another without any barrier, if
                                        you prove yourself genuine. There are many reasons for a person to hang around
                                        to other places. Might be graduating for higher degrees, job opportunities,
                                        official purpose, holiday, some might plan to settle down as their dreams and
                                        many more. To satisfy all these needs we have to follow some process and
                                        procedures where in we need to prove ourselves an authenticated person.
                                    </p>
                                    <p className="xs-mt-12">
                                        It is mandatory to attest your documents/certificates when you have to stay
                                        anywhere out of your country without any issues for your planned period of time
                                        in that country. You necessitate the document attestation any time in a path of
                                        life, for number of reasons like: some medical emergency, want to study abroad,
                                        for job, need to shift and so on. For all this, everyone require to do some
                                        documentation.
                                    </p>
                                </Editorial>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 md-mt-24">
                                <h2 className="color-black t-a:c">Our Certificate Attestation Services</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12">
                                <Showcase content={content} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Attestation;
