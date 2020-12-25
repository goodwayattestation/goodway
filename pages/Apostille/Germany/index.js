import React, { useEffect } from 'react';
import NavigationBar from '../../../components/organisms/Navigation Bar/navigation-bar.js';
import ApostillePageTemplate from '../../../components/organisms/Apostille Page Template/Apostille-Page-Template.js';
import './index.css';

function GermanyApostille(props) {
    useEffect(() => {
        document.title = 'Germany Apostille Service in Bangalore - Germany Apostille Service Near Me';
        document
            .querySelector('meta[name="description"]')
            .setAttribute(
                'content',
                'Germany Certificate Apostille Attestation Service in Bangalore. Call:9148889666 MEA Apostille for Degree Certificates, Birth & Marriage Certificate Apostille within 4 Days.'
            );
        document
            .querySelector('meta[name="keywords"]')
            .setAttribute(
                'content',
                'Certificate Apostille for Germany in Bangalore, Legalisation for Germany, Apostille Attestation in Bangalore, Birth Certificate Apostille Service in India, how to attest documents from german embassy, german embassy attestation appointment, german embassy certification of documents, document attestation for germany'
            );
        document
            .querySelector('link[rel="canonical"]')
            .setAttribute('href', 'https://www.goodwayattestation.com/germany-apostille');

        document.querySelector('#commonPageHeader').innerHTML = 'Germany Apostille Service in Bangalore';
    }, []);

    return (
        <div className="routes-germany-apostille">
            <NavigationBar showTrackStatusBtn={true} />
            <ApostillePageTemplate headline="Apostille Service For Germany In Bengaluru">
                <div className="routes-germany-apostille_content">
                    <p>
                        <h2>Germany Apostille</h2>
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
                        Procedure for certificate apostille: If you submit your original certificate with a photocopy of
                        the passport we will first submit your document to HRD Department of Concerned State wherein it
                        will be authenticated then Ministry of External Affairs will Apostille your document.
                    </p>
                    <p className="xs-mt-12 md-mt-18">
                        <b>Duration for Apostille:</b> 10 to 15 Working Days
                    </p>

                    <p className="xs-mt-12 md-mt-18">
                        Germany is one of the technology powerhouses in the European Union. With an advanced economy,
                        Germany attracts many talented and skilled resources from across the globe. With its rich
                        history, heritage and culture, Germany is one of the popular tourist destinations.
                    </p>

                    <p className="xs-mt-12 md-mt-18">
                        Make your travel plans to Germany less hassling with apostille certification by the Embassy of
                        Germany in India. You need not travel out of Bengaluru to get it done. Leave it to us at Goodway
                        Attestation. Get your educational, experience, marriage and other important certificates and
                        documents apostilled by the Embassy of Germany through Goodway Attestation. Apostilled documents
                        makes your job easier with Schengen Visa, if you are to travel to other countries in Europe.
                    </p>
                </div>
            </ApostillePageTemplate>
        </div>
    );
}

export default GermanyApostille;
