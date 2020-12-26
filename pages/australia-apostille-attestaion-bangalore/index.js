import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import ApostillePageTemplate from '../../components/organisms/Apostille Page Template/Apostille-Page-Template.js';
import Layout from '../../components/layout';
import styles from './index.module.css';

function AustraliaApostille() {
    return (
        <Layout
            title="GoodWay Attestation - One stop solution for all your attestation & apostille, Banglaore, Karnataka, India"
            description="Goodway Attestation & Apostille Service in Bangalore for Birth & Marriage Certificate, Education & Commercial Documents. For Quick Service Call:9148889666"
            keywords="Certificate Attestation Agency in Bangalore, attestation services near me, hrd attestation for nurses in bangalore, uae attestation services in bangalore, hrd attestation bangalore karnataka, apostille services in bangalore, Apostille Certification Services in Bangalore, Apostille Attestation in Bangalore, apostille attestation fee bangalore"
            canonical="https://www.goodwayattestation.com/australia-apostille-attestaion-bangalore"
            pageHeader="Attestation & Apostille Service in Bangalore"
        >
            <div className={styles['routes-australia-apostille']}>
                <NavigationBar showTrackStatusBtn={true} />
                <ApostillePageTemplate headline="Apostille Service For Australia In Bengaluru">
                    <div className={styles['routes-australia-apostille_content']}>
                        <p>
                            <h2>Australia Apostille</h2>
                        </p>

                        <p className="xs-mt-12 md-mt-18">
                            Procedure for certificate apostille: Submit your original certificate with a photocopy of
                            passport, the certificates will be given to Sub Divisional Magistrate wherein it will be
                            authenticated then Ministry of External Affairs will Apostille your document.
                        </p>

                        <p className="xs-mt-12 md-mt-18">
                            <b>Certificate Apostille Services Process:</b>
                        </p>

                        <p className="xs-mt-12 md-mt-18">
                            First step is to get Attestation on your certificate from respective State Home Department.
                            Once the state level Home Department Attestation on certificate is done, the certificate
                            will be then apostilled from Ministry of External Affairs, national capital and Attestation
                            from functionary, New Delhi.
                        </p>

                        <p className="xs-mt-12 md-mt-18">
                            <b>Documents required:</b>
                        </p>

                        <p className="xs-mt-12 md-mt-18">
                            {' '}
                            <li>Original Certificate</li>
                            <li>Photocopy of Passport (1st and last page)</li>
                        </p>

                        <p className="xs-mt-12 md-mt-18">
                            If you plan to visit other countries from Australia, apostille certification will help
                            greatly, if that country is a member of the Hague Apostille Convention.
                        </p>
                    </div>
                </ApostillePageTemplate>
            </div>
        </Layout>
    );
}

export default AustraliaApostille;
