
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { HashLink as Link } from 'react-router-hash-link';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import { CareerData } from '../json/careers';
import 'react-accessible-accordion/dist/fancy-example.css';
import FormPopup from '../container/FormPopup';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

import arrow5 from '../images/arrow5.png';
import arrow2 from '../images/arrow2.png';
import careerImg from '../images/career-img.png';
import { FaFacebook, FaLinkedin, FaTwitter, FaLink } from 'react-icons/fa';

import { TailSpin } from 'react-loader-spinner'
import { Joboffers } from '../json/JobOffers';


class Career extends Component {
	constructor(props) {
		super(props)
		this.state = {
			CareerJson: [],
			Career2Json: [],
			Career3Json: [],
			joblinks3: [],
			Loading: true,

		}
	}

	componentDidMount() {
		CareerData.getCareer().then((Career, err) => {
			if (!err) {
				this.setState({
					CareerJson: Career,
					Loading: false,

				});
			}
		});
		CareerData.getCareer2().then((Career2, err) => {
			if (!err) {
				this.setState({
					Career2Json: Career2,
					Loading: false,

				});
			}
		});
		CareerData.getCareer3().then((Career3, err) => {
			if (!err) {
				this.setState({
					Career3Json: Career3,
					Loading: false,

				});
			}
		});

		Joboffers.getJoboffersCate().then((menus, err) => {
			if (!err) {
				this.setState({
					joblinks3: menus,
				});
			}
		});
	}
	render() {
		const { CareerJson, Career2Json, Career3Json, joblinks3 } = this.state;
		const culture = {
			items: 1,
			responsive: {
				480: { items: 1 },
				320: { items: 1, }
			},
			loop: true,
			autoplay: true
		};

		return (
			this.state.Loading ? <div className="spinner"><TailSpin color="#00ccff" height={80} width={80} /></div> :
				<>
					<Header headerClass={'serv-head cr-head'} />
					{CareerJson && CareerJson.map(CareerJsonS => {
						return (
							<div className="about-banner">
								<div className="about-box">
									<div className="container">
										<div className="row">
											<div className="col-lg-5 col-md-7" data-aos="fade-right">
												<h1>{CareerJsonS.name}</h1>
												<p dangerouslySetInnerHTML={{ __html: CareerJsonS.content }}></p>
												<Link to={'/jobOffer'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}><h5><img alt="img" src={arrow2} />Job Offers</h5></Link>
											</div>
											<div className="col-lg-7 col-md-5" data-aos="fade-up"><a href="https://www.facebook.com/iquincesoft"><FaFacebook /></a> <a href="https://www.linkedin.com/company/iquincesoft-consulting-services-pvt-ltd-/mycompany/"><FaLinkedin /></a> <a href="https://twitter.com/iquincesoft"><FaTwitter /></a> <Link to={"#"}><FaLink /></Link></div>
										</div>
									</div>
								</div>
								<img alt="img" className="abt-img" width="100%" src={CareerJsonS.img} />
								<img alt="img" className="abt-mob" width="100%" src={CareerJsonS.img} />
							</div>
						);
					})}

					<div className="culture-sec cr-sec">
						<div className="container">
							<div className="row">
								<div className="col-lg-2"></div>
								<div className="col-lg-8 col-md-12" >
									{/* data-aos="fade-right" */}
									<h3>Redefine your career at iQuinceSoft!!</h3>
									<p>We give you wings to explore and experience the awesome work environment </p>
									<p>We boost your Morale, We keep you OutStanding</p>
								</div>
								{/* data-aos="fade-down" */}
								<div className="col-lg-4 col-md-6">
									<h3>Join the best talent pool of Northern parts of Subcontinent</h3>
								</div>
								<div className="cr-data col-md-6">
									{joblinks3.length && (
										<OwlCarousel options={culture}>
											{joblinks3.map(joblinks3S => {
												return (
													<div className="cult-box">
														<div class="tech-dot"></div>
														<h4><Link to={`/joboffer/${joblinks3S.slug}`} >{joblinks3S.name}</Link></h4>
														<p dangerouslySetInnerHTML={{ __html: joblinks3S.description }}></p>
														<h5><span><Link to={`/joboffer/${joblinks3S.slug}`} >{joblinks3S.looking} Open Positions</Link></span> </h5>
													</div>
												);
											})}
										</OwlCarousel>
									)}
								</div>

								{joblinks3 && joblinks3.map(joblinks3S => {
									return (

										<div className="col-lg-4 col-md-6">

											<div className="cult-box">
												<Link to={`/joboffer/${joblinks3S.slug}`} >
													<div class="tech-dot"></div>
													<h4>{joblinks3S.name}</h4>
													<p dangerouslySetInnerHTML={{ __html: joblinks3S.description }}></p>
													<h5><span><Link to={`/joboffer/${joblinks3S.slug}`} >{joblinks3S.looking} Open Positions</Link></span> </h5>
												</Link>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div >

					<div className="culture-sec cr-accord">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 col-md-12">
									<OwlCarousel options={culture}>
										{Career3Json && Career3Json.map(Career3JsonS => {
											return (
												<div>
													<img alt="img" src={Career3JsonS.img} />
													<h4>{Career3JsonS.name}</h4>
													<p dangerouslySetInnerHTML={{ __html: Career3JsonS.content }}></p>
												</div>
											);
										})}
									</OwlCarousel>

									{Career3Json.length && (
										<Accordion allowZeroExpanded>
											<div className="row">
												{Career3Json.map((Career3JsonS, index) => {
													return (
														<div className="col-lg-4 col-md-4">
															<AccordionItem>
																<img alt="img" src={Career3JsonS.img} />
																<AccordionItemButton><span>{index + 1} <img alt="img" src={arrow5} /></span>{Career3Json.name}</AccordionItemButton>
																<AccordionItemPanel>
																	<p dangerouslySetInnerHTML={{ __html: Career3JsonS.content }}></p>
																</AccordionItemPanel>
															</AccordionItem>
														</div>
													);
												})}
											</div>
										</Accordion>
									)}
								</div>
							</div>
						</div>
					</div>

					<div className="frequent-sec">
						<h3>Frequently Asked Questions</h3>
						<div className="container">
							<div className="row">
								<div className="col-lg-2 col-md-1"></div>
								<div className="col-lg-8 col-md-10" data-aos="fade-right">
									<Accordion allowZeroExpanded preExpanded={['a']}>
										<AccordionItem>
											<AccordionItemButton>
												What is iQuinceSoft?
											</AccordionItemButton>
											<AccordionItemPanel>
												iQuinceSoft is an award-winning offshore software development company that
												offers software solutions to a global clientele.
											</AccordionItemPanel>
										</AccordionItem>
										<AccordionItem>
											<AccordionItemButton>
												What type of clients do you deal with?
											</AccordionItemButton>
											<AccordionItemPanel>
												We have helped a significant number of global brands to meet their unmet business needs.
												We have helped them scale the business to the next level.
												All our clients are from all the continents.
											</AccordionItemPanel>
										</AccordionItem>
										<AccordionItem>
											<AccordionItemButton>
												What is the preferred mode of communication in iQuinceSoft?
											</AccordionItemButton>
											<AccordionItemPanel>
												We use various modes of communication. We use Skype, hangouts, and Slack for internal
												communication and emails for official communication.
											</AccordionItemPanel>
										</AccordionItem>
										<AccordionItem>
											<AccordionItemButton>
												How many projects am I supposed to deliver at a time?
											</AccordionItemButton>
											<AccordionItemPanel>
												Not more than one.
											</AccordionItemPanel>
										</AccordionItem>
										<AccordionItem>
											<AccordionItemButton>
												How will I get my salary?
											</AccordionItemButton>
											<AccordionItemPanel>
												Your salary will be credited to the bank account you share with us during
												documentation post your selection.
											</AccordionItemPanel>
										</AccordionItem>
										<AccordionItem>
											<AccordionItemButton>
												Whom do I report to?
											</AccordionItemButton>
											<AccordionItemPanel>
												You’re supposed to report to your team leader.
											</AccordionItemPanel>
										</AccordionItem>
										<AccordionItem>
											<AccordionItemButton>
												What if I am not okay with anything?
											</AccordionItemButton>
											<AccordionItemPanel>
												Our HR team is very engaged and can solve the issues quickly for anything you are
												not satisfied with from the company front. Connect with any of them, and they can handle it with care.
											</AccordionItemPanel>
										</AccordionItem>
									</Accordion>
								</div>
							</div>
						</div>
						<FormPopup />
						<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
					</div>


					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="check-sec">
									<div className="row">
										<div className="col-lg-4 col-md-6">
											<h3>Check out some exciting job offers</h3>
											<a href="/jobOffer">Job Offers</a>
										</div>
										<div className="col-lg-8 col-md-6"><img alt="img" width="100%" src={careerImg} /></div>
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

export default Career;