
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
import { serviceapi } from '../../json/serviceapi';

import 'react-accessible-accordion/dist/fancy-example.css';
import FAQ from '../../container/FAQ';
import AwardFormsec from '../../container/AwardFormsec';

import { FaCode } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';
import Partner from '../../container/Partner';


class MernStack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            MernStackJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getMernStack().then((MernStack, err) => {
            if (!err) {
                this.setState({
                    MernStackJson: MernStack,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { MernStackJson } = this.state;
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
                                    <h1><strong>Hire MERN Stack Developer</strong><br /></h1>
                                    <ul>
                                        <p>What is my benefit in it?</p>
                                        <li>Reduce the operating cost</li>
                                        <li>Increase the overall revenues</li>
                                        <li>Smoothen the process</li>
                                        <li>Get regular updates on any and every project</li>
                                        <li>Get streamlined results as per your business goals. </li>
                                        <li>Highly skilled and professional MERN developers.  </li>
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
                                    <h3>Why MERN Stack?</h3>
                                    <p>Several virtues make MERN Stack a preferred option. Some of the reasons are listed below:</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Highly Flexible</h4>
                                        <p>A developer can easily move the code from NodeJS towards React.js with no technical glitches. This is highly flexible and reduces the overall app development time—this help developer with ease and reduce their efforts. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open-Source</h4>
                                        <p>No license fee is required. Developers can build highly scalable, feature-rich and dynamic apps for industry verticals, as it offers a set of technologies for no cost</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Better Security</h4>
                                        <p>MongoDB and NodeJS offer eminent security tools. The developers use these technologies to build secure applications that engage high traffic. These high-security standards prevent data breaches, hacks and information leaks. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Front-end Development</h4>
                                        <p>Engaging and attractive user interfaces is what MERN Stack offers. The stack powers one of the most responsive, consistent and interactive platforms for business domains. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Single-page App Development</h4>
                                        <p>build fully-functional and cutting-edge Single Page Applications (SPAs) and enjoy their high-end user experience using React.js. Developers use React.js to create specific and customized SPAs that help businesses. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>No SQL</h4>
                                        <p>NoSQL property of MongoDB ensures an easy process with MERN Stack. It offers hassle-free migration and data accuracy.  </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Highly Flexible</h4>
                                        <p>A developer can easily move the code from NodeJS towards React.js with no technical glitches. This is highly flexible and reduces the overall app development time—this help developer with ease and reduce their efforts. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open-Source</h4>
                                        <p>No license fee is required. Developers can build highly scalable, feature-rich and dynamic apps for industry verticals, as it offers a set of technologies for no cost</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Better Security</h4>
                                        <p>MongoDB and NodeJS offer eminent security tools. The developers use these technologies to build secure applications that engage high traffic. These high-security standards prevent data breaches, hacks and information leaks. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Front-end Development</h4>
                                        <p>Engaging and attractive user interfaces is what MERN Stack offers. The stack powers one of the most responsive, consistent and interactive platforms for business domains.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Single-page App Development</h4>
                                        <p>build fully-functional and cutting-edge Single Page Applications (SPAs) and enjoy their high-end user experience using React.js. Developers use React.js to create specific and customized SPAs that help businesses. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>No SQL</h4>
                                        <p>NoSQL property of MongoDB ensures an easy process with MERN Stack. It offers hassle-free migration and data accuracy.  </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>MERN Stack Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>MERN Stack Web Development</h4>
                                            <p>Are you looking for scalable MERN Stack web development? We serve you with the same. We create fast, secure and feature-rich web apps. From Logistics, Edutech and eCommerce, we earn appreciation from industry leaders.
                                            </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>MERN Stack eCommerce Development</h4>
                                            <p>We serve the industry verticals with MERN Stack eCommerce development services. We build intuitive, comprehensive and fast-paced eCommerce web portals.
                                                Connect with iQuinceSoft, if you wish to build a marketplace with features and an excellent user experience. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>MERN Stack API Development</h4>
                                            <p>We configure APIs for mobile and web apps. We resolve business logic, data sharing, content, and communications issues.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Migration</h4>
                                            <p>We migrate and port multiple enterprises to MERN Stack frameworks. We ensure cost-effective migration of current platforms to MERN Stack with analysis, testing and safety of data and information.
                                            </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Maintenance and Support</h4>
                                            <p>App maintenance is not an area of concern now with iQuinceSoft. We offer support and maintenance services for fault analysis, upgrades, cover design updates and software maintenance with testing.  </p>
                                        </div>


                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>MERN Stack Web Development</h4>
                                            <p>Are you looking for scalable MERN Stack web development? We serve you with the same. We create fast, secure and feature-rich web apps. From Logistics, Edutech and eCommerce, we earn appreciation from industry leaders.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>MERN Stack eCommerce Development</h4>
                                            <p>We serve the industry verticals with MERN Stack eCommerce development services. We build intuitive, comprehensive and fast-paced eCommerce web portals.

                                                Connect with iQuinceSoft, if you wish to build a marketplace with features and an excellent user experience. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>MERN Stack API Development</h4>
                                            <p>We configure APIs for mobile and web apps. We resolve business logic, data sharing, content, and communications issues.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Migration</h4>
                                            <p>We migrate and port multiple enterprises to MERN Stack frameworks. We ensure cost-effective migration of current platforms to MERN Stack with analysis, testing and safety of data and information.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Maintenance and Support</h4>
                                            <p>App maintenance is not an area of concern now with iQuinceSoft. We offer support and maintenance services for fault analysis, upgrades, cover design updates and software maintenance with testing.  </p>
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
                                        {MernStackJson && MernStackJson.map(MernStackJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{MernStackJson.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: MernStackJsonS.content }}></p>
                                                    <a href="#">Read More</a>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {MernStackJson && MernStackJson.map((MernStackJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={MernStackJsonS.id}>
                                                        <h4>{MernStackJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: MernStackJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${MernStackJsonS.slug}`} >READ MORE </Link>
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

export default MernStack;