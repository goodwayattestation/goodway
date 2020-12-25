import React, { useEffect } from 'react';
import NavigationBar from '../../../components/organisms/Navigation Bar/navigation-bar.js';
import ApostillePageTemplate from '../../../components/organisms/Apostille Page Template/Apostille-Page-Template.js';
import './index.css';

function NetherlandsApostille(props) {
    useEffect(() => {
        document.title =
            'Netherlands Apostille Service in Bangalore - Degree & Marriage Certificate Apostille in India';
        document
            .querySelector('meta[name="description"]')
            .setAttribute(
                'content',
                'Netherlands Certificate Apostille Attestation Service in Bangalore. Call:9148889666. Netherlands MEA Apostille for Degree Certificates, Birth & Marriage Certificate Apostille for Netherlands within 4 Days.'
            );
        document
            .querySelector('meta[name="keywords"]')
            .setAttribute(
                'content',
                'degree certificate apostille for Netherlands, marriage certificate apostille for Netherlands, Netherlands mea apostille service, birth certificate apostille attestation for Netherlands, Legalisation for Netherlands, Apostille for documents from Netherlands, Netherlands Embassy Apostille'
            );
        document
            .querySelector('link[rel="canonical"]')
            .setAttribute('href', 'https://www.goodwayattestation.com/netherlands-apostille');

        document.querySelector('#commonPageHeader').innerHTML = 'Netherlands Apostille Service in Bangalore';
    }, []);

    return (
        <div className="routes-netherlands-apostille">
            <NavigationBar showTrackStatusBtn={true} />
            <ApostillePageTemplate headline="Apostille Service For Netherlands In Bengaluru">
                <div className="routes-netherlands-apostille_content">
                    <p>
                        <h2>Netherlands Apostille</h2>
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
                        Netherlands is one of the advanced economies in the European Union. It is one of the popular
                        tourist destinations in the world. Netherlands is one of the technology hubs in Europe and the
                        world as well.
                    </p>

                    <p className="xs-mt-12 md-mt-18">
                        Let your visit to Netherlands be hassle-free with apostille of certificates and documents by the
                        Embassy of Netherlands, through Goodway Attestation in Bengaluru. Our professionals will ensure
                        that you encounter minimal hassle while processing your papers. The Netherlands embassy will
                        apostille your certifates and documents, which would make your tour plan hassle-free when you
                        visit another country from Netherlands, if that country is a signatory to the Hague Apostille
                        Convention.
                    </p>
                </div>
            </ApostillePageTemplate>
        </div>
    );
}

export default NetherlandsApostille;
