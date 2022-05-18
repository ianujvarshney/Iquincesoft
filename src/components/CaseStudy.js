
import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Header from './Header';
import Footer from './Footer';
import ReviewSec from '../container/ReviewSec';
import EuquireSec from '../container/EuquireSec';
import AwardSec from '../container/AwardSec';
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
			this.state.Loading ? <div className="spinner"><TailSpin color="#00ccff" height={80} width={80} /></div> :
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
									(index % 2 === 0) ?

										<div className="row">
											<div className="col-lg-6 col-md-12" data-aos="fade-down">
												<img alt="img" className="dd-5" src={CaseJsonS.brand_logo} />
												<h3>{CaseJsonS.name}</h3>
												<p dangerouslySetInnerHTML={{ __html: CaseJsonS.content }}></p>
												<Link to={`/caseStudyDescription/${CaseJsonS.slug}`}>READ MORE <img alt="img" src={arrow2} /></Link>
											</div>
											<div className="col-lg-6 col-md-12"><img alt="img" width="100%" height="300px" src={CaseJsonS.img} /></div>
										</div>
										:
										<div className="row">
											<div className="col-lg-6 col-md-12"><img alt="img" width="100%" height="300px" src={CaseJsonS.img} /></div>
											<div className="col-lg-6 col-md-12" data-aos="fade-up">
												<img alt="img" className="dd-5" src={CaseJsonS.brand_logo} />
												<h3>{CaseJsonS.name}</h3>
												<p dangerouslySetInnerHTML={{ __html: CaseJsonS.content }}></p>
												<Link to={`/caseStudyDescription/${CaseJsonS.slug}`}>READ MORE <img alt="img" src={arrow2} /></Link>
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
											<Link className="dropdown-toggle" to={"#"} >Services <FaChevronRight /></Link>
											<ul>
												<li><Link to={"#"}>All Industries</Link></li>
												<li><Link to={"#"}>Technology & Innovation</Link></li>
												<li><Link to={"#"}>Travel</Link></li>
												<li><Link to={"#"}>Fintech & Banking</Link></li>
												<li><Link to={"#"}>Real Estate</Link></li>
												<li><Link to={"#"}>Events</Link></li>
											</ul>
										</li>

										<li>
											<Link className="dropdown-toggle" href="#">Industry <FaChevronRight /></Link>
											<ul>
												<li><Link to={"#"}>All Industries</Link></li>
												<li><Link to={"#"}>Technology & Innovation</Link></li>
												<li><Link to={"#"}>Travel</Link></li>
												<li><Link to={"#"}>Fintech & Banking</Link></li>
												<li><Link to={"#"}>Real Estate</Link></li>
												<li><Link to={"#"}>Events</Link></li>
											</ul>
										</li>
									</ul>
								</div>
							</div>

							<div className="row" data-aos="fade-down">
								{Case2Json && Case2Json.map(Case2JsonS => {
									return (
										<div className="col-lg-4 col-md-6">
											<img alt="img" width="100%" src={Case2JsonS.img} />
											<div className="case-box">
												<h4>Case Study</h4>
												<h3>{Case2JsonS.name.substr(0, 40) + "...."}</h3>
												<p><span>TECH STACK: {Case2JsonS.name.substr(0, 50) + "...."}</span><p dangerouslySetInnerHTML={{ __html: Case2JsonS.content.substr(0, 128) + "...." }}></p></p>
												<Link to={`caseStudyDescription/${Case2JsonS.slug}`}>READ MORE <img alt="img" src={arrow2} /></Link>
											</div>
										</div>

									);
								})}
							</div>
						</div>
						<h6><Link to={"#"}>View More Services </Link></h6>
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



