import React, { useEffect } from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import './index.css';

function Home(props) {
    useEffect(() => {
        document.title =
            'GoodWay Attestation - One stop solution for all your attestation & apostille, Banglaore, India';
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
                'Certificate Attestation Agency in Bangalore, attestation services near me, hrd attestation for nurses in bangalore, uae attestation services in bangalore, hrd attestation bangalore karnataka, apostille services in bangalore, Apostille Certification Services in Bangalore, Apostille Attestation in Bangalore, apostille attestation fee bangalore'
            );
        document.querySelector('link[rel="canonical"]').setAttribute('href', 'https://www.goodwayattestation.com/');
    }, []);

    return (
        <div className="route-home xs-pb-18 md-pb-36">
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <NavigationBar showTrackStatusBtn={true} />

            <div className="page404 center-xs ">
                <h1 className="xs-pt-24 md-pt-36">404</h1>
                <h3 className="xs-pt-24 md-pt-36">Sorry, you have entered the wrong url!</h3>
            </div>
        </div>
    );
}

export default Home;
