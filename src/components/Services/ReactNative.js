
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
import { serviceapi } from '../../json/serviceapi';
import 'react-accessible-accordion/dist/fancy-example.css';
import FAQ from '../../container/FAQ';
import AwardFormsec from '../../container/AwardFormsec';
import { FaCode } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';
import Partner from '../../container/Partner';


class ReactNative extends Component {
    constructor(props) {
        super(props)
        this.state = {
            servicesJson: [],
            appjson: [],
            Questionjson: [],
            ReactNativeJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getReactNative().then((ReactNative, err) => {
            if (!err) {
                this.setState({
                    ReactNativeJson: ReactNative,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { ReactNativeJson } = this.state;
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
                                    <h1><strong>React Native Services</strong><br /></h1>
                                    <ul>
                                        <p>What is my benefit in it?</p>
                                        <li>Reduce the operating cost</li>
                                        <li>Increase the overall revenues</li>
                                        <li>Smoothen the process</li>
                                        <li>Get regular updates on any and every project</li>
                                        <li>Get streamlined results as per your business goals. </li>
                                        <li>Highly skilled and professional React Native developers.  </li>
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
                                    <h3>Why React Native?</h3>
                                    <p>You will be provided with the necessary space, tools, and resources to pursue your own ambitions, develop in the chosen direction and even create a personal expert brand.</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Fast Development</h4>
                                        <p>React Native builds apps at a swift pace with the help of JavaScript. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cost-Effective</h4>
                                        <p>React Native enables iOS to compile and suit with Android software and vice-versa. Hence, it slashes down the development time and maintenance costs significantly.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Single Codebase for Mobile OS</h4>
                                        <p>React Native offers a platform to write a single code base and deploy it to several mobile OS like iOS, Android, and Windows. It enables the developer to reuse any component and any stage.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cross-Platform</h4>
                                        <p>Suitable for cross-platform app development. Once written on React Native, a code can run flawlessly on Android and iOS. Perfect framework for building platform-specific apps.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Reusable Codes</h4>
                                        <p>React Native is a platform where developers need not write specific code-specific apps. React Native developers can use the pre-loaded components as per the needs to write new apps. This ensures faster development. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Community driven</h4>
                                        <p>React Native community is extensive. The community members can fix technical glitches and offer valuable support on the advancements. It is free to access the blogs, videos, talks, new libraries, and apps from the React Native Community. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Fast Development</h4>
                                        <p>React Native builds apps at a swift pace with the help of JavaScript. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cost-Effective</h4>
                                        <p>React Native enables iOS to compile and suit with Android software and vice-versa. Hence, it slashes down the development time and maintenance costs significantly.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Single Codebase for Mobile OS</h4>
                                        <p>React Native offers a platform to write a single code base and deploy it to several mobile OS like iOS, Android, and Windows. It enables the developer to reuse any component and any stage.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cross-Platform</h4>
                                        <p>Suitable for cross-platform app development. Once written on React Native, a code can run flawlessly on Android and iOS. Perfect framework for building platform-specific apps. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Reusable Codes</h4>
                                        <p>FReact Native is a platform where developers need not write specific code-specific apps. React Native developers can use the pre-loaded components as per the needs to write new apps. This ensures faster development. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Community driven</h4>
                                        <p>React Native community is extensive. The community members can fix technical glitches and offer valuable support on the advancements. It is free to access the blogs, videos, talks, new libraries, and apps from the React Native Community. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>React Native Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Custom App Development</h4>
                                            <p>We offer end-to-end React Native solutions that include prototyping, designing UIs, developing iOS, Android, and cross-platform apps for development. We deliver innovative and intuitive apps to meet your business needs and help you provide value to your end-user. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>Migration Services</h4>
                                            <p>We offer mobile app migration services to React Native. It provides enhanced UI/UX. Our solution architects can help you with migration services with new-age technology and revitalize your existing apps.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Support and Maintenance</h4>
                                            <p>iQuinceSoft has emerged as a solution provider that delivers premium quality support and maintenance services for React Native projects. We exceed the expectations every time with our exclusive support and maintenance services. Connect with our solution providers to get over the issues you have been facing for a long.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Consulting</h4>
                                            <p>A blend of experience and young Turks makes us one of the best consulting teams in React Native. We assess your business processes. We suggest changes as per the current market trends and the tech stacks needed to keep your project functional and ensure business profits. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>API Development</h4>
                                            <p>We offer API development services for mobile apps with the help of React Native. We are a team of skilled professionals that build custom API services for your mobile app. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire Dedicated React Native Developers</h4>
                                            <p>Share your load and get access to iQuinceSoft advantages by hiring a dedicated React Native developer. We ease down hiring on an hourly, part-time, and project basis. </p>
                                        </div>

                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Custom App Development</h4>
                                            <p>We offer end-to-end React Native solutions that include prototyping, designing UIs, developing iOS, Android, and cross-platform apps for development. We deliver innovative and intuitive apps to meet your business needs and help you provide value to your end-user. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>Migration Services</h4>
                                            <p>We offer mobile app migration services to React Native. It provides enhanced UI/UX. Our solution architects can help you with migration services with new-age technology and revitalize your existing apps.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Support and Maintenance</h4>
                                            <p>iQuinceSoft has emerged as a solution provider that delivers premium quality support and maintenance services for React Native projects. We exceed the expectations every time with our exclusive support and maintenance services. Connect with our solution providers to get over the issues you have been facing for a long.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Consulting</h4>
                                            <p>A blend of experience and young Turks makes us one of the best consulting teams in React Native. We assess your business processes. We suggest changes as per the current market trends and the tech stacks needed to keep your project functional and ensure business profits. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>API Development</h4>
                                            <p>We offer API development services for mobile apps with the help of React Native. We are a team of skilled professionals that build custom API services for your mobile app. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire Dedicated React Native Developers</h4>
                                            <p>Share your load and get access to iQuinceSoft advantages by hiring a dedicated React Native developer. We ease down hiring on an hourly, part-time, and project basis. </p>
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
                                        {ReactNativeJson && ReactNativeJson.map(ReactNativeJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{ReactNativeJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: ReactNativeJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${ReactNativeJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {ReactNativeJson && ReactNativeJson.map((ReactNativeJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={ReactNativeJsonS.id}>
                                                        <h4>{ReactNativeJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: ReactNativeJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${ReactNativeJsonS.slug}`} >READ MORE </Link>
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

export default ReactNative;

