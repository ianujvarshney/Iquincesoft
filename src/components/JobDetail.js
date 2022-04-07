
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

import jobImg from '../images/job-img.png';
import jobImg1 from '../images/job-img1.png';
import jobImg2 from '../images/job-img2.png';
import jobImg3 from '../images/job-img3.png';
import jobImg4 from '../images/job-img4.png';
import jobImg5 from '../images/job-img5.png';

class JobDetail extends Component {
	render() {
		return (
			<>
				<Header headerClass={'job-head'} />

				<div className="job-detail">
					<div className="container">
						<div className="row">
							<div className="col-lg-1"></div>
							<div className="col-lg-5 col-md-6"><img width="100%" src={jobImg} /></div>
							<div className="col-lg-2"></div>
							<div className="col-lg-4 col-md-6">
								<div className="job-dt-box" data-aos="fade-up">
									<h4>Node.js Developer</h4>
									<p>B2B: 7,500 – 13,500 zł + VAT</p>
									<p>UoP: 6,200 – 11,300 zł brutto</p>
									<h6><span>Full Remote</span> Access to the office in Gliwice <a href="#">Apply Now</a></h6>
									<h5>Requirements</h5>
									<h5>Benefits</h5>
									<h5>Recruitment process</h5>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="job-txt">
					<div className="container">
						<div className="row" data-aos="fade-down">
							<div className="col-lg-8 col-md-12">
								<h3>We expect from you :</h3>
								<ul>
									<li>a minimum of three years of experience as a DevOps Engineer or similar</li>
									<li>excellent knowledge of containers</li>
									<li>knowledge of how to build and maintain infrastructure in the cloud (Amazon Web Services, Google Cloud Platform, Azure)</li>
									<li>embracing tools such as Ansible, Terraform</li>
									<li>experience in working with tools for Continuous Integration and Continuous Delivery</li>
									<li>communicate freely with the client in English</li>
									<li>just like us, you value openness, constant development of skills and great atmosphere above all else</li>
									<li>communicate freely with the client in English</li>
								</ul>
							</div>
						</div>

						<div className="row" data-aos="fade-right">
							<div className="col-lg-10 col-md-12">
								<h4>You don't meet <span>all the requirements?</span> Try it anyway!</h4>
							</div>
						</div>

						<div className="row">
							<div className="col-lg-8 col-md-12" data-aos="fade-down">
								<h3>It is worth joining us because:</h3>
								<ul>
									<li>you will be part of a stable and organized organization, with the atmosphere of a small company, so if you value an intimate atmosphere, but want to work in a place with a reputation and know-how, this offer is for you</li>
									<li>we offer participation in projects related to Cloud Native, Serverless</li>
									<li>we give you the opportunity to work with very good DevOps and programmers from whom you can learn a lot and share your knowledge with them</li>
									<li>we use proven technologies that are up-to-date - even if you have not used all of them, you can make up for it with us!</li>
									<li>we focus on development by organizing training both on our own and using the services of leading training companies (we cooperate with Bottega IT Minds, among others)</li>
									<li>we choose interesting projects that we create from scratch and we select tools for them, and our clients are mostly people who understand technology</li>
									<li>Your satisfaction and job satisfaction are the most important to us and we can take care of them</li>
									<li>we know the value of a good atmosphere and a well-coordinated team at work, so we do not forget about integration, both live and on Slack</li>
									<li>we give the opportunity to co-create a <a href="#">Linkletter</a> - our original newsletter for passionate programmers</li>
									<li>we actively run a <a href="#">corporate blog</a> where our employees can publish their own articles on technology and business</li>
								</ul>

								<h3>Recruitment process</h3>
								<p>You send us your CV and what next?</p>

								<div className="row">
									<div className="col-lg-6 col-md-6" data-aos="fade-up">
										<h5>We arrange an initial interview</h5>
										<img width="100%" src={jobImg1} />
										<p>Our recruiters will be happy to talk about your professional experience and expectations towards The Software House. If you have doubts or questions - go ahead, this conversation is exactly for that.</p>
									</div>
									<div className="col-lg-6 col-md-6"><img width="100%" src={jobImg1} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>You are given a test assignment</h5>
										<img width="100%" src={jobImg2} />
										<p>If we like each other after the conversation, you'll get a job from us, because we just want to see how you approach solving problems. You will set the deadline individually with the recruiters.</p>
									</div>
									<div className="col-lg-6 col-md-6" data-aos="fade-down"><img width="100%" src={jobImg2} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6" data-aos="fade-up">
										<h5>We invite you to an interview</h5>
										<img width="100%" src={jobImg3} />
										<p>End of blind date, fire up the camera because it's time to see yourself virtually. Of course, everything is safe on Google Meets. In addition to people from the HR department, you will meet your future superiors or team leaders who will redirect the conversation to more technical tracks.</p>
									</div>
									<div className="col-lg-6 col-md-6"><img width="100%" src={jobImg3} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>Welcome to iQuinceSOFT</h5>
										<img width="100%" src={jobImg4} />
										<p>Response 200: success! You will get the answer along with the financial proposal after a few days.</p>
									</div>
									<div className="col-lg-6 col-md-6" data-aos="fade-down"><img width="100%" src={jobImg4} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6" data-aos="fade-up">
										<h5>Failed to?</h5>
										<img width="100%" src={jobImg5} />
										<p>Regardless of the result of the recruitment, you will receive extensive feedback from us, which could still be a bit of work. Don't worry - we don't say "no" forever because we value ambitious people a lot. We have quite a few people on board that we've hired for the second pass, so never get discouraged and try again later.</p>
									</div>
									<div className="col-lg-6 col-md-6"><img width="100%" src={jobImg5} /></div>
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

export default JobDetail;