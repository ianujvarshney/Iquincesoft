
import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Header from './Header';
import Footer from './Footer';
import FormPopup from '../container/FormPopup';
import WorkSec from '../container/WorkSec';
import EasySec from '../container/EasySec';
import WebSec from '../container/WebSec';
import ReviewSec from '../container/ReviewSec';
import EuquireSec from '../container/EuquireSec';
import AwardSec from '../container/AwardSec';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import { serviceapi } from '../json/serviceapi';
import 'react-accessible-accordion/dist/fancy-example.css';
import FAQ from '../container/FAQ';
import talk from '../../src/images/talk.png'
import php from '../../src/images/php.svg'
import vue from '../../src/images/vue.svg'
import Angular from '../../src/images/Angular.svg'
import Laravel from '../../src/images/Laravel.svg'
import Wordpress from '../../src/images/Wordpress.svg'
import node from '../../src/images/node.svg';
import Android from '../../src/images/Android.svg';
import Magento from '../../src/images/Magento.svg';
import reactnative from '../../src/images/reactnative.svg';
import { FaCode } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import service_img from '../images/service-img.png';
import popupImg from '../images/popup-img.png';
import arrow_white from '../images/arrow-white.png';
import { FaRegCalendar, FaLockOpen, FaRegUserCircle, FaRegEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

class Service extends Component {
	constructor(props) {
		super(props)
		this.state = {
			servicesJson: [],
			appjson: [],
			Questionjson: [],
			InsightsJson: [],
			Loading: true,
		}
	}

	componentDidMount() {
		serviceapi.getService().then((services, err) => {
			if (!err) {
				this.setState({
					servicesJson: services,
					Loading: false,

				});
			}
		});
		serviceapi.getApp().then((app, err) => {
			if (!err) {
				this.setState({
					appJson: app,
					Loading: false,

				});
			}
		});
		serviceapi.getQuestion().then((Question, err) => {
			if (!err) {
				this.setState({
					QuestionJson: Question,
					Loading: false,

				});
			}
		});
		serviceapi.getInsights().then((Insights, err) => {
			if (!err) {
				this.setState({
					InsightsJson: Insights,
					Loading: false,

				});
			}
		});
	}
	render() {
		const { servicesJson, appJson, QuestionJson, InsightsJson } = this.state;
		const servSlide = {
			items: 1,
			responsive: {
				320: { items: 1, }
			},
			loop: true
		};

		const stackSlide = {
			items: 3,
			responsive: {
				1200: { items: 3, },
				768: { items: 3 },
				480: { items: 2 },
				320: { items: 1, }
			},
			loop: true
		};

		const culture = {
			items: 1,
			responsive: {
				480: { items: 2 },
				320: { items: 1, }
			},
			loop: true
		};

		return (
			this.state.Loading ? <div className="spinner"><TailSpin color="#00ccff" height={80} width={80} /></div> :
				<>
					<Header headerClass={'serv-head'} />
					<div className="service-banner service-banner-2">
						<div className="container">
							<div className="row">
								<div className="col-lg-7 col-md-12" data-aos="fade-up">
									{servicesJson && servicesJson.map(servicesJsonS => {
										return (
											<>
												<h1><b>Hire Developers to meet your unmet needs</b><br /><br /><h5>{servicesJsonS.name}</h5></h1>
												<h2 style={{ margin: "30px 0 30px 0" }}>iQuinceSoft Advantage offer you to: </h2>
												<ul dangerouslySetInnerHTML={{ __html: servicesJsonS.content }} >
												</ul>
											</>
										);
									})}
								</div>
								<div className="col-lg-5 col-md-12">
									<div className="award-form-sec2 award-form-sec">
										<div className="container">
											<div className="row award-form-sec2">
												<div className="col-lg-12">
													<div className="form-sec">
														<img src={talk} />
														<p><span>We’re actual humans here on the other side 👋</span></p>
														<h1>Schedule a 15 minutes call to discuss your requirement</h1>
														<Popup className="popup-sec" trigger={<button style={{ backgroundColor: 'red', color: 'white' }} type="button">Schedule an Appointment</button>}
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
														<p className="para-link"><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}><span>Or, Use this form to share your requirements.
															Get guaranteed response within 8 Hrs.</span></Link></p>
													</div>
												</div>
											</div>
										</div>
									</div >
								</div>
							</div>
						</div>
					</div>

					<div className="serv-sec">
						<div className="container">
							<div className="row" data-aos="fade-down">
								<div className="col-lg-4 col-md-6">
									<h3>Web Development</h3>
									<p>Remote Web Developers can scale your business swiftly. We offer you the facility to hire a remote web developer for 40 hours/week at a fixed rate.</p>
									<em><Link to="/Web_Development">Schedule an Appointment</Link></em>
									<em><a href="/caseStudies">Read Case Study</a></em>

									{appJson && (
										<OwlCarousel options={servSlide}>
											{appJson.map((appJsonS, index) => {
												return (
													(index == 0) ? null :
														<div className="serv-txt">
															<h4><span><FaCode /><Link to={`/${appJsonS.slug}`}>{appJsonS.name}</Link></span></h4>
															<p dangerouslySetInnerHTML={{ __html: appJsonS.content }}></p>
															<h4><Link to={`/${appJsonS.slug}`} >Read more</Link></h4>
														</div>
												);
											})}
										</OwlCarousel>
									)}
								</div>

								{appJson && appJson.map((appJsonS, index) => {
									return (
										<div className="col-lg-4 col-md-6">
											<div className="serv-txt">
												<h4><span><FaCode /><Link to={`/${appJsonS.slug}`} >{appJsonS.name}</Link></span></h4>
												<p dangerouslySetInnerHTML={{ __html: appJsonS.content }}></p>
												<h4><Link to={`/${appJsonS.slug}`} >Read more</Link></h4>
											</div>
										</div>
									);
								})}
								<div className="col-lg-8 col-md-12">
									<div className="serv-txt">
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<h4><span><FaCode /><Link to='#'>Integrations and Extensions</Link></span></h4>
												<p>We have integrated several platforms and can serve you with the same. Explore the best-in-class CRM platform services with us.</p>
												<h4><Link to={"#"} >Read more</Link></h4>
											</div>
											<div className="col-lg-6 col-md-6"><img src={service_img} /></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<FormPopup />
						<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
					</div >

					<div className="stack-sec" data-aos="fade-right">
						<h3>Our Favourite Stacks</h3>
						<div className="container">
							<div className="row">
								<div className="col-lg-1"></div>
								<div className="col-lg-10 col-md-12">
									<OwlCarousel options={stackSlide}>
										<div>
											<Link to={"/HireLaravelDevelopers"}><div className="team-box">Laravel <img src={Laravel} /></div></Link>
											<Link to={"/HireVueDevelopers"}><div className="team-box">VueJS <img src={vue} /></div></Link>
											<Link to={"/HireAngularDevelopers"}><div className="team-box">Angular <img src={Angular} /></div></Link>
										</div>

										<div>
											<Link to={"/HirePHPDevelopers"}><div className="team-box">PHP <img src={php} /></div></Link>
											<Link to={"/HireWordpressDevelopers"}><div className="team-box">WordPress <img src={Wordpress} /></div></Link>
											<Link to={"/HireNodeDevelopers"}><div className="team-box">NodeJS <img src={node} /></div></Link>
										</div>

										<div>
											<Link to={"/HireAndroidDevelopers"}><div className="team-box">Android <img src={Android} /></div></Link>
											<Link to={"/HireMagentoDevelopers"}><div className="team-box">Magento <img src={Magento} /></div></Link>
											<Link to={"/HireReactNativeDevelopers"}><div className="team-box">ReactNative <img src={reactnative} /></div></Link>
										</div>
									</OwlCarousel>
								</div>
							</div>
						</div>
						<FormPopup />
						<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
					</div>

					<EasySec />

					<WebSec />

					<WorkSec />

					<FAQ />

					<div className="culture-sec insight-sec">
						<h3>Featured Insights</h3>
						<div className="container">
							<div className="row">
								<div className="col-lg-12 col-md-12">
									{InsightsJson.length && (
										<OwlCarousel options={culture}>
											{InsightsJson.map(InsightsJsonS => {
												return (
													<div className="cult-box">
														<div class="tech-dot"></div>
														<h4>{InsightsJson.name}</h4>
														<p dangerouslySetInnerHTML={{ __html: InsightsJsonS.content.substr(0, 100) }}></p>
														<Link to={`/PostPage/${InsightsJsonS.slug}`} >READ MORE </Link>
													</div>
												);
											})}
										</OwlCarousel>
									)}
									<div className="row">
										{InsightsJson && InsightsJson.map((InsightsJsonS, index) => {
											return (
												<div className="col-lg-4 col-md-4">
													<div className="insight-box" key={InsightsJsonS.id}>
														<h4>{InsightsJsonS.name}</h4>
														<p dangerouslySetInnerHTML={{ __html: InsightsJsonS.content.substr(0, 100) }}></p>
														<Link to={`/PostPage/${InsightsJsonS.slug}`} >READ MORE </Link>
													</div>
												</div>

											);
										})}
									</div>
								</div>
							</div>
						</div>

						<FormPopup />
						<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
					</div>

					<ReviewSec />

					<EuquireSec />

					<AwardSec />

					<Footer />
				</>
		);
	}
}

export default Service;

