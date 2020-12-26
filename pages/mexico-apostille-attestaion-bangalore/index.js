import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import ApostillePageTemplate from '../../components/organisms/Apostille Page Template/Apostille-Page-Template.js';
import Layout from '../../components/layout';
import styles from './index.module.css';

function MexicoApostille() {
    return (
        <Layout
            title="Mexico Apostille Service in Bangalore - Degree & Marriage Certificate Apostille in India"
            description="Mexico Certificate Apostille Attestation Service in Bangalore. Call:9148889666. Mexico MEA Apostille for Degree Certificates, Birth & Marriage Certificate Apostille for Mexico within 4 Days."
            keywords="degree certificate apostille for Mexico, marriage certificate apostille for Mexico, Mexico mea apostille service, birth certificate apostille attestation for Mexico, Legalisation for Mexico, Apostille for documents from Mexico, Mexico Embassy Apostille"
            canonical="https://www.goodwayattestation.com/mexico-apostille-attestaion-bangalore"
            pageHeader="Mexico Apostille Service in Bangalore"
        >
            <div className={styles['routes-mexico-apostille']}>
                <NavigationBar showTrackStatusBtn={true} />
                <ApostillePageTemplate headline="Apostille Service For Mexico In Bengaluru">
                    <div className={styles['routes-mexico-apostille_content']}>
                        <p>
                            <h2>Mexico Apostille</h2>
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

export default MexicoApostille;
