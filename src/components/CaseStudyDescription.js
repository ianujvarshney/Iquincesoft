import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { HashLink as Link } from 'react-router-hash-link';
import ReviewSec from '../container/ReviewSec';
import EuquireSec from '../container/EuquireSec';
import AwardSec from '../container/AwardSec';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
			url: this.props.match.params.post,
		}
	}

	componentDidMount() {
		Work.getWork(this.state.url).then((work, err) => {
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
						<div className="about-banner" id="content">
							<div className="about-box abt-desc">
								<div className="container">
									<div className="row">
										<div className="col-lg-5 col-md-9" data-aos="fade-right">
											<Link to="/caseStudies"><h4 style={{ color: "white" }}><img alt="img" src={arrow4} /> CASE STUDIES</h4></Link>
											<img alt="img" className="dd-5" src={link.brand_logo} />
											<h1>{link.name}</h1>
											<p className="about-banner-data" dangerouslySetInnerHTML={{ __html: link.content }}></p>
										</div>

										<div className="col-lg-7 col-md-3">
											<Link to={"#"}><FaFacebook /></Link> <a href="https://www.linkedin.com/company/iquincesoft-consulting-services-pvt-ltd-/mycompany/"><FaLinkedin /></a> <a href="#"><FaTwitter /></a> <a href="#"><FaLink /></a>
											<h6><a href={link.pdf_file} target="_blank"><img alt="img" src={PDF} /> DOWNLOAD CASE STUDY</a></h6>
										</div>
									</div>
								</div>

							</div>

							<img alt="img" className="abt-img" width="100%" height="900px" src={link.img} />
							<img alt="img" className="abt-mob" width="100%" src={link.img} />
						</div>
					);
				})}
				{workJson && workJson.map(link => {
					return (
						<div className="case-tab">
							<Tabs>
								<TabList data-aos="fade-right">
									<Tab>ABOUT THE CLIENT</Tab>
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
										<li><Link to={"#"}>TECH STACK</Link></li>
										<li><Link to={"#"}>LARAVEL</Link></li>
										<li><Link to={"#"}>WORDPRESS</Link></li>
										<li><Link to={"#"}>REACT</Link></li>
										<li><Link to={"#"}>NODE</Link></li>
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
											<li><Link to={"#"}>TECH STACK</Link></li>
											<li><Link to={"#"}>LARAVEL</Link></li>
											<li><Link to={"#"}>WORDPRESS</Link></li>
											<li><Link to={"#"}>REACT</Link></li>
											<li><Link to={"#"}>NODE</Link></li>
										</ul>

										<h3>The Results</h3>
										<p>For the last decade, our client has worked in the digitisation space to help organisations transition from manual, paper-based forms and processes to automated, smart online systems. This automation results in long-term cost savings for their end client.</p>
										<p>They’ve been successful with their offerings and have contracts with several key government departments. When they contacted us to help scale their production team, we were happy to do so.</p>
										<p>Their biggest concerns had to do with the ability to scale their production team in a cost-efficient way, and to ensure that the quality was up to standard for their government clients.</p>
									</div>
								</div>
							</div>
							<h5 data-aos="fade-right"><a href={link.pdf_file} target="_blank"><img alt="img" src={casePDF} /> DOWNLOAD CASE STUDY</a></h5>
						</div>
					);
				})
				}
				<ReviewSec />

				<EuquireSec />

				<AwardSec />

				<Footer />
			</>
		);
	}
}

export default CaseStudyDescription;

// this.generatepdf = () => {
// 	var doc = new jsPDF("p", "pt", "a4");
// 	doc.html(document.querySelector("#content"), {
// 		callback: function (pdf) {
// 			pdf.save("Casestudy.pdf");
// 		}
// 	})
// 	doc.setTextColor(0, 0, 0);
// 	//doc.text(100, 25, 'USD.00');
// 	doc.setFillColor(0, 0, 0);
// 	doc.rect(100, 20, 10, 10, 'F')
// }
// generatepdf() {
// 	var pdf = new jsPDF('p', 'pt', 'letter');
// 	var source = document.querySelector('#content')[0];
// 	var specialElementHandlers = {
// 		'#bypassme': function (element, renderer) {
// 			return true
// 		}
// 	};

// 	var margins = {
// 		top: 50,
// 		left: 60,
// 		width: 545
// 	};
// 	pdf.fromHTML(
// 		source // HTML string or DOM elem ref.
// 		, margins.left // x coord
// 		, margins.top // y coord
// 		, {
// 			'width': margins.width // max width of content on PDF
// 			, 'elementHandlers': specialElementHandlers
// 		},
// 		function (dispose) {
// 			// dispose: object with X, Y of the last line add to the PDF
// 			// this allow the insertion of new lines after html
// 			pdf.save('html2pdf.pdf');
// 		}
// 	)