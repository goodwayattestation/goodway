import React, { useEffect } from 'react';
import NavigationBar from '../../../components/organisms/Navigation Bar/navigation-bar.js';
import ApostillePageTemplate from '../../../components/organisms/Apostille Page Template/Apostille-Page-Template.js';
import './index.css';

function UKDocuments(props) {
    useEffect(() => {
        document.title = 'UK Apostille Service in Bangalore - UK Apostille Service Near Me';
        document
            .querySelector('meta[name="description"]')
            .setAttribute(
                'content',
                'UK Certificate Apostille Attestation Service in Bangalore for Birth & Marriage Certificate, Education & Commercial Documents. For Quick Service Call:9148889666'
            );
        document
            .querySelector('meta[name="keywords"]')
            .setAttribute(
                'content',
                'UK Birth Certificate Apostille, UK Apostille, Documents Apostille UK Stamp, Certificate Attestation for UK, mea attestation fees'
            );
        document
            .querySelector('link[rel="canonical"]')
            .setAttribute('href', 'https://www.goodwayattestation.com/uk-documents');

        document.querySelector('#commonPageHeader').innerHTML = 'UK Apostille Service in Bangalore';
    }, []);

    return (
        <div className="routes-uk-documents">
            <NavigationBar showTrackStatusBtn={true} />
            <ApostillePageTemplate headline="Apostille Service For UK In Bengaluru">
                <div className="routes-uk-documents_content">
                    <p className="xs-mt-12 md-mt-18">
                        <h2>UK Certificate Apostille</h2>
                    </p>

                    <p className="xs-mt-12 md-mt-18">
                        This assistance provides an Apostille Closure to be involved with a UK-issued documents. Choose
                        this assistance to validate your information for use within an individual country of the Hague
                        Conference. The Apostille assistance is provided to validate information for use overseas.
                        Simply complete the transaction type and provide your information to us to be made lawful. We
                        can legalize exclusive certifications of UK academic qualifications. There are two types of
                        certificate documents like personal certificates and business certificates. The MEA Apostille
                        department will do the legalization of your documents before that you need to do Notary
                        attestation, HRD attestation /SDM/ attestation.
                    </p>

                    <p className="xs-mt-12 md-mt-18">
                        <h3>Personal Certificates for legalization</h3>
                    </p>

                    <p className="xs-mt-12 md-mt-18">
                        There are lots of personal documents like academic certificates , court papers, birth, marriage
                        and death certificates. Another common document is a National Identification Service, Disclosure
                        Scotland or other similar criminal record check document, these are often required by people
                        working outside of the UK. Certificates of Good Standing - Signed by an official of Companies
                        House , UK Civil Partnership Certificates are also coming under this category certificate
                        attestation apostille.
                    </p>

                    <p className="xs-mt-12 md-mt-18">
                        <h3>Business Certificates for Legalization/apostille</h3>
                    </p>

                    <p className="xs-mt-12 md-mt-18">
                        Business documents include certificates of incorporation and memorandum and articles of
                        association. These sorts of documents often require an attestation to prove a UK company exists
                        when taking their business overseas. Certificates of Incorporation - Signed by an official of
                        Companies House , Memorandum and Articles of Association - Signed by an official of Companies
                        House , Notarial Acts etc., come under this category of certificate attestation apostille.
                    </p>

                    <p className="xs-mt-12 md-mt-18">
                        Documents for legalization must be UK documents, and although they can be copied, they still
                        must contain an original signature, seal or stamp from the relevant UK public official whom the
                        documents are coming from. Some copies of original documents often have to be certified by a
                        Solicitor or Notary Public.
                    </p>

                    <p className="xs-mt-12 md-mt-18">
                        United Kingdom, with its educational institutions and universities of international repute,
                        including Cambridge and Oxford, Get your educational, experience certificates and legal
                        documents apostilled by the High Commission of the United Kingdom, through Goodway Attestation,
                        Bengaluru. You need not look beyond us since our professionals will do the job for you at
                        nominal fees.
                    </p>

                    <p className="xs-mt-12 md-mt-18">
                        Great Britain, also called United Kingdom is one of the most advanced economies of the world.
                        Its history and cultural heritage makes it one of the popular tourist destinations for
                        travellers from across the globe. As of now, the country is in negotiations for exiting from the
                        European Union.
                    </p>

                    <p className="xs-mt-12 md-mt-18">
                        United Kingdom, with its educational institutions and universities of international repute,
                        including Cambridge and Oxford.
                    </p>

                    <p className="xs-mt-12 md-mt-18">
                        Get your{' '}
                        <b>
                            educational, experience certificates and legal documents apostilled by the High Commission
                            of the United Kingdom,
                        </b>{' '}
                        through Goodway Attestation, Bengaluru. You need not look beyond us since our professionals will
                        do the job for you at nominal fees
                    </p>
                </div>
            </ApostillePageTemplate>
        </div>
    );
}

export default UKDocuments;
