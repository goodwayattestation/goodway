import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import ApostillePageTemplate from '../../components/organisms/Apostille Page Template/Apostille-Page-Template.js';
import Layout from '../../components/layout';
import styles from './index.module.css';
function GermanyApostille() {
    return (
        <Layout
            title="Germany Apostille Service in Bangalore - Germany Apostille Service Near Me"
            description="Germany Certificate Apostille Attestation Service in Bangalore. Call:9148889666 MEA Apostille for Degree Certificates, Birth & Marriage Certificate Apostille within 4 Days."
            keywords="Certificate Apostille for Germany in Bangalore, Legalisation for Germany, Apostille Attestation in Bangalore, Birth Certificate Apostille Service in India, how to attest documents from german embassy, german embassy attestation appointment, german embassy certification of documents, document attestation for germany"
            canonical="https://www.goodwayattestation.com/germany-apostille-attestaion-bangalore"
            pageHeader="Germany Apostille Service in Bangalore"
        >
            <div className={styles['routes-germany-apostille']}>
                <NavigationBar showTrackStatusBtn={true} />
                <ApostillePageTemplate headline="Apostille Service For Germany In Bengaluru">
                    <div className={styles['routes-germany-apostille_content']}>
                        <p>
                            <h2>Germany Apostille</h2>
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
                            Make your travel plans to Germany less hassling with apostille certification by the Embassy
                            of Germany in India. You need not travel out of Bengaluru to get it done. Leave it to us at
                            Goodway Attestation. Get your educational, experience, marriage and other important
                            certificates and documents apostilled by the Embassy of Germany through Goodway Attestation.
                            Apostilled documents makes your job easier with Schengen Visa, if you are to travel to other
                            countries in Europe.
                        </p>
                    </div>
                </ApostillePageTemplate>
            </div>
        </Layout>
    );
}

export default GermanyApostille;
