
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import servBL from
import Header from './Header';
import Footer from './Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Inspired } from '../json/Inspired';
import arrow2 from '../images/arrow2.png';
import caseImg4 from '../images/case-img4.jpg';
import InfiniteScroll from "react-infinite-scroll-component";
import { TailSpin } from 'react-loader-spinner'

class Blog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			InsightsJson: [],
			InsightsJson2: [],
			InsightsJson3: [],
			Loading: true,
			hash: false,
			start: 1,
			count2: 3,

		}
	}
	componentDidMount() {

		Inspired.getInspired().then((Insights, err) => {
			if (!err) {
				this.setState({
					InsightsJson: Insights,
					Loading: false,
				});
			}
		});

		// Inspired.getInspired2(this.state.count, this.state.start).then((Insights2, err) => {
		// 	if (!err) {
		// 		// console.log("hello", Insights2)
		// 		this.setState({
		// 			// InsightsJson2: Insights2,
		// 			Loading: false,
		// 		});
		// 	}
		// });


	}
	// Apple = (page) => {
	// 	// fetch("https://jsonplaceholder.typicode.com/photos").then()
	// 	// Inspired.getInspired3(this.state.count2, this.state.start).then((Insights2, err) => {
	// 	// 	// if (!err && Number(Insights2.length) >= 9) {
	// 	// 	// 	this.setState({
	// 	// 	// 		InsightsJson2: Insights2,
	// 	// 	// 		start: Number(this.state.start) + Number(1),
	// 	// 	// 	});
	// 	// 	// }
	// 	// 	console.log("length==", Insights2.length)
	// 	// 	if (Number(this.state.count2) >= Insights2.length) {
	// 	// 		this.setState({ hasMore: false });
	// 	// 		return;
	// 	// 	}
	// 	// 	setTimeout(() => {
	// 	// 		if (Number(this.state.count2) <= Insights2.length) {
	// 	// 			console.log("data=", Insights2)
	// 	// 			this.setState({
	// 	// 				InsightsJson2: Insights2,
	// 	// 				count2: Number(this.state.count2) + Number(1),
	// 	// 			});
	// 	// 		}
	// 	// 	}, 1000);
	// 	// })

	// 	// else {
	// 	// 	console.log("hash = false")
	// 	// 	this.setState({
	// 	// 		hashMore: false
	// 	// 	})
	// 	// }
	// 	// console.log("insight == ", this.state.InsightsJson2);

	// }
	fetchMoreData = () => {
		fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
			.then((res) => res.json())
			.then((json) => {
				console.log("freez: " + json);
				// this.setState({ InsightsJson: json });

				if (this.state.count2 >= 38) {
					this.setState({ hasMore: false });
					return;
				}
				setTimeout(() => {
					if (this.state.count2 <= 38) {
						this.setState({
							count: this.state.count2 + 5,
						});
					}
				}, 500);
			});
	};





	render() {

		console.log(this.state);
		const { InsightsJson, InsightsJson2 } = this.state;

		return (
			this.state.Loading ? <div className="spinner"><TailSpin color="#864fe9" height={80} width={80} /></div> :
				<>

					<Header headerClass={'case-head'} />
					{InsightsJson && InsightsJson.map((InsightsJsonS, index) => {
						return (
							<div className="blog-banner">
								<div className="container">
									<div className="row">
										<div className="col-lg-2"></div>
										<div className="col-lg-8 col-md-12" data-aos="fade-up" key={index}>
											<h1>{InsightsJsonS.name}</h1>
											{/* <p><span>Get a bi-weekly email with <strong>the most popular stories</strong></span></p> */}
											<p dangerouslySetInnerHTML={{ __html: InsightsJsonS.content }}></p>
											<div className="in-box"><input className="box" type="text" name="" placeholder="Supercharge your brain" /> <a href="#">Let's Learn</a></div>
										</div>
									</div>
								</div>
							</div>
						);
					})}

					<div className="blog-sec">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 col-md-12">
									<h2>Recent articles from our web development blog</h2>
									<Tabs>
										<TabList>
											<div className="row">
												<div className="col-lg-10 col-md-9">
													<Tab>All Posts (500)</Tab>
													<Tab>CTO's Guidebook (103)</Tab>
													<Tab>Developer Stories (179)</Tab>
													<Tab>Development Process (42)</Tab>
													<Tab>Product Owner's Kit (91)</Tab>
													<Tab>Software Architecture (25)</Tab>
													<Tab>Frontend (53)</Tab>
													<Tab>Node.js (33)</Tab>
													<Tab>PHP (34)</Tab>
													<Tab>Quality Assurance (42)</Tab>
													<Tab>Mobile (18)</Tab>
												</div>

												<div className="col-lg-2 col-md-3"><input className="box" type="text" name="" placeholder="Search" /></div>
											</div>
										</TabList>

										<TabPanel data-aos="fade-down" >
											<InfiniteScroll
												// height={300}
												dataLength={InsightsJson2.length}
												next={this.fetchMoreData}
												// threshold={100}
												// loadMore={() => this.Apple()}
												hashMore={true}
												// scrollThreshold={0.8}
												loader={<p>Loading....</p>}
											// refreshFunction={this.refresh}
											// scrollableTarget="scrollableDiv"
											>
												<div className="row case-txt" >
													{InsightsJson2.map(InsightsJson2S => {
														return (
															// <div className="col-lg-4 col-md-6">

															// 	<img width="350px" height="300px" src={InsightsJson2S.thumbnailUrl} />
															// 	<div className="case-box">
															// 		{/* <h5><img src={InsightsJson2S.author_profile} /> <span><strong>{InsightsJson2S.author_name}</strong> QA Specialist</span></h5> */}
															// 		{/* <h3>{InsightsJson2S.name}</h3> */}
															// 		{/* <h4>
															// <Link to={`/PostPage/${InsightsJson2S.slug}`} >READ MORE <img src={arrow2} /></Link>
															// 	Oct 10, 2021</h4> */}

															// 	</div>
															// </div>
															InsightsJson2.map((item) => (
																<ol key={item.id}>
																	Title : {item.title}, Img Url : {item.thumbnailUrl},
																</ol>
															))
														);
													})}
												</div>
											</InfiniteScroll>
											{/* <div className="read-btn"><a href="#">READ OLDER POSTS <img src={arrow2} /></a></div> */}
										</TabPanel>

										<TabPanel>
											<h3>Any content 2</h3>
										</TabPanel>

										<TabPanel>
											<h3>Any content 3</h3>
										</TabPanel>

										<TabPanel>
											<h3>Any content 4</h3>
										</TabPanel>

										<TabPanel>
											<h3>Any content 5</h3>
										</TabPanel>

										<TabPanel>
											<h3>Any content 6</h3>
										</TabPanel>

										<TabPanel>
											<h3>Any content 7</h3>
										</TabPanel>

										<TabPanel>
											<h3>Any content 8</h3>
										</TabPanel>

										<TabPanel>
											<h3>Any content 9</h3>
										</TabPanel>

										<TabPanel>
											<h3>Any content 10</h3>
										</TabPanel>

										<TabPanel>
											<h3>Any content 11</h3>
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
export default Blog;

