import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Inspired } from '../json/Inspired';
import { TailSpin } from 'react-loader-spinner';
import arrow2 from '../images/arrow2.png';
import InfiniteScroll from "react-infinite-scroll-component";

class BlogTabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            InsightsJson: [],
            page: 1,
            data: [],
            data2: [],
            Loading: true,
            allpost: '',
            VisitedLink: "",
            thePath: this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1),
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
        Inspired.getcate().then((Insights, err) => {
            if (!err) {
                this.setState({
                    allpost: Insights[0].blogpost,
                    catedata: Insights,
                    Loading: false,
                });
            }
        });
        Inspired.getInspired2(this.state.page).then((Insights, err) => {
            if (!err) {
                this.setState({
                    data2: Insights,
                    Loading: false,
                });
            }
        });
        Inspired.getInspired3(this.state.page, this.state.thePath).then((Insights, err) => {
            if (!err) {
                this.setState({
                    data: Insights,
                    Loading: false,
                });
            }
        });
    }
    componentDidUpdate(preprops, prestate) {
        const oldURL = preprops.location.pathname;
        const oldURLString = oldURL.substr(oldURL.lastIndexOf('/') + 1);
        const newUrl = this.props.location.pathname;
        const newUrlString = newUrl.substr(newUrl.lastIndexOf('/') + 1);
        if (oldURLString !== newUrlString) {
            Inspired.getInspired3(1, newUrlString).then((Insights, err) => {
                if (!err) {
                    this.setState({
                        data: Insights,
                        thePath: newUrlString,
                        Loading: false,
                    });
                }
            });
        }
    }

    fetch = (pageNumber) => {
        const a = this.state.thePath.substr(this.props.location.pathname.lastIndexOf('/') + 1);
        Inspired.getInspired3(this.state.page + 1, a).then((Insights, err) => {
            if (!err) {
                this.setState({
                    data2: this.state.data.concat(Insights),
                    Loading: false,
                    page: this.state.page + 1,
                });
            }
        });
    };


    fetchMoreData = (page) => {
        return this.fetch(page);
    };


    render() {

        const { InsightsJson, data, page, data2, catedata, thePath, allpost } = this.state;

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
                                                    <Tab>All Posts ({allpost})</Tab>
                                                    {catedata && catedata.map((dataS, index) => {
                                                        return (
                                                            dataS.cateslug == thePath ? <p className="para"><Link to={`/blog/${dataS.cateslug}`}>{dataS.catename} ({dataS.size})</Link></p> :
                                                                <p><Link to={`/blog/${dataS.cateslug}`}>{dataS.catename} ({dataS.size})</Link></p>
                                                        );
                                                    })}
                                                </div>
                                                <div className="col-lg-2 col-md-3"><input className="box" type="text" name="" placeholder="Search" /></div>
                                            </div>
                                        </TabList>

                                        <TabPanel data-aos="fade-down" >
                                            <InfiniteScroll style={{ overflow: 'hidden' }}
                                                dataLength={data.length}
                                                next={() => this.fetchMoreData(page)}
                                                hasMore={true}
                                            >
                                                <div className="row case-txt" >
                                                    {data.map(dataS => {
                                                        return (
                                                            <div className="col-lg-4 col-md-6">
                                                                <div className="case-main">
                                                                    <a href="#"><h4>Read More</h4> <img width="100%" src={dataS.img} /></a>
                                                                    <div className="case-box">
                                                                        <h5><img src={dataS.author_profile} /> <span><strong>{dataS.author_name}</strong> QA Specialist</span></h5>
                                                                        <h3>{dataS.name}</h3>
                                                                        <h4><Link to={`/PostPage/${dataS.slug}`} >READ MORE <img src={arrow2} /></Link>Oct 10, 2021</h4>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        );
                                                    })}
                                                </div>
                                            </InfiniteScroll>

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
export default BlogTabs;

