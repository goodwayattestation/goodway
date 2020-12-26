import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import ApostillePageTemplate from '../../components/organisms/Apostille Page Template/Apostille-Page-Template.js';
import Layout from '../../components/layout';
import styles from './index.module.css';

function LithuaniaApostille() {
    return (
        <Layout
            title="Lithuania Apostille Service in Bangalore - Degree & Birth Certificate Apostille in India"
            description="Lithuania Certificate Apostille Attestation Service in Bangalore. Call:9148889666. Lithuania MEA Apostille for Degree Certificates, Birth & Marriage Certificate Apostille for Lithuania within 4 Days."
            keywords="degree certificate apostille for Lithuania, marriage certificate apostille for Lithuania, Lithuania mea apostille service, birth certificate apostille attestation for Lithuania, Legalisation for Lithuania, Apostille for documents from Lithuania, Lithuania Embassy Apostille"
            canonical="https://www.goodwayattestation.com/lithuania-apostille-attestaion-bangalore"
            pageHeader="Lithuania Apostille Service in Bangalore"
        >
            <div className={styles['routes-lithuania-apostille']}>
                <NavigationBar showTrackStatusBtn={true} />
                <ApostillePageTemplate headline="Apostille Service For Lithuania In Bengaluru">
                    <div className={styles['routes-lithuania-apostille_content']}>
                        <p>
                            <h2>Lithuania Apostille</h2>
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
                    </div>
                </ApostillePageTemplate>
            </div>
        </Layout>
    );
}

export default LithuaniaApostille;
