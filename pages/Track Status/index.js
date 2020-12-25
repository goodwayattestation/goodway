import React, { useEffect, useState } from 'react';
import NavigationBar from '../../components/organisms/Navigation Bar/navigation-bar.js';
import './index.css';
import Button from '../../components/atoms/Button/button.js';
import Loader from '../../components/atoms/Loader/loader.js';
import axios from 'axios';

function TrackStatus(props) {
    let [trackingID, setTrackingID] = useState('');
    let [gotResponse, setGotResponse] = useState(false);
    let [requesting, setRequesting] = useState(false);

    useEffect(() => {
        document.title = 'Goodway - Track Status';
    });

    return (
        <div className="App">
            <NavigationBar showTrackStatusBtn={false} />
            <section className="routes-track-status">
                <div className="container-fluid">
                    <Loader show={requesting} message={'loading data...'} />
                    <div className="row">
                        <div className="col-xs-12">
                            <h2 className="md-mt-24 xs-mt-12">Track your application status</h2>
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
                                    className="routes-track-status_input"
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
                                        .get('https://gwb.srishamanth.com/track?code=' + trackingID)
                                        .then((resp) => {
                                            document.getElementById('trackID').innerText = resp.data.TrackID;
                                            document.getElementById('customerName').innerText = resp.data.CustomerName;
                                            document.getElementById('availableDate').innerText = resp.data.Dates;
                                            document.getElementById('documentType').innerText = resp.data.Document;
                                            document.getElementById('submittedBy').innerText = resp.data.SubmittedBy;
                                            document.getElementById('message').innerText = resp.data.Message;
                                            setTrackingID('');
                                            setGotResponse(true);
                                            setRequesting(false);
                                        })
                                        .catch((err) => {
                                            setRequesting(false);
                                            alert('Invalid tracking ID enetered. Please try again with a new one.');
                                            setGotResponse(false);
                                        });
                                }}
                            />
                        </div>
                    </div>

                    <div className={`row ${gotResponse ? '' : 'none'}`}>
                        <div className="col-xs-12 md-mt-30 xs-mt-12">
                            <table className="trackingResponseTable">
                                <tr>
                                    <td className="header">Tracking ID</td>
                                    <td id="trackID"></td>
                                </tr>
                                <tr>
                                    <td className="header">Customer name</td>
                                    <td id="customerName"></td>
                                </tr>
                                <tr>
                                    <td className="header">Available date</td>
                                    <td id="availableDate"></td>
                                </tr>
                                <tr>
                                    <td className="header">Document type</td>
                                    <td id="documentType"></td>
                                </tr>
                                <tr>
                                    <td className="header">Submitted by</td>
                                    <td id="submittedBy"></td>
                                </tr>
                                <tr>
                                    <td className="header">Message</td>
                                    <td id="message"></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TrackStatus;
