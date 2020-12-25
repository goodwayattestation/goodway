import React, { useEffect } from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import VisastampingTemplate from '../../components/organisms/Visa Stamping Template/visastamping-template.js';
import Editorial from '../../components/organisms/Editorial/editorial.js';
import Layout from '../../components/layout';
import styles from './index.module.css';

function HRDDepartment(props) {
    return (
        <Layout
            title="HRD Attestation in Bangalore - Home Department Attestation Services India"
            description="HRD & Home Department Attestation in Bangalore, Call:9148889666. HRD Attestation for Educational Certificates, Karnataka Home Department Attestation for Birth & Marriage Certificates. HRD Attestation for Commercial Documents"
            keywords="hrd attestation, hrd attestation bangalore karnataka, hrd ministry attestation, state hrd attestation services, certificate attestation from home department, home department attestation bangalore, hrd attestation rates, Chennai home departments attestation"
            canonical="https://www.goodwayattestation.com/state-hrd-home-department-attestation"
            pageHeader="HRD & Home department Attestation in Bangalore"
        >
            <div className={styles['routes-hrd-department']}>
                <NavigationBar showTrackStatusBtn={true} />
                <VisastampingTemplate headline="HRD & Home Department Services">
                    <div className={styles['routes-hrd-department_content']}>
                        <div className="row center-xs xs-mt-12 md-mt-54">
                            <div className="col-xs-12">
                                <h2 className="color-black t-a:l">HRD & HOME DEPARTMENT</h2>
                                <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                    Home department is headed by a principal secretary. It is an interior ministry
                                    mainly responsible for the maintenance of internal security and domestic policy. For
                                    purposes of authentication of documents, the HRD ministry delegated the
                                    responsibility to the respective Home Departments of each state after 2005. HRD
                                    attestation process is mandatory for higher education purposes.
                                </p>
                                <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                    It is the critical initial step of certificate attestation. All the documents meant
                                    for attestation / apostille must be attested by the home department. Out of this 80%
                                    of the documents are attested by the Maharashtra Home Department. Otherwise known as
                                    Mantralaya. The main reason of this being that Mantralaya has been a point for
                                    attestation from the very beginning. The ease and acceptability of Mantralaya
                                    attestation at many embassies make it a popular choice. For Indian consulate
                                    attestation, the home department of the state, where the document originated, its
                                    attestation must be obtained and is compulsory.
                                </p>
                            </div>

                            <div className="row xs-mt-30 md-mt-30">
                                <div className="col-xs-12">
                                    <Editorial
                                        headline="COMMERCIAL DOCUMENTS:"
                                        headlinePosition="left"
                                        headlineSize="3"
                                        side="left"
                                        img="./images/hrd.jpg"
                                    >
                                        <p className="xs-mt-12">
                                            With the onset of globalization and increased outflow of Indian migrants,
                                            the HRD ministry of New Delhi delegated this responsibility to the
                                            respective Home Departments of each state. Hence HRD attestation from New
                                            Delhi is no longer required but instead Home Departments Attestation is
                                            required but the name still remains. In case of UAE and Oman; state Home
                                            Department Attestation is not necessary but in case of Saudi Arabia, it is
                                            compulsory where the HRD Ministry in New Delhi delegated this responsibility
                                            to the respective Home Departments of each state, an exception was made in
                                            the case of two states namely Kerala and Karnataka. In both these states the
                                            concerned Home Department created a special department called as Regional
                                            Authentication Centers or RAC. The RAC of Kerala is called as NORKA Roots.
                                        </p>
                                        <p className="xs-mt-12">
                                            The procedure and time frame for Home Department Attestation / HRD
                                            Atestation varies from state to state for e.g. Documents originating from
                                            Tamil Nadu go to the university for verification and depending upon the
                                            university and age of the certificate time frames may vary. In case of
                                            Kerala, usually the documents are attested and returned on the same day. In
                                            some cases even the money (to be paid as a DD) will vary again depending
                                            upon the age of the Document and the university. For e.g. Maharashtra.
                                        </p>
                                    </Editorial>
                                </div>
                            </div>
                        </div>
                    </div>
                </VisastampingTemplate>
            </div>
        </Layout>
    );
}

export default HRDDepartment;
