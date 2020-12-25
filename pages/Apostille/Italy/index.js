import React, { useEffect } from 'react';
import NavigationBar from '../../../components/organisms/Navigation Bar/navigation-bar.js';
import ApostillePageTemplate from '../../../components/organisms/Apostille Page Template/Apostille-Page-Template.js';
import './index.css';

function ItalyApostille(props) {
    useEffect(() => {
        document.title = 'Italy Apostille Service in Bangalore - Italy Apostille Service Near Me';
        document
            .querySelector('meta[name="description"]')
            .setAttribute(
                'content',
                'Italy Certificate Apostille Attestation Service in Bangalore. Call:9148889666 MEA Apostille for Degree Certificates, Birth & Marriage Certificate Apostille within 4 Days.'
            );
        document
            .querySelector('meta[name="keywords"]')
            .setAttribute(
                'content',
                'Italy Certificate Apostille, Legalization for Italy in Bangalore, Italy Apostille, Certificate Attestation from Italy Embassy'
            );
        document
            .querySelector('link[rel="canonical"]')
            .setAttribute('href', 'https://www.goodwayattestation.com/italy-apostille');

        document.querySelector('#commonPageHeader').innerHTML = 'Italy Apostille Service in Bangalore';
    }, []);

    return (
        <div className="routes-italy-apostille">
            <NavigationBar showTrackStatusBtn={true} />
            <ApostillePageTemplate headline="Apostille Service For Italy In Bengaluru">
                <div className="routes-italy-apostille_content">
                    <p>
                        <h2>Italy Apostille</h2>
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
                        Italy is one of the popular tourist destinations in the world. Historically, its capital Rome
                        and major city Venice have been the stage for noted English playwright William Shakespeare’s
                        plays.
                    </p>

                    <p className="xs-mt-12 md-mt-18">
                        Through apostille services, we at Goodway Attestation will make your Italy travel plans a smooth
                        sailing. Get your educational and experience{' '}
                        <b>certificates and important documents apostilled by the Embassy of Italy,</b> through Goodway
                        Attestation in Bengaluru.
                    </p>
                </div>
            </ApostillePageTemplate>
        </div>
    );
}

export default ItalyApostille;
