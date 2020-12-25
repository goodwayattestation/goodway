import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import AttestationTemplate from '../../components/organisms/Attestation Template/attestation-template.js';
import Content from './content.json';
import Layout from '../../components/layout';
import styles from './index.module.css';

function TaiwanAttestation() {
    return (
        <Layout
            title="Attestation Service for Taiwan in Bangalore - Taiwan Certificate Attestation Near Me"
            description="Taiwan Certificate Attestation Service in Bangalore for Birth & Marriage Certificate, Education & Commercial Documents. For Quick Service Call:9148889666"
            keywords="Certificate Attestation Service for Taiwan in Bangalore, Taiwan Embassy Certificate Attestation, Taiwan Embassy Attestation in Bangalore, Taiwan Embassy Attestation"
            canonical="https://www.goodwayattestation.com/taiwan-embassy-attestaion-bangalore"
            pageHeader="Attestation Service for Taiwan in Bangalore"
        >
            <div className={styles['routes-taiwan-attestation']}>
                <NavigationBar showTrackStatusBtn={true} />
                <AttestationTemplate headline="Attestation Service For Taiwan In Bengaluru" tabs={Content}>
                    <div className={styles['routes-taiwan-attestation_content']}>
                        <div className="row center-xs xs-mt-12 md-mt-54">
                            <div className="col-xs-12">
                                <h2 className="color-black">Certificates Required For Taiwan Embassy Attestation</h2>
                            </div>
                        </div>
                        <div className="row color-black center-xs xs-mt-36 md-mt-48">
                            <div className="col-xs-12 col-md-6">
                                <h3>Educational Certificate Attestation</h3>
                                <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                    For getting employment visa Attestation of certificates needed to prove one’s
                                    authenticity, to visit that country. As the overseas companies required attestation
                                    on all certificates. Your documents taken as a piece of evidence. There are various
                                    documents which necessitate for attestation, like educational certificates:
                                    matriculation certificate, certificate of intermediate, B.A, M.A, B.Com, M.com,
                                    B.Sc, M.Sc, MBBS, BDS, BBA, MBA etc. Personal Documents: Marriage certificate,
                                    divorce certificate, medical certificate, employment certificate, birth certificate
                                    etc.
                                </p>

                                <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                    To acquire job without any discrepancy at work get assisted from our professionals.
                                    Contact them from the place where you are just going online and find out the
                                    experienced company or group who can efficiently take care of your certificates. Get
                                    status update online without any hassle in the way of your travel.
                                </p>

                                <ul className="t-a:l xs-mt-18 md-mt-24 f-w:500">
                                    <li className="xs-mb-6"> UG, PG degree certificate attestation </li>
                                    <li className="xs-mb-6"> Diploma degree certificate attestation </li>
                                    <li className="xs-mb-6"> Engineering degree certificate attestation </li>
                                    <li className="xs-mb-6"> Management degree certificate attestation </li>
                                    <li className="xs-mb-6"> Hotel management certificate attestation </li>
                                    <li className="xs-mb-6"> Medical degree certificate attestation </li>
                                    <li className="xs-mb-6"> Law degree certificate attestation </li>
                                    <li className="xs-mb-6"> Technical degree certificate attestation </li>
                                    <li className="xs-mb-6"> Professional degree certificate attestation </li>
                                    <li className="xs-mb-6"> PhD degree certificate attestation </li>
                                </ul>
                            </div>

                            <div className={`${styles['educationalCertificateAttestation']} col-xs-12 col-md-6`}>
                                <h3>Non Educational Certificate Attestation</h3>

                                <ul className="t-a:l xs-mt-18 md-mt-24 md-ml-66 f-w:500">
                                    <li className="xs-mb-6"> Birth Certificate Attestation </li>
                                    <li className="xs-mb-6"> Marriage Certificate Attestation </li>
                                    <li className="xs-mb-6"> Salary Certificate Attestation </li>
                                    <li className="xs-mb-6"> Equivalence Certificate </li>
                                    <li className="xs-mb-6"> Single Status Certificate Attestation </li>
                                    <li className="xs-mb-6"> Ministry of education department attestation </li>
                                    <li className="xs-mb-6"> Foreign Affairs (FA) Attestation/Legalization </li>
                                    <li className="xs-mb-6"> Transfer Certificate (TC) Attestation </li>
                                    <li className="xs-mb-6"> Experience/ Employment Certificate Attestation </li>
                                    <li className="xs-mb-6"> Medical Certificate Attestation </li>
                                    <li className="xs-mb-6"> Ministry of health department attestation </li>
                                    <li className="xs-mb-6"> Ministry of Justice attestation </li>
                                    <li className="xs-mb-6"> Chamber of commerce attestation </li>
                                    <li className="xs-mb-6"> Labor department attestation </li>
                                    <li className="xs-mb-6"> Death Certificate Attestation </li>
                                </ul>

                                <h3 className="xs-mt-12 md-mt-18">MOFA</h3>
                                <p className="t-a:j xs-mt-18 md-mt-24 md-ml-48 f-w:500">
                                    We also take over Ministry of Foreign Affairs of Taiwan (MOFA of Taiwan)* After
                                    Attesting from country from which the documents are issued it has to be Attested
                                    from MOFA Ministry of Foreign Affairs of the Country where you are going for
                                    employment.
                                </p>
                            </div>
                        </div>
                    </div>
                </AttestationTemplate>
            </div>
        </Layout>
    );
}

export default TaiwanAttestation;
