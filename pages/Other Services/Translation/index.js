import React, { useEffect } from 'react';
import NavigationBar from '../../../components/organisms/Navigation Bar/navigation-bar.js';
import VisastampingTemplate from '../../../components/organisms/Visa Stamping Template/visastamping-template.js';
import './index.css';

function HRDDepartment(props) {
    useEffect(() => {
        document.title =
            'Translation Services in Bangalore - French, Spanish, Italian & Arabic Foreign Language Translation in India';
        document
            .querySelector('meta[name="description"]')
            .setAttribute(
                'content',
                'Translation Services in Bangalore, Call:9148889666. Foreign Language Translation from English to French, Spanish, Italian, Arabic, Chinese, Czech, Lithuanian, Swiss, Portugese and many other languages.'
            );
        document
            .querySelector('meta[name="keywords"]')
            .setAttribute(
                'content',
                'Foreign Language Translation Services Bangalore, Document Translation Services, Document Translators, Professional translation services, german translation services in bangalore, language translation company, german translation in bangalore, translation services in india, translation services in hyderabad, content translation services, translation companies in south india, translation services in mumbai'
            );
        document.querySelector('link[rel="canonical"]').setAttribute('href', 'https://www.goodwayattestation.com/');

        document.querySelector('#commonPageHeader').innerHTML = 'Translation Services in Bangalore';
    }, []);

    return (
        <div className="routes-hrd-department">
            <NavigationBar showTrackStatusBtn={true} />
            <VisastampingTemplate headline="HRD & Home Department Services">
                <div className="routes-hrd-department_content">
                    <div className="row center-xs xs-mt-12 md-mt-54">
                        <div className="col-xs-12">
                            <h3 className="color-black t-a:l">HRD & HOME DEPARTMENT</h3>
                            <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                Home department is headed by a principal secretary. It is an interior ministry mainly
                                responsible for the maintenance of internal security and domestic policy. For purposes
                                of authentication of documents, the HRD ministry delegated the responsibility to the
                                respective Home Departments of each state after 2005. HRD attestation process is
                                mandatory for higher education purposes.
                            </p>
                            <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                It is the critical initial step of certificate attestation. All the documents meant for
                                attestation / apostille must be attested by the home department. Out of this 80% of the
                                documents are attested by the Maharashtra Home Department. Otherwise known as
                                Mantralaya. The main reason of this being that Mantralaya has been a point for
                                attestation from the very beginning. The ease and acceptability of Mantralaya
                                attestation at many embassies make it a popular choice. For Indian consulate
                                attestation, the home department of the state, where the document originated, its
                                attestation must be obtained and is compulsory.
                            </p>

                            <h3 className="color-black t-a:l ">COMMERCIAL DOCUMENTS:</h3>
                            <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                With the onset of globalization and increased outflow of Indian migrants, the HRD
                                ministry of New Delhi delegated this responsibility to the respective Home Departments
                                of each state. Hence HRD attestation from New Delhi is no longer required but instead
                                Home Departments Attestation is required but the name still remains. In case of UAE and
                                Oman; state Home Department Attestation is not necessary but in case of Saudi Arabia, it
                                is compulsory where the HRD Ministry in New Delhi delegated this responsibility to the
                                respective Home Departments of each state, an exception was made in the case of two
                                states namely Kerala and Karnataka. In both these states the concerned Home Department
                                created a special department called as Regional Authentication Centers or RAC. The RAC
                                of Kerala is called as NORKA Roots.
                            </p>
                            <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                The procedure and time frame for Home Department Attestation / HRD Atestation varies
                                from state to state for e.g. Documents originating from Tamil Nadu go to the university
                                for verification and depending upon the university and age of the certificate time
                                frames may vary. In case of Kerala, usually the documents are attested and returned on
                                the same day. In some cases even the money (to be paid as a DD) will vary again
                                depending upon the age of the Document and the university. For e.g. Maharashtra.
                            </p>
                        </div>
                    </div>
                </div>
            </VisastampingTemplate>
        </div>
    );
}

export default HRDDepartment;
