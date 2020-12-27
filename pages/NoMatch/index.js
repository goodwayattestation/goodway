import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import styles from './index.module.css';

function Home(props) {
    return (
        <div className={`${styles['route-home']}  xs-pb-18 md-pb-36`}>
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

            <div className={`${styles['page404']} center-xs`}>
                <h1 className="xs-pt-24 md-pt-36">404</h1>
                <h3 className="xs-pt-24 md-pt-36">Sorry, you have entered the wrong url!</h3>
            </div>
        </div>
    );
}

export default Home;
