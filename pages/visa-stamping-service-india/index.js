import React from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import VisastampingTemplate from '../../components/organisms/Visa Stamping Template/visastamping-template.js';
import Editorial from '../../components/organisms/Editorial/editorial.js';
import Card from '../../components/atoms/Card/card.js';
import Showcase from '../../components/organisms/Showcase/showcase.js';
import Layout from '../../components/layout';
import content from './index.json';
import styles from './index.module.css';
import Toc from '../../components/organisms/TOC/Toc.js';
import { useRouter } from 'next/router'

function VisaStamping(props) {
    const router = useRouter()
    return (
        <Layout
            title="Visa Stamping in Bangalore - Work Visa Stamping in India - Visa Stamping Office Near Me"
            description="Visa Stamping Services in Bangalore, Call:9148889666. Work Visa Stamping, Employee Visa Stamping, Job Visa Stamping for UAE, Kuwait & Saudi."
            keywords="Visa Stamping Office in Bangalore, Kuwait Visa Stamping Services, Visa Stamping Near Me, Saudi Visa Stamping Services, Visa Stamping Agency, Work Visa Stamping, Job Visa Stamping for Kuwait,  Visa Stamping rates, visa stamping fees online, visa stamping online, visa stamping india"
            canonical="https://www.goodwayattestation.com/visa-stamping-service-india"
            pageHeader="Visa Stamping in Bangalore"
        >
            <div className={styles['routes-visa-stamping']}>
                <NavigationBar showTrackStatusBtn={true} />
                <VisastampingTemplate headline="Visa Stamping Services">
                <div className='container-fluid xs-mt-12 md-mt-18'>
						<div className="row">
							<div className="col-xs-12 col-md-4">
								<Toc pathname={router.pathname} />
							</div>
						</div>
					</div>
                    <div className="row">
                        <div className="col-xs-12">
                            <Editorial
                                headline="VISA STAMPING"
                                headlinePosition="center"
                                headlineSize="2"
                                side="left"
                                img="./images/my-bg.jpg"
                            >
                                <p className="xs-mt-12">
                                    Visa is a written permission to indicate that a person is prima facie permitted to
                                    enter a particular country (subject to the final approval of the Immigration
                                    Official at the time of actual entry). It has more than sufficient experience and
                                    expertise for preparation of visa applications and submission to the concerned
                                    country’s Embassy / High Commission or Consulate. Goodway also keeps latest &
                                    updated information on the eligibility, documentary requirements and prescribed fees
                                    for different categories of visa applications for each country.
                                </p>
                                <p className="xs-mt-12">
                                    The visa stamp placed in your passport by a Embassy or Consulate shows the period
                                    during which you may enter the particular country. If the date on the visa stamp
                                    expires while you are in that country., it need not be renewed until after you leave
                                    the country and wish to return again, provided that you maintain your legal status
                                    throughout your entire stay in country. This means that you must possess a valid
                                    visa document at all times. The visa document is only valid if you remain in
                                    full-time student status.
                                </p>
                            </Editorial>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 md-mt-24">
                            <h2 className="color-black t-a:c">Our Visa Stamping Services</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            <Showcase content={content} />
                        </div>
                    </div>
                </VisastampingTemplate>
            </div>
        </Layout>
    );
}

export default VisaStamping;
