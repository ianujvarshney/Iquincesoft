
import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
import { TailSpin } from 'react-loader-spinner';
import FAQ from '../../container/FAQ';
import Partner from '../../container/Partner';


class ProductDesign extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Product_DesignJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getProduct_Design().then((Product_Design, err) => {
            if (!err) {
                this.setState({
                    Product_DesignJson: Product_Design,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { Product_DesignJson } = this.state;
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
                                    <h1><strong>Product Design Services</strong><br /></h1>
                                    <ul>
                                        <p>What is my benefit in it?</p>
                                        <li>Reduce the operating cost</li>
                                        <li>Increase the overall revenues</li>
                                        <li>Smoothen the process</li>
                                        <li>Get regular updates on any and every project</li>
                                        <li>Get streamlined results as per your business goals. </li>
                                        <li>Highly skilled and professional Product Designers. </li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>



                    <div className="culture-sec web-sec">
                        <h3>Product Design Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>MVP Development</h4>
                                            <p>IQuinceSoft is a leading agency that serves Startups and SMEs with global clientele with the MVP development services. Our MVP service includes pilot MVP development, single feature MVP design, prototype design, and POC demo that allow organizations to comprehend the product-market fit and help them grow exponentially. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>Product Testing</h4>
                                            <p>IQuinceSoft offers test plans, test cases, risk assessment, defect analysis and recommendations that ensure adaptability and smooth performance security and increase the utility of your products.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Product design & Engineering</h4>
                                            <p>IQuinceSoft designers are aligned with the skillset that maps user flows and creates style guides, sketches, and wireframes to develop UI designs that scale the scalability across platforms and devices.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Product Deployment</h4>
                                            <p>IQuinceSoft leverages the skills and experience to implement best-in-class product solutions. We deploy software solutions that thrive and help clients attain their business goals. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Product Transformation</h4>
                                            <p>We offer remodeling and re-engineering services to assist our global clientele in substituting their old product designs with cutting-edge architecture to maximize profitability.
                                            </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Product Support & Maintenance</h4>
                                            <p>We have a team of consultants that can strategize your business launch products with slashed downtime to market. We also deliver maintenance services, including design enhancements, migration, data warehouse support, and bug-fixing. we improve the functionality and release new versions with upgrades as well. connect with our skilled software architects to reach the solutions.</p>
                                        </div>

                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>MVP Development</h4>
                                            <p>IQuinceSoft is a leading agency that serves Startups and SMEs with global clientele with the MVP development services. Our MVP service includes pilot MVP development, single feature MVP design, prototype design, and POC demo that allow organizations to comprehend the product-market fit and help them grow exponentially. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>Product Testing</h4>
                                            <p>IQuinceSoft offers test plans, test cases, risk assessment, defect analysis and recommendations that ensure adaptability and smooth performance security and increase the utility of your products.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Product design & Engineering</h4>
                                            <p>IQuinceSoft designers are aligned with the skillset that maps user flows and creates style guides, sketches, and wireframes to develop UI designs that scale the scalability across platforms and devices.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Product Deployment</h4>
                                            <p>IQuinceSoft leverages the skills and experience to implement best-in-class product solutions. We deploy software solutions that thrive and help clients attain their business goals. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Product Transformation</h4>
                                            <p>We offer remodeling and re-engineering services to assist our global clientele in substituting their old product designs with cutting-edge architecture to maximize profitability.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Product Support & Maintenance</h4>
                                            <p>We have a team of consultants that can strategize your business launch products with slashed downtime to market. We also deliver maintenance services, including design enhancements, migration, data warehouse support, and bug-fixing. we improve the functionality and release new versions with upgrades as well. connect with our skilled software architects to reach the solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
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
                                        {Product_DesignJson && Product_DesignJson.map(Product_DesignJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{Product_DesignJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: Product_DesignJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${Product_DesignJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {Product_DesignJson && Product_DesignJson.map((Product_DesignJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={Product_DesignJsonS.id}>
                                                        <h4>{Product_DesignJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: Product_DesignJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${Product_DesignJsonS.slug}`} >READ MORE </Link>
                                                    </div>
                                                </div>

                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <FormPopup />
                        <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                    </div>

                    <ReviewSec />

                    <EuquireSec />

                    <AwardSec />

                    <Footer />
                </>
        );
    }
}

export default ProductDesign;

