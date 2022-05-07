
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
import FAQ from '../../container/FAQ';
import 'react-accessible-accordion/dist/fancy-example.css';
import AwardFormsec from '../../container/AwardFormsec';
import { FaCode } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';
import Partner from '../../container/Partner';


class Shopify extends Component {
    constructor(props) {
        super(props)
        this.state = {
            servicesJson: [],
            appjson: [],
            Questionjson: [],
            ShopifyJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getShopify().then((Shopify, err) => {
            if (!err) {
                this.setState({
                    ShopifyJson: Shopify,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { QuestionJson, ShopifyJson } = this.state;
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
                                    <h1><strong>Shopify Services</strong><br /></h1>
                                    <ul>
                                        <p>What is my benefit in it?</p>
                                        <li>Reduce the operating cost</li>
                                        <li>Increase the overall revenues</li>
                                        <li>Smoothen the process</li>
                                        <li>Get regular updates on any and every project</li>
                                        <li>Get streamlined results as per your business goals. </li>
                                        <li>Highly skilled and professional Shopify developers.  </li>
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
                                    <h3>Why Shopify?</h3>
                                    <p>You will be provided with the necessary space, tools, and resources to pursue your own ambitions, develop in the chosen direction and even create a personal expert brand.</p>
                                    <p>We encourage, never force!</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Quick and Easy to set up</h4>
                                        <p>Easy to quickly set up an online store. The clean and user-friendly interface of Shopify makes it pretty intuitive as the features are logically structured. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Secure and Reliable</h4>
                                        <p>E-Commerce store deals with sensitive customer information like card details. Thus, the site needs to be quick and secure. Shopify takes care of all server maintenance and upgrades. It takes care of protecting the user data. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>24/7 customer support</h4>
                                        <p>Shopify offers customer support round the clock. The response time is quick. You can get in touch by phone, email or web chat. In addition to this, there are several forums to support customers. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customizable</h4>
                                        <p>More than 160 themes to choose from in the Shopify Theme Store. All of these themes are mobile responsive. Each theme is customizable by editing the code. So a beautiful and fully customizable is made from a premade template or from scratch.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>SEO friendly</h4>
                                        <p>Shopify is SEO-friendly. Hence it is easy to rank the websites with Shopify. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Seamless Integration</h4>
                                        <p>Shopify developers use robust APIs to support smooth integrations with 3PL, ERP, OMS, and PIM. Shopify also integrates with apps like Inventory Source, eCommHub and Ordoro. This can make it easier for businesses to set up Shopify businesses. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Quick and Easy to set up</h4>
                                        <p>Easy to quickly set up an online store. The clean and user-friendly interface of Shopify makes it pretty intuitive as the features are logically structured. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Secure and Reliable</h4>
                                        <p>E-Commerce store deals with sensitive customer information like card details. Thus, the site needs to be quick and secure. Shopify takes care of all server maintenance and upgrades. It takes care of protecting the user data. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>24/7 customer support</h4>
                                        <p>Shopify offers customer support round the clock. The response time is quick. You can get in touch by phone, email or web chat. In addition to this, there are several forums to support customers. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customizable</h4>
                                        <p>More than 160 themes to choose from in the Shopify Theme Store. All of these themes are mobile responsive. Each theme is customizable by editing the code. So a beautiful and fully customizable is made from a premade template or from scratch. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>SEO friendly</h4>
                                        <p>Shopify is SEO-friendly. Hence it is easy to rank the websites with Shopify. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Seamless Integration</h4>
                                        <p>Shopify developers use robust APIs to support smooth integrations with 3PL, ERP, OMS, and PIM. Shopify also integrates with apps like Inventory Source, eCommHub and Ordoro. This can make it easier for businesses to set up Shopify businesses. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Shopify Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Mobile Store Development</h4>
                                            <p>We build customized mobile stores with cross-device compatibility. We at iQuinceSoft offer developers who can create engaging Shopify services. We are Shopify experts who are experienced in Git, CVS and SVN for Shopify store bug-fixing, upgrades and versioning. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>Integration</h4>
                                            <p>We create stores that connect diverse third-party modules and add-ons from the payment channels to ERP and CRM systems to shipping options to marketplaces to third party plugins. iQuinceSoft can help you integrate the online stores with increased tools to drive leads.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Migration</h4>
                                            <p>We help in smooth migration from one platform to Shopify. We port all data to Shopify to ensure the SEO benefits.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Shopify Testing</h4>
                                            <p>We at iQuinceSoft are backed up with a sound and robust Quality Assurance and Testing team. This team conducts security testing to assess the best-suited payment option A/B testing to comprehend the theme that suits the business. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Consulting and Support</h4>
                                            <p>For optimum effectiveness and no technical glitches, connect with iQuinceSoft. We resolve the issues, monitor the performance, scan the malware attacks, offer monthly reviews with marketing objectives, and review analytics and updates. Whether your store is made up from scratch or you migrate it from any other platform, we offer maintenance services to ensure that you get optimum performance. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Theme Design and Customization</h4>
                                            <p>We keep your customer conversion and lead generation in the core to create custom themes from scratch. Our developers are specialists at PSD to Shopify conversions. We offer advanced features and creative layouts, and high-end Shopify sites.</p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Mobile Store Development</h4>
                                            <p>We build customized mobile stores with cross-device compatibility. We at iQuinceSoft offer developers who can create engaging Shopify services. We are Shopify experts who are experienced in Git, CVS and SVN for Shopify store bug-fixing, upgrades and versioning. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>Integration</h4>
                                            <p>We create stores that connect diverse third-party modules and add-ons from the payment channels to ERP and CRM systems to shipping options to marketplaces to third party plugins. iQuinceSoft can help you integrate the online stores with increased tools to drive leads.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Migration</h4>
                                            <p>We help in smooth migration from one platform to Shopify. We port all data to Shopify to ensure the SEO benefits.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Shopify Testing</h4>
                                            <p>We at iQuinceSoft are backed up with a sound and robust Quality Assurance and Testing team. This team conducts security testing to assess the best-suited payment option A/B testing to comprehend the theme that suits the business. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Consulting and Support</h4>
                                            <p>For optimum effectiveness and no technical glitches, connect with iQuinceSoft. We resolve the issues, monitor the performance, scan the malware attacks, offer monthly reviews with marketing objectives, and review analytics and updates. Whether your store is made up from scratch or you migrate it from any other platform, we offer maintenance services to ensure that you get optimum performance. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Theme Design and Customization</h4>
                                            <p>We keep your customer conversion and lead generation in the core to create custom themes from scratch. Our developers are specialists at PSD to Shopify conversions. We offer advanced features and creative layouts, and high-end Shopify sites.</p>
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
                                        {ShopifyJson && ShopifyJson.map(ShopifyJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{ShopifyJson.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: ShopifyJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${ShopifyJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {ShopifyJson && ShopifyJson.map((ShopifyJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={ShopifyJsonS.id}>
                                                        <h4>{ShopifyJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: ShopifyJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${ShopifyJsonS.slug}`} >READ MORE </Link>

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

export default Shopify;

