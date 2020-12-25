import React, { useState } from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import styles from './index.module.css';
import Button from '../../components/atoms/Button/button.js';
import Loader from '../../components/atoms/Loader/loader.js';
import Layout from '../../components/layout';
import axios from 'axios';

function TrackStatus(props) {
	let [trackingID, setTrackingID] = useState('');
	let [gotResponse, setGotResponse] = useState(false);
	let [requesting, setRequesting] = useState(false);

	return (
		<Layout
			title="GoodWay Attestation - Track Status"
			description="Goodway Attestation & Apostille Service in Bangalore for Birth & Marriage Certificate, Education & Commercial Documents. For Quick Service Call:9148889666"
			keywords="Certificate Attestation Agency in Bangalore, attestation services near me, hrd attestation for nurses in bangalore, uae attestation services in bangalore, hrd attestation bangalore karnataka, apostille services in bangalore, Apostille Certification Services in Bangalore, Apostille Attestation in Bangalore, apostille attestation fee bangalore"
			canonical="https://www.goodwayattestation.com/track-status"
			pageHeader="Attestation & Apostille Service in Bangalore"
		>
			<div className="t-a:c">
				<NavigationBar showTrackStatusBtn={false} />
				<section className={styles['routes-track-status']}>
					<div className="container-fluid">
						<Loader show={requesting} message={'loading data...'} />
						<div className="row">
							<div className="col-xs-12">
								<h2 className="md-mt-24 xs-mt-12">
									Track your application status
								</h2>
							</div>
							<div className="col-xs-12">
								<p className="md-mt-18 xs-mt-12 f-w:500">
									You will be able to track your order by using the form below.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12">
								<div className="md-mt-30 xs-mt-12">
									<input
										value={trackingID}
										onInput={(e) => {
											setTrackingID(e.currentTarget.value);
										}}
										className={styles['routes-track-status_input']}
										type="text"
										placeholder="Track id"
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12 md-mt-30 xs-mt-12">
								<Button
									className="d:i-flex"
									color="dodgerblue"
									name="Track"
									size={props.isMobile ? 0 : 1}
									disabled={!trackingID}
									handleClick={(e) => {
										e.preventDefault();
										setRequesting(true);
										axios
											.get(
												'https://gwb.srishamanth.com/track?code=' + trackingID
											)
											.then((resp) => {
												document.getElementById('trackID').innerText =
													resp.data.TrackID;
												document.getElementById('customerName').innerText =
													resp.data.CustomerName;
												document.getElementById('availableDate').innerText =
													resp.data.Dates;
												document.getElementById('documentType').innerText =
													resp.data.Document;
												document.getElementById('submittedBy').innerText =
													resp.data.SubmittedBy;
												document.getElementById('message').innerText =
													resp.data.Message;
												setTrackingID('');
												setGotResponse(true);
												setRequesting(false);
											})
											.catch((err) => {
												setRequesting(false);
												alert(
													'Invalid tracking ID enetered. Please try again with a new one.'
												);
												setGotResponse(false);
											});
									}}
								/>
							</div>
						</div>

						<div className={`row ${gotResponse ? '' : 'none'}`}>
							<div className="col-xs-12 md-mt-30 xs-mt-12">
								<table className={styles['trackingResponseTable']}>
									<tr>
										<td className={styles['header']}>Tracking ID</td>
										<td id="trackID"></td>
									</tr>
									<tr>
										<td className={styles['header']}>Customer name</td>
										<td id="customerName"></td>
									</tr>
									<tr>
										<td className={styles['header']}>Available date</td>
										<td id="availableDate"></td>
									</tr>
									<tr>
										<td className={styles['header']}>Document type</td>
										<td id="documentType"></td>
									</tr>
									<tr>
										<td className={styles['header']}>Submitted by</td>
										<td id="submittedBy"></td>
									</tr>
									<tr>
										<td className={styles['header']}>Message</td>
										<td id="message"></td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}

export default TrackStatus;
