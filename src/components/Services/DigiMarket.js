
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


class DigiMarket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            LaravelJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getLaravel().then((Laravel, err) => {
            if (!err) {
                this.setState({
                    LaravelJson: Laravel,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { LaravelJson } = this.state;
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
                                    <h1><strong>Data-driven digital marketing services</strong><br /></h1>
                                    <ul>
                                        <p>The iQuinceSoft Advantage ensures you:</p>
                                        <li>Higher revenues by a significant margin.</li>
                                        <li>Guaranteed results</li>
                                        <li>Regular updates and insights on the ongoing projects</li>
                                        <li>Swift initiation with the process</li>
                                        <li>skilled team to deliver meaningful outputs outcomes. </li>
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
                                    <h3>Why Laravel?</h3>
                                    <p>Laravel is adding flavor to the digital domain. We enlist a few reasons to clarify the benefits of using Laravel. </p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Object-oriented Libraries</h4>
                                        <p>Laravel composes of 20+ libraries. It offers CSRF protection, database security, and encryption.  </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Ease of Documentation</h4>
                                        <p>Laravel comes with Model View Controller (MVC) pattern. This pattern ensures high-End architecture and neat and organized documentation efficiently. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Blade Template Engine</h4>
                                        <p>Laravel ensures easy data display and extends web layouts while maintaining the app's speed. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Unit-Testing</h4>
                                        <p>Smooth and easy to perform unit-tests of an existing web function or new feature is accessible with Laravel. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Caching</h4>
                                        <p>APC, Redis, and Memcached caching systems are easy to integrate. It helps to enhance the app's performance. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Security</h4>
                                        <p>Laravel prevents illegal access. Thus, it ensures the security of the web app and systems with proper authentication.  </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Object-oriented Libraries</h4>
                                        <p>Laravel composes of 20+ libraries. It offers CSRF protection, database security, and encryption.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Ease of Documentation</h4>
                                        <p>Laravel comes with Model View Controller (MVC) pattern. This pattern ensures high-End architecture and neat and organized documentation efficiently. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Blade Template Engine</h4>
                                        <p>Laravel ensures easy data display and extends web layouts while maintaining the app's speed. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Unit-Testing</h4>
                                        <p>Smooth and easy to perform unit-tests of an existing web function or new feature is accessible with Laravel.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Caching</h4>
                                        <p>APC, Redis, and Memcached caching systems are easy to integrate. It helps to enhance the app's performance. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Security</h4>
                                        <p>Laravel prevents illegal access. Thus, it ensures the security of the web app and systems with proper authentication.  </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Laravel Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Laravel App Development</h4>
                                            <p>Think of Laravel applications that fit your processes seamlessly. Think of applications that generate scalable output outcomes for your organizations. We help you design, build and manage that kind of application.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>SaaS Application Development</h4>
                                            <p>We help you develop customized SaaS applications. We use Laravel Cashier, Spark, Passport, and Socialite, among such Laravel packages. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Website Development</h4>
                                            <p>We add custom features to your website with the help of Laravel. We help create a customized website based on Laravel based CMS like Statamic and October. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Browser Testing and automation</h4>
                                            <p>IQuinceSoft offers complete test automation of websites and applications.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Migrate</h4>
                                            <p>From Java, Python, .NET, or any other framework, we help you migrate your apps to Laravel with no loss of any functionality or data.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Web Services and API Development</h4>
                                            <p>We power your iOS & Android mobile apps. We offer easy access to the platform data with safe, stable, and well-documented web services and apis. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Consulting</h4>
                                            <p>If your systems are not going smooth, or you seek innovative ideas for your business, we can help. We offer Laravel consulting services like pre-project and review of current services. we help you make a call to improve the business process with laravel. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Maintenance and Support</h4>
                                            <p>We make sure your apps run error-free. We provide all kinds of maintenance and support to keep your business on Laravel smooth and easy. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Full-Text Search</h4>
                                            <p>We implement fast full-text search on your website. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Laravel App Development</h4>
                                            <p>Think of Laravel applications that fit your processes seamlessly. Think of applications that generate scalable output outcomes for your organizations. We help you design, build and manage that kind of application.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>SaaS Application Development</h4>
                                            <p>We help you develop customized SaaS applications. We use Laravel Cashier, Spark, Passport, and Socialite, among such Laravel packages. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Website Development</h4>
                                            <p>We add custom features to your website with the help of Laravel. We help create a customized website based on Laravel based CMS like Statamic and October.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Browser Testing and automation</h4>
                                            <p>IQuinceSoft offers complete test automation of websites and applications.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Migrate</h4>
                                            <p>From Java, Python, .NET, or any other framework, we help you migrate your apps to Laravel with no loss of any functionality or data.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Web Services and API Development</h4>
                                            <p>We power your iOS & Android mobile apps. We offer easy access to the platform data with safe, stable, and well-documented web services and apis. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Consulting</h4>
                                            <p>If your systems are not going smooth, or you seek innovative ideas for your business, we can help. We offer Laravel consulting services like pre-project and review of current services. we help you make a call to improve the business process with laravel. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Maintenance and Support</h4>
                                            <p>We make sure your apps run error-free. We provide all kinds of maintenance and support to keep your business on Laravel smooth and easy.</p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Full-Text Search</h4>
                                            <p>We implement fast full-text search on your website.</p>
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
                                        {LaravelJson && LaravelJson.map(LaravelJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{LaravelJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: LaravelJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${LaravelJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {LaravelJson && LaravelJson.map((LaravelJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={LaravelJsonS.id}>
                                                        <h4>{LaravelJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: LaravelJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${LaravelJsonS.slug}`} >READ MORE </Link>
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

export default DigiMarket;

