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


class CodeIgniter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CodeigniterJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        var id = 20;
        PostCate.getCodeigniter(id).then((Codeigniters, err) => {
            if (!err) {
                this.setState({
                    CodeigniterJson: Codeigniters,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { CodeigniterJson } = this.state;
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
                                    <h1><strong>Hire CodeIgniter Developers</strong><br /></h1>
                                    <ul>
                                        <p>What is my benefit in it?</p>
                                        <li>Reduce the operating cost</li>
                                        <li>Increase the overall revenues</li>
                                        <li>Smoothen the process</li>
                                        <li>Get regular updates on any and every project</li>
                                        <li>Get streamlined results as per your business goals. </li>
                                        <li>Highly skilled and professional CodeIgniter developers.  </li>
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
                                    <h3>Why CodeIgniter?</h3>
                                    <p>CodeIgniter developers are the most sought after professionals because the CodeIgniter is:</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Secured Framework: </h4>
                                        <p>It keeps you safe against CSRF and XSS attacks because of the in-built protection.  </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>User-friendly Interface:</h4>
                                        <p>CodeIgniter offers a user-friendly interface. It offers vibrant functionality and a responsive platform.
                                        </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customization:</h4>
                                        <p>It easily customizes existing libraries, shortcodes, and writing newer libraries. Thus, it is preferred across the available PHP frameworks.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Less Coding needed:</h4>
                                        <p>It needs short and more petite codes. Thus offers fast development.
                                        </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Sound Performance: </h4>
                                        <p>lightweight and a better performer across the frameworks. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>SEO Friendly:</h4>
                                        <p>It helps your website rank faster on the SERPs.  </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Secured Framework: </h4>
                                        <p>It keeps you safe against CSRF and XSS attacks because of the in-built protection.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>User-friendly Interface:</h4>
                                        <p>CodeIgniter offers a user-friendly interface. It offers vibrant functionality and a responsive platform.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customization:</h4>
                                        <p>It easily customizes existing libraries, shortcodes, and writing newer libraries. Thus, it is preferred across the available PHP frameworks.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Less Coding needed:</h4>
                                        <p>It needs short and more petite codes. Thus offers fast development.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Sound Performance: </h4>
                                        <p>lightweight and a better performer across the frameworks. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>SEO Friendly:</h4>
                                        <p>It helps your website rank faster on the SERPs.  </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>CodeIgniter Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Web Development</h4>
                                            <p>We create beautiful websites with the help of the CI framework. We create websites across the length and breadth of industries like eCommerce, brands and profiles.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>App Development</h4>
                                            <p>Create scalable, secured and error-free applications with iQuinceSoft. We serve your business goals with a customized, tailor-made app to help you grow. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Cloud Solutions</h4>
                                            <p>We offer cloud solutions to businesses. We excel in a wide range of services, from small app development to massive web systems. We are experienced and skilled enough to serve with the need-based cloud solutions. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Migration</h4>
                                            <p>We help you migrate your apps from the peer frameworks to CodeIgniter with no loss of any data or functionality.
                                            </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Customized Database Development</h4>
                                            <p>We create the need-based customized database with the help of popular databases like microsoft sql server, db2, oracle and many more.
                                            </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>CodeIgniter Unit and Automated Testing</h4>
                                            <p>We create and make sure to develop you error-free apps. we use selenium as well to run automated tests as well.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Maintenance & Support</h4>
                                            <p>You stay focused on business; we'll keep your apps error-free. we will take care of the issues, security, performance, backups and bug removal with server updates.   </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Consulting</h4>
                                            <p>We help you to get the benefits of CodeIgniter into your business. We offer project consultations and reviews of the current applications and projects.    </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Web Development</h4>
                                            <p>We create beautiful websites with the help of the CI framework. We create websites across the length and breadth of industries like eCommerce, brands and profiles.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>App Development</h4>
                                            <p>Create scalable, secured and error-free applications with iQuinceSoft. We serve your business goals with a customized, tailor-made app to help you grow. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Cloud Solutions</h4>
                                            <p>We offer cloud solutions to businesses. We excel in a wide range of services, from small app development to massive web systems. We are experienced and skilled enough to serve with the need-based cloud solutions.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Migration</h4>
                                            <p>We help you migrate your apps from the peer frameworks to CodeIgniter with no loss of any data or functionality.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Customized Database Development</h4>
                                            <p>We create the need-based customized database with the help of popular databases like microsoft sql server, db2, oracle and many more.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>CodeIgniter Unit and Automated Testing</h4>
                                            <p>We create and make sure to develop you error-free apps. we use selenium as well to run automated tests as well.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Maintenance & Support</h4>
                                            <p>You stay focused on business; we'll keep your apps error-free. we will take care of the issues, security, performance, backups and bug removal with server updates.   </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Consulting</h4>
                                            <p>We help you to get the benefits of CodeIgniter into your business. We offer project consultations and reviews of the current applications and projects.    </p>
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

                    <FAQ />

                    <div className="culture-sec insight-sec">
                        <h3>Featured Insights</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <OwlCarousel options={culture}>
                                        {CodeigniterJson && CodeigniterJson.map(CodeigniterJsonS => {
                                            { console.log(CodeigniterJsonS) }
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{CodeigniterJson.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: CodeigniterJsonS.content }}></p>
                                                    <a href="#">Read More</a>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {CodeigniterJson && CodeigniterJson.map((CodeigniterJsonS, index) => {
                                            return (
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={index}>
                                                        <h4>{CodeigniterJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: CodeigniterJsonS.content.substr(0, 100) + '...' }}></p>
                                                        <Link to={`/PostPage/${CodeigniterJsonS.slug}`} >READ MORE </Link>
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

export default CodeIgniter;

