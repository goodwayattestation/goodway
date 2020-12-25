import React, { useEffect } from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import VisastampingTemplate from '../../components/organisms/Visa Stamping Template/visastamping-template.js';
import Layout from '../../components/layout';
import styles from './index.module.css';

function KuwaitVisastamping() {
    return (
        <Layout
            title="Kuwait Visa Stamping Services in Bangalore - Work Visa & Medical Treatment Visa for Kuwait"
            description="Kuwait Visa Stamping Services in Bangalore, Call:9148889666. Kuwait Work Visa Stamping, Kuwait Employee Visa Stamping, Job Visa Stamping for Kuwait & Kuwait Medical Treatment Visa Stamping."
            keywords="kuwait visa stamping service, kuwait visa stamping process, job visa stamping for kuwait, kuwait visa stamping online, kuwait visa stamping india, medical treatment visa for kuwait, visa stamping for kuwait, kuwait visa stamping rates"
            canonical="https://www.goodwayattestation.com/kuwait-visa-stamping"
            pageHeader="Kuwait Visa Stamping Services in Bangalore"
        >
            <div className={styles['routes-kuwait-visastamping']}>
                <NavigationBar showTrackStatusBtn={true} />
                <VisastampingTemplate headline="Visa Stamping Service For Kuwait In Bengaluru">
                    <div className={styles['routes-kuwait-visastamping_content']}>
                        <div className="row center-xs xs-mt-12 md-mt-54">
                            <div className="col-xs-12">
                                <h3 className="color-black">KUWAIT VISA STAMPING</h3>
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
                                <p className="t-a:j xs-mt-18 md-mt-24 f-w:500">
                                    Documentary requirements of different categories of Kuwaiti visa (Visit / Transit /
                                    Business / study / work / family reunion / medical / cultural) are different for
                                    each category. However, all visas are subject to the submission of the following
                                    documents:
                                </p>
                                <ul className="t-a:l xs-mt-18 md-mt-24 f-w:500">
                                    <li className="xs-mb-6"> National passport with minimum 6 months’ validity. </li>
                                    <li className="xs-mb-6"> Four recent passport size photographs. </li>
                                    <li className="xs-mb-6">
                                        {' '}
                                        Return air-ticket (not applicable for certain categories of visa).{' '}
                                    </li>
                                    <li className="xs-mb-6">
                                        {' '}
                                        Copy of the visa approval obtained by the sponsor in Kuwait.{' '}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row color-black center-xs xs-mt-36 md-mt-48">
                            <div className="col-xs-12 col-md-6">
                                <h3 className="t-a:l">EMPLOYMENT VISA</h3>

                                <ul className="t-a:l xs-mt-18 md-mt-24 f-w:500">
                                    <li className="xs-mb-6"> ORIGINAL VISA </li>
                                    <li className="xs-mb-6"> PASSPORT </li>
                                    <li className="xs-mb-6"> MEDICAL with GAMCA SLIP </li>
                                    <li className="xs-mb-6"> PCC issued by Passport Office </li>
                                    <li className="xs-mb-6"> PCC Attested MEA and Embassy </li>
                                    <li className="xs-mb-6"> PHOTOGRAPHS (Back White Background) </li>
                                </ul>
                            </div>

                            <div className={`${styles['edu']} col-xs-12 col-md-6`}>
                                <h3 className="t-a:l">DOCUMENTS FOR FAMILY VISA & RESIDENCE VISA</h3>

                                <ul className="t-a:l xs-mt-18 md-mt-24 md-ml-66 f-w:500">
                                    <li className="xs-mb-6 "> ORIGINAL VISA </li>
                                    <li className="xs-mb-6"> PASSPORT </li>
                                    <li className="xs-mb-6"> MEDICAL with GAMCA SLIP </li>
                                    <li className="xs-mb-6"> PCC issued by Passport Office </li>
                                    <li className="xs-mb-6"> PCC Attested MEA and Embassy </li>
                                    <li className="xs-mb-6"> PHOTOGRAPHS </li>
                                    <li className="xs-mb-6"> POLIO CERTIFICATE for 1 to 12 Years Old Children’s </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row color-black xs-mt-36 md-mt-48">
                            <div className="col-xs-12">
                                <p>
                                    Depending on the category of visa, other documents may also be necessary. The
                                    applicant may also in some cases be called for personal interview at the Embassy.
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

export default KuwaitVisastamping;
