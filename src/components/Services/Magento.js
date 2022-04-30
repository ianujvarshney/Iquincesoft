
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
import FAQ from '../../container/FAQ';
import OwlCarousel from 'react-owl-carousel2';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-owl-carousel2/src/owl.carousel.css';
import AwardFormsec from '../../container/AwardFormsec';
import { PostCate } from '../../json/PostCate';
import { FaCode } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner'
import Partner from '../../container/Partner';

class Magento extends Component {
    constructor(props) {
        super(props)
        this.state = {
            MagentoJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getMagento().then((Magento, err) => {
            if (!err) {
                this.setState({
                    MagentoJson: Magento,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { MagentoJson } = this.state;
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
                                    <h1><strong>Customized Magento Services</strong><br /></h1>
                                    <ul>
                                        <p>What is my benefit in it?</p>
                                        <li>Reduce the operating cost</li>
                                        <li>Increase the overall revenues</li>
                                        <li>Smoothen the process</li>
                                        <li>Get regular updates on any and every project</li>
                                        <li>Get streamlined results as per your business goals. </li>
                                        <li>Highly skilled and professional Magento developers.  </li>
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
                                    <h3>Why Magento?</h3>
                                    <p>You will be provided with the necessary space, tools, and resources to pursue your own ambitions, develop in the chosen direction and even create a personal expert brand.</p>
                                    <p>We encourage, never force!</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open-source Development</h4>
                                        <p>More than 2 million active stores make Magento the preferred eCommerce site. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Built on WordPress</h4>
                                        <p>Magento is one of the most extendable, adaptable and flexible eCommerce solutions. This is built on WordPress. The stores can integrate Magento within WordPress to create e-Commerce designs and templates.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Powerful Analytics</h4>
                                        <p>Magento offers an intuitive and robust interface that helps businesses. It provides an analytical report that is easy to understand by business owners.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customer Support</h4>
                                        <p>Every online business prefers Magento. Customer support makes it most accessible across the globe. Magento customer support team will also support you in every issue.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Magento is fast</h4>
                                        <p>ast and responsive e-commerce experience for online stores. This is a crucial benefit of Magento. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Rest API</h4>
                                        <p>The developers can read and write the products, orders, coupons, shipping channels, and discounts using REST APIs. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open-source Development</h4>
                                        <p>More than 2 million active stores make Magento the preferred eCommerce site. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Built on WordPress</h4>
                                        <p>Magento is one of the most extendable, adaptable and flexible eCommerce solutions. This is built on WordPress. The stores can integrate Magento within WordPress to create e-Commerce designs and templates.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Powerful Analytics</h4>
                                        <p>Magento offers an intuitive and robust interface that helps businesses. It provides an analytical report that is easy to understand by business owners.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customer Support</h4>
                                        <p>Every online business prefers Magento. Customer support makes it most accessible across the globe. Magento customer support team will also support you in every issue. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Magento is fast</h4>
                                        <p>Fast and responsive e-commerce experience for online stores. This is a crucial benefit of Magento. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Rest API</h4>
                                        <p>The developers can read and write the products, orders, coupons, shipping channels, and discounts using REST APIs. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Magento Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Magento Website Customization</h4>
                                            <p>Customized features for your online stores with iQuinceSoft Magento services. We create, add and apply templates, functionalities and styles with simple CSS and HTML. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>API Integration</h4>
                                            <p>We manage every single facet of an online store with the help of API integration. We connect the PHP app to the Magento store with REST API.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Magento Migration</h4>
                                            <p>We ensure the migration process is perfectly executed and there is no loss of any existing data, including orders, customer details and products. We offer flawless and straightforward migration for your current eCommerce store from any platform.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Magento Plugin Development</h4>
                                            <p>We adhere to best practices to create an online store with added extensions. We develop unique add-ons and tools to build a Magento shopping cart. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Payment Gateway Integration</h4>
                                            <p>We add several secured payment gateways within your eCommerce portal. We offer your customer several gateways and carry out their shopping with easy check-out. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire Magento Developers</h4>
                                            <p>Hire iQuinceSoft Magento developers and save efforts, time and money significantly. Our developers work as per your instructions and contribute as an extended in-house team.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Magento Consulting</h4>
                                            <p>We offer need-based customized consulting services to help you grow with the growth of your business and improve sales. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Magento Website Customization</h4>
                                            <p>Customized features for your online stores with iQuinceSoft Magento services. We create, add and apply templates, functionalities and styles with simple CSS and HTML. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>API Integration</h4>
                                            <p>We manage every single facet of an online store with the help of API integration. We connect the PHP app to the Magento store with REST API.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Magento Migration</h4>
                                            <p>We ensure the migration process is perfectly executed and there is no loss of any existing data, including orders, customer details and products. We offer flawless and straightforward migration for your current eCommerce store from any platform.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Magento Plugin Development</h4>
                                            <p>We adhere to best practices to create an online store with added extensions. We develop unique add-ons and tools to build a Magento shopping cart. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Payment Gateway Integration</h4>
                                            <p>We add several secured payment gateways within your eCommerce portal. We offer your customer several gateways and carry out their shopping with easy check-out. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire Magento Developers</h4>
                                            <p>Hire iQuinceSoft Magento developers and save efforts, time and money significantly. Our developers work as per your instructions and contribute as an extended in-house team.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"> </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Magento Consulting</h4>
                                            <p>We offer need-based customized consulting services to help you grow with the growth of your business and improve sales. </p>
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
                                        {MagentoJson && MagentoJson.map(MagentoJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{MagentoJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: MagentoJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${MagentoJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {MagentoJson && MagentoJson.map((MagentoJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={MagentoJsonS.id}>
                                                        <h4>{MagentoJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: MagentoJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${MagentoJsonS.slug}`} >READ MORE </Link>
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

export default Magento;

