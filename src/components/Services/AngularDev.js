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
import AwardFormsec from '../../container/AwardFormsec';
import FAQ from '../../container/FAQ';
import { FaCode } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner'
import Partner from '../../container/Partner';

class AngularDev extends Component {
    constructor(props) {
        super(props)
        this.state = {
            InsightsJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getAngular().then((Insights, err) => {
            if (!err) {
                this.setState({
                    InsightsJson: Insights,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { InsightsJson } = this.state;
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
            this.state.Loading ? <div className="spinner"><TailSpin color="#00ccff" height={80} width={80} /></div> :
                <>
                    <Header headerClass={'serv-head'} />
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" data-aos="fade-up">
                                    <h1><strong>Angular Developers to Hire</strong><br /></h1>
                                    <ul>
                                        <p>What is my benefit in it?</p>
                                        <li>Reduce the operating cost</li>
                                        <li>Increase the overall revenues</li>
                                        <li>Smoothen the process</li>
                                        <li>Get regular updates on any and every project</li>
                                        <li>Get streamlined results as per your business goals. </li>
                                        <li>Highly skilled and professional Angular developers.  </li>
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
                                    <h3>Why Choose Angular?</h3>
                                    <p>You will be provided with the necessary space, tools, and resources to pursue your own ambitions, develop in the chosen direction and even create a personal expert brand.</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Better readability</h4>
                                        <p>Consistency in coding makes it easy to read code. It enhances readability and thus increases the overall productivity. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Easy Maintenance</h4>
                                        <p>The decoupled components are replaceable with better implementations. It increases the efficient code maintenance and update.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Google Supported</h4>
                                        <p>Google supports Angular. That makes Angular scalable in the long run. Google uses Angular and looks forward to the scalability options.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Typescript</h4>
                                        <p>Typescript is a scripting language that ensures higher security. It helps catch and remove errors at the initial phase of the process. It provides better navigation and auto-completion services.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>POJO </h4>
                                        <p>no additional getter and setter are needed. Angular uses Plain Old JavaScript Object (POJO). That enables object manipulation with all traditional JavaScript functionalities. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Simplified MVC Pattern</h4>
                                        <p>Easy development. Simplified MVC architecture thus makes writing getter and setters needless. Less coding, with light and fast apps. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Better readability</h4>
                                        <p>Consistency in coding makes it easy to read code. It enhances readability and thus increases the overall productivity. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Easy Maintenance</h4>
                                        <p>The decoupled components are replaceable with better implementations. It increases the efficient code maintenance and update.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Google Supported</h4>
                                        <p>Google supports Angular. That makes Angular scalable in the long run. Google uses Angular and looks forward to the scalability options.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Typescript</h4>
                                        <p>Typescript is a scripting language that ensures higher security. It helps catch and remove errors at the initial phase of the process. It provides better navigation and auto-completion services. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>POJO </h4>
                                        <p>Fno additional getter and setter are needed. Angular uses Plain Old JavaScript Object (POJO). That enables object manipulation with all traditional JavaScript functionalities. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Simplified MVC Pattern</h4>
                                        <p>Easy development. Simplified MVC architecture thus makes writing getter and setters needless. Less coding, with light and fast apps. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Angular Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>App Development</h4>
                                            <p>We reuse codes and components. Thus, it ensures faster application development. We create applications that give high-end UX standards. Connect us anytime to get high-end lightening quick applications.
                                            </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>API Development</h4>
                                            <p>Get Angular API development services. We offer custom business-specific API solutions that cover the implementation, deployment, documentation, and maintenance of APIs. We are specialists in developing sound API architectures and quality security protocols.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Real-Time Apps</h4>
                                            <p>Need real-time apps like Chat Apps and Instant Messengers with AngularFire or Socket? We offer custom real-time apps with automation services.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Migration</h4>
                                            <p>Migrate your UI to Angular with iQuinceSoft expertise. Connect with us for a smooth process. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Consulting</h4>
                                            <p>We help your business by developing Angular apps with PWA capabilities and Unit testing Angular apps. We serve your business with our ability to identify, predict and suit our clients' ongoing and upcoming needs. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Dedicated Angular Developers: Your remote in-house Team</h4>
                                            <p>Use their expertise to advantage your business. Scale your business to newer heights with the help of our dedicated remote Angular developers, who can serve as your in-house team.
                                            </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>App Development</h4>
                                            <p>We reuse codes and components. Thus, it ensures faster application development. We create applications that give high-end UX standards. Connect us anytime to get high-end lightening quick applications.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>API Development</h4>
                                            <p>Get Angular API development services. We offer custom business-specific API solutions that cover the implementation, deployment, documentation, and maintenance of APIs. We are specialists in developing sound API architectures and quality security protocols.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Real-Time Apps</h4>
                                            <p>Need real-time apps like Chat Apps and Instant Messengers with AngularFire or Socket? We offer custom real-time apps with automation services.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Migration</h4>
                                            <p>Migrate your UI to Angular with iQuinceSoft expertise. Connect with us for a smooth process. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Consulting</h4>
                                            <p>We help your business by developing Angular apps with PWA capabilities and Unit testing Angular apps. We serve your business with our ability to identify, predict and suit our clients' ongoing and upcoming needs. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Dedicated Angular Developers: Your remote in-house Team</h4>
                                            <p>Use their expertise to advantage your business. Scale your business to newer heights with the help of our dedicated remote Angular developers, who can serve as your in-house team.
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
                                        {InsightsJson && InsightsJson.map(InsightsJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{InsightsJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: InsightsJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${InsightsJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {InsightsJson && InsightsJson.map((InsightsJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={InsightsJsonS.id}>
                                                        <h4>{InsightsJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: InsightsJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${InsightsJsonS.slug}`} >READ MORE </Link>
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

export default AngularDev;

