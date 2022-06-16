
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { HashLink as Link } from 'react-router-hash-link';
import popupImg from '../images/popup-img.png';
import arrow_white from '../images/arrow-white.png';
import axios from 'axios';
import { FaRegCalendar, FaLockOpen, FaRegUserCircle, FaRegEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

class FormPopup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			email: "",
			number: ""
		}
	}
	submitForm = e => {

		if (this.state.name === '' || this.state.email === '' || this.state.number === '') {
			alert("some field are missing filled it");
		}
		else {
			let formData = new FormData()

			formData.set("your-name", this.state.name)
			formData.set("your-email", this.state.email)
			formData.set("your-number", this.state.number)
			axios
				.post(
					'https://dev.iquincesoft.com/iqsandbox/wp-json/contact-form-7/v1/contact-forms/1674/feedback',
					formData,
					{
						headers: {
							"content-type": "multipart/form-data",
						},
					}
				)
				.then(res => {
					res.data.status === "mail_sent"
						? this.setState({
							name: "",
							email: "",
							number: "",

						})
						: this.setState({ errorMessage: res.data.message }, () => {
							setTimeout(() => {
								this.setState({ errorMessage: "" })
							}, 2000)
						})
				})
			alert("thank you for submission");
		}
	}

	render() {
		return (
			<>
				<Popup className="popup-sec" trigger={<button className="book-btn" type="button">i'm Interested <img alt="img" src={arrow_white} /></button>}
					modal lockScroll={true} >
					{close => (
						<div className="modal">
							<button className="close" onClick={close}>&times;</button>
							<div className="content">
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<img alt="img" src={popupImg} />
										<div className="popup-box">
											<h4>Schedule a 15 minute Free Consultation</h4>
											<p>If we can help you in any way, please don’t hesitate to set a time to meet or talk, or leave your details and we will get back to you.</p>
										</div>
									</div>

									<div className="col-lg-6 col-md-6">
										<form>
											<h3>Start Here <img alt="img" src={arrow_white} /></h3>
											<div className="in-box"><FaRegUserCircle /> <input onChange={e => this.setState({ name: e.target.value })} className="box" type="text" name="" placeholder="Name" /></div>
											<div className="in-box"><FaRegEnvelope /> <input onChange={(e) => this.setState({ email: e.target.value })} className="box" type="text" name="" placeholder="Work e-Mail*" /></div>
											<div className="in-box"><FaPhoneAlt /> <input onChange={(e) => this.setState({ number: e.target.value })} className="box" type="text" name="" placeholder="Phone Number" /></div>
											<Link to="#"><FaPaperPlane onClick={() => this.submitForm()} /></Link>
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