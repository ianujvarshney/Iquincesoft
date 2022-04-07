
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
import { FaCode } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner'
import FAQ from '../../container/FAQ';
import Partner from '../../container/Partner';

class Wix extends Component {
    constructor(props) {
        super(props)
        this.state = {
            WixJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getWix().then((Wix, err) => {
            if (!err) {
                this.setState({
                    WixJson: Wix,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { WixJson } = this.state;
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
                                    <h1><strong>Wix Developers to Hire</strong><br /></h1>
                                    <ul>
                                        <p>What is my benefit in it?</p>
                                        <li>Reduce the operating cost</li>
                                        <li>Increase the overall revenues</li>
                                        <li>Smoothen the process</li>
                                        <li>Get regular updates on any and every project</li>
                                        <li>Get streamlined results as per your business goals. </li>
                                        <li>Highly skilled and professional Wix developers.  </li>
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
                                    <h3>Why Wix?</h3>
                                    <p>With over 7 million websites and more than 5,000 employees, Wix has established its name as a prominent website builder company.</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Speed</h4>
                                        <p>Speed is a significant factor. Wix sites are fast and hence, attract more traffic. Wix sites are remarkably resilient. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Template Collection</h4>
                                        <p>Wix offers numerous templates to build websites. By any standard, they provide many templates to build a website. These templates come from all the industry verticals to meet the needs of all.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Intuitive Drag & Drop Interface</h4>
                                        <p>Drag & Drop is the crux of the Wix websites. The interface has easy to play around with elements. As a beginner, one can go on with Wix. It is easily customizable as well. Codes can support all this.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>In-built SEO</h4>
                                        <p>If you consider the content as the body of the website, consider SEO as its blood. Wix helps you do that. Once you fill in the essential tags and metadata, Wix can do the rest of the heavy lifting for you.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>24/7 Support & Maintenance</h4>
                                        <p>Wix gains so much popularity across the users because of the unparalleled customer support. Post-sale service is the key to the success of any business, and Wix comprehends it exceptionally well. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Features</h4>
                                        <p>Wix offers attractive features, and the template comes with built-in features relevant to their industry.</p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Speed</h4>
                                        <p>More than 2 million active stores make Wix the preferred eCommerce site. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Template Collection</h4>
                                        <p>Wix offers numerous templates to build websites. By any standard, they provide many templates to build a website. These templates come from all the industry verticals to meet the needs of all.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Intuitive Drag & Drop Interface</h4>
                                        <p>Drag & Drop is the crux of the Wix websites. The interface has easy to play around with elements. As a beginner, one can go on with Wix. It is easily customizable as well. Codes can support all this.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>In-built SEO</h4>
                                        <p>If you consider the content as the body of the website, consider SEO as its blood. Wix helps you do that. Once you fill in the essential tags and metadata, Wix can do the rest of the heavy lifting for you. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>24/7 Support & Maintenance</h4>
                                        <p>Wix gains so much popularity across the users because of the unparalleled customer support. Post-sale service is the key to the success of any business, and Wix comprehends it exceptionally well. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Features</h4>
                                        <p>Wix offers attractive features, and the template comes with built-in features relevant to their industry.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Wix Development Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Wix Website Development Services</h4>
                                            <p>Website is the digital identity. Get it more attractive and impressive with iQuinceSoft. Experience the Wix platform and explore the abilities. We have highly skilled and professional developers who ensure you advanced fully-featured websites. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>Wix Site Setup and Customization</h4>
                                            <p>The Wix developers can set up a quick Wix website as per your business needs. We can also ensure you customization services. We choose the perfect layouts, designs, colors and fonts as business needs.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Wix SEO</h4>
                                            <p>SEO functions as the blood of a website. We offer you Wix SEO services that boost your ranking on the SERPs. We offer on-page and off-page SEO services with effective SEO strategies.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Wix Consultancy Services</h4>
                                            <p>At iQuinceSoft, we help you enjoy smooth and convenient Wix services. We suggest solutions that your business needs to adapt and change from web design to brand promotions and ensure high ROIs. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Wix Migration</h4>
                                            <p>iQuinceSoft offers secure migration services. We ensure you hassle-free process and shift all advanced functionalities from other platforms. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Wix API Integration</h4>
                                            <p>Our Wix experts can ensure you streamline API integration with Wix helps to slash down the cost significantly. </p>
                                        </div>

                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Wix Website Development Services</h4>
                                            <p>Website is the digital identity. Get it more attractive and impressive with iQuinceSoft. Experience the Wix platform and explore the abilities. We have highly skilled and professional developers who ensure you advanced fully-featured websites. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>Wix Site Setup and Customization</h4>
                                            <p>The Wix developers can set up a quick Wix website as per your business needs. We can also ensure you customization services. We choose the perfect layouts, designs, colors and fonts as business needs.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Wix SEO</h4>
                                            <p>SEO functions as the blood of a website. We offer you Wix SEO services that boost your ranking on the SERPs. We offer on-page and off-page SEO services with effective SEO strategies.

                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Wix Consultancy Services</h4>
                                            <p>At iQuinceSoft, we help you enjoy smooth and convenient Wix services. We suggest solutions that your business needs to adapt and change from web design to brand promotions and ensure high ROIs. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Wix Migration</h4>
                                            <p>iQuinceSoft offers secure migration services. We ensure you hassle-free process and shift all advanced functionalities from other platforms. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Wix API Integrations</h4>
                                            <p>Our Wix experts can ensure you streamline API integration with Wix helps to slash down the cost significantly. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"> </div>


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
                                        {WixJson && WixJson.map(WixJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{WixJson.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: WixJsonS.content }}></p>
                                                    <a href="#">Read More</a>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {WixJson && WixJson.map(WixJsonS => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={WixJsonS.id}>
                                                        <h4>{WixJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: WixJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${WixJsonS.slug}`} >READ MORE </Link>
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

export default Wix;

