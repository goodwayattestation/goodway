import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import ApostillePageTemplate from '../../components/organisms/Apostille Page Template/Apostille-Page-Template.js';
import Layout from '../../components/layout';
import styles from './index.module.css';

function FranceApostille() {
    return (
        <Layout
            title="France Apostille Service in Bangalore - Degree Certificate Apostille in India"
            description="France Certificate Apostille Attestation Service in Bangalore. Call:9148889666. France MEA Apostille for Degree Certificates, Birth & Marriage Certificate Apostille for France within 4 Days."
            keywords="degree certificate apostille for france, marriage certificate apostille for france, france mea apostille service, birth certificate apostille attestation for france Legalisation for france , Apostille for documents from france, france Embassy Apostille"
            canonical="https://www.goodwayattestation.com/france-apostille-attestaion-bangalore"
            pageHeader="France Apostille Service in Bangalore"
        >
            <div className={styles['routes-france-apostille']}>
                <NavigationBar showTrackStatusBtn={true} />
                <ApostillePageTemplate headline="Apostille Service For France In Bengaluru">
                    <div className={styles['routes-france-apostille_content']}>
                        <p>
                            <h2>France Apostille</h2>
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
                            Contact Goodway Attestation for apostille services by the French embassy. Get your
                            educational, experience and medical certificates, and important documents apostilled by the
                            Embassy of France, through our guidance at a nominal fee, in Bengaluru itself.
                        </p>
                    </div>
                </ApostillePageTemplate>
            </div>
        </Layout>
    );
}

export default FranceApostille;
