import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import Editorial from '../../components/organisms/Editorial/editorial.js';
import Showcase from '../../components/organisms/Showcase/showcase.js';
import content from './index.json';
import Layout from '../../components/layout';
import styles from './index.module.css';

function Apostille() {
    return (
        <Layout
            title="Apostille Service in Bangalore for France, Germany, Oman, UK, USA"
            description="Goodway Certificate Apostille Service in Bangalore for Birth & Marriage Certificate, Education & Commercial Documents. For Quick Service Call:9148889666"
            keywords="Apostille Attestation in Bangalore, Apostille Service near me, Documents Apostille Stamping Service Bangalore, apostille attestation fee in Bangalore, apostille services for us documents"
            canonical="https://www.goodwayattestation.com/certificate-apostille-bangalore"
            pageHeader="Apostille Service in Bangalore for France, Germany, Oman, UK, USA"
        >
            <div className={styles['route-apostille']}>
                <NavigationBar showTrackStatusBtn={true} />
                <section className={styles['route-apostille-container']}>
                    <div className="container-fluid">
                        <div className="row xs-mt-12 md-mt-30">
                            <div className="col-xs-12">
                                <div
                                    className="route-apostille-container_headerImage"
                                    style={{ backgroundImage: `url('./images/3.jpg')` }}
                                ></div>
                                <h2 className="t-a:c xs-pl-6 xs-pr-6">Apostille Services in Bengaluru</h2>
                            </div>
                        </div>

                        <div className="row xs-mt-12 md-mt-24">
                            <div className="col-xs-12 route-apostille-container_editorial">
                                <Editorial
                                    headline="Apostille"
                                    headlinePosition="center"
                                    headlineSize="2"
                                    side="left"
                                    img="./images/service-14.jpg"
                                >
                                    <p className="xs-mt-12">
                                        Apostille is an international treaty drafted by the Hague Conference on Private
                                        International Law. It specifies the modalities through which a document issued
                                        in one of the signatory countries can be certified for legal purposes in all the
                                        other signatory states. A certification under the terms of the convention is
                                        called an apostille. It is an international certification comparable to a
                                        notarisation in domestic law, and normally supplements a local notarisation of
                                        the document. If the convention applies between two countries, such an apostille
                                        is sufficient to certify a document's validity, and removes the need for
                                        double-certification, by the originating country and then by the receiving
                                        country.
                                    </p>
                                    <p className="xs-mt-12">
                                        Apostille is an international attestation that is acceptable in about 112
                                        countries, and most of the western world recognises Apostille Only original
                                        documents duly authenticated by the designated authorities of the State
                                        Governments / Sub-Divisional Magistrate are Apostilled by the Ministry of
                                        External Affairs. Apostille is done on the reverse side of the original
                                        document.
                                    </p>
                                </Editorial>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 md-mt-24">
                                <p className="xs-mt-12">The applicants need to submit the following documents :</p>
                                <ul className="xs-mt-12">
                                    <li className="xs-mt-12">Original document to be attested or apostilled.</li>
                                    <li className="xs-mt-12">One clear photocopy of the document.</li>
                                    <li className="xs-mt-12">One clear photocopy of the passport.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 md-mt-24">
                                <h2 className="color-black t-a:c">Our Apostille Services</h2>
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

export default Apostille;
