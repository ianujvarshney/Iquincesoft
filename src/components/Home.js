
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import FormPopup from '../container/FormPopup';
import FeatureSec from '../container/FeatureSec';
import WorkSec from '../container/WorkSec';
import ReviewSec from '../container/ReviewSec';
import EuquireSec from '../container/EuquireSec';
import AwardSec from '../container/AwardSec';

import { Main } from '../json/Main';

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';

import whyVd from '../images/why-vd.jpg';

import img1 from '../images/serv-icon.png';
import img2 from '../images/serv-icon1.png';
import img3 from '../images/serv-icon2.png';
import img4 from '../images/serv-icon3.png';

import imgs1 from '../images/tech-icon.png';
import imgs2 from '../images/tech-icon1.png';
import imgs3 from '../images/tech-icon2.png';
import imgs4 from '../images/tech-icon3.png';
import imgs5 from '../images/tech-icon4.png';
import imgs6 from '../images/tech-icon5.png';

import star from '../images/star.png';
import banimg from '../images/ban-img.png';
import arrow from '../images/arrow.png';
import bannerMob from '../images/banner-mob.jpg';

import { TailSpin } from 'react-loader-spinner'

import { FaArrowRight } from 'react-icons/fa';

class Home extends Component {

	constructor(props) {
		super(props)
		this.state = {
			serviceJson: [],
			technologyJson: [],
			teamJson: [],
			careerJson: [],
			chooseJson: [],
			Titlejson: [],
			Loading: true,
		}
	}

	componentDidMount() {
		Main.getMAIN_TITLE().then((title, err) => {
			if (!err) {
				this.setState({
					Titlejson: title,
					Loading: false,
				});
			}
		});
		Main.getService().then((services, err) => {
			if (!err) {
				this.setState({
					serviceJson: services,
					Loading: false,
				});
			}
		});

		Main.getTechnology().then((technology, err) => {
			if (!err) {
				this.setState({
					technologyJson: technology,
					Loading: false,
				});
			}
		});

		Main.getTeam().then((team, err) => {
			if (!err) {
				this.setState({
					teamJson: team,
					Loading: false,
				});
			}
		});

		Main.getCareer().then((career, err) => {
			if (!err) {
				this.setState({
					careerJson: career,
					Loading: false,
				});
			}
		});
		Main.getchoose().then((Choose, err) => {
			if (!err) {
				this.setState({
					chooseJson: Choose,
					Loading: false,
				});
			}
		});
		Main.getchoose2().then((Choose2, err) => {
			if (!err) {
				this.setState({
					chooseJson2: Choose2,
					Loading: false,
				});
			}
		});
	}

