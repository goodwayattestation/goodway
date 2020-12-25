import React, { useEffect } from 'react';
import NavigationBar from '../../../components/organisms/Navigation Bar/navigation-bar.js';
import Editorial from '../../../components/organisms/Editorial/editorial.js';
import Showcase from '../../../components/organisms/Showcase/showcase.js';
import content from './index.json';
import './index.css';

function Attestation(props) {
    useEffect(() => {
        document.title = 'Certificate Attestation in Bangalore for UAE, Qatar, Kuwait, Bahrain, Egypt';
        document
            .querySelector('meta[name="description"]')
            .setAttribute(
                'content',
                'Goodway Attestation & Apostille Service in Bangalore for Birth & Marriage Certificate, Education & Commercial Documents. For Quick Service Call:9148889666'
            );
        document
            .querySelector('meta[name="keywords"]')
            .setAttribute(
                'content',
                'Certificate Attestation Agency in Bangalore, Degree Certificate Attestation in Bangalore, certificate attestation in bangalore for qatar, marriage certificate attestation in bangalore, embassy attestation in bangalore, certificate attestation in bangalore for uae'
            );
        document
            .querySelector('link[rel="canonical"]')
            .setAttribute('href', 'https://www.goodwayattestation.com/certificate-attestation-bangalore');

        document.querySelector('#commonPageHeader').innerHTML =
            'Certificate Attestation in Bangalore for UAE, Qatar, Kuwait, Bahrain, Egypt';
    }, []);

    return (
        <div className="route-attestation">
            <NavigationBar showTrackStatusBtn={true} />
            <section className="route-attestation-container">
                <div className="container-fluid">
                    <div className="row xs-mt-12 md-mt-30">
                        <div className="col-xs-12">
                            <div
                                className="route-attestation-container_headerImage"
                                style={{ backgroundImage: `url('./images/3.jpg')` }}
                            ></div>
                            <h2 className="t-a:c xs-pl-6 xs-pr-6">Attestation Services in Bengaluru</h2>
                        </div>
                    </div>

                    <div className="row xs-mt-12 md-mt-24">
                        <div className="col-xs-12 route-attestation-container_editorial">
                            <Editorial
                                headline="Certificate Attestation In India"
                                headlinePosition="center"
                                headlineSize="2"
                                side="left"
                                img="./images/my-bg.jpg"
                            >
                                <p className="xs-mt-12">
                                    Earth is very small to shift from one place to another without any barrier, if you
                                    prove yourself genuine. There are many reasons for a person to hang around to other
                                    places. Might be graduating for higher degrees, job opportunities, official purpose,
                                    holiday, some might plan to settle down as their dreams and many more. To satisfy
                                    all these needs we have to follow some process and procedures where in we need to
                                    prove ourselves an authenticated person.
                                </p>
                                <p className="xs-mt-12">
                                    It is mandatory to attest your documents/certificates when you have to stay anywhere
                                    out of your country without any issues for your planned period of time in that
                                    country. You necessitate the document attestation any time in a path of life, for
                                    number of reasons like: some medical emergency, want to study abroad, for job, need
                                    to shift and so on. For all this, everyone require to do some documentation.
                                </p>
                            </Editorial>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 md-mt-24">
                            <h2 className="color-black t-a:c">Our Certificate Attestation Services</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            <Showcase content={content} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Attestation;
