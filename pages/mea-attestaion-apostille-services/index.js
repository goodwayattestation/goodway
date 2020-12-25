import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import VisastampingTemplate from '../../components/organisms/Visa Stamping Template/visastamping-template.js';
import Editorial from '../../components/organisms/Editorial/editorial.js';
import Layout from '../../components/layout';
import styles from './index.module.css';

function MEAAttestation() {
    return (
        <Layout
            title="MEA Attestation in Bangalore - MEA Apostille Stamping Services for Degree, Marriage, Birth & Commercial Documents"
            description="MEA Attestation & Apostille Services in Bangalore, Call:9148889666. MEA Attestation & Apostille Stamping Services for Degree, Marriage, Birth & Commercial Documents, Transfer Certificate, Engineering Certificates, Diploma Certificates."
            keywords="mea apostille stamping, mea apostille fees, mea apostille for marriage certificates,  mea attestation, mea attestation charges, mea attestation for saudi, mea attestation agencies, mea attestation process, mea apostille for degree certificates, mea apostille for commercial documents"
            canonical="https://www.goodwayattestation.com/mea-attestaion-apostille-services"
            pageHeader="MEA Attestation & Apostille Services in Bangalore"
        >
            <div className={styles['routes-mea-attestation']}>
                <NavigationBar showTrackStatusBtn={true} />
                <VisastampingTemplate headline="MEA Attestation Services in Bengaluru">
                    <div className={styles['routes-mea-attestation_content']}>
                        <div className="row center-xs xs-mt-12 md-mt-54">
                            <div className="col-xs-12">
                                <h2 className="color-black t-a:l">MEA Attestation</h2>
                                <h3 className="color-black t-a:l">Procedure:</h3>
                                <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                    All original documents requiring attestation or Apostille should be first
                                    authenticated by the designated agencies in the State from where the document has
                                    been issued. In case of personal documents, Home Department /General Administration
                                    Department are the designated authorities. In case of educational documents, the
                                    documents should first be authenticated by the Education Department of the concerned
                                    State Government/Union Territory. The details of the Regional Authentication Centre
                                    (RACs) in the States/UTs from where the documents should first be authenticated are
                                    given below. The Ministry of External Affairs attests the documents on the basis of
                                    the signature of the designated signing authorities of the State Government/Union
                                    Territory/Chambers of Commerce; hence it does not take responsibility of the
                                    contents of the documents.
                                </p>
                            </div>

                            <div className="col-xs-12">
                                <div className="row  ">
                                    <div className="col-xs-12">
                                        <Editorial
                                            headline="COMMERCIAL DOCUMENTS:"
                                            headlinePosition="left"
                                            side="right"
                                            img="./images/service-7.jpg"
                                        >
                                            <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                                Commercial Documents are to be pre-authenticated by the respective
                                                Chambers of Commerce before these can be attested by the Ministry of
                                                External Affairs.
                                            </p>
                                            <h3 className="color-black t-a:l ">
                                                DOCUMENTS REQUIRED FOR EDUCATIONAL/PERSONAL CERTIFICATE ATTESTATION FOR
                                                MEA ATTESTATION:
                                            </h3>
                                            <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                                Only original documents duly authenticated by the designated authorities
                                                of the State Governments are Apostilled by the Ministry of External
                                                Affairs. Apostille is done on the reverse side of the original document.
                                                The applicants need to submit the following documents/fees
                                            </p>
                                            <ul className="t-a:l">
                                                <li>Original document to be attested or apostilled.</li>
                                                <li>One clear photocopy of the document.</li>
                                                <li>One clear photocopy of the passport.</li>
                                            </ul>
                                        </Editorial>
                                    </div>
                                </div>
                                <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                    Please note: For MEA attestation, original document needs to be pre authenticated
                                    first by respective HRD/HD
                                </p>
                            </div>
                        </div>
                    </div>
                </VisastampingTemplate>
            </div>
        </Layout>
    );
}

export default MEAAttestation;
