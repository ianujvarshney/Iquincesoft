
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
import FAQ from '../../container/FAQ';
import AwardFormsec from '../../container/AwardFormsec';
import { TailSpin } from 'react-loader-spinner';
import Partner from '../../container/Partner';


class IonicDev extends Component {
    constructor(props) {
        super(props)
        this.state = {
            IonicJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getIonic().then((Ionic, err) => {
            if (!err) {
                this.setState({
                    IonicJson: Ionic,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { IonicJson } = this.state;

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
                                    <h1><strong>We amplify your voice, and we make your presence felt on the app stores with the help of our dedicated Ionic developers.</strong><br /></h1>
                                    <ul>
                                        <li>Make your presence felt across the platforms with scalable, engaging, and customized tailor-made apps that can meet your unmet needs.</li>
                                        <li>Hire ionic developers from iQuinceSoft with the trust, measurable outcomes, and high-end web and app store.</li>
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
                                    <h3>Why Ionic ?</h3>
                                    <p>You will be provided with the necessary space, tools, and resources to pursue your own ambitions, develop in the chosen direction and even create a personal expert brand.</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Eye Catchy UI Components</h4>
                                        <p>The default styles in Ionic help the developers build cross-platform apps with native elements quickly. Ionic allows developers to add native device functionality to android, iOS and web apps. The premade styling help developers build intuitive prototypes rapidly. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open Source</h4>
                                        <p>Ionic costs nothing. Learning the ionic framework is easy as well. Ionic is faster, reliable and simulates a native feel efficiently.
                                        </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Big Community</h4>
                                        <p>Ionic has a vast and active community. Hence, there’s someone ready with the answers for any and every doubt, issue, and problem.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>One code for all</h4>
                                        <p>Creating iOS and Android apps needs a reasonable amount of time as it is required to learn both languages. Ionic offers the flexibility of building cross-platform apps without any issue. Ionic provides the ease of creating high-end UI with added functionality and reusing the code for several platforms.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cordova Plugins</h4>
                                        <p>cordova plugins offer access to various OS features like battery, camera, location, access to logs, and what not? The Cordova plugins increase the overall performance of apps. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Angular is the Base Framework</h4>
                                        <p>Angular helps Ionic build the application structure and take advantage of its multiple features. It also uses the syntax extending to HTML to include app and data binding components. JavaScript-based AngularJS helps the developers create high-performance mobile apps on Ionic. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Quick Testing</h4>
                                        <p>Ionic offers quick and easy app testing. One can test the app directly on the existing platform to get a basic idea. One can test the app with the mobile browser and safari as well. </p>
                                    </div>

                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Eye Catchy UI Components</h4>
                                        <p>The default styles in Ionic help the developers build cross-platform apps with native elements quickly. Ionic allows developers to add native device functionality to android, iOS and web apps. The premade styling help developers build intuitive prototypes rapidly. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open Source</h4>
                                        <p>Ionic costs nothing. Learning the ionic framework is easy as well. Ionic is faster, reliable and simulates a native feel efficiently.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Big Community</h4>
                                        <p>Ionic has a vast and active community. Hence, there’s someone ready with the answers for any and every doubt, issue, and problem.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>One code for all</h4>
                                        <p>Creating iOS and Android apps needs a reasonable amount of time as it is required to learn both languages. Ionic offers the flexibility of building cross-platform apps without any issue. Ionic provides the ease of creating high-end UI with added functionality and reusing the code for several platforms. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cordova Plugins</h4>
                                        <p>cordova plugins offer access to various OS features like battery, camera, location, access to logs, and what not? The Cordova plugins increase the overall performance of apps. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Angular is the Base Framework</h4>
                                        <p>Angular helps Ionic build the application structure and take advantage of its multiple features. It also uses the syntax extending to HTML to include app and data binding components. JavaScript-based AngularJS helps the developers create high-performance mobile apps on Ionic. </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Quick Testing</h4>
                                        <p>Ionic offers quick and easy app testing. One can test the app directly on the existing platform to get a basic idea. One can test the app with the mobile browser and safari as well. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Ionic Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Custom Ionic App Development</h4>
                                            <p>IQuinceSoft offers a need-based customized Ionic app. We bridge the gap between your needs and services with the help of our visually appealing Ionic apps. We offer Ionic app development services to provide you with business solutions such as engaging and converting apps for android and iOS. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Migration Services</h4>
                                            <p>We help you migrate your apps to the Ionic framework. We are proficient professionals to support you with migration services. We ensure improved security, greater flexibility, quick deployment time, and fewer infrastructure complexities.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Ionic Support & Maintenance</h4>
                                            <p>We offer support & maintenance services to keep your apps high-performing, up-to-date, competitive and seamless. The ionic experts at iQuinceSoft offer unparalleled support. We are experts in bug-removing, third-party maintenance, CDN optimization and code reviews with feature extensions and app version upgrades.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Ionic eCommerce App development</h4>
                                            <p>We build high-performing e-commerce apps on Ionic that render flawless experience to the users with visually appealing UI and UX. We at iQuinceSoft excels with Ionic-based eCommerce applications with payment gateway integrations, custom plugins, smooth checkouts, multivendor solutions. Write a line to us about your specific needs and enjoy the attractive and engaging eCommerce applications. </p>
                                        </div>


                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <h4>Custom Ionic App Development</h4>
                                            <p>IQuinceSoft offers a need-based customized Ionic app. We bridge the gap between your needs and services with the help of our visually appealing Ionic apps. We offer Ionic app development services to provide you with business solutions such as engaging and converting apps for android and iOS. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Migration Services</h4>
                                            <p>We help you migrate your apps to the Ionic framework. We are proficient professionals to support you with migration services. We ensure improved security, greater flexibility, quick deployment time, and fewer infrastructure complexities.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Ionic Support & Maintenance</h4>
                                            <p>We offer support & maintenance services to keep your apps high-performing, up-to-date, competitive and seamless. The ionic experts at iQuinceSoft offer unparalleled support. We are experts in bug-removing, third-party maintenance, CDN optimization and code reviews with feature extensions and app version upgrades.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"></div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Ionic eCommerce App development</h4>
                                            <p>We build high-performing e-commerce apps on Ionic that render flawless experience to the users with visually appealing UI and UX. We at iQuinceSoft excels with Ionic-based eCommerce applications with payment gateway integrations, custom plugins, smooth checkouts, multivendor solutions. Write a line to us about your specific needs and enjoy the attractive and engaging eCommerce applications. </p>
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
                                        {IonicJson && IonicJson.map(IonicJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{IonicJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: IonicJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${IonicJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {IonicJson && IonicJson.map((IonicJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={IonicJsonS.id}>
                                                        <h4>{IonicJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: IonicJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${IonicJsonS.slug}`} >READ MORE </Link>
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

export default IonicDev;


