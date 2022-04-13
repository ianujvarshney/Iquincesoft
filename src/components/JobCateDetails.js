
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Joboffers } from '../json/JobOffers';

class jobCateDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            joblinks: [],
            joblinks2: [],
            url: this.props.location,
            lastItem: '',
            thePath: this.props.location.pathname,
        }
        // const a = this.state.thePath.substr(this.state.thePath.lastIndexOf('/'));
        // var t = this.state.thePath.substr(2, 5);
        // console.log("path==>", t);
        // console.log("path==>", t);
        // this.setState({ lastItem: this.state.thePath.substr(2, 4) });
        // console.log("b===>", this.state.lastItem);
    }

    componentDidMount() {
        Joboffers.getJoboffers().then((menus, err) => {
            if (!err) {
                this.setState({
                    joblinks: menus,
                });
            }
        })
        const a = this.state.thePath.substr(this.state.thePath.lastIndexOf('/') + 1);
        Joboffers.getJoboffersDetails(a).then((menus, err) => {
            if (!err) {
                console.log("lastItem=>", a);

                this.setState({
                    joblinks2: menus,
                });
            }
        })
    }

    // getnodejs = (data) => {
    //     return (
    //         <>
    //             {this.state.joblinks.filter(joblinks => this.state.joblinks.includes(data)).map(link => (
    //                 this.setState({
    //                     joblinks2: link,
    //                 }),
    //                 <h1 style={{ color: 'black' }}>{this.state.joblinks2.name}</h1>
    //                 // console.log(this.state.joblinks2.name)
    //             ))

    //             }
    //         </>
    //     );
    // }

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
                                                        <Tab ><Link to={`/jobOffer/${link.slug}`}>{link.name}</Link></Tab>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </TabList>

                                    <TabPanel>
                                        <div className="row">
                                            {joblinks2 && joblinks2.map(link => {
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

export default jobCateDetails;