
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ReviewSec from '../container/ReviewSec';
import EuquireSec from '../container/EuquireSec';
import AwardSec from '../container/AwardSec';

import caseIcon from '../images/case-icon.png';
import caseIcon1 from '../images/case-icon1.png';
import arrow2 from '../images/arrow2.png';
import { CaseStudies } from '../json/CaseStudies';
import { FaChevronRight } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner'

class Service extends Component {

	constructor(props) {
		super(props)
		this.state = {
			CaseJson: [],
			Case2Json: [],
			Loading: true,

		}
	}

	componentDidMount() {
		CaseStudies.getCase().then((CaseStudies, err) => {
			if (!err) {
				this.setState({
					CaseJson: CaseStudies,
					Loading: false,

				});
			}
		});
		CaseStudies.getCase_2().then((CaseStudies_2, err) => {
			if (!err) {
				this.setState({
					Case2Json: CaseStudies_2,
					Loading: false,

				});
			}
		});
	}
	render() {
		const { CaseJson, Case2Json } = this.state;
		return (
			this.state.Loading ? <div className="spinner"><TailSpin color="#864fe9" height={80} width={80} /></div> :
				<>
					<Header headerClass={'case-head'} />

					<div className="case-banner">
						<div className="container">
							<div className="row">
								<div className="col-lg-2"></div>
								<div className="col-lg-8 col-md-12" data-aos="fade-right">
									<h4>AN AGILE PARTNER FOR 140+ COMPANIES WORLDWIDE</h4>
									<h1>Meet the innovators who reached new markets with us</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi laudantium! Porro natus at quos.Lorem ipsum dolor sit amet, </p>
								</div>
							</div>
						</div>
					</div>

					<div className="case-sec">
						<div className="container">
							{CaseJson && CaseJson.map((CaseJsonS, index) => {
								return (
									(index % 2 == 0) ?

										<div className="row">
											<div className="col-lg-6 col-md-12" data-aos="fade-down">
												<img className="dd-5" src={caseIcon} />
												<h3>{CaseJsonS.name}</h3>
												<p dangerouslySetInnerHTML={{ __html: CaseJsonS.content }}></p>
												<Link to="/caseStudyDescription">READ MORE <img src={arrow2} /></Link>
											</div>
											<div className="col-lg-6 col-md-12"><img width="100%" src={CaseJsonS.img} /></div>
										</div>
										:
										<div className="row">
											<div className="col-lg-6 col-md-12"><img width="100%" src={CaseJsonS.img} /></div>
											<div className="col-lg-6 col-md-12" data-aos="fade-up">
												<img className="dd-5" src={caseIcon1} />
												<h3>{CaseJsonS.name}</h3>
												<p dangerouslySetInnerHTML={{ __html: CaseJsonS.content }}></p>
												<a href="/caseStudyDescription">READ MORE <img src={arrow2} /></a>
											</div>
										</div>
								);
							})}
						</div>
					</div>

					<div className="case-txt">
						<div className="container">
							<div className="row">
								<div className="col-lg-2"></div>
								<div className="col-lg-8 col-md-12" data-aos="fade-up">
									<h3>Over 140 technology-first businesses reached measurably greater scalability, performance, and popularity thanks to a long-term software development partnership. It can work for you, too.</h3>
								</div>

								<div className="col-lg-12 col-md-12">
									<ul class="case-drop">
										<li>
											<a className="dropdown-toggle" href="#">Services <FaChevronRight /></a>
											<ul>
												<li><a href="#">All Industries</a></li>
												<li><a href="#">Technology & Innovation</a></li>
												<li><a href="#">Travel</a></li>
												<li><a href="#">Fintech & Banking</a></li>
												<li><a href="#">Real Estate</a></li>
												<li><a href="#">Events</a></li>
											</ul>
										</li>

										<li>
											<a className="dropdown-toggle" href="#">Industry <FaChevronRight /></a>
											<ul>
												<li><a href="#">All Industries</a></li>
												<li><a href="#">Technology & Innovation</a></li>
												<li><a href="#">Travel</a></li>
												<li><a href="#">Fintech & Banking</a></li>
												<li><a href="#">Real Estate</a></li>
												<li><a href="#">Events</a></li>
											</ul>
										</li>
									</ul>
								</div>
							</div>

							<div className="row" data-aos="fade-down">
								{Case2Json && Case2Json.map(Case2JsonS => {
									return (
										<div className="col-lg-4 col-md-6">
											<img width="100%" src={Case2JsonS.img} />
											<div className="case-box">
												<h4>Case Study</h4>
												<h3>{Case2JsonS.name}</h3>
												<p><span>TECH STACK: {Case2JsonS.name}</span><p dangerouslySetInnerHTML={{ __html: Case2JsonS.content.substr(0, 128) + "...." }}></p></p>
												<Link to={`caseStudyDescription/${Case2JsonS.slug}`}>READ MORE <img src={arrow2} /></Link>
											</div>
										</div>

									);
								})}
							</div>
						</div>
						<h6><a href="#">View More Services </a></h6>
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



