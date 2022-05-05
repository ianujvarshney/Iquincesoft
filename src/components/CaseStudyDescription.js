
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ReviewSec from '../container/ReviewSec';
import EuquireSec from '../container/EuquireSec';
import AwardSec from '../container/AwardSec';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import caseBanner from '../images/case-des-banner.jpg';
import caseMob from '../images/case-mob.jpg';
import arrow4 from '../images/arrow4.png';
import PDF from '../images/PDF.png';
import casePDF from '../images/case-PDF.png';
import { Work } from '../json/work';

import { FaFacebook, FaLinkedin, FaTwitter, FaLink } from 'react-icons/fa';

class CaseStudyDescription extends Component {
	constructor(props) {
		super(props)
		this.state = {
			workJson: [],
			url: this.props.match.params.post
		}
		console.log(this.state.url)
	}

	componentDidMount() {
		Work.getWork(this.state.url).then((work, err) => {
			console.log(work)
			if (!err) {
				this.setState({
					workJson: work,
				});
			}
		});
	}
	render() {
		const { workJson } = this.state;
		return (
			<>
				<Header headerClass={'serv-head'} />
				{workJson && workJson.map(link => {
					return (
						<div className="about-banner">
							<div className="about-box abt-desc">
								<div className="container">
									<div className="row">

										<div className="col-lg-5 col-md-9" data-aos="fade-right">
											<Link to="/caseStudies"><h4><img src={arrow4} /> CASE STUDIES</h4></Link>
											<h1>{link.name}</h1>
											<p dangerouslySetInnerHTML={{ __html: link.content }}></p>
										</div>

										<div className="col-lg-7 col-md-3">
											<a href="#"><FaFacebook /></a> <a href="#"><FaLinkedin /></a> <a href="#"><FaTwitter /></a> <a href="#"><FaLink /></a>
											<h6><a href="#"><img src={PDF} /> DOWNLOAD CASE STUDY</a></h6>
										</div>
									</div>
								</div>

							</div>

							<img className="abt-img" width="100%" src={link.img} />
							<img className="abt-mob" width="100%" src={caseMob} />
						</div>
					);
				})}
				{workJson && workJson.map(link => {
					return (
						<div className="case-tab">
							<Tabs>
								<TabList data-aos="fade-right">
									<Tab>THE CHALLENGE</Tab>
									<Tab>THE SOLUTION</Tab>
									<Tab>THE RESULT</Tab>
								</TabList>

								<TabPanel data-aos="fade-down">
									<div className="container">
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<h3>About the Client</h3>
												<p>For the last decade, our client has worked in the digitisation space to help organisations transition from manual, paper-based forms and processes to automated, smart online systems. This automation results in long-term cost savings for their end client.</p>
												<p>They’ve been successful with their offerings and have contracts with several key government departments. When they contacted us to help scale their production team, we were happy to do so.</p>
												<p>Their biggest concerns had to do with the ability to scale their production team in a cost-efficient way, and to ensure that the quality was up to standard for their government clients.</p>
											</div>

											<div className="col-lg-6 col-md-6">
												<h4>To perform HR processes or learn new skills, people had to navigate through different systems. Ferrero needed help transforming the employee experience with streamlined HR processes and user-friendly technology.</h4>
											</div>
										</div>
									</div>

									<div className="case-content">
										<div className="container">
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<h3>The Challenge</h3>
													<p>For the last decade, our client has worked in the digitisation space to help organisations transition from manual, paper-based forms and processes to automated, smart online systems. This automation results in long-term cost savings for their end client.</p>
													<p>They’ve been successful with their offerings and have contracts with several key government departments. When they contacted us to help scale their production team, we were happy to do so.</p>
													<p>Their biggest concerns had to do with the ability to scale their production team in a cost-efficient way, and to ensure that the quality was up to standard for their government clients.</p>
												</div>

												<div className="col-lg-6 col-md-6">
													<h4>To perform HR processes or learn new skills, people had to navigate through different systems. Ferrero needed help transforming the employee experience with streamlined HR processes and user-friendly technology.</h4>
												</div>
											</div>
										</div>
									</div>
								</TabPanel>

								<TabPanel>
									<div className="container">
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<h3>The Solution</h3>
												<p>For the last decade, our client has worked in the digitisation space to help organisations transition from manual, paper-based forms and processes to automated, smart online systems. This automation results in long-term cost savings for their end client.</p>
												<p>They’ve been successful with their offerings and have contracts with several key government departments. When they contacted us to help scale their production team, we were happy to do so.</p>
												<p>Their biggest concerns had to do with the ability to scale their production team in a cost-efficient way, and to ensure that the quality was up to standard for their government clients.</p>
											</div>

											<div className="col-lg-6 col-md-6">
												<h4>To perform HR processes or learn new skills, people had to navigate through different systems. Ferrero needed help transforming the employee experience with streamlined HR processes and user-friendly technology.</h4>
											</div>
										</div>
									</div>
									<ul>
										<li><a href="#">TECH STACK</a></li>
										<li><a href="#">LARAVEL</a></li>
										<li><a href="#">WORDPRESS</a></li>
										<li><a href="#">REACT</a></li>
										<li><a href="#">NODE</a></li>
									</ul>
								</TabPanel>

								<TabPanel>
									<div className="case-content dd-6">
										<div className="container">
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<h3>The Results</h3>
													<p>For the last decade, our client has worked in the digitisation space to help organisations transition from manual, paper-based forms and processes to automated, smart online systems. This automation results in long-term cost savings for their end client.</p>
													<p>They’ve been successful with their offerings and have contracts with several key government departments. When they contacted us to help scale their production team, we were happy to do so.</p>
													<p>Their biggest concerns had to do with the ability to scale their production team in a cost-efficient way, and to ensure that the quality was up to standard for their government clients.</p>
												</div>

												<div className="col-lg-6 col-md-6">
													<h4>To perform HR processes or learn new skills, people had to navigate through different systems. Ferrero needed help transforming the employee experience with streamlined HR processes and user-friendly technology.</h4>
												</div>
											</div>
										</div>
									</div>
								</TabPanel>
							</Tabs>

							<div className="container">
								<div className="row">
									<div className="col-lg-12 col-md-12">
										<h3>About the Client</h3>
										<p>For the last decade, our client has worked in the digitisation space to help organisations transition from manual, paper-based forms and processes to automated, smart online systems. This automation results in long-term cost savings for their end client.</p>
										<p>They’ve been successful with their offerings and have contracts with several key government departments. When they contacted us to help scale their production team, we were happy to do so.</p>
										<p>Their biggest concerns had to do with the ability to scale their production team in a cost-efficient way, and to ensure that the quality was up to standard for their government clients.</p>

										<h3>The Challenge</h3>
										<p>For the last decade, our client has worked in the digitisation space to help organisations transition from manual, paper-based forms and processes to automated, smart online systems. This automation results in long-term cost savings for their end client.</p>
										<p>They’ve been successful with their offerings and have contracts with several key government departments. When they contacted us to help scale their production team, we were happy to do so.</p>
										<p>Their biggest concerns had to do with the ability to scale their production team in a cost-efficient way, and to ensure that the quality was up to standard for their government clients.</p>

										<h3>The Solution</h3>
										<p>For the last decade, our client has worked in the digitisation space to help organisations transition from manual, paper-based forms and processes to automated, smart online systems. This automation results in long-term cost savings for their end client.</p>
										<p>They’ve been successful with their offerings and have contracts with several key government departments. When they contacted us to help scale their production team, we were happy to do so.</p>
										<p>Their biggest concerns had to do with the ability to scale their production team in a cost-efficient way, and to ensure that the quality was up to standard for their government clients.</p>

										<ul>
											<li><a href="#">TECH STACK</a></li>
											<li><a href="#">LARAVEL</a></li>
											<li><a href="#">WORDPRESS</a></li>
											<li><a href="#">REACT</a></li>
											<li><a href="#">NODE</a></li>
										</ul>

										<h3>The Results</h3>
										<p>For the last decade, our client has worked in the digitisation space to help organisations transition from manual, paper-based forms and processes to automated, smart online systems. This automation results in long-term cost savings for their end client.</p>
										<p>They’ve been successful with their offerings and have contracts with several key government departments. When they contacted us to help scale their production team, we were happy to do so.</p>
										<p>Their biggest concerns had to do with the ability to scale their production team in a cost-efficient way, and to ensure that the quality was up to standard for their government clients.</p>
									</div>
								</div>
							</div>
							<h5 data-aos="fade-right"><a href="#"><img src={casePDF} /> DOWNLOAD CASE STUDY</a></h5>
						</div>
					);
				})}
				<ReviewSec />

				<EuquireSec />

				<AwardSec />

				<Footer />
			</>
		);
	}
}

export default CaseStudyDescription;