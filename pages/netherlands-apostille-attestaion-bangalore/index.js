import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import ApostillePageTemplate from '../../components/organisms/Apostille Page Template/Apostille-Page-Template.js';
import Layout from '../../components/layout';
import styles from './index.module.css';

function NetherlandsApostille() {
    return (
        <Layout
            title="Netherlands Apostille Service in Bangalore - Degree & Marriage Certificate Apostille in India"
            description="Netherlands Certificate Apostille Attestation Service in Bangalore. Call:9148889666. Netherlands MEA Apostille for Degree Certificates, Birth & Marriage Certificate Apostille for Netherlands within 4 Days."
            keywords="degree certificate apostille for Netherlands, marriage certificate apostille for Netherlands, Netherlands mea apostille service, birth certificate apostille attestation for Netherlands, Legalisation for Netherlands, Apostille for documents from Netherlands, Netherlands Embassy Apostille"
            canonical="https://www.goodwayattestation.com/netherlands-apostille-attestaion-bangalore"
            pageHeader="Netherlands Apostille Service in Bangalore"
        >
            <div className={styles['routes-netherlands-apostille']}>
                <NavigationBar showTrackStatusBtn={true} />
                <ApostillePageTemplate headline="Apostille Service For Netherlands In Bengaluru">
                    <div className={styles['routes-netherlands-apostille_content']}>
                        <p>
                            <h2>Netherlands Apostille</h2>
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
                            Let your visit to Netherlands be hassle-free with apostille of certificates and documents by
                            the Embassy of Netherlands, through Goodway Attestation in Bengaluru. Our professionals will
                            ensure that you encounter minimal hassle while processing your papers. The Netherlands
                            embassy will apostille your certifates and documents, which would make your tour plan
                            hassle-free when you visit another country from Netherlands, if that country is a signatory
                            to the Hague Apostille Convention.
                        </p>
                    </div>
                </ApostillePageTemplate>
            </div>
        </Layout>
    );
}

export default NetherlandsApostille;
