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
                            <b>Duration for Apostille:</b> 2 Working Days
                        </p>

                        <p className="xs-mt-12 md-mt-18">
                            This will be without verification in which the ministry will put a seal stating that THE
                            MINISTRY OF EXTERNAL AFFAIRS ARE NOT RESPONSIBLE FOR THE CONTENT.
                        </p>

                        <p className="xs-mt-12 md-mt-18">
                            Procedure for certificate apostille: Submit your original certificate with a photocopy of
                            passport, the certificates will be given to Sub Divisional Magistrate wherein it will be
                            authenticated then Ministry of External Affairs will Apostille your document.
                        </p>

                        <p className="xs-mt-12 md-mt-18">
                            <b>Duration for Apostille:</b> 2 Working Days
                        </p>

                        <p className="xs-mt-12 md-mt-18">
                            This will be without verification in which the ministry will put a seal stating that THE
                            MINISTRY OF EXTERNAL AFFAIRS ARE NOT RESPONSIBLE FOR THE CONTENT.
                        </p>

                        <p className="xs-mt-12 md-mt-18">
                            Procedure for certificate apostille: If you submit your original certificate with a
                            photocopy of the passport we will first submit your document to HRD Department of Concerned
                            State wherein it will be authenticated then Ministry of External Affairs will Apostille your
                            document.
                        </p>

                        <p className="xs-mt-12 md-mt-18">
                            <b>Duration for Apostille:</b> 10 to 15 Working Days
                        </p>
                    </div>
                </ApostillePageTemplate>
            </div>
        </Layout>
    );
}

export default MexicoApostille;
