
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
import 'react-accessible-accordion/dist/fancy-example.css';
import AwardFormsec from '../../container/AwardFormsec';
import FAQ from '../../container/FAQ';
import { FaCode } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';
import { PostCate } from '../../json/PostCate';
import Partner from '../../container/Partner';


class WordPress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            InsightsJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getWordpress().then((wordpress, err) => {
            if (!err) {
                this.setState({
                    InsightsJson: wordpress,
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
            this.state.Loading ? <div className="spinner"><TailSpin color="#864fe9" height={80} width={80} /></div> :
                <>
                    <Header headerClass={'serv-head'} />
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" data-aos="fade-up">
                                    <h1><strong>Wordpress Services</strong><br /></h1>
                                    <ul>
                                        <p>The iQuinceSoft Advantage ensures you:</p>
                                        <li>Higher revenues by a significant margin.</li>
                                        <li>Guaranteed results</li>
                                        <li>Regular updates and insights on the ongoing projects</li>
                                        <li>Swift initiation with the process</li>
                                        <li>Skilled team to deliver meaningful <del>outputs</del> outcomes. </li>
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
                                    <h3>Why Wordpress?</h3>
                                    <p>You will be provided with the necessary space, tools, and resources to pursue your own ambitions, develop in the chosen direction and even create a personal expert brand.</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Preferred CMS</h4>
                                        <p>According to the manaferra, More than staggering 708 million websites are based at WordPress. This is the popularity of WordPress as a CMS. WordPress is used and popular across the industries like corporates, non-profits, publications, government portals, educational institutions and what not. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cost-effective Maintenance</h4>
                                        <p>WordPress is highly affordable CMS. Less set-up, maintenance and customization costs makes it cost-effective. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Powerful Analytics</h4>
                                        <p>WordPress offers highly customized responsive websites. Hence, it is gives good user experience by the use of plugins like WPTouch, Jetpack, and WordPress Mobile Pack. Mobile friendly websites are uncluttered and easily readable.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Secure</h4>
                                        <p>A WordPress template offers numerous themes and plugins to avoid the malware, Cross-site scripting and DDoS attacks.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customizable</h4>
                                        <p>A developer can customize a WordPress website as per the need. Several additional functionalities are there to add with the help of plugins which are free to use.  </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Interface</h4>
                                        <p>WordPress comes with WYSIWYG (What You See Is What You Get) interface. This can be a perfect platform for non-tech savvy people to build on their portfolio sites and add content without help of costly developers. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Preferred CMS</h4>
                                        <p>According to the manaferra, More than staggering 708 million websites are based at WordPress. This is the popularity of WordPress as a CMS. WordPress is used and popular across the industries like corporates, non-profits, publications, government portals, educational institutions and what not. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cost-effective Maintenance</h4>
                                        <p>WordPress is highly affordable CMS. Less set-up, maintenance and customization costs makes it cost-effective. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Responsive </h4>
                                        <p>WordPress offers highly customized responsive websites. Hence, it is gives good user experience by the use of plugins like WPTouch, Jetpack, and WordPress Mobile Pack. Mobile friendly websites are uncluttered and easily readable.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Secure</h4>
                                        <p>A WordPress template offers numerous themes and plugins to avoid the malware, Cross-site scripting and DDoS attacks. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customizable</h4>
                                        <p>A developer can customize a WordPress website as per the need. Several additional functionalities are there to add with the help of plugins which are free to use.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Interface</h4>
                                        <p>WordPress comes with WYSIWYG (What You See Is What You Get) interface. This can be a perfect platform for non-tech savvy people to build on their portfolio sites and add content without help of costly developers. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Wordpress Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Web Development</h4>
                                            <p>WordPress customized and need-based website is all you need to scale your business. We are the experts having tons of experience in offering WordPress Web solutions. Our expert developers use agile methodologies to craft tailor-made WordPress solutions per your needs. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>API Development</h4>
                                            <p>API development means iQuinceSoft. We have served numerous global clients with API solutions. We can integrate third-party tools and systems. We make your site more extensible.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Wordpress Migration</h4>
                                            <p>We manage your file and database backups while migrating websites without losing any vital data.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Wordpress Plugin Development</h4>
                                            <p>We adhere to best practices to create an online store with added extensions. We develop unique add-ons and tools to build a Wordpress shopping cart. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>E-Commerce Solutions</h4>
                                            <p>Do you want to build impeccable and astonishing market stores at WordPress? We can help you with the one. Talk to our experts, specify the needs and demands, and enjoy the highly customized e-commerce store. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Support & Maintenance</h4>
                                            <p>We have supported multiple organizations as a support and maintenance partner for the big and small WordPress projects. Do you want to seal a deal? Please pick up the call and buzz us.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Performance and Security</h4>
                                            <p>We prevent your website from potential malware using the best cyber practices. As WordPress professionals, we can help you restrict external threats and hacks. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>PSD to WordPress</h4>
                                            <p>We help you with a PSD design. We code it into a full-featured WordPress site. We offer easy, fast and scalable websites in compliance with the PSD designs. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire WordPress Developers</h4>
                                            <p>Scale your business to the heights of hiring our dedicated WordPress developers. The developers contribute as the remote in-house team. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Custom Plugin Development</h4>
                                            <p>Our developers can add several customized plugins in WordPress to add more value and functionalities to the core WordPress without changing the codes. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>WordPress Consulting</h4>
                                            <p>We identify the best possible strategies to scale your WordPress projects. Call us for the best-suited recommendations and evaluations specific to your website. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Web Development</h4>
                                            <p>WordPress customized and need-based website is all you need to scale your business. We are the experts having tons of experience in offering WordPress Web solutions. Our expert developers use agile methodologies to craft tailor-made WordPress solutions per your needs. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>API Development</h4>
                                            <p>API development means iQuinceSoft. We have served numerous global clients with API solutions. We can integrate third-party tools and systems. We make your site more extensible.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Web Migration</h4>
                                            <p>We manage your file and database backups while migrating websites without losing any vital data.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>E-Commerce Solutions</h4>
                                            <p>Do you want to build impeccable and astonishing market stores at WordPress? We can help you with the one. Talk to our experts, specify the needs and demands, and enjoy the highly customized e-commerce store. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Support & Maintenance</h4>
                                            <p>We have supported multiple organizations as a support and maintenance partner for the big and small WordPress projects. Do you want to seal a deal? Please pick up the call and buzz us.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Performance and Security</h4>
                                            <p>We prevent your website from potential malware using the best cyber practices. As WordPress professionals, we can help you restrict external threats and hacks. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>PSD to WordPress</h4>
                                            <p>We help you with a PSD design. We code it into a full-featured WordPress site. We offer easy, fast and scalable websites in compliance with the PSD designs. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire WordPress Developers</h4>
                                            <p>Scale your business to the heights of hiring our dedicated WordPress developers. The developers contribute as the remote in-house team. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Custom Plugin Development</h4>
                                            <p>Our developers can add several customized plugins in WordPress to add more value and functionalities to the core WordPress without changing the codes..</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"></div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>WordPress Consulting</h4>
                                            <p>We identify the best possible strategies to scale your WordPress projects. Call us for the best-suited recommendations and evaluations specific to your website. </p>
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
                                                    <h4>{InsightsJson.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: InsightsJsonS.content }}></p>
                                                    <a href="#">Read More</a>
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

export default WordPress;

