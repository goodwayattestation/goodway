import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';

function NotFoundPage(props) {
    return (
        <div className={styles['routes-not-found']}>
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
