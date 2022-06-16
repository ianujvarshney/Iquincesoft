
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
import { TailSpin } from 'react-loader-spinner';
import Partner from '../../container/Partner';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';


class QualityAssurance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Quality_AssuranceJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getQuality_Assurance().then((Quality_Assurance, err) => {
            if (!err) {
                this.setState({
                    Quality_AssuranceJson: Quality_Assurance,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { Quality_AssuranceJson } = this.state;

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
                                    <p>QUALITY ASSURANCE</p>
                                    <h1><strong>Testing & QA </strong><br /></h1>
                                    <ul>
                                        <p>What is my benefit in it?</p>
                                        <li>Reduce the operating cost</li>
                                        <li>Increase the overall revenues</li>
                                        <li>Smoothen the process</li>
                                        <li>Get regular updates on any and every project</li>
                                        <li>Get streamlined results as per your business goals. </li>
                                        <li>Highly skilled and professional in testing.  </li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>



                    <div className="culture-sec web-sec">
                        <h3>Testing & QA Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Functional Testing</h4>
                                            <p>We ensure that the security features, installation procedure, APIs, code function and other aspects of a web/mobile app are in-sync with the designed particulars and meet the end-user needs. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>Usability Testing</h4>
                                            <p>With the extensively trained testing professionals, we offer you a defined and productive approach for mobile app usability testing, A/B testing, design surveys, and preference testing to build an app that meets your business goals and proves to be productive.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Integration Testing</h4>
                                            <p>Our QA experts leverage the bottom-up or top-down process to test the integration of various modules within your app. Thus we ensure flawless communication between them while keeping the budget and time factors in consideration.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Regression Testing</h4>
                                            <p>Our QA specialists offer error-free regression testing services even after modifications, patches, configurations, and enhancements changes. We at iQuinceSoft offer maximum test coverage to ensure these changes do not obstruct the seamless functionality of the apps. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Unit Testing</h4>
                                            <p>Our team of QA experts offers the proficiency to scrutinize the bugs before the SDLC advances by writing high-quality unit tests. Thus, we pave the way for less pervasive re-factoring by the developers. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Compatibility Testing</h4>
                                            <p>Our proficient testers can bring you the benefits of compatibility testing services to operating systems, databases, devices, networks, versions, bandwidth handling capacity and browsers. With the comprehensive compatibility testing services at iQuinceSoft, we clear all the software's bottlenecks to offering the same experience to your user.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Performance Testing</h4>
                                            <p>IQuinceSoft is the pioneer at offering performance testing services. We deliver comprehensive and cost-effective performance services from planning, scripting, executing and reporting within the stipulated time. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Automated Testing</h4>
                                            <p>iQuinceSoft offers test automation planning, tools selection, test environment setup and test data preparation with maintenance and reporting. We help you optimize the testing time and cost as well. Leverage the vast experience of iQuinceSoft in automation testing and get tailored solutions that help you reach the next level with iQuinceSoft advantage. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Security Testing Services</h4>
                                            <p>Our skilled testers offer you premium security testing services with spotting vulnerabilities in the IT environment and offer suggestions on the migration. We ensure your business and customers enjoy the heck-proof system apps. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Functional Testing</h4>
                                            <p>We ensure that the security features, installation procedure, APIs, code function and other aspects of a web/mobile app are in-sync with the designed particulars and meet the end-user needs. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>Usability Testing</h4>
                                            <p>With the extensively trained testing professionals, we offer you a defined and productive approach for mobile app usability testing, A/B testing, design surveys, and preference testing to build an app that meets your business goals and proves to be productive.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Integration Testing</h4>
                                            <p>Our QA experts leverage the bottom-up or top-down process to test the integration of various modules within your app. Thus we ensure flawless communication between them while keeping the budget and time factors in consideration.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Regression Testing</h4>
                                            <p>Our QA specialists offer error-free regression testing services even after modifications, patches, configurations, and enhancements changes. We at iQuinceSoft offer maximum test coverage to ensure these changes do not obstruct the seamless functionality of the apps. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Unit Testing</h4>
                                            <p>Our team of QA experts offers the proficiency to scrutinize the bugs before the SDLC advances by writing high-quality unit tests. Thus, we pave the way for less pervasive re-factoring by the developers. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Compatibility Testing</h4>
                                            <p>Our proficient testers can bring you the benefits of compatibility testing services to operating systems, databases, devices, networks, versions, bandwidth handling capacity and browsers. With the comprehensive compatibility testing services at iQuinceSoft, we clear all the software's bottlenecks to offering the same experience to your user.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Performance Testing</h4>
                                            <p>IQuinceSoft is the pioneer at offering performance testing services. We deliver comprehensive and cost-effective performance services from planning, scripting, executing and reporting within the stipulated time. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Automated Testing</h4>
                                            <p>iQuinceSoft offers test automation planning, tools selection, test environment setup and test data preparation with maintenance and reporting. We help you optimize the testing time and cost as well. Leverage the vast experience of iQuinceSoft in automation testing and get tailored solutions that help you reach the next level with iQuinceSoft advantage. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Security Testing Services</h4>
                                            <p>Our skilled testers offer you premium security testing services with spotting vulnerabilities in the IT environment and offer suggestions on the migration. We ensure your business and customers enjoy the heck-proof system apps. </p>
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

                    <div className="frequent-sec">
                        <h3>Frequently Asked Questions</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-1"></div>
                                <div className="col-lg-8 col-md-10" data-aos="fade-right">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What type of software testing services do you offer?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We offer a wide array of testing services, including functional testing, integration testing, compatibility testing, regression testing, usability testing, automated testing, and performance testing.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                As a software development company, do you sign NDAs?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We sign non-disclosure agreements to protect your business information.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How to trust a reliable testing & QA services company?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                You can check the third-party reviews on third-party platforms like clutch and Google. You can also scroll through their social media pages to dig deeper into their profile.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How to get started with outsourced software testing?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                • Follow the basic steps to the road of a managed outsourced software testing:
                                                • Streamline your workflow.
                                                • Choose a trusted vendor who is skilled.
                                                • Motivate your development team to collaborate with the external test team.
                                                • Assign a senior QA manager to cooperate with the vendor.
                                                • Assess the vendor performance regularly.
                                                • Handle outsourcing concerns like unexpected software upgrades efficiently.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                    </div>

                    <div className="culture-sec insight-sec">
                        <h3>Featured Insights</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <OwlCarousel options={culture}>
                                        {Quality_AssuranceJson && Quality_AssuranceJson.map(Quality_AssuranceJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{Quality_AssuranceJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: Quality_AssuranceJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${Quality_AssuranceJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {Quality_AssuranceJson && Quality_AssuranceJson.map((Quality_AssuranceJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={Quality_AssuranceJsonS.id}>
                                                        <h4>{Quality_AssuranceJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: Quality_AssuranceJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${Quality_AssuranceJsonS.slug}`} >READ MORE </Link>
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

export default QualityAssurance;