
import React, { Component } from 'react';

import { Euquire } from '../json/euquire';

import formImg from '../images/form-img.png';
import { FaRegUserCircle, FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaEnvelopeOpenText } from 'react-icons/fa';

class EuquireSec extends Component {

	constructor(props) {
		super(props)
		this.state = {
			euquireJson: []
		}
	}

	componentDidMount() {
		Euquire.getEuquire().then((euquire, err) => {
			if (!err) {
				this.setState({
					euquireJson: euquire,
				});
			}
		});
	}

	render() {
		const { euquireJson } = this.state;
		return (
			<>
				<div className="euquire-sec" id="EuquireSec">
					<div className="container">
						<div className="row" data-aos="fade-zoom-in">
							<div className="col-lg-1"></div>
							<div className="col-lg-5 col-md-6">
								<div className="form-box">
									{euquireJson.length && euquireJson.map(euquireJsons => {
										return (
											<div key={euquireJsons.id}>
												<h3>{euquireJsons.name}</h3>
												<p dangerouslySetInnerHTML={{ __html: euquireJsons.content }}></p>
											</div>
										);
									})}
									<ul>
										<li><img src={formImg} /> Adam</li>
										<li><img src={formImg} /> Boyle</li>
										<li><img src={formImg} /> Clyde</li>
										<li><img src={formImg} /> Donny</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-5 col-md-6">
								<form>
									<div className="in-box"><FaRegUserCircle /> <input className="box" type="text" name="" placeholder="Name" /></div>
									<div className="in-box"><FaRegEnvelope /> <input className="box" type="text" name="" placeholder="Work e-Mail*" /></div>
									<div className="in-box"><FaPhoneAlt /> <input className="box" type="text" name="" placeholder="Phone Number" /></div>
									<div className="in-box"><FaMapMarkerAlt /> <input className="box" type="text" name="" placeholder="Company" /></div>
									<div className="in-box"><FaEnvelopeOpenText /> <textarea className="box" rows="3" placeholder="Message / Response*"></textarea></div>
									<input id="file-upload" name="" type="file" />
									<a href="#">Enquire Now</a>
								</form>
							</div>
						</div>
					</div>
				</div >
			</>
		);
	}
}

export default EuquireSec;