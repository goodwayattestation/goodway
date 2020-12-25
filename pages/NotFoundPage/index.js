import React, { useEffect } from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';

function NotFoundPage(props) {
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
        <div className="routes-not-found">
            <NavigationBar showTrackStatusBtn={true} />
            <h4>
                You seemed to have lost track.. This is certainly not where you wished to land. Otherwise, it's all here
                for you to experience.
            </h4>
            <h5>Proceed to the home page.</h5>
            <h6>Or contact us for any clarification.</h6>
        </div>
    );
}

export default NotFoundPage;
