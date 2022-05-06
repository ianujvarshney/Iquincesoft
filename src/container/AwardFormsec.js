import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';

import award from '../images/award-img.png';
import award1 from '../images/award-img1.png';
import award2 from '../images/award-img2.png';
import award3 from '../images/award-img3.png';
import award4 from '../images/award-img4.png';
import award5 from '../images/award-img5.png';
import award6 from '../images/award-img6.png';
import award7 from '../images/award-img7.png';
import award8 from '../images/award-img8.png';
import Client1 from '../images/Client1.png'

import talk from '../images/talk.png';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EuquireSec from './EuquireSec';

import popupImg from '../images/popup-img.png';
import arrow6 from '../images/arrow6.png';
import arrow2 from '../images/arrow2.png';
import arrow_white from '../images/arrow-white.png';
import FormPopup from './FormPopup';
import { FaRegCalendar, FaLockOpen, FaRegUserCircle, FaRegEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

class AwardFormsec extends Component {
    render() {
        return (
            <div className="award-form-sec">
                <div className="container">
                    <div className="row" hidden>
                        <div className="col-lg-12 col-md-12">
                            {/* <ul>
                                <li><img src={Client1} /></li>
                                <li><img src={award1} /></li>
                                <li><img src={award2} /></li>
                                <li><img src={award3} /></li>
                                <li><img src={award4} /></li>
                                <li><img src={award5} /></li>
                                <li><img src={award6} /></li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="row award-form-sec2">
                        <div className="col-lg-12">
                            <div className="form-sec">
                                <img src={talk} />
                                <p><span>We’re actual humans here on the other side 👋</span></p>
                                <h1>Schedule a 15 minutes call to discuss your requirement</h1>

                                <Popup className="popup-sec" trigger={<button type="button">Schedule an Appointment</button>}
                                    modal lockScroll={true} >
                                    {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>&times; </button>
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <img src={popupImg} />
                                                        <div className="popup-box">
                                                            <h4>Schedule a 15 minute Free Consultation</h4>
                                                            <p>If we can help you in any way, please don’t hesitate to set a time to meet or talk, or leave your details and we will get back to you.</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <form>
                                                            <h3>Start Here <img src={arrow_white} /></h3>
                                                            <div className="in-box"><FaRegUserCircle /> <input className="box" type="text" name="" placeholder="Name" /></div>
                                                            <div className="in-box"><FaRegEnvelope /> <input className="box" type="text" name="" placeholder="Work e-Mail*" /></div>
                                                            <div className="in-box"><FaPhoneAlt /> <input className="box" type="text" name="" placeholder="Phone Number" /></div>
                                                            <a href="#"><FaPaperPlane /></a>
                                                            <ul>
                                                                <li><FaRegCalendar /> <p>Pick a date & time of your choice</p></li>
                                                                <li><FaLockOpen /> <p>No obligation.Cancel any time.</p></li>
                                                            </ul>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Popup>

                                <p className="para-link"><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} ><span>Or, Use this form to share your requirements.
                                    Get guaranteed response within 8 Hrs.</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}
export default AwardFormsec;