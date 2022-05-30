
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
							<div className="col-lg-5 col-md-6"><img width="100%" src={jobImg} /></div>
							<div className="col-lg-2"></div>
							<div className="col-lg-4 col-md-6">
								{InsightsJson && InsightsJson.map(link => {
									return (
										<div className="job-dt-box">
											<h4>{link.name}</h4>
											<p dangerouslySetInnerHTML={{ __html: link.content }}></p>
											<h6><span>{link.Job_Access}</span>
												<Popup className="job-popup" trigger={<button type="button">Schedule an Appointment</button>}
													modal lockScroll={true} >
													{close => (
														<div className="modal">
															<button className="close" onClick={close}>&times; </button>
															<div className="content">
																<h3>You are applying for a Senior DevOps Engineer</h3>
																<form>
																	<h4>Required:</h4>
																	<div className="row">
																		<div className="col-lg-6 col-md-6"><input class="box-2" type="text" name="" placeholder="First Name" /></div>
																		<div className="col-lg-6 col-md-6"><input class="box-2" type="text" name="" placeholder="Last Name" /></div>
																	</div>
																	<input class="box-2" type="text" name="" placeholder="Email" />
																	<input class="box-2" type="file" name="" placeholder="Choose file" />
																	<p><input type="checkbox" value="" /> <span>I agree to the processing of my personal data contained in this document by The Software House sp. Z oo with its seat in Gliwice for the purposes of current and future recruitment processes (including for other positions).</span></p>
																	<p><input type="checkbox" value="" />

																		<span>I was informed by the data administrator: The Software House sp. Z oo with its seat in Gliwice (44-100) at ul. Dolnych Wałów 8 (contact: praca@tsh.io ) that:
																			<ul>
																				<li>1. Providing personal data in the CV is voluntary, but necessary to carry out the recruitment process. The consequence of not providing personal data will be the inability to conduct the recruitment procedure. Personal data will be processed on the basis of art. 6 paragraph 1 point a and c of the General Regulation on the Protection of Personal Data of April 27, 2016 (GDPR).</li>
																				<li>2. I have the right to access my personal data and the right to rectify, delete, limit processing, the right to transfer data, the right to object, the right to withdraw consent to their processing at any time without affecting the lawfulness of the processing that has been carried out. on the basis of consent before its withdrawal. In order to exercise the above-mentioned rights, an e-mail with the selected request should be sent to the following address: praca@tsh.io.</li>
																				<li>3. I have the right to lodge a complaint with GIODO when I find that the processing of my personal data violates the provisions of the Personal Data Protection Act or the General Data Protection Regulation of 27 April 2016 (GDPR).</li>
																				<li>4. By sending my CV to praca@tsh.io my personal data will be entrusted for processing to the Google group (Google LLC, Google Ireland Limited, Google Commerce Limited, Google Asia Pacific Pte. Ltd, Google Australia Pty Ltd).</li>
																				<li>5. Personal data will be stored until the end of recruitment procedures, but not longer than for 10 years from the date of sending the CV.</li>
																				<li>6. My personal data will not be processed automatically.</li>
																			</ul>
																		</span></p>
																	<h4>Optional:</h4>
																	<input class="box-2" type="text" name="" placeholder="Telephone" />
																	<textarea class="box-2" rows="4" placeholder="Message"></textarea>
																	<a href="#">Send</a>
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
								<h3>We expect from you :</h3>
								{InsightsJson && InsightsJson.map(link => {
									return (
										<p id="Requir" dangerouslySetInnerHTML={{ __html: link.content1 }}></p>
									);
								})}
							</div>
						</div>


						<div className="row">
							<div className="col-lg-10 col-md-12">
								<h4>You don't meet <span>all the requirements?</span> Try it anyway!</h4>
							</div>
						</div>

						<div className="row">
							<div className="col-lg-8 col-md-12">
								<h3 id="Benefits">It is worth joining us because:</h3>
								<ul >
									<li>you will be part of a stable and organized organization, with the atmosphere of a small company, so if you value an intimate atmosphere, but want to work in a place with a reputation and know-how, this offer is for you</li>
									<li>we offer participation in projects related to Cloud Native, Serverless</li>
									<li>we give you the opportunity to work with very good DevOps and programmers from whom you can learn a lot and share your knowledge with them</li>
									<li>we use proven technologies that are up-to-date - even if you have not used all of them, you can make up for it with us!</li>
									<li>we focus on development by organizing training both on our own and using the services of leading training companies (we cooperate with Bottega IT Minds, among others)</li>
									<li>we choose interesting projects that we create from scratch and we select tools for them, and our clients are mostly people who understand technology</li>
									<li>Your satisfaction and job satisfaction are the most important to us and we can take care of them</li>
									<li>we know the value of a good atmosphere and a well-coordinated team at work, so we do not forget about integration, both live and on Slack</li>
									<li>we give the opportunity to co-create a <a href="#">Linkletter</a> - our original newsletter for passionate programmers</li>
									<li>we actively run a <a href="#">corporate blog</a> where our employees can publish their own articles on technology and business</li>
								</ul>

								<h3 id="process">Recruitment process</h3>
								<p>You send us your CV and what next?</p>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>We arrange an initial interview</h5>
										<img width="100%" src={jobImg1} />
										<p>Our recruiters will be happy to talk about your professional experience and expectations towards The Software House. If you have doubts or questions - go ahead, this conversation is exactly for that.</p>
									</div>
									<div className="col-lg-6 col-md-6"><img width="100%" src={jobImg1} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>You are given a test assignment</h5>
										<img width="100%" src={jobImg2} />
										<p>If we like each other after the conversation, you'll get a job from us, because we just want to see how you approach solving problems. You will set the deadline individually with the recruiters.</p>
									</div>
									<div className="col-lg-6 col-md-6" data-aos="fade-down"><img width="100%" src={jobImg2} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>We invite you to an interview</h5>
										<img width="100%" src={jobImg3} />
										<p>End of blind date, fire up the camera because it's time to see yourself virtually. Of course, everything is safe on Google Meets. In addition to people from the HR department, you will meet your future superiors or team leaders who will redirect the conversation to more technical tracks.</p>
									</div>
									<div className="col-lg-6 col-md-6"><img width="100%" src={jobImg3} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>Welcome to iQuinceSOFT</h5>
										<img width="100%" src={jobImg4} />
										<p>Response 200: success! You will get the answer along with the financial proposal after a few days.</p>
									</div>
									<div className="col-lg-6 col-md-6" data-aos="fade-down"><img width="100%" src={jobImg4} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>Failed to?</h5>
										<img width="100%" src={jobImg5} />
										<p>Regardless of the result of the recruitment, you will receive extensive feedback from us, which could still be a bit of work. Don't worry - we don't say "no" forever because we value ambitious people a lot. We have quite a few people on board that we've hired for the second pass, so never get discouraged and try again later.</p>
									</div>
									<div className="col-lg-6 col-md-6"><img width="100%" src={jobImg5} /></div>
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