import React from 'react';
import Layout from '../components/layout';
import styles from './index.module.css';
import NavigationBar from '../components/organisms/Navigation Bar/navigation-bar';
import Editorial from '../components/organisms/Editorial/editorial.js';
import Showcase from '../components/organisms/Showcase/showcase.js';
import Button from '../components/atoms/Button/button.js';
import Form from '../components/organisms/Form/form.js';
import MarqueeBar from '../components/organisms/Marquee Bar/marquee-bar.js';
import content from './index.json';
import Slider from 'react-slick';

export default function Home(props) {
	const settings = {
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
	};

	return (
		<Layout
			title="Attestation Service in Bangalore - Apostille Services in Banglore, Karnataka"
			description="Goodway Attestation & Apostille Service in Bangalore for Birth & Marriage Certificate, Education & Commercial Documents. For Quick Service Call:9148889666"
			keywords="Certificate Attestation Agency in Bangalore, attestation services near me, hrd attestation for nurses in bangalore, uae attestation services in bangalore, hrd attestation bangalore karnataka, apostille services in bangalore, Apostille Certification Services in Bangalore, Apostille Attestation in Bangalore, apostille attestation fee bangalore"
			canonical="https://www.goodwayattestation.com/"
			pageHeader="Attestation & Apostille Service in Bangalore"
		>
			<div className={styles['route-home']}>
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
				<MarqueeBar />
				<div
					itemScope
					itemType="https://goodwayattestation.com/Carousel"
					className={styles['route-home-carousel']}
				>
					<Slider {...settings}>
						<div itemProp="CarouselImage1">
							<img
								className={styles['carousel-image']}
								src="./images/image-1.jpg"
								alt="Certificate Attestation Agency in Bangalore, attestation services near me, hrd attestation for nurses in bangalore, uae attestation services in bangalore, hrd attestation bangalore karnataka, apostille services in bangalore, Apostille Certification Services in Bangalore, Apostille Attestation in Bangalore, apostille attestation fee bangalore"
								width="80%"
							/>
						</div>
						<div itemProp="CarouselImage2">
							<img
								className={styles['carousel-image']}
								src="./images/image-2.jpg"
								alt="Certificate Attestation Agency in Bangalore, attestation services near me, hrd attestation for nurses in bangalore, uae attestation services in bangalore, hrd attestation bangalore karnataka, apostille services in bangalore, Apostille Certification Services in Bangalore, Apostille Attestation in Bangalore, apostille attestation fee bangalore"
								width="80%"
							/>
						</div>
						<div itemProp="CarouselImage3">
							<img
								className={styles['carousel-image']}
								src="./images/image-3.jpg"
								alt="Certificate Attestation Agency in Bangalore, attestation services near me, hrd attestation for nurses in bangalore, uae attestation services in bangalore, hrd attestation bangalore karnataka, apostille services in bangalore, Apostille Certification Services in Bangalore, Apostille Attestation in Bangalore, apostille attestation fee bangalore"
								width="80%"
							/>
						</div>
					</Slider>
				</div>
				<div className="container-fluid">
					<div className="row xs-mt-30 md-mt-54 center-xs">
						<div
							itemScope
							itemType="https://goodwayattestation.com/WhatWeDo"
							className="col-xs-11"
						>
							<h1 itemProp="Title" className="t-a:c">
								What We Do?
							</h1>
							<p itemProp="Subheadline" className="xs-mt-12 t-a:l">
								Chat with us or Call us for a hassle-free attestation process
								and we would love to be the stepping stone for your journey. We
								always provide timely completion of the process and procedure,
								assured door step deliveries which is affordable by all the
								customers all over the globe.{' '}
							</p>
							<p itemProp="Description" className="xs-mt-12 t-a:l">
								Goodway attestation provides Live chat option for all our
								customers which give immediate clarifications for the customers
								and the process can be completed as earliest with in a short
								period of time. We also provide online tracking facility, Email
								and SMS updates to our customers notifying them about their
								certificates status time to time in their legalization
								procedure. Facility provided for our clients like live chat
								gives an immediate update all day. All they have to do is
								providing their tracking number and get the update.
							</p>
							<div className="row">
								<div className="col-xs-12">
									<div className={styles['route-home-body']}>
										<div>
											<Showcase content={content} itemsPerRow={3} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row xs-mt-30 md-mt-54">
						<div className="col-xs-12">
							<Editorial
								headline="About Us"
								headlinePosition="center"
								headlineSize="2"
								side="right"
								btnLink="/about-us"
								btnText="Know More"
								img="./images/video.jpg"
							>
								<p className="xs-mt-12">
									<h3>
										Goodway Attestation is a pioneer company for Certificate
										Attestation & Apostille.
									</h3>
								</p>
								<p className="xs-mt-12">
									The company is providing this service of attestation of
									certificates for last 15 years. It is managed by professionals
									to give you efficient, fast and reliable services. It is the
									REGISTERED and ISO certified company ISO 9001 : 2015 approved
									by the Govt and Embassies for attestation/authentication and
									legalisation of all kinds of Educational certificates and
									Non-Educational Certificates like : Marriage certificates,
									Birth certificates and affidavits etc.
								</p>
								<p className="xs-mt-12">
									We assure 100% Genuine attestation on all the certificates at
									very competitive rates better than the market.
								</p>
							</Editorial>
						</div>
					</div>

					<div
						className={`row xs-mt-30 md-mt-24 box2 ${styles['route-home-features']}`}
					>
						<div className="col-xs-12">
							<h1 className="t-a:c">Our Attributes</h1>
							<div className="row xs-pb-6 md-pb-18">
								<div className="col-xs-6 col-md-4 xs-mt-12 md-mt-36 t-a:c">
									<div className="match-height">
										<img src="images/live-ico.png" alt="Support-icon" />
									</div>
									<h3 className="xs-mt-6 md-mt-12">Support</h3>
								</div>
								<div className="col-xs-6 col-md-4 xs-mt-12 md-mt-36 t-a:c">
									<div className="match-height">
										<img
											src="images/track-ico.png"
											alt="Online-tracking-icon"
										/>
									</div>
									<h3 className="xs-mt-6 md-mt-12">Online Tracking</h3>
								</div>
								<div className="col-xs-6 col-md-4 xs-mt-12 md-mt-36 t-a:c">
									<div className="match-height">
										<img
											src="images/express-ico.png"
											alt="Express-service-icon"
										/>
									</div>
									<h3 className="xs-mt-6 md-mt-24">Express Service</h3>
								</div>
								<div className="col-xs-6 col-md-4 xs-mt-12 md-mt-36 t-a:c">
									<div className="match-height">
										<img src="images/status-ico.png" alt="Status-update-icon" />
									</div>
									<h3 className="xs-mt-6 md-mt-12">Status Update</h3>
								</div>
								<div className="col-xs-6 col-md-4 xs-mt-12 md-mt-36 t-a:c">
									<div className="match-height">
										<img src="images/pickup-ico.png" alt="Free-pickup-icon" />
									</div>
									<h3 className="xs-mt-6 md-mt-12">
										Free Pickup & Drop Service
									</h3>
								</div>
								<div className="col-xs-6 col-md-4 xs-mt-12 md-mt-36 t-a:c">
									<div className="match-height">
										<img
											src="images/rupee-ico.png"
											alt="Affordable-price-icon"
										/>
									</div>
									<h3 className="xs-mt-6 md-mt-12">Affordable Price</h3>
								</div>
							</div>
						</div>
					</div>

					<div className="row xs-mt-30 md-mt-54">
						<div className={`col-xs-12 ${styles['cont']}`}>
							<h2 className="t-a:c">
								All-in-One Document Attestation, Apostille & Other Services
							</h2>
							<h2 className="t-a:c">
								For Your Personal, Educational & Business Documents
							</h2>
						</div>
					</div>
					<div className="row xs-mt-30 md-mt-24">
						<div className="col-xs-12 t-a:c">
							<Button
								className="d:i-flex"
								color="dodgerblue"
								name="Contact Us"
								size={1}
								url="/contact-us"
							/>
						</div>
					</div>
					<div
						className={`row xs-mt-30 md-mt-24 box2 ${styles['route-home-features']}`}
					>
						<div className="col-xs-12">
							<h1 className="t-a:c">
								Embassy Attestation & Apostille Services in Bangalore
							</h1>

							<p className={`t-a:l ${styles['edu']}`}>
								Make the task of submitting your documents and getting them
								verified as easy as possible with the best attestation services
								in Bengaluru. Get the best apostille services in Bengaluru for
								major countries across the world as well. Submit all your
								important and critical documents well on time at important
								government organisation or the new employer that you are
								joining, by the best certificate attestation services in
								Bengaluru and also the best document attestation services in
								Bengaluru – Goodway Attestation.
							</p>
							<p className={`t-a:l ${styles['edu']}`}>
								Attestation of documents is not just important – it is very
								critical whenever you need to get any important document or a
								job done at any government office, bank, transport, passport,
								insurance, embassies, high commission and other offices. The
								document may be any certificate such as educational
								certificates, marriage certificate, death certificate of a
								family member, and more. No need to look beyond Goodway
								Attestation to get elaborate attestation services in Bengaluru
								at reasonable rates that are ahead of the competition.
							</p>
							<p className={`t-a:l ${styles['edu']}`}>
								Be assured of authentic attestation services in Bengaluru by
								Goodway. This will minimise or even eliminate all possible
								hassles that you may face when you want to submit your documents
								at the office of the statutory authorities. The experts at
								Goodway are knowledgeable about the various statutory
								authorities such as transport office, passport, visa and
								immigration authorities, electricity, water and gas authorities,
								and more. Therefore, you are assured of the best certificate and
								document attestation, apostille in Bengaluru.
							</p>
							<p className={`t-a:l ${styles['edu']}`}>
								Save your valuable time that you would spend on travelling to
								get different documents attested by different experts. Goodway
								Attestation has experts knowledgeable about different
								authorities, thus you are assured of document attestation that
								would be approved by important governmental authorities. Contact
								Goodway for elaborate document attestation services in
								Bengaluru.
							</p>
							<p className={`t-a:l ${styles['edu']}`}>
								Authorities requiring you to submit your certificates are sure
								to approve them when you get your certificates – educational,
								marriage, migration, death certificate of your family member –
								attested by the Goodway experts. Get in touch with Goodway for
								comprehensive certificate attestation services in Bengaluru.
							</p>
							<p className={`t-a:l ${styles['edu']}`}>
								Besides attestation, the experts at Goodway provide apostille
								services as regards countries such as Australia, Austria,
								France, Germany, Italy, Lithuania, Mexico, Oman, United Kingdom,
								United States of America, besides attestation of documents for
								embassies and high commissions of major countries across the
								world. Trust Goodway Attestation for international attestation
								and apostille services in Bengaluru.
							</p>
						</div>
					</div>

					<div className="row xs-mt-30 md-mt-24 box">
						<div className="col-xs-12">
							<h2 className="t-a:c">REQUEST A CALL BACK.</h2>
							<p className={`t-a:c ${styles['edu']}`}>
								Would you like to speak to one of our advisers over the phone?
								Just submit your details and we’ll be in touch shortly. You can
								also email us if you would prefer.
							</p>
							<Form>
								<div className="row xs-mt-12 md-mt-24">
									<div className="col-xs-12 col-sm-6">
										<input type="text" placeholder="Name" />
									</div>
									<div className="col-xs-12 col-sm-6 mobileSpecific">
										<input type="text" placeholder="Email" />
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12 col-sm-6">
										<input type="text" placeholder="Mobile number" />
									</div>
									<div className="col-xs-12 col-sm-6 mobileSpecific">
										<input type="text" placeholder="Subject" />
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
										<textarea placeholder="Your message" />
									</div>
								</div>
								<div className="row t-a:c">
									<div className="col-xs-12">
										<Button
											className="d:i-flex"
											color="dodgerblue"
											name="Call Me"
											size={1}
											url="https://www.goodwayattestation.com"
										/>
									</div>
								</div>
							</Form>
						</div>
					</div>

					<div className="row xs-pt-12 ">
						<div className="map col-xs-12">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5286927140614!2d77.56997611482231!3d13.001968790835967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d588d9caef%3A0x5ba382acaf05e1bd!2sGOODWAY+ATTESTATION%C2%AE!5e0!3m2!1sen!2sin!4v1546494171633"
								width="100%"
								height="480"
								frameBorder="0"
								style={{ border: 0 }}
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
