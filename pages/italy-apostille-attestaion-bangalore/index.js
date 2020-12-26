import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import ApostillePageTemplate from '../../components/organisms/Apostille Page Template/Apostille-Page-Template.js';
import Layout from '../../components/layout';
import styles from './index.module.css';

function ItalyApostille() {
    return (
        <Layout
            title="Italy Apostille Service in Bangalore - Italy Apostille Service Near Me"
            description="Italy Certificate Apostille Attestation Service in Bangalore. Call:9148889666 MEA Apostille for Degree Certificates, Birth & Marriage Certificate Apostille within 4 Days."
            keywords="Italy Certificate Apostille, Legalization for Italy in Bangalore, Italy Apostille, Certificate Attestation from Italy Embassy"
            canonical="https://www.goodwayattestation.com/italy-apostille-attestaion-bangalore"
            pageHeader="Italy Apostille Service in Bangalore"
        >
            <div className={styles['routes-italy-apostille']}>
                <NavigationBar showTrackStatusBtn={true} />
                <ApostillePageTemplate headline="Apostille Service For Italy In Bengaluru">
                    <div className={styles['routes-italy-apostille_content']}>
                        <p>
                            <h2>Italy Apostille</h2>
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
                            Through apostille services, we at Goodway Attestation will make your Italy travel plans a
                            smooth sailing. Get your educational and experience certificates and important documents
                            apostilled by the Embassy of Italy, through Goodway Attestation in Bengaluru.
                        </p>
                    </div>
                </ApostillePageTemplate>
            </div>
        </Layout>
    );
}

export default ItalyApostille;
