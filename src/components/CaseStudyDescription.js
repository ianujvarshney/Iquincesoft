
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ReviewSec from '../container/ReviewSec';
import EuquireSec from '../container/EuquireSec';
import AwardSec from '../container/AwardSec';
import jsPDF from 'jspdf';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import html2canvas from 'html2canvas';
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

	generatepdf = () => {
		var doc = new jsPDF("p", "pt", "a4");
		doc.html(document.querySelector("#content"), {
			callback: function (pdf) {
				pdf.save("mypdf.pdf");
				pdf.setTextColor(255, 0, 0);
				pdf.text(100, 25, 'USD.00');
				pdf.setFillColor(255, 255, 200);
				pdf.setDrawColor("red");
				pdf.rect(100, 20, 10, 10, 'F')

			}
		})
		doc.setTextColor(255, 0, 0);
		doc.text(100, 25, 'USD.00');

		doc.setFillColor(255, 255, 200);
		doc.rect(100, 20, 10, 10, 'F')
	}

	// var pdf = new jsPDF('p', 'pt', 'a4');
	// window.html2canvas = html2canvas;
	// const doc = document.getElementsByTagName('div')[0];

	// if (doc) {
	// 	console.log("div is ");
	// 	console.log(doc);
	// 	console.log("hellowww");



	// 	pdf.html(document.getElementById('doc'), {
	// 		callback: function (pdf) {
	// 			pdf.save('DOC.pdf');
	// 		}
	// 	})
	// }



	render() {
		const { workJson } = this.state;
		return (
			<>
				<Header headerClass={'serv-head'} />
				{workJson && workJson.map(link => {
					return (
						<div className="about-banner" id="content">
							<div className="about-box abt-desc">
								<div className="container">
									<div className="row">

										<div className="col-lg-5 col-md-9" data-aos="fade-right">
											<Link to="/caseStudies"><h4 style={{ color: "white" }}><img src={arrow4} /> CASE STUDIES</h4></Link>
											<h1>{link.name}</h1>
											<p dangerouslySetInnerHTML={{ __html: link.content }}></p>
										</div>

										<div className="col-lg-7 col-md-3">
											<a href="#"><FaFacebook /></a> <a href="#"><FaLinkedin /></a> <a href="#"><FaTwitter /></a> <a href="#"><FaLink /></a>
											<h6><a href="#" onClick={this.generatepdf} ><img src={PDF} /> DOWNLOAD CASE STUDY</a></h6>
										</div>
									</div>
								</div>

							</div>

							<img className="abt-img" width="100%" height="900px" src={link.img} />
							<img className="abt-mob" width="100%" src={caseMob} />
						</div>
					);
				})}
				{workJson && workJson.map(link => {
					return (
						<div className="case-tab">
							<Tabs>
								<TabList data-aos="fade-right">
									<Tab>The About Us</Tab>
									<Tab>THE CHALLENGE</Tab>
									<Tab>THE SOLUTION</Tab>
									<Tab>THE RESULT</Tab>
								</TabList>

								<TabPanel data-aos="fade-down">
									<div className="container">
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<h3>About the Client</h3>
												<p dangerouslySetInnerHTML={{ __html: link.client1 }}></p>
											</div>

											<div className="col-lg-6 col-md-6">
												<h4>{link.client2}</h4>
											</div>
										</div>
									</div>

									<div className="case-content">
										<div className="container">
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<h3>The Challenge</h3>
													<p dangerouslySetInnerHTML={{ __html: link.challenges }}></p>
												</div>

												<div className="col-lg-6 col-md-6">
													<h4>{link.challenges2}</h4>
												</div>
											</div>
										</div>
									</div>

									<div className="case-content">
										<div className="container">
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<h3>The Solution</h3>
													<p dangerouslySetInnerHTML={{ __html: link.solution }}></p>
												</div>

												<div className="col-lg-6 col-md-6">
													<h4>{link.solution2}</h4>
												</div>
											</div>
										</div>
									</div>

									<div className="case-content">
										<div className="container">
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<h3>The Results</h3>
													<p dangerouslySetInnerHTML={{ __html: link.result }}></p>
												</div>

												<div className="col-lg-6 col-md-6">
													<h4>{link.result2}</h4>
												</div>
											</div>
										</div>
									</div>
								</TabPanel>

								<TabPanel>
									<div className="container">
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<h3>The challenges</h3>
												<p dangerouslySetInnerHTML={{ __html: link.challenges }}></p>
											</div>

											<div className="col-lg-6 col-md-6">
												<h4>{link.challenges2}</h4>
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
													<h3>The Solution</h3>
													<p dangerouslySetInnerHTML={{ __html: link.solution }}></p>
												</div>

												<div className="col-lg-6 col-md-6">
													<h4>{link.solution2}</h4>
												</div>
											</div>
										</div>
									</div>
								</TabPanel>

								<TabPanel>
									<div className="case-content dd-6">
										<div className="container">
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<h3>The Results</h3>
													<p dangerouslySetInnerHTML={{ __html: link.result }}></p>
												</div>

												<div className="col-lg-6 col-md-6">
													<h4>{link.result2}</h4>
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
							<h5 data-aos="fade-right"><a href="#" onClick={this.generatepdf} ><img src={casePDF} /> DOWNLOAD CASE STUDY</a></h5>
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