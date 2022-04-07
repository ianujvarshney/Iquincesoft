
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import FormPopup from '../../container/FormPopup';
import WorkSec from '../../container/WorkSec';
import EasySec from '../../container/EasySec';
import WebSec from '../../container/WebSec';
import ReviewSec from '../../container/ReviewSec';
import EuquireSec from '../../container/EuquireSec';
import AwardSec from '../../container/AwardSec';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import { PostCate } from '../../json/PostCate';
import 'react-accessible-accordion/dist/fancy-example.css';
import FAQ from '../../container/FAQ';
import AwardFormsec from '../../container/AwardFormsec';
import { FaCode } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';
import Partner from '../../container/Partner';


class Meanstack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            MeanStackJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getMeanStack().then((MeanStack, err) => {
            if (!err) {
                this.setState({
                    MeanStackJson: MeanStack,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { MeanStackJson } = this.state;
        const servSlide = {
            items: 1,
            responsive: {
                320: { items: 1, }
            },
            loop: true
        };

        const stackSlide = {
            items: 3,
            responsive: {
                1200: { items: 3, },
                768: { items: 3 },
                480: { items: 2 },
                320: { items: 1, }
            },
            loop: true
        };

        const culture = {
            items: 1,
            responsive: {
                480: { items: 2 },
                320: { items: 1, }
            },
            loop: true
        };

        return (
            this.state.Loading ? <div className="spinner"><TailSpin color="#864fe9" height={80} width={80} /></div> :
                <>
                    <Header headerClass={'serv-head'} />
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" data-aos="fade-up">
                                    <h1><strong>MEAN Stack Developer to Hire</strong><br /></h1>
                                    <ul>
                                        <p>What is my benefit in it?</p>
                                        <li>Reduce the operating cost</li>
                                        <li>Increase the overall revenues</li>
                                        <li>Smoothen the process</li>
                                        <li>Get regular updates on any and every project</li>
                                        <li>Get streamlined results as per your business goals. </li>
                                        <li>Highly skilled and professional MEAN Stack developers.  </li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>

                    <div className="culture-sec cr-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12" data-aos="fade-right">
                                    <h3>Why MEAN Stack?</h3>
                                    <p>You will be provided with the necessary space, tools, and resources to pursue your own ambitions, develop in the chosen direction and even create a personal expert brand.</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Fast and Scalable</h4>
                                        <p>MEAN Stack has several libraries, frameworks, and reusable modules. These modules help you develop software cycles fast and increase scalability. MEAN Stack offers result-driven and ready-to-use that save resources and time.  </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Reduced Development Cost</h4>
                                        <p>MEAN Stack is free and open-source. One can use it at no extra cost. Also, provide code reusability, thus saving time and effort, and thus facilitates fast developments deployments.
                                        </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Flexibility</h4>
                                        <p>MEAN Stack offers high development flexibility and efficiency. It facilitates easy task switching. Improves performances and increases collaborations with simplification of tasks. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Performance</h4>
                                        <p>MEAN Stack means Performance. Thanks to Node.JS</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Front-end Development</h4>
                                        <p>MEAN Stack is extensively used across businesses because of the engaging and attractive user interfaces. MEAN Stack is one of the most efficient and famous frontend technologies.  </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Fast and Scalable</h4>
                                        <p>MEAN Stack has several libraries, frameworks, and reusable modules. These modules help you develop software cycles fast and increase scalability. MEAN Stack offers result-driven and ready-to-use that save resources and time.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Reduced Development Cost</h4>
                                        <p>MEAN Stack is free and open-source. One can use it at no extra cost. Also, provide code reusability, thus saving time and effort, and thus facilitates fast developments deployments.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Flexibility</h4>
                                        <p>MEAN Stack offers high development flexibility and efficiency. It facilitates easy task switching. Improves performances and increases collaborations with simplification of tasks. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Performance</h4>
                                        <p>MEAN Stack means Performance. Thanks to Node.JS </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Front-end Development</h4>
                                        <p>MEAN Stack is extensively used across businesses because of the engaging and attractive user interfaces. MEAN Stack is one of the most efficient and famous frontend technologies.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>MEAN Stack Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>MEAN Stack Web Development</h4>
                                            <p>Are you looking for scalable MEAN Stack web development? We serve you with the same. We create fast, secure and feature-rich web apps. From Logistics, Edutech and eCommerce, we earn appreciation from industry leaders. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>MEAN Stack eCommerce Development</h4>
                                            <p>We serve the industry verticals with MEAN Stack eCommerce development services. We build intuitive, comprehensive and fast-paced eCommerce web portals.
                                                Connect with iQuinceSoft, if you wish to build a marketplace with features and an excellent user experience. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>MEAN Stack API Development</h4>
                                            <p>We configure APIs for mobile and web apps. We resolve business logic, data sharing, content, and communications issues.
                                            </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Migration</h4>
                                            <p>We migrate and port multiple enterprises to MEAN Stack frameworks. We ensure cost-effective migration of current platforms to MEAN Stack with analysis, testing and safety of data and information. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Maintenance and Support</h4>
                                            <p>App maintenance is not an area of concern now with iQuinceSoft. We offer support and maintenance services for fault analysis, upgrades, cover design updates and software maintenance with testing.
                                            </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>MEAN Stack Web Development</h4>
                                            <p>Are you looking for scalable MEAN Stack web development? We serve you with the same. We create fast, secure and feature-rich web apps. From Logistics, Edutech and eCommerce, we earn appreciation from industry leaders. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>MEAN Stack eCommerce Development</h4>
                                            <p>We serve the industry verticals with MEAN Stack eCommerce development services. We build intuitive, comprehensive and fast-paced eCommerce web portals.
                                                Connect with iQuinceSoft, if you wish to build a marketplace with features and an excellent user experience. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>MEAN Stack API Development</h4>
                                            <p>We configure APIs for mobile and web apps. We resolve business logic, data sharing, content, and communications issues.

                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Migration</h4>
                                            <p>We migrate and port multiple enterprises to MEAN Stack frameworks. We ensure cost-effective migration of current platforms to MEAN Stack with analysis, testing and safety of data and information. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Maintenance and Support</h4>
                                            <p>App maintenance is not an area of concern now with iQuinceSoft. We offer support and maintenance services for fault analysis, upgrades, cover design updates and software maintenance with testing.
                                            </p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5>
                    </div>

                    <Partner />

                    <EasySec />

                    <WebSec />

                    <WorkSec />

                    <FAQ />

                    <div className="culture-sec insight-sec">
                        <h3>Featured Insights</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <OwlCarousel options={culture}>
                                        {MeanStackJson && MeanStackJson.map(MeanStackJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{MeanStackJson.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: MeanStackJsonS.content }}></p>
                                                    <a href="#">Read More</a>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {MeanStackJson && MeanStackJson.map((MeanStackJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={MeanStackJsonS.id}>
                                                        <h4>{MeanStackJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: MeanStackJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${MeanStackJsonS.slug}`} >READ MORE </Link>
                                                    </div>
                                                </div>

                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <FormPopup />
                        <h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5>
                    </div>

                    <ReviewSec />

                    <EuquireSec />

                    <AwardSec />

                    <Footer />
                </>
        );
    }
}

export default Meanstack;