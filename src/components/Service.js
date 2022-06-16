
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
import axios from 'axios';
import service_img from '../images/service-img.svg';
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
			name: "",
			email: "",
			number: ""
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

	submitForm = e => {


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
	}

	render() {
		const { servicesJson, appJson, InsightsJson } = this.state;
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
									<p>Our Services</p>
									{servicesJson && servicesJson.map(servicesJsonS => {
										return (
											<>
												<h1><b></b><br /><br /><h5>{servicesJsonS.name}</h5></h1>
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
														<img alt="img" src={talk} />
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

					<div className="serv-sec serv-sec-1">
						<div className="container">
							<div className="row" data-aos="fade-down">
								<div className="col-lg-4 col-md-6">
									<h3>Our Frontend</h3>
									<p>Regardless of how complex or even small your needs are, our dedicated in-house team of web developers and project managers will ensure that the job gets done with the highest level of professionalism and most cost affordably.</p>
									<em><Link to="/serviceDescription">Schedule an Appointment</Link></em>
									<em><a href="#">Read Case Study</a></em>
									<OwlCarousel options={servSlide}>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireReactDevelopers">React.js</Link></span></h4>
											<p>Hire dedicated React.JS developers can save your time, cost, and efforts with seamless fitting in the development team to work on the projects.
											</p>
											<h4><Link to="/HireReactDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireVueDevelopers" >Vue.js</Link></span></h4>
											<p> Hire the pre-vetted, skilled, and seasoned Vue JS developers to scale and augment your team's performance. </p>
											<h4><Link to="/HireVueDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireAngularDevelopers" >Angular</Link></span></h4>
											<p> We can help you take your project outcomes to the next level with the help of our skilled and seasoned angular developers – on an hourly, project, or full-time basis. </p>
											<h4><Link to="/HireAngularDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireMERNStackDevelopers" >MERN Stack</Link></span></h4>
											<p> we help you deliver results with the help of our expert developers of php, Laravel, node.js, Express.js, </p>
											<h4><Link to="/HireMERNStackDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireZendStackDevelopers" >ZEND Stack</Link></span></h4>
											<p> Hire the ZEND developers from the house of iQuinceSoft. We offer you project mapping on-demand skills to meet your development needs, wants, and demands.
											</p>
											<h4><Link to="/HireZendStackDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireMeanstackDevelopers" >MEAN Stack</Link></span></h4>
											<p> We are a team of experts in MongoDB, Express JS, Angular, and Node JS that can serve your project needs with the optimal skillsets that match the project needs and offer you scalable, secure, and user-friendly web applications.
											</p>
											<h4><Link to="/HireMeanstackDevelopers" >Read more</Link></h4>
										</div>
									</OwlCarousel>
								</div>


								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireReactDevelopers">React.js</Link></span></h4>
										<p>Hire dedicated React.JS developers can save your time, cost, and efforts with seamless fitting in the development team to work on the projects.
										</p>
										<h4><Link to="/HireReactDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireVueDevelopers" >Vue.js</Link></span></h4>
										<p> Hire the pre-vetted, skilled, and seasoned Vue JS developers to scale and augment your team's performance. </p>
										<h4><Link to="/HireVueDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireAngularDevelopers" >Angular</Link></span></h4>
										<p> We can help you take your project outcomes to the next level with the help of our skilled and seasoned angular developers – on an hourly, project, or full-time basis. </p>
										<h4><Link to="/HireAngularDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireMERNStackDevelopers" >MERN Stack</Link></span></h4>
										<p> we help you deliver results with the help of our expert developers of php, Laravel, node.js, Express.js, </p>
										<h4><Link to="/HireMERNStackDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireZendStackDevelopers" >ZEND Stack</Link></span></h4>
										<p> Hire the ZEND developers from the house of iQuinceSoft. We offer you project mapping on-demand skills to meet your development needs, wants, and demands.
										</p>
										<h4><Link to="/HireZendStackDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireMeanstackDevelopers" >MEAN Stack</Link></span></h4>
										<p> We are a team of experts in MongoDB, Express JS, Angular, and Node JS that can serve your project needs with the optimal skillsets that match the project needs and offer you scalable, secure, and user-friendly web applications.
										</p>
										<h4><Link to="/HireMeanstackDevelopers" >Read more</Link></h4>
									</div>
								</div>
							</div>
						</div>
						<FormPopup />
						<h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5>
					</div>





					<div className="serv-sec serv-sec-2">
						<div className="container">
							<div className="row" data-aos="fade-down">
								<div className="col-lg-4 col-md-6">
									{/* <h2 className="serv-sec-h2">Backend</h2> */}
									<h3>Our Backend</h3>
									<p>Regardless of how complex or even small your needs are, our dedicated in-house team of web developers and project managers will ensure that the job gets done with the highest level of professionalism and most cost affordably.</p>
									<em><Link to="/serviceDescription">Schedule an Appointment</Link></em>
									<em><a href="#">Read Case Study</a></em>
									<OwlCarousel options={servSlide}>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireNodeDevelopers" >Node.js</Link></span></h4>
											<p> Leverage the skills and experience of our ready-to-hire Node JS developers. Build small web apps to sophisticated web systems that may suit your business and help you attain your business goals.  </p>
											<h4><Link to="/HireNodeDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HirePHPDevelopers" >PHP</Link></span></h4>
											<p> Hire the PHP developers that fit your project demands and scale your business to the next level. </p>
											<h4><Link to="/HirePHPDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireLaravelDevelopers" >Laravel</Link></span></h4>
											<p> Get the tangible outcomes with the help opf our skilled developers to ensure scalable and secure web apps and systems. </p>
											<h4><Link to="/HireLaravelDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireSymfonyDevelopers" >Symfony</Link></span></h4>
											<p> With the expertise of our vetted talent pool of developers, we ensure that you get the best from the top 1% of a country of more than 1 billion people. </p>
											<h4><Link to="/HireSymfonyDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireCodeIgniterDevelopers" >CodeIgniter</Link></span></h4>
											<p>Stop wasting time searching for average developers when you have the chance to hire someone who is skilled and maps according to the assigned projects.
											</p>
											<h4><Link to="/HireCodeIgniterDevelopers" >Read more</Link></h4>
										</div>
									</OwlCarousel>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireNodeDevelopers" >Node.js</Link></span></h4>
										<p> Leverage the skills and experience of our ready-to-hire Node JS developers. Build small web apps to sophisticated web systems that may suit your business and help you attain your business goals.  </p>
										<h4><Link to="/HireNodeDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HirePHPDevelopers" >PHP</Link></span></h4>
										<p> Hire the PHP developers that fit your project demands and scale your business to the next level. </p>
										<h4><Link to="/HirePHPDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireLaravelDevelopers" >Laravel</Link></span></h4>
										<p> Get the tangible outcomes with the help opf our skilled developers to ensure scalable and secure web apps and systems. </p>
										<h4><Link to="/HireLaravelDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireSymfonyDevelopers" >Symfony</Link></span></h4>
										<p> With the expertise of our vetted talent pool of developers, we ensure that you get the best from the top 1% of a country of more than 1 billion people. </p>
										<h4><Link to="/HireSymfonyDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireCodeIgniterDevelopers" >CodeIgniter</Link></span></h4>
										<p>Stop wasting time searching for average developers when you have the chance to hire someone who is skilled and maps according to the assigned projects.
										</p>
										<h4><Link to="/HireCodeIgniterDevelopers" >Read more</Link></h4>
									</div>
								</div>
							</div>
						</div>
						<FormPopup />
						<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
					</div>

					<div className="serv-sec serv-sec-1">
						<div className="container">
							<div className="row" data-aos="fade-down">
								<div className="col-lg-4 col-md-6">
									<h3>Our eCommerce</h3>
									<p>Regardless of how complex or even small your needs are, our dedicated in-house team of web developers and project managers will ensure that the job gets done with the highest level of professionalism and most cost affordably.</p>
									<em><Link to="/serviceDescription">Schedule an Appointment</Link></em>
									<em><a href="#">Read Case Study</a></em>
									<OwlCarousel options={servSlide}>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireMagentoDevelopers" >Magento</Link></span></h4>
											<p> Hire our dedicated offshore Magento developers who can deliver you a store website that complies with your day-to-day business practices. </p>
											<h4><Link to="/HireMagentoDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireWooCommerceDevelopers" >WooCommerce</Link></span></h4>
											<p>Hire dedicated WooCommerce developers with the trust of iQuinceSoft to develop, customize and maintain an eCommerce store that reveals your true spirits </p>
											<h4><Link to="/HireWooCommerceDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireShopifyDevelopers" >Shopify</Link></span></h4>
											<p> Hire dedicated Shopify experts that can deliver you the results you aim for. We help you reach more specific target audiences, achieve more sales, and generate more revenue. </p>
											<h4><Link to="/HireShopifyDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireopencartDevelopers" >OpenCart</Link></span></h4>
											<p> Our skilled and seasoned developers are available on an hourly, monthly, and full-time basis for project-specific needs.  </p>
											<h4><Link to="/HireopencartDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireWixDevelopers" >Wix</Link></span></h4>
											<p> Connect, Communicate and Curate the business goals by hiring dedicated offshore developers with the trust and expertise of iQuinceSoft. </p>
											<h4><Link to="/HireWixDevelopers" >Read more</Link></h4>
										</div>
									</OwlCarousel>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireMagentoDevelopers" >Magento</Link></span></h4>
										<p> Hire our dedicated offshore Magento developers who can deliver you a store website that complies with your day-to-day business practices. </p>
										<h4><Link to="/HireMagentoDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireWooCommerceDevelopers" >WooCommerce</Link></span></h4>
										<p>Hire dedicated WooCommerce developers with the trust of iQuinceSoft to develop, customize and maintain an eCommerce store that reveals your true spirits </p>
										<h4><Link to="/HireWooCommerceDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireShopifyDevelopers" >Shopify</Link></span></h4>
										<p> Hire dedicated Shopify experts that can deliver you the results you aim for. We help you reach more specific target audiences, achieve more sales, and generate more revenue. </p>
										<h4><Link to="/HireShopifyDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireopencartDevelopers" >OpenCart</Link></span></h4>
										<p> Our skilled and seasoned developers are available on an hourly, monthly, and full-time basis for project-specific needs.  </p>
										<h4><Link to="/HireopencartDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireWixDevelopers" >Wix</Link></span></h4>
										<p> Connect, Communicate and Curate the business goals by hiring dedicated offshore developers with the trust and expertise of iQuinceSoft. </p>
										<h4><Link to="/HireWixDevelopers" >Read more</Link></h4>
									</div>
								</div>
							</div>
						</div>
						<FormPopup />
						<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
					</div>

					<div className="serv-sec serv-sec-2">
						<div className="container">
							<div className="row" data-aos="fade-down">
								<div className="col-lg-4 col-md-6">
									<h3>Our CMS</h3>
									<p>Regardless of how complex or even small your needs are, our dedicated in-house team of web developers and project managers will ensure that the job gets done with the highest level of professionalism and most cost affordably.</p>
									<em><Link to="/serviceDescription">Schedule an Appointment</Link></em>
									<em><a href="#">Read Case Study</a></em>
									<OwlCarousel options={servSlide}>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireDrupalDevelopers" >Drupal</Link></span></h4>
											<p> Hire our Drupal developers and architects for all your Drupal projects with the flexibility to hire on a fixed cost, project, or hourly and monthly basis. </p>
											<h4><Link to="/HireDrupalDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireWordpressDevelopers" >Wordpress</Link></span></h4>
											<p> Customize, build and deploy new WordPress themes, Plugins, and flexible features that help you develop the ease and robust web app for sophisticated web systems.
											</p>
											<h4><Link to="/HireWordpressDevelopers" >Read more</Link></h4>
										</div>
									</OwlCarousel>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireDrupalDevelopers" >Drupal</Link></span></h4>
										<p> Hire our Drupal developers and architects for all your Drupal projects with the flexibility to hire on a fixed cost, project, or hourly and monthly basis. </p>
										<h4><Link to="/HireDrupalDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireWordpressDevelopers" >Wordpress</Link></span></h4>
										<p> Customize, build and deploy new WordPress themes, Plugins, and flexible features that help you develop the ease and robust web app for sophisticated web systems.
										</p>
										<h4><Link to="/HireWordpressDevelopers" >Read more</Link></h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="serv-sec serv-sec-1">
						<div className="container">
							<div className="row" data-aos="fade-down">
								<div className="col-lg-4 col-md-6">
									<h3>Our Mobile</h3>
									<p>Regardless of how complex or even small your needs are, our dedicated in-house team of web developers and project managers will ensure that the job gets done with the highest level of professionalism and most cost affordably.</p>
									<em><Link to="/serviceDescription">Schedule an Appointment</Link></em>
									<em><a href="#">Read Case Study</a></em>
									<OwlCarousel options={servSlide}>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireIosDevelopers" >Ios</Link></span></h4>
											<p> Hire dedicated offshore iOS experts from the house of trust, commitment, and time-bound delivery - iQuinceSoft. </p>
											<h4><Link to="/HireIosDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireReactNativeDevelopers" >ReactNative</Link></span></h4>
											<p> Hire our skilled React Native developers for Hybrid, Custom or Native apps with saving your time, cost, and efforts with seamless fitting in the development team to work on the projects. </p>
											<h4><Link to="/HireReactNativeDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireAndroidDevelopers" >Android</Link></span></h4>
											<p> Hire one or a team of developers from iQuinceSoft that can ensure you high-quality Android apps with features that fit in fine with your business goals. </p>
											<h4><Link to="/HireAndroidDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireionicDevelopers" >Ionic</Link></span></h4>
											<p> Make your presence felt across the platforms with scalable, engaging, and customized tailor-made apps that can meet your unmet needs. </p>
											<h4><Link to="/HireionicDevelopers" >Read more</Link></h4>
										</div>
									</OwlCarousel>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireIosDevelopers" >Ios</Link></span></h4>
										<p> Hire dedicated offshore iOS experts from the house of trust, commitment, and time-bound delivery - iQuinceSoft. </p>
										<h4><Link to="/HireIosDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireAndroidDevelopers" >Android</Link></span></h4>
										<p> Hire one or a team of developers from iQuinceSoft that can ensure you high-quality Android apps with features that fit in fine with your business goals. </p>
										<h4><Link to="/HireAndroidDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireReactNativeDevelopers" >ReactNative</Link></span></h4>
										<p> Hire our skilled React Native developers for Hybrid, Custom or Native apps with saving your time, cost, and efforts with seamless fitting in the development team to work on the projects. </p>
										<h4><Link to="/HireReactNativeDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireionicDevelopers" >Ionic</Link></span></h4>
										<p> Make your presence felt across the platforms with scalable, engaging, and customized tailor-made apps that can meet your unmet needs. </p>
										<h4><Link to="/HireionicDevelopers" >Read more</Link></h4>
									</div>
								</div>
							</div>
							<FormPopup />
							<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
						</div>
					</div>

					<div className="serv-sec ser-sec-2">
						<div className="container">
							<div className="row" data-aos="fade-down">
								<div className="col-lg-4 col-md-6">
									<h3>Our Digital Marketing</h3>
									<p>Regardless of how complex or even small your needs are, our dedicated in-house team of web developers and project managers will ensure that the job gets done with the highest level of professionalism and most cost affordably.</p>
									<em><Link to="/serviceDescription">Schedule an Appointment</Link></em>
									<em><a href="#">Read Case Study</a></em>
									<OwlCarousel options={servSlide}>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="#">React.js</Link></span></h4>
											<p> we help you deliver results with the help of our expert developers of php, Laravel, node.js, Express.js, </p>
											<h4><Link to="#" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="#" >Vue.js</Link></span></h4>
											<p> we help you deliver results with the help of our expert developers of php, Laravel, node.js, Express.js, </p>
											<h4><Link to="#" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="#" >Vue.js</Link></span></h4>
											<p> we help you deliver results with the help of our expert developers of php, Laravel, node.js, Express.js, </p>
											<h4><Link to="#" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="#" >Vue.js</Link></span></h4>
											<p> we help you deliver results with the help of our expert developers of php, Laravel, node.js, Express.js, </p>
											<h4><Link to="#" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="#" >Vue.js</Link></span></h4>
											<p> we help you deliver results with the help of our expert developers of php, Laravel, node.js, Express.js, </p>
											<h4><Link to="#" >Read more</Link></h4>
										</div>
									</OwlCarousel>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="#" >Node.js</Link></span></h4>
										<p> we help you deliver results with the help of our expert developers of php, Laravel, node.js, Express.js, </p>
										<h4><Link to="#" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="#" >Node.js</Link></span></h4>
										<p> we help you deliver results with the help of our expert developers of php, Laravel, node.js, Express.js, </p>
										<h4><Link to="#" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="#" >Node.js</Link></span></h4>
										<p> we help you deliver results with the help of our expert developers of php, Laravel, node.js, Express.js, </p>
										<h4><Link to="#" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="#" >Node.js</Link></span></h4>
										<p> we help you deliver results with the help of our expert developers of php, Laravel, node.js, Express.js, </p>
										<h4><Link to="#" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="#" >Node.js</Link></span></h4>
										<p> we help you deliver results with the help of our expert developers of php, Laravel, node.js, Express.js, </p>
										<h4><Link to="#" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="#" >Node.js</Link></span></h4>
										<p> we help you deliver results with the help of our expert developers of php, Laravel, node.js, Express.js, </p>
										<h4><Link to="#" >Read more</Link></h4>
									</div>
								</div>
							</div >
						</div >
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
											<Link to={"/HireLaravelDevelopers"}><div className="team-box">Laravel <img alt="img" src={Laravel} /></div></Link>
											<Link to={"/HireVueDevelopers"}><div className="team-box">VueJS <img alt="img" src={vue} /></div></Link>
											<Link to={"/HireAngularDevelopers"}><div className="team-box">Angular <img alt="img" src={Angular} /></div></Link>
										</div>

										<div>
											<Link to={"/HirePHPDevelopers"}><div className="team-box">PHP <img alt="img" src={php} /></div></Link>
											<Link to={"/HireWordpressDevelopers"}><div className="team-box">WordPress <img alt="img" src={Wordpress} /></div></Link>
											<Link to={"/HireNodeDevelopers"}><div className="team-box">NodeJS <img alt="img" src={node} /></div></Link>
										</div>

										<div>
											<Link to={"/HireAndroidDevelopers"}><div className="team-box">Android <img alt="img" src={Android} /></div></Link>
											<Link to={"/HireMagentoDevelopers"}><div className="team-box">Magento <img alt="img" src={Magento} /></div></Link>
											<Link to={"/HireReactNativeDevelopers"}><div className="team-box">ReactNative <img alt="img" src={reactnative} /></div></Link>
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

{/* <h3>Web Development</h3>
									<p>Remote Web Developers can scale your business swiftly. We offer you the facility to hire a remote web developer for 40 hours/week at a fixed rate.</p>
									<em><Link to="/Web_Development">Schedule an Appointment</Link></em>
									<em><a href="/caseStudies">Read Case Study</a></em> */}
{/* <div className="col-lg-8 col-md-12">
									<div className="serv-txt">
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<h4><span><FaCode /><Link to='#'>Integrations and Extensions</Link></span></h4>
												<p>We have integrated several platforms and can serve you with the same. Explore the best-in-class CRM platform services with us.</p>
												<h4><Link to={"#"} >Read more</Link></h4>
											</div>
											<div className="col-lg-6 col-md-6"><img alt="img" src={service_img} /></div>
										</div>
									</div>
								</div> */}