
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
import Partner from '../../container/Partner';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import AwardFormsec from '../../container/AwardFormsec';
import { FaCode } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner'
import { PostCate } from '../../json/PostCate';

class AndroidDev extends Component {
    constructor(props) {
        super(props)
        this.state = {
            InsightsJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getAndroid().then((Insights, err) => {
            if (!err) {
                this.setState({
                    InsightsJson: Insights,
                    Loading: false
                })
            }
        })
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
                                    <h1><strong>Android App Developer</strong><br /></h1>
                                    <ul>
                                        <p>What is my benefit in it?</p>
                                        <li>Reduce the operating cost</li>
                                        <li>Increase the overall revenues</li>
                                        <li>Smoothen the process</li>
                                        <li>Get regular updates on any and every project</li>
                                        <li>Get streamlined results as per your business goals. </li>
                                        <li>Highly skilled and professional Android App developers.  </li>
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
                                    <h3>Why develop Android Apps?</h3>
                                    <p>You will be provided with the necessary space, tools, and resources to pursue your own ambitions, develop in the chosen direction and even create a personal expert brand.</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open-source</h4>
                                        <p>Android is most used and popular for open source code OS. A developer can download and customize need-based apps. Android lets developers create apps with low cost and easy access to mobile technology. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Negligible development cost
                                        </h4>
                                        <p>Tools like SDK, JDK, and Eclipse IDK are free to download to develop an application. Google charges just $25 to distribute the app on the Android market.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open Distribution Model</h4>
                                        <p>Android Market Place restricts significantly less on the content of an android app. So the developer can distribute their apps through the Google Play Store.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Easier Installation</h4>
                                        <p>You are not restricted to download an android app by Google Play Store only. You can get the android apps by websites as well.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Greater Innovative Potential</h4>
                                        <p>android is fun to play around with. Android app development encourages new ideas. It is instrumental in creating apps that add value to users’ lives. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Compatible</h4>
                                        <p>The android apps can run on more devices. Android app development proved to be the smart choice and more profitable option.
                                        </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open-source</h4>
                                        <p>Android is most used and popular for open source code OS. A developer can download and customize need-based apps. Android lets developers create apps with low cost and easy access to mobile technology. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Negligible development cost
                                        </h4>
                                        <p>WooCommerce is one of the most extendable, adaptable and flexible eCommerce solutions. This is negligible development cost
                                            . The stores can integrate WooCommerce within WordPress to create e-Commerce designs and templates.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open Distribution Model</h4>
                                        <p>Android Market Place restricts significantly less on the content of an android app. So the developer can distribute their apps through the Google Play Store.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Easier Installation</h4>
                                        <p>You are not restricted to download an android app by Google Play Store only. You can get the android apps by websites as well. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Greater Innovative Potential</h4>
                                        <p>Fandroid is fun to play around with. Android app development encourages new ideas. It is instrumental in creating apps that add value to users’ lives. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Compatible</h4>
                                        <p>The android apps can run on more devices. Android app development proved to be the smart choice and more profitable option.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Android Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Custom Application Development</h4>
                                            <p>IQuinceSoft offers custom android apps with diverse solutions to run flawlessly across android devices. Our android app developers can create custom apps to serve diversified industry verticals. We effectively cater to the needs of small and large companies with the help of SDKs.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>Native App Development</h4>
                                            <p>We are experienced in leveraging Android Native Development Kit (NDK) for building native apps for SMEs and big businesses. We help you with performance optimization to integrations with technological advancements.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Hybrid Android App Development</h4>
                                            <p>IQuinceSoft is a team of experts building affordable and scalable Android apps through a hybrid development approach that needs to write code once for uninterrupted usage across multiple platforms. We can create and build a hybrid android app with numerous plugins, cross-platform support, and code reusability. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Android App Testing</h4>
                                            <p>We are the experts in ensuring high app installs and bug-free launches. We use stringent tests with emulators, simulators, and other tools. Our quality analysts operate to ensure that the android app performs smoothly over the devices with no technical issues.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Android App UX/UI Design</h4>
                                            <p>We offer UI/UX design services to meet your needs. Our UI/UX team collaborates to help you visualize the app before the development process. We make sure that your innovation gets transformed into meaningful stories. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Android App Migration</h4>
                                            <p>We offer migration services. We help you with zero impact on your routine business operations or users by the transition process. We are skilled at finding and implementing compatible paths.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Android App Maintenance</h4>
                                            <p>We are skilled at offering the best-in-class support and maintenance services for your Android apps if you need us to get support for Android software and platforms. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire Android Developers</h4>
                                            <p>Hire iQuinceSoft developers to save more money and time. Developers from iQuinceSoft can contribute to your business success and save your operating cost.  </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Custom Application Development</h4>
                                            <p>IQuinceSoft offers custom android apps with diverse solutions to run flawlessly across android devices. Our android app developers can create custom apps to serve diversified industry verticals. We effectively cater to the needs of small and large companies with the help of SDKs.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>Native App Development</h4>
                                            <p>We are experienced in leveraging Android Native Development Kit (NDK) for building native apps for SMEs and big businesses. We help you with performance optimization to integrations with technological advancements.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Hybrid Android App Development</h4>
                                            <p>IQuinceSoft is a team of experts building affordable and scalable Android apps through a hybrid development approach that needs to write code once for uninterrupted usage across multiple platforms. We can create and build a hybrid android app with numerous plugins, cross-platform support, and code reusability.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Android App Testing</h4>
                                            <p>We are the experts in ensuring high app installs and bug-free launches. We use stringent tests with emulators, simulators, and other tools. Our quality analysts operate to ensure that the android app performs smoothly over the devices with no technical issues.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Android App UX/UI Design</h4>
                                            <p>We offer UI/UX design services to meet your needs. Our UI/UX team collaborates to help you visualize the app before the development process. We make sure that your innovation gets transformed into meaningful stories. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Android App Migration</h4>
                                            <p>We offer migration services. We help you with zero impact on your routine business operations or users by the transition process. We are skilled at finding and implementing compatible paths.</p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Android App Maintenance</h4>
                                            <p>We are skilled at offering the best-in-class support and maintenance services for your Android apps if you need us to get support for Android software and platforms. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire Android Developers</h4>
                                            <p>Hire iQuinceSoft developers to save more money and time. Developers from iQuinceSoft can contribute to your business success and save your operating cost.  </p>
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

export default AndroidDev;

