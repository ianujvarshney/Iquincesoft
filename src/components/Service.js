
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
												<h1><h5>{servicesJsonS.name}</h5></h1>
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
									<h3>OUR FRONT-END DEVELOPMENT</h3>
									<p>Get benefit from the exceptional front-end services and dominate the competition.</p>
									<em><Link to="/serviceDescription">Read More..</Link></em>
									<OwlCarousel options={servSlide}>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireReactDevelopers">React.js</Link></span></h4>
											<p> Let’s build websites with seamless integration, responsive UI, and better code readability with our skilled and razor-sharp react developers
											</p>
											<h4><Link to="/HireReactDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireVueDevelopers" >Vue.js</Link></span></h4>
											<p> From single-page applications, online marketplaces, and marketplaces to interactive dashboards and custom development, our ready-to-hire developers can ensure your web apps are next-level. </p>
											<h4><Link to="/HireVueDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireAngularDevelopers" >Angular</Link></span></h4>
											<p> Hire our Angular expert developers to create robust and appealing Single Page Applications (SPAs).  </p>
											<h4><Link to="/HireAngularDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireMERNStackDevelopers" >MERN Stack</Link></span></h4>
											<p> Hire our skilled MERN stack developers to get a scalable and wide range of fast and cost-efficient development. </p>
											<h4><Link to="/HireMERNStackDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireZendStackDevelopers" >ZEND Stack</Link></span></h4>
											<p> Get feature-filled web apps that are secure, robust, and scalable. Our developers can get you the large-scale enterprise apps without any hassle.
											</p>
											<h4><Link to="/HireZendStackDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireMeanstackDevelopers" >MEAN Stack</Link></span></h4>
											<p> Are you looking for easy-to-maintain web solutions with fast development that offer the least time-to-market apps? Hire MEAN developers from iQuinceSoft.
											</p>
											<h4><Link to="/HireMeanstackDevelopers" >Read more</Link></h4>
										</div>
									</OwlCarousel>
								</div>

								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireReactDevelopers">React.js</Link></span></h4>
										<p>Let’s build websites with seamless integration, responsive UI, and better code readability with our skilled and razor-sharp react developers.
										</p>
										<h4><Link to="/HireReactDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireVueDevelopers" >Vue.js</Link></span></h4>
										<p>  From single-page applications, online marketplaces, and marketplaces to interactive dashboards and custom development, our ready-to-hire developers can ensure your web apps are next-level. </p>
										<h4><Link to="/HireVueDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireAngularDevelopers" >Angular</Link></span></h4>
										<p> Hire our Angular expert developers to create robust and appealing Single Page Applications (SPAs).  </p>
										<h4><Link to="/HireAngularDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireMERNStackDevelopers" >MERN Stack</Link></span></h4>
										<p> Hire our skilled MERN stack developers to get a scalable and wide range of fast and cost-efficient development. </p>
										<h4><Link to="/HireMERNStackDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireZendStackDevelopers" >ZEND Stack</Link></span></h4>
										<p> Get feature-filled web apps that are secure, robust, and scalable. Our developers can get you the large-scale enterprise apps without any hassle.
										</p>
										<h4><Link to="/HireZendStackDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireMeanstackDevelopers" >MEAN Stack</Link></span></h4>
										<p> Are you looking for easy-to-maintain web solutions with fast development that offer the least time-to-market apps? Hire MEAN developers from iQuinceSoft.
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
									<h3>OUR BACKEND DEVELOPMENT</h3>
									<p>The backend developers from iQuinceSoft can build a robust foundation with clean codes and streamline communication between the database and application. </p>
									<em><Link to="/serviceDescription">Read More..</Link></em>
									<OwlCarousel options={servSlide}>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireNodeDevelopers" >Node.js</Link></span></h4>
											<p>  Deliver perfect tech performance, scalability, application limitations, and speed to attain business goals with the trust of iQuinceSoft.  </p>
											<h4><Link to="/HireNodeDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HirePHPDevelopers" >PHP</Link></span></h4>
											<p> Cost-effective websites that can deliver complex web solutions with the help of our skilled PHP developers. </p>
											<h4><Link to="/HirePHPDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireLaravelDevelopers" >Laravel</Link></span></h4>
											<p> We offer you the Laravel developers that can help you customize web solutions to deliver fully-functional and secure websites. </p>
											<h4><Link to="/HireLaravelDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireSymfonyDevelopers" >Symfony</Link></span></h4>
											<p> Symfony developers from iQuinceSoft can deliver web apps with swift, easy, and quality code.  </p>
											<h4><Link to="/HireSymfonyDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireCodeIgniterDevelopers" >CodeIgniter</Link></span></h4>
											<p>Vetted Codeigniter developers to get a secure framework, simple configuration, and easy-to-use web solutions. Hire Codeigniter developers from iQuinceSoft.
											</p>
											<h4><Link to="/HireCodeIgniterDevelopers" >Read more</Link></h4>
										</div>
									</OwlCarousel>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireNodeDevelopers" >Node.js</Link></span></h4>
										<p>  Deliver perfect tech performance, scalability, application limitations, and speed to attain business goals with the trust of iQuinceSoft.  </p>
										<h4><Link to="/HireNodeDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HirePHPDevelopers" >PHP</Link></span></h4>
										<p> Cost-effective websites that can deliver complex web solutions with the help of our skilled PHP developers. </p>
										<h4><Link to="/HirePHPDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireLaravelDevelopers" >Laravel</Link></span></h4>
										<p> We offer you the Laravel developers that can help you customize web solutions to deliver fully-functional and secure websites. </p>
										<h4><Link to="/HireLaravelDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireSymfonyDevelopers" >Symfony</Link></span></h4>
										<p> Symfony developers from iQuinceSoft can deliver web apps with swift, easy, and quality code.  </p>
										<h4><Link to="/HireSymfonyDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireCodeIgniterDevelopers" >CodeIgniter</Link></span></h4>
										<p>Vetted Codeigniter developers to get a secure framework, simple configuration, and easy-to-use web solutions. Hire Codeigniter developers from iQuinceSoft.
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
									<h3>OUR E-COMMERCE DEVELOPMENT</h3>
									<p>Hire iQuinceSoft’s e-Commerce developers can increase your store's visibility, enhance sales, and get the clients searching for the exact products you offer. </p>
									<em><Link to="/serviceDescription">Read More..</Link></em>
									<OwlCarousel options={servSlide}>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireMagentoDevelopers" >Magento</Link></span></h4>
											<p> Flexibility, development architecture, and scalable Magento development can ensure you the eCommerce store that can get you to attain business goals. </p>
											<h4><Link to="/HireMagentoDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireWooCommerceDevelopers" >WooCommerce</Link></span></h4>
											<p> Harness the power of a highly customizable and open-source eCommerce platform with a user-friendly backend. Our expert WooCommerce developers will offer you an online store that helps you sell.  </p>
											<h4><Link to="/HireWooCommerceDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireShopifyDevelopers" >Shopify</Link></span></h4>
											<p>We get you the not-so-obvious-looking web stores that can offer tangible business outcomes and solve your business problems.   </p>
											<h4><Link to="/HireShopifyDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireopencartDevelopers" >OpenCart</Link></span></h4>
											<p>  Hire iQuinceSoft’s OpenCart developers to get online stores that can attract and convince customers to make a purchase.  </p>
											<h4><Link to="/HireopencartDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireWixDevelopers" >Wix</Link></span></h4>
											<p> Wix is a platform that offers reliable, qualitative websites. Hire our talented Wix developers for websites of the next level. </p>
											<h4><Link to="/HireWixDevelopers" >Read more</Link></h4>
										</div>
									</OwlCarousel>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireMagentoDevelopers" >Magento</Link></span></h4>
										<p> Flexibility, development architecture, and scalable Magento development can ensure you the eCommerce store that can get you to attain business goals. </p>
										<h4><Link to="/HireMagentoDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireWooCommerceDevelopers" >WooCommerce</Link></span></h4>
										<p> Harness the power of a highly customizable and open-source eCommerce platform with a user-friendly backend. Our expert WooCommerce developers will offer you an online store that helps you sell.  </p>
										<h4><Link to="/HireWooCommerceDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireShopifyDevelopers" >Shopify</Link></span></h4>
										<p>We get you the not-so-obvious-looking web stores that can offer tangible business outcomes and solve your business problems.   </p>
										<h4><Link to="/HireShopifyDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireopencartDevelopers" >OpenCart</Link></span></h4>
										<p>  Hire iQuinceSoft’s OpenCart developers to get online stores that can attract and convince customers to make a purchase.  </p>
										<h4><Link to="/HireopencartDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireWixDevelopers" >Wix</Link></span></h4>
										<p> Wix is a platform that offers reliable, qualitative websites. Hire our talented Wix developers for websites of the next level. </p>
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
									<h3>OUR CMS</h3>
									<p>Hire CMS developers from iQuinceSoft to ensure optimum management and updating of the content in real-time.</p>
									<em><Link to="/serviceDescription">Read More..</Link></em>
									<OwlCarousel options={servSlide}>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireDrupalDevelopers" >Drupal</Link></span></h4>
											<p> Do you want an excellent platform to build complex websites, portals, and online communities? Then, connect with the vetted Drupal developers from iQuinceSoft.  </p>
											<h4><Link to="/HireDrupalDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireWordpressDevelopers" >Wordpress</Link></span></h4>
											<p> User Experience of the next level. This is what we offer with the help of our WordPress experts.
											</p>
											<h4><Link to="/HireWordpressDevelopers" >Read more</Link></h4>
										</div>
									</OwlCarousel>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireDrupalDevelopers" >Drupal</Link></span></h4>
										<p> Do you want an excellent platform to build complex websites, portals, and online communities? Then, connect with the vetted Drupal developers from iQuinceSoft.  </p>
										<h4><Link to="/HireDrupalDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireWordpressDevelopers" >Wordpress</Link></span></h4>
										<p> User Experience of the next level. This is what we offer with the help of our WordPress experts.
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
									<h3>OUR MOBILE DEVELOPMENT</h3>
									<p>Hire mobile app developers from the name that the industry banks upon – iQuinceSoft. We offer you to maximize your reach with peak-performing, visually appealing, and impactful apps. </p>
									<em><Link to="/serviceDescription">Read More..</Link></em>

									<OwlCarousel options={servSlide}>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireIosDevelopers" >Ios</Link></span></h4>
											<p> Hybrid, Native, or Custom! Outshine the competition with our visually appealing iOS apps.  </p>
											<h4><Link to="/HireIosDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireReactNativeDevelopers" >ReactNative</Link></span></h4>
											<p> Manage the entire mobile app development process with the help of our skilled and ready-to-hire React Native developers.  </p>
											<h4><Link to="/HireReactNativeDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireAndroidDevelopers" >Android</Link></span></h4>
											<p> Conquer the play store with the help of our expert app developers.  </p>
											<h4><Link to="/HireAndroidDevelopers" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="/HireionicDevelopers" >Ionic</Link></span></h4>
											<p> Get the benefit of excellent web development skills from the house of iQuincSoft – the name the industry banks upon.  </p>
											<h4><Link to="/HireionicDevelopers" >Read more</Link></h4>
										</div>
									</OwlCarousel>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireIosDevelopers" >Ios</Link></span></h4>
										<p> Hybrid, Native, or Custom! Outshine the competition with our visually appealing iOS apps.  </p>
										<h4><Link to="/HireIosDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireAndroidDevelopers" >Android</Link></span></h4>
										<p> Conquer the play store with the help of our expert app developers.  </p>
										<h4><Link to="/HireAndroidDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireReactNativeDevelopers" >ReactNative</Link></span></h4>
										<p> Manage the entire mobile app development process with the help of our skilled and ready-to-hire React Native developers.  </p>
										<h4><Link to="/HireReactNativeDevelopers" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="/HireionicDevelopers" >Ionic</Link></span></h4>
										<p> Get the benefit of excellent web development skills from the house of iQuincSoft – the name the industry banks upon.  </p>
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
									<h3>OUR DIGITAL MARKETING</h3>
									<p>iQuinceSoft is a name that can turn around the fortunes of your business with the help of making your web presence more robust and enhanced with visibility, right targeting, and optimizing the cost. Hire Digital Marketers from iQuinceSoft.</p>
									<em><Link to="/serviceDescription">Read More..</Link></em>
									<OwlCarousel options={servSlide}>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="#">SEO</Link></span></h4>
											<p> Rank high, bring traffic, and earn leads that can convert to broaden your customer base with SEO experts from iQuinceSoft., </p>
											<h4><Link to="#" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="#" >SMM</Link></span></h4>
											<p> Harness the power of social media with optimized posts and content. Blow the competition away with your brand essence with the help of iQuinceSoft’s SM managers.  </p>
											<h4><Link to="#" >Read more</Link></h4>
										</div>
										<div className="serv-txt">
											<h4><span><FaCode /><Link to="#" >PPC</Link></span></h4>
											<p> Maximize the power of advertising with the help of the creative brains from iQuinceSoft. We deliver your message at the right time, place, and audience to maximize profits. </p>
											<h4><Link to="#" >Read more</Link></h4>
										</div>
									</OwlCarousel>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="#" >SEO</Link></span></h4>
										<p> Rank high, bring traffic, and earn leads that can convert to broaden your customer base with SEO experts from iQuinceSoft., </p>
										<h4><Link to="#" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="#" >SMM</Link></span></h4>
										<p> Harness the power of social media with optimized posts and content. Blow the competition away with your brand essence with the help of iQuinceSoft’s SM managers.  </p>
										<h4><Link to="#" >Read more</Link></h4>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="serv-txt">
										<h4><span><FaCode /><Link to="#" >PPC</Link></span></h4>
										<p> Maximize the power of advertising with the help of the creative brains from iQuinceSoft. We deliver your message at the right time, place, and audience to maximize profits. </p>
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