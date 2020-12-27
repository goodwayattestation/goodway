import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import VisastampingTemplate from '../../components/organisms/Visa Stamping Template/visastamping-template.js';
import Editorial from '../../components/organisms/Editorial/editorial.js';
import Layout from '../../components/layout';
import styles from './index.module.css';

function MOFAAttestation() {
    return (
        <Layout
            title="MOFA Attestation in Bangalore - MOFA Attestation Services for UAE, Qatar, Saudi, Bahrain & Kuwait"
            description="Call:9148889666 MOFA Attestation in Bangalore for UAE, Qatar, Saudi, Bahrain & Kuwait. MOFA Attestation for Degree, Engineering, Birth, Marriage & Commercial Documents."
            keywords="mofa attestation charges, mofa attestation uae, mofa attestation in India, mofa attestation saudi arabia, mofa attestation for qatar, mofa attestation uae fees, mofa attestation for certificates"
            canonical="https://www.goodwayattestation.com/mofa-attestaion-services"
            pageHeader="MOFA Attestation in Bangalore"
        >
            <div className={styles['routes-mofa-attestation']}>
                <NavigationBar showTrackStatusBtn={true} />
                <VisastampingTemplate headline="MOFA Attestation Services">
                    <div className={styles['routes-mofa-attestation_content']}>
                        <div className="row center-xs xs-mt-12 md-mt-54">
                            <div className="col-xs-12">
                                <h2 className="color-black t-a:l">MOFA Attestation</h2>
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

                                <div className="row xs-mt-30 md-mt-54">
                                    <div className="col-xs-12">
                                        <Editorial
                                            headline="MOFA OF UAE"
                                            headlinePosition="left"
                                            side="left"
                                            img="./images/uae.jpg"
                                        >
                                            <p className="xs-mt-12">
                                                We also do Ministry of Foreign Affairs of UAE (MOFA of UAE)* After
                                                Attesting from country from which the documents are issued it has to be
                                                Attested from MOFA Ministry of Foreign Affairs of the Country where you
                                                are going for emploment. *Additional charge can apply for MOFA and takes
                                                8 working days for MOFA attestation from UAE.
                                            </p>
                                        </Editorial>
                                    </div>
                                </div>

                                <div className="row xs-mt-30 md-mt-54">
                                    <div className="col-xs-12">
                                        <Editorial
                                            headline="MOFA OF QATAR"
                                            headlinePosition="left"
                                            side="right"
                                            img="./images/qatar.jpg"
                                        >
                                            <p className="xs-mt-12">
                                                We also do Ministry of Foreign Affairs of Qatar (MOFA of Qatar)* After
                                                Attesting from country from which the documents are issued it has to be
                                                Attested from MOFA Ministry of Foreign Affairs of the Country where you
                                                are going for emploment. *Additional charge can apply for MOFA and takes
                                                8 working days for MOFA attestation from Qatar.
                                            </p>
                                        </Editorial>
                                    </div>
                                </div>

                                <div className="row xs-mt-30 md-mt-54">
                                    <div className="col-xs-12">
                                        <Editorial
                                            headline="MOFA OF SAUDI ARABIA"
                                            headlinePosition="left"
                                            side="left"
                                            img="./images/saudi.jpg"
                                        >
                                            <p className="xs-mt-12">
                                                We also do Ministry of Foreign Affairs of Saudi Arabia (MOFA of Saudi)
                                                After Attesting from country from which the documents are issued it has
                                                to be Attested from MOFA Ministry of Foreign Affairs of the Country
                                                where you are going for emploment. *Additional charge can apply for MOFA
                                                and takes minimum 40 working days & upto 6 month for MOFA attestation
                                                from Saudi Arabia.
                                            </p>
                                        </Editorial>
                                    </div>
                                </div>

                                <div className="row xs-mt-30 md-mt-54">
                                    <div className="col-xs-12">
                                        <Editorial
                                            headline="MOFA OF BAHRAIN"
                                            headlinePosition="left"
                                            side="right"
                                            img="./images/bahrain.jpg"
                                        >
                                            <p className="xs-mt-12">
                                                We also do Ministry of Foreign Affairs of Bahrain (MOFA of Bahrain)
                                                After Attesting from country from which the documents are issued it has
                                                to be Attested from MOFA Ministry of Foreign Affairs of the Country
                                                where you are going for emploment. *Additional charge can apply for MOFA
                                                and takes addtional time/days for MOFA attestation from Bahrain.
                                            </p>
                                        </Editorial>
                                    </div>
                                </div>

                                <div className="row xs-mt-30 md-mt-54">
                                    <div className="col-xs-12">
                                        <Editorial
                                            headline="MOFA OF KUWAIT"
                                            headlinePosition="left"
                                            side="left"
                                            img="./images/kuwait.jpg"
                                        >
                                            <p className="xs-mt-12">
                                                We also do Ministry of Foreign Affairs of Kuwait (MOFA of Kuwait)* After
                                                Attesting from country from which the documents are issued it has to be
                                                Attested from MOFA Ministry of Foreign Affairs of the Country where you
                                                are going for emploment.
                                            </p>
                                        </Editorial>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </VisastampingTemplate>
            </div>
        </Layout>
    );
}

export default MOFAAttestation;
