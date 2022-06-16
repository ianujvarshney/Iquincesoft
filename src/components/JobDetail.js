
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { HashLink as Link } from 'react-router-hash-link';
import { Joboffers } from '../json/JobOffers';
import jobImg from '../images/job-img.png';
import jobImg1 from '../images/job-img1.png';
import jobImg2 from '../images/job-img2.png';
import jobImg3 from '../images/job-img3.png';
import jobImg4 from '../images/job-img4.png';
import jobImg5 from '../images/job-img5.png';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class JobDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			InsightsJson: [],
			page: 1,
			url: this.props.match.params.post

		}
	}
	componentDidMount() {
		Joboffers.getJoboffersDetails2(this.state.url).then((Insights, err) => {
			if (!err) {
				this.setState({
					InsightsJson: Insights,
					Loading: false,
				});
			}
		});
	}
	render() {
		const { InsightsJson } = this.state;
		return (
			<>
				<Header headerClass={'job-head'} />

				<div className="job-detail">
					<div className="container">
						<div className="row">
							<div className="col-lg-1"></div>
							<div className="col-lg-5 col-md-6"><img alt="img" width="100%" src={jobImg} /></div>
							<div className="col-lg-2"></div>
							<div className="col-lg-4 col-md-6">
								{InsightsJson && InsightsJson.map(link => {
									return (
										<div className="job-dt-box">
											<h4>{link.name}</h4>
											<p dangerouslySetInnerHTML={{ __html: link.content }}></p>
											<h6><span>{link.Job_Access}</span>
												<Popup className="job-popup" trigger={<button type="button">Apply for this job</button>}
													modal lockScroll={true}  >
													{close => (
														<div className="modal">
															<button className="close" onClick={close}>&times; </button>
															<div className="content">
																<h3>You are applying for {link.name}</h3>
																<form>
																	<h4>Required:</h4>
																	<div className="row">
																		<div className="col-lg-6 col-md-6"><input class="box-2" type="text" name="" placeholder="First Name" /></div>
																		<div className="col-lg-6 col-md-6"><input class="box-2" type="text" name="" placeholder="Last Name" /></div>
																	</div>
																	<input class="box-2" type="text" name="" placeholder="Email" />

																	<p>
																		{/* <input type="checkbox" value="" /> */}

																		{/* <span>I was informed by the data administrator: The Software House sp. Z oo with its seat in Gliwice (44-100) at ul. Dolnych Wałów 8 (contact: praca@tsh.io ) that:
																			<ul>
																				<li>1. Providing personal data in the CV is voluntary, but necessary to carry out the recruitment process. The consequence of not providing personal data will be the inability to conduct the recruitment procedure. Personal data will be processed on the basis of art. 6 paragraph 1 point a and c of the General Regulation on the Protection of Personal Data of April 27, 2016 (GDPR).</li>
																				<li>2. I have the right to access my personal data and the right to rectify, delete, limit processing, the right to transfer data, the right to object, the right to withdraw consent to their processing at any time without affecting the lawfulness of the processing that has been carried out. on the basis of consent before its withdrawal. In order to exercise the above-mentioned rights, an e-mail with the selected request should be sent to the following address: praca@tsh.io.</li>
																				<li>3. I have the right to lodge a complaint with GIODO when I find that the processing of my personal data violates the provisions of the Personal Data Protection Act or the General Data Protection Regulation of 27 April 2016 (GDPR).</li>
																				<li>4. By sending my CV to praca@tsh.io my personal data will be entrusted for processing to the Google group (Google LLC, Google Ireland Limited, Google Commerce Limited, Google Asia Pacific Pte. Ltd, Google Australia Pty Ltd).</li>
																				<li>5. Personal data will be stored until the end of recruitment procedures, but not longer than for 10 years from the date of sending the CV.</li>
																				<li>6. My personal data will not be processed automatically.</li>
																			</ul>
																		</span> */}
																	</p>
																	{/* <h4>Optional:</h4> */}
																	<input class="box-2" type="text" name="" placeholder="Telephone" />
																	<textarea class="box-2" rows="4" placeholder="Message"></textarea>
																	<input class="box-2" type="file" name="" placeholder="Attach your Resume" />
																	<p>
																		<input type="checkbox" value="" /> <span>I consent to iQuinceSoft to get my data processed in the form for the current and future recruitment processes.
																		</span>
																	</p>
																	<Link to="#">Send</Link>
																</form>
															</div>
														</div>
													)
													}
												</Popup>
											</h6>
											<h5><Link to={'#Requir'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Requirements</Link></h5>
											<h5><Link to={'#Benefits'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Benefits</Link></h5>
											<h5><Link to={'#process'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Recruitment processments</Link></h5>
										</div>
									)
								})}
							</div>
						</div>
					</div >
				</div >

				<div className="job-txt">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-12">
								<h3 id="Requir">We expect from you:</h3>
								{InsightsJson && InsightsJson.map(link => {
									return (
										<p dangerouslySetInnerHTML={{ __html: link.content1 }}></p>
									);
								})}
							</div>
						</div>


						<div className="row">
							<div className="col-lg-10 col-md-12">
								<h4>If you fail to make it through,  <span>don't lose hope and try again!!</span></h4>
							</div>
						</div>

						<div className="row">
							<div className="col-lg-8 col-md-12">
								<h3 >What is my benefit in Joining iQuinceSoft?</h3>
								<ul>
									<li>An organization with a difference, iQuinceSoft, is serving the needs, and demands of the european and american markets with satisfaction.  Joining us can be an learning opprotunity of oceans.</li>
									<li>We keep you as an integral part of the project related processes.</li>
									<li>We are a team of seasoned and skilled professionals who are well-versed with the markets and IT related processes. Thus, we enables an learning environment where you can scale up your capabilities.</li>
									<li>We use the technological advancements to stay up-to-date.</li>
									<li>Immense growth opportunities.</li>
									<li>We offer benefits you find nowhere else, which are confidential and included in your offer letters.</li>
									<li id="Benefits">We ensure you enjoy the high degrees of work-life balance.</li>
									<li>iQuinceSoft offer not just job offer but career opportunities that can help you grow and prosper with the organization</li>

								</ul>

								<h3 >Recruitment process</h3>
								<p>If you think you have it in you, test it with a piece of paper called CV and a process called INTER_VIEW</p>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>Initial interview</h5>
										<img alt="img" width="100%" src={jobImg1} />
										<p id="process" >We would love to know about your experience, expertise, and expectations towards iQuinceSoft. If your expertise can benefit us mutually, we will proceed further on the process of interview. If you have any doubts/queries, feel free to ask.</p>
									</div>
									<div className="col-lg-6 col-md-6"><img alt="img" width="100%" src={jobImg1} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>You are given a test assignment</h5>
										<img alt="img" width="100%" src={jobImg2} />
										<p>If we mutually agrees that we can work together, we proceed with a test assignment to learn your approach to solve the problems.</p>
									</div>
									<div className="col-lg-6 col-md-6" data-aos="fade-down"><img alt="img" width="100%" src={jobImg2} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>We invite you to an interview</h5>
										<img alt="img" width="100%" src={jobImg3} />
										<p>It's time to face each other. If we find you suitable, you are welcome at our headoffice for a face-to-face round of interview. apart from the HR team, the respective TLs/ Managers can interact with you with more technical conversation.</p>
									</div>
									<div className="col-lg-6 col-md-6"><img alt="img" width="100%" src={jobImg3} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>Welcome to iQuinceSOFT</h5>
										<img alt="img" width="100%" src={jobImg4} />
										<p>Once we find you suitable, We welcome you onboard.</p>
									</div>
									<div className="col-lg-6 col-md-6" data-aos="fade-down"><img alt="img" width="100%" src={jobImg4} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>What if you are not selected?</h5>
										<img alt="img" width="100%" src={jobImg5} />
										<p>No 'Goodbye and better luck next time' Jargons! We share our inputs and feedbacks to you in regards to the interviews you had with us with your prominent 'Areas of Improvement.' Work on these areas and come back again. We love to hire the ambitious people who value feedbacks and can bounce back to the board.</p>
									</div>
									<div className="col-lg-6 col-md-6"><img alt="img" width="100%" src={jobImg5} /></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</>
		);
	}
}

export default JobDetail;
