
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import popupImg from '../images/popup-img.png';
import arrow6 from '../images/arrow6.png';
import arrow2 from '../images/arrow2.png';
import arrow_white from '../images/arrow-white.png';

import { FaRegCalendar, FaLockOpen, FaRegUserCircle, FaRegEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

class FormPopup extends Component {
	render() {
		return (
			<>
				<Popup className="popup-sec" trigger={<button className="book-btn" type="button">i'm Interested <img src={arrow_white} /></button>}
					modal lockScroll={true} >
					{close => (
						<div className="modal">
							<button className="close" onClick={close}>&times;</button>
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
												<li><FaLockOpen /> <p>No obligation. Cancel any time.</p></li>
											</ul>
										</form>
									</div>
								</div>
							</div>
						</div>
					)}
				</Popup>
			</>
		);
	}
}

export default FormPopup;