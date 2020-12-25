import React, { useEffect } from 'react';
import NavigationBar from '../../../components/organisms/Navigation Bar/navigation-bar.js';
import AttestationTemplate from '../../../components/organisms/Attestation Template/attestation-template.js';
import Content from './content.json';
import './index.css';

function NigeriaAttestation(props) {
    useEffect(() => {
        document.title = 'Attestation Service for Nigeria in Bangalore - Nigeria Certificate Attestation Near Me';
        document
            .querySelector('meta[name="description"]')
            .setAttribute(
                'content',
                'Nigeria Certificate Attestation Service in Bangalore for Birth & Marriage Certificate, Education & Commercial Documents. For Quick Service Call:9148889666'
            );
        document
            .querySelector('meta[name="keywords"]')
            .setAttribute(
                'content',
                'Nigeria Embassy Attestation, Nigeria Embassy Certificate Attestation in Bangalore, Nigeria Embassy Document Attestation Services, nigerian embassy in bangalore'
            );
        document
            .querySelector('link[rel="canonical"]')
            .setAttribute('href', 'https://www.goodwayattestation.com/nigeria-attestation');

        document.querySelector('#commonPageHeader').innerHTML = 'Attestation Service for Nigeria in Bangalore';
    }, []);

    return (
        <div className="routes-nigeria-attestation">
            <NavigationBar showTrackStatusBtn={true} />
            <AttestationTemplate headline="Attestation Service For Nigeria In Bengaluru" tabs={Content}>
                <div className="routes-nigeria-attestation_content">
                    <div className="row center-xs xs-mt-12 md-mt-54">
                        <div className="col-xs-12">
                            <h2 className="color-black">Certificates Required For Nigeria Embassy Attestation</h2>
                        </div>
                    </div>
                    <div className="row color-black center-xs xs-mt-36 md-mt-48">
                        <div className="col-xs-12 col-md-6">
                            <h3>Educational Certificate Attestation</h3>
                            <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                For getting employment visa Attestation of certificates needed to prove one’s
                                authenticity, to visit that country. As the overseas companies required attestation on
                                all certificates. Your documents taken as a piece of evidence. There are various
                                documents which necessitate for attestation, like educational certificates:
                                matriculation certificate, certificate of intermediate, B.A, M.A, B.Com, M.com, B.Sc,
                                M.Sc, MBBS, BDS, BBA, MBA etc. Personal Documents: Marriage certificate, divorce
                                certificate, medical certificate, employment certificate, birth certificate etc.
                            </p>

                            <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                To acquire job without any discrepancy at work get assisted from our professionals.
                                Contact them from the place where you are just going online and find out the experienced
                                company or group who can efficiently take care of your certificates. Get status update
                                online without any hassle in the way of your travel.
                            </p>

                            <ul className="t-a:l xs-mt-18 md-mt-24 f-w:500">
                                <li className="xs-mb-6"> UG, PG degree certificate attestation </li>
                                <li className="xs-mb-6"> Diploma degree certificate attestation </li>
                                <li className="xs-mb-6"> Engineering degree certificate attestation </li>
                                <li className="xs-mb-6"> Management degree certificate attestation </li>
                                <li className="xs-mb-6"> Hotel management certificate attestation </li>
                                <li className="xs-mb-6"> Medical degree certificate attestation </li>
                                <li className="xs-mb-6"> Law degree certificate attestation </li>
                                <li className="xs-mb-6"> Technical degree certificate attestation </li>
                                <li className="xs-mb-6"> Professional degree certificate attestation </li>
                                <li className="xs-mb-6"> PhD degree certificate attestation </li>
                            </ul>
                        </div>

                        <div className="col-xs-12 col-md-6 educationalCertificateAttestation">
                            <h3>Non Educational Certificate Attestation</h3>

                            <ul className="t-a:l xs-mt-18 md-mt-24 md-ml-66 f-w:500">
                                <li className="xs-mb-6"> Birth Certificate Attestation </li>
                                <li className="xs-mb-6"> Marriage Certificate Attestation </li>
                                <li className="xs-mb-6"> Salary Certificate Attestation </li>
                                <li className="xs-mb-6"> Equivalence Certificate </li>
                                <li className="xs-mb-6"> Single Status Certificate Attestation </li>
                                <li className="xs-mb-6"> Ministry of education department attestation </li>
                                <li className="xs-mb-6"> Foreign Affairs (FA) Attestation/Legalization </li>
                                <li className="xs-mb-6"> Transfer Certificate (TC) Attestation </li>
                                <li className="xs-mb-6"> Experience/ Employment Certificate Attestation </li>
                                <li className="xs-mb-6"> Medical Certificate Attestation </li>
                                <li className="xs-mb-6"> Ministry of health department attestation </li>
                                <li className="xs-mb-6"> Ministry of Justice attestation </li>
                                <li className="xs-mb-6"> Chamber of commerce attestation </li>
                                <li className="xs-mb-6"> Labor department attestation </li>
                                <li className="xs-mb-6"> Death Certificate Attestation </li>
                            </ul>

                            <h3 className="xs-mt-12 md-mt-18">MOFA</h3>
                            <p className="t-a:j xs-mt-18 md-mt-24 md-ml-48 f-w:500">
                                We also take over Ministry of Foreign Affairs of Nigeria (MOFA of Nigeria)* After
                                Attesting from country from which the documents are issued it has to be Attested from
                                MOFA Ministry of Foreign Affairs of the Country where you are going for employment.
                            </p>
                        </div>
                    </div>
                </div>
            </AttestationTemplate>
        </div>
    );
}

export default NigeriaAttestation;
