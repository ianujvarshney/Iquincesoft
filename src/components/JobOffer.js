
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Joboffers } from '../json/JobOffers';

class JobOffer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			joblinks: [],
			joblinks2: [],
			url: this.props.location,
			lastItem: "_blank",
			thePath: '_blankPath',
		}
		var thePath = this.props.location.pathname;
		console.log("path", thePath);
		const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1);

		console.log("lastITem1==>", this.state.lastItem);
	}

	componentDidMount() {
		Joboffers.getJoboffers().then((menus, err) => {
			if (!err) {
				console.log("menus==>", menus)
				this.setState({
					joblinks: menus,
				});
			}
		})

		Joboffers.getJoboffersDetails('react-js').then((menus, err) => {
			if (!err) {
				console.log("lastItem==>", this.state.lastItem)
				this.setState({
					joblinks2: menus,
				});
			}
		})

	}



	// getnodejs = (data) => {
	// 	return (
	// 		<>
	// 			{this.state.joblinks.filter(joblinks => this.state.joblinks.includes(data)).map(link => (
	// 				this.setState({
	// 					joblinks2: link,
	// 				}),
	// 				<h1 style={{ color: 'black' }}>{this.state.joblinks2.name}</h1>
	// 			))

	// 			}
	// </>
	// );


	render() {
		const { joblinks, joblinks2 } = this.state;
		return (
			<>
				<Header headerClass={'job-head'} />

				<div className="job-sec">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<Tabs>
									<TabList>
										<div className="row">
											<div className="col-lg-3 col-md-3" data-aos="fade-up"><h3>Job Offers</h3></div>
											<div className="col-lg-9 col-md-9">
												<Tab> All </Tab>
												{joblinks && joblinks.map(link => {
													return (
														<Tab ><Link to={`/jobOffer/${link.cateSlug}`}>{link.cate}</Link></Tab>
													);
												})}
											</div>
										</div>
									</TabList>

									<TabPanel>
										<div className="row">
											{joblinks && joblinks.map(link => {
												return (
													<div className="col-lg-4 col-md-6">
														<Link to={'/joboffer'}>
															<div className="job-box">
																<h4>{link.name}</h4>
																<p dangerouslySetInnerHTML={{ __html: link.content }}></p>
																<p>UoP: 6,200 – 11,300 zł brutto</p>
																<h6>{link.Address}</h6>
															</div>
														</Link>
													</div>
												)
											})}
										</div>
									</TabPanel>

								</Tabs>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</>
		);
	}
}

export default JobOffer;
