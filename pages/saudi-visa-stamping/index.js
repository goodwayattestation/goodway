import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import VisastampingTemplate from '../../components/organisms/Visa Stamping Template/visastamping-template.js';
import Layout from '../../components/layout';
import styles from './index.module.css';

function SaudiVisastamping() {
    return (
        <Layout
            title="Saudi Visa Stamping Services in Bangalore - Work Permit & Medical Visa Stamping India"
            description="Saudi Visa Stamping Services in Bangalore, Call:9148889666. Saudi Work Visa Stamping, Saudi Employee Visa Stamping, Job Visa Stamping for UAE & Saudi Medical Treatment Visa Stamping."
            keywords="saudi visa stamping service, saudi visa stamping process, job visa stamping for saudi, saudi visa stamping online, saudi visa stamping india, medical treatment visa for saudi, visa stamping for saudi"
            canonical="https://www.goodwayattestation.com/saudi-visa-stamping"
            pageHeader="Saudi Visa Stamping Services in Bangalore"
        >
            <div className={styles['routes-saudi-visastamping']}>
                <NavigationBar showTrackStatusBtn={true} />
                <VisastampingTemplate headline="Visa Stamping Service For Saudi In Bengaluru">
                    <div className={styles['routes-saudi-visastamping_content']}>
                        <div className="row center-xs xs-mt-12 md-mt-54">
                            <div className="col-xs-12">
                                <h3 className="color-black">SAUDI VISA STAMPING</h3>
                                <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                    A visa is a conditional authorization granted by a country to a foreigner, allowing
                                    them to enter, remain within, or to leave that country. Visas typically include
                                    limits on the duration of the foreigner's stay, territory within the country they
                                    may enter, the dates they may enter, the number of permitted visits or an
                                    individual's right to work in the country in question. Visas are associated with the
                                    request for permission to enter a country and thus are, in some countries, distinct
                                    from actual formal permission for an alien to enter and remain in the country. In
                                    each instance, a visa is subject to entry permission by an immigration official at
                                    the time of actual entry, and can be revoked at any time.
                                </p>
                            </div>
                        </div>
                        <div className="color-black center-xs xs-mt-36 md-mt-48">
                            <div className="col-xs-12 col-md-6">
                                <h3 className="t-a:l">List of Documents for Saudi Visa processing:</h3>

                                <ul className="t-a:l xs-mt-18 md-mt-24 f-w:500">
                                    <li className="xs-mb-6"> Valid and original passport. </li>
                                    <li className="xs-mb-6">
                                        {' '}
                                        Copy of Passport & Iqama(Residence permit) of the sponsor.{' '}
                                    </li>
                                    <li className="xs-mb-6">
                                        {' '}
                                        Visa Order/Wakala/Invitation letter issued by The Kingdom of Saudi Arabia.{' '}
                                    </li>
                                    <li className="xs-mb-6"> Two Passport Size photographs. </li>
                                    <li className="xs-mb-6"> Medical Report (For Employment Visa). </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row color-black xs-mt-36 md-mt-48">
                            <div className="col-xs-12">
                                <p>
                                    The entire visa stamping process normally takes 3 to 5 working days from the date
                                    the application is submitted to the Embassy of The Kingdom Of Saudi Arabia.
                                </p>

                                <p className="xs-mt-12"></p>
                            </div>
                        </div>
                    </div>
                </VisastampingTemplate>
            </div>
        </Layout>
    );
}

export default SaudiVisastamping;