	render() {
		const { serviceJson, technologyJson, teamJson, careerJson, chooseJson, chooseJson2, Titlejson } = this.state;
		const service = {
			items: 4,
			responsive: {
				1200: { items: 4, },
				768: { items: 3 },
				480: { items: 2 },
				320: { items: 1, }
			},
			loop: true,
			autoplay: true
		};

		const technology = {
			items: 6,
			responsive: {
				1200: { items: 6, },
				992: { items: 5, },
				768: { items: 3 },
				480: { items: 2 },
				320: { items: 1, }
			},
			loop: true,
			autoplay: true
		};

		const teamSlide = {
			items: 4,
			responsive: {
				1200: { items: 4, },
				768: { items: 3 },
				480: { items: 2 },
				320: { items: 1, }
			},
			loop: true
		};

		const whySlide = {
			items: 2,
			responsive: {
				1200: { items: 2, },
				768: { items: 2 },
				640: { items: 2 },
				320: { items: 1, }
			},
			loop: true
		};

		return (
			this.state.Loading ? <div className="spinner"><TailSpin color="#864fe9" height={80} width={80} /></div> :
				<>
					<Header />
					<div div div className="banner-sec" >
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-8" data-aos="fade-right">
									<h1><img src={star} /> <span> We offer <del>services</del> solutions<em>that meet your <del>needs</del> demands.</em></span></h1>
									<div className="row">
										<div className="col-lg-5 col-md-5"><h2>Web <span>software</span> <span>mobile</span> cloud<em>.</em></h2></div>
										<div className="col-lg-7 col-md-7">
											<img className="arrow" src={arrow} />
											<FormPopup />
											<h5>Or, Use this form to share your requirements. Get guaranteed response within 8 Hrs.</h5>
										</div>
									</div>
								</div>


								<div className="col-lg-4 col-md-4"><img src={banimg} /></div>
							</div>
						</div>
					</div>

					<div className="mob-sec">
						<img width="100%" src={bannerMob} />
						<div className="mob-box">
							<h4><span> We offer <del>services</del> solutions that meet your <del>needs</del> demands.</span></h4>
							<ul>
								<li><a href="#">WEB</a></li>
								<li><a href="#">SOFTWARE</a></li>
								<li><a href="#">MOBILE</a></li>
								<li><a href="#">CLOUD</a></li>
							</ul>
							<FormPopup />
						</div>
					</div>

					<FeatureSec />

					<div className="service-sec" data-aos="fade-down">
						<div className="container">
							{serviceJson && serviceJson.map(ServicejsonS => {
								return (
									ServicejsonS.content == '' ? null :
										<div className="row">
											<div className="col-lg-2"></div>
											<div className="col-lg-8 col-md-12">
												<h3 dangerouslySetInnerHTML={{ __html: ServicejsonS.content }}></h3>
											</div>
										</div>
								);
							})}

							<div className="row">
								<div className="col-lg-1"></div>
								<div className="col-lg-10 col-md-12">
									<OwlCarousel loop options={service}>

										<div className="serv-box">
											<a href="/Web_Development">
												<img src={img1} />
												<h4>Web</h4>
												<div className="arrow-icon"><FaArrowRight /></div>
											</a>
										</div>

										<div className="serv-box">
											<a href="/Mobile_Developement">
												<img src={img2} />
												<h4>Mobile</h4>
												<div className="arrow-icon"><FaArrowRight /></div>
											</a>
										</div>

										<div className="serv-box">
											<a href="/ProductDesign">
												<img src={img3} />
												<h4>Dev Ops</h4>
												<div className="arrow-icon"><FaArrowRight /></div>
											</a>
										</div>

										<div className="serv-box">
											<a href="/CloudDevelopment">
												<img src={img4} />
												<h4>AI and ML</h4>
												<div className="arrow-icon"><FaArrowRight /></div>
											</a>
										</div>

									</OwlCarousel>

								</div>
							</div>
						</div>
						<h6><a href="#">View More Services </a></h6>
						<FormPopup />
					</div>

					<div className="technology-sec">
						<h3>Technologies</h3>
						<div className="container">
							<div className="row">
								<div className="col-lg-12 col-md-12">

									<OwlCarousel options={technology}>
										<div className="tech-box">
											<a href="#">
												<div className="tech-dot"></div>
												<img src={imgs6} />
												<h4>Cloud</h4>
												<div className="arrow-icon"><FaArrowRight /></div>
											</a>
										</div>

										<div className="tech-box">
											<a href="#">
												<div className="tech-dot"></div>
												<img src={imgs5} />
												<h4>e-Commerce</h4>
												<div className="arrow-icon"><FaArrowRight /></div>
											</a>
										</div>

										<div className="tech-box">
											<a href="#">
												<div className="tech-dot"></div>
												<img src={imgs4} />
												<h4>Mobile</h4>
												<div className="arrow-icon"><FaArrowRight /></div>
											</a>
										</div>

										<div className="tech-box">
											<a href="#">
												<div className="tech-dot"></div>
												<img src={imgs3} />
												<h4>Server-Side</h4>
												<div className="arrow-icon"><FaArrowRight /></div>
											</a>
										</div>

										<div className="tech-box">
											<a href="#">
												<div className="tech-dot"></div>
												<img src={imgs2} />
												<h4>Front-End</h4>
												<div className="arrow-icon"><FaArrowRight /></div>
											</a>
										</div>

										<div className="tech-box">
											<a href="#">
												<div className="tech-dot"></div>
												<img src={imgs1} />
												<h4>CMS</h4>
												<div className="arrow-icon"><FaArrowRight /></div>
											</a>
										</div>
									</OwlCarousel>

								</div>
							</div>
						</div>
						<h6><a href="#">View More Services </a></h6>
						<FormPopup />
						<h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5>
					</div>

					<WorkSec />

					<div className="team-sec" data-aos="fade-right">
						<h3>Industry Experience</h3>
						<h4>Our team is specialized in a wide array of industry verticals.</h4>
						<div className="container">
							<div className="row">
								<div className="col-lg-12 col-md-12">
									{teamJson.length && (
										<OwlCarousel options={teamSlide}>
											{teamJson.map((teamJsons, index, teamJson) => {
												index *= 3;
												if (index < (teamJson.length - teamJson.length % 3)) {
													return (
														<div>
															<div key={teamJson[index].id} className="team-box">{teamJson[index].name} <img src={teamJson[index].img} /></div>
															<div key={teamJson[index + 1].id} className="team-box">{teamJson[index + 1].name} <img src={teamJson[index + 1].img} /></div>
															<div key={teamJson[index + 2].id} className="team-box">{teamJson[index + 2].name} <img src={teamJson[index + 2].img} /></div>
														</div>
													);
												}
											})}
										</OwlCarousel>
									)}
								</div>
							</div>
						</div>
						<FormPopup />
						<h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5>
					</div>

					<div className="why-sec">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-4" data-aos="fade-up">
									{chooseJson2 && chooseJson2.map((Choosejson2S, index) => {
										return (
											(index == 0) ?
												<>
													<h3>Why Choose<span>iQuinceSOFT?</span></h3>
													<p dangerouslySetInnerHTML={{ __html: Choosejson2S.content }}></p>
													<div className="tech-box dd">
														<div className="tech-dot"></div>
														<h6>Corporate Social Responsibility</h6>
														<img width="100%" src={Choosejson2S.img} />
													</div>
												</>

												:

												<div className="tech-box dd-1">
													<div className="tech-dot"></div>
													<img src={Choosejson2S.img} />
													<h4>Technology Fast 50 Deloitte</h4>
												</div>

										);
									})}
								</div>

								<div className="col-lg-8 col-md-8">
									{chooseJson.length && (
										<OwlCarousel options={whySlide}>
											{chooseJson.map((ChoosejsonS, index) => {
												return (
													<div>
														<div className="tech-box dd-1">
															<div className="tech-dot"></div>
															<img src={ChoosejsonS.img} />
															<h4 dangerouslySetInnerHTML={{ __html: ChoosejsonS.name }}></h4>
														</div>

														<div className="tech-box dd-1">
															<div className="tech-dot"></div>
															<img src={ChoosejsonS.img} />
															<h4 dangerouslySetInnerHTML={{ __html: ChoosejsonS.name }}></h4>
														</div>
													</div>
												);
											})}
										</OwlCarousel>
									)}
									<div className="tech-box dd">
										<div className="tech-dot"></div>
										<img width="100%" src={whyVd} />
									</div>
								</div>
							</div>
						</div>
						<FormPopup />
						<h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5>
					</div>

					<div className="career-sec">
						<div className="container">
							<div className="row">
								<div className="col-lg-7 col-md-9" data-aos="fade-right">
									{careerJson.length && careerJson.map(careerJsons => {
										return (
											<div key={careerJsons.id}>
												<h3>{careerJsons.name}</h3>
												<p dangerouslySetInnerHTML={{ __html: careerJsons.content }}></p>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>

					<ReviewSec />

					<EuquireSec />

					<AwardSec />

					<Footer />
				</>
		);
	}
}

export default Home;
