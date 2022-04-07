
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import { CareerData } from '../json/careers';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

import arrow5 from '../images/arrow5.png';
import arrow2 from '../images/arrow2.png';
import careerImg from '../images/career-img.png';
import { FaFacebook, FaLinkedin, FaTwitter, FaLink } from 'react-icons/fa';

import { TailSpin } from 'react-loader-spinner'
// import JobOffer from './JobOffer';

class Career extends Component {
	constructor(props) {
		super(props)
		this.state = {
			CareerJson: [],
			Career2Json: [],
			Career3Json: [],
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
	}
	render() {
		const { CareerJson, Career2Json, Career3Json } = this.state;
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
			this.state.Loading ? <div className="spinner"><TailSpin color="#864fe9" height={80} width={80} /></div> :
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
												<Link to={'/jobOffer'}><h5>Job Offers <img src={arrow2} /></h5></Link>
											</div>
											<div className="col-lg-7 col-md-5" data-aos="fade-up"><a href="https://www.facebook.com/iquincesoft"><FaFacebook /></a> <a href="https://www.linkedin.com/company/iquincesoft-consulting-services-pvt-ltd-/mycompany/"><FaLinkedin /></a> <a href="https://twitter.com/iquincesoft"><FaTwitter /></a> <a href="#"><FaLink /></a></div>
										</div>

									</div>
								</div>
								<img className="abt-img" width="100%" src={CareerJsonS.img} />
								<img className="abt-mob" width="100%" src={CareerJsonS.img} />
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
									{Career2Json.length && (
										<OwlCarousel options={culture}>
											{Career2Json.map(Career2JsonS => {
												return (
													<div className="cult-box">
														<div class="tech-dot"></div>
														<h4>{Career2JsonS.name}</h4>
														<p dangerouslySetInnerHTML={{ __html: Career2JsonS.content }}></p>
														<h5><span><Link to={`/joboffer/${Career2JsonS.slug}`} >{Career2JsonS.looking} Open Positions</Link></span> </h5>
													</div>
												);
											})}
										</OwlCarousel>
									)}
								</div>



								{Career2Json && Career2Json.map(Career2JsonS => {
									return (
										<div className="col-lg-4 col-md-6">
											<div className="cult-box">
												<div class="tech-dot"></div>
												<h4>{Career2JsonS.name}</h4>
												<p dangerouslySetInnerHTML={{ __html: Career2JsonS.content }}></p>
												<h5><span><Link to={`/joboffer/${Career2JsonS.slug}`} >{Career2JsonS.looking} Open Positions</Link></span> </h5>
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
													<img src={Career3JsonS.img} />
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
																<img src={Career3JsonS.img} />
																<AccordionItemButton><span>{index + 1} <img src={arrow5} /></span>{Career3Json.name}</AccordionItemButton>
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




					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="check-sec">
									<div className="row">
										<div className="col-lg-4 col-md-6">
											<h3>Check out some exciting job offers</h3>
											<a href="/jobOffer">Job Offers</a>
										</div>
										<div className="col-lg-8 col-md-6"><img width="100%" src={careerImg} /></div>
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