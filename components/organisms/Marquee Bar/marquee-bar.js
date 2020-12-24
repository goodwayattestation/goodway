import React, { useState, useEffect } from 'react';
import './marquee-bar.css';

function MarqueeBar(props) {
    return (
        <section className="container-fluid organism-marqueeBar xs-pb-6 md-pt-6 md-pb-12">
            <div className="row middle-xs">
                <div className="col-xs-12 col-md-8">
                    <marquee className="organism-marqueeBar-marquee">
                        An ISO 9001:2015 certified company and approved by Government Embassies
                    </marquee>
                </div>
                <div className="col-xs-12 col-md-4 center-xs end-md hidden-sm-down">
                    <a className="organism-marqueeBar-social c:p d:i-block xs-mr-6 md-mr-12" style={{ backgroundImage: `url('./images/twitter.png')` }}>
                    
                    </a>

                    <a className="organism-marqueeBar-social c:p d:i-block xs-mr-6 md-mr-12" style={{ backgroundImage: `url('./images/facebook.png')` }}>
                    
                    </a>

                    <a className="organism-marqueeBar-social c:p d:i-block xs-mr-6 md-mr-12" style={{ backgroundImage: `url('./images/linkedin.png')` }}>
                    
                    </a>

                    <a className="organism-marqueeBar-social c:p d:i-block" style={{ backgroundImage: `url('./images/instagram.png')` }}>
                    
                    </a>

                    <a className="organism-marqueeBar-social c:p d:n">

                    </a>
                </div>
            </div>
        </section>
    );
}

export default MarqueeBar;