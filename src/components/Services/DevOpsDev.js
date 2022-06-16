
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

class DevOpsDev extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Devops_ServicesJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getDevops_Services().then((Devops_Services, err) => {
            if (!err) {
                this.setState({
                    Devops_ServicesJson: Devops_Services,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { Devops_ServicesJson } = this.state;

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
                                <div className="col-lg-5 col-md-12" data-aos="fade-up">
                                    <p>DEVOPS</p>
                                    <h1><strong>DevOps Consulting Services</strong><br /></h1>
                                    <ul>
                                        <p>What is my benefit in it?</p>
                                        <li>Reduce the operating cost</li>
                                        <li>Increase the overall revenues</li>
                                        <li>Smoothen the process</li>
                                        <li>Get regular updates on any and every project</li>
                                        <li>Get streamlined results as per your business goals. </li>
                                        <li>Highly skilled and professional DevOps developers.  </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2"></div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>

                    <div className="culture-sec cr-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12" data-aos="fade-right">
                                    <h3>Why DevOps?</h3>
                                    <p>You will be provided with the necessary space, tools, and resources to pursue your own ambitions, develop in the chosen direction and even create a personal expert brand.</p>
                                    <p>We encourage, never force!</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open-source Development</h4>
                                        <p>More than 2 million active stores make DevOps the preferred eCommerce site. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Built on WordPress</h4>
                                        <p>DevOps is one of the most extendable, adaptable and flexible eCommerce solutions. This is built on WordPress. The stores can integrate DevOps within WordPress to create e-Commerce designs and templates.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Powerful Analytics</h4>
                                        <p>DevOps offers an intuitive and robust interface that helps businesses. It provides an analytical report that is easy to understand by business owners.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customer Support</h4>
                                        <p>Every online business prefers DevOps. Customer support makes it most accessible across the globe. DevOps customer support team will also support you in every issue.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>DevOps is fast</h4>
                                        <p>ast and responsive e-commerce experience for online stores. This is a crucial benefit of DevOps. </p>
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
                                        <p>More than 2 million active stores make DevOps the preferred eCommerce site. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Built on WordPress</h4>
                                        <p>DevOps is one of the most extendable, adaptable and flexible eCommerce solutions. This is built on WordPress. The stores can integrate DevOps within WordPress to create e-Commerce designs and templates.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Powerful Analytics</h4>
                                        <p>DevOps offers an intuitive and robust interface that helps businesses. It provides an analytical report that is easy to understand by business owners.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customer Support</h4>
                                        <p>Every online business prefers DevOps. Customer support makes it most accessible across the globe. DevOps customer support team will also support you in every issue. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>DevOps is fast</h4>
                                        <p>Fast and responsive e-commerce experience for online stores. This is a crucial benefit of DevOps. </p>
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
                        <h3>DevOps Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="img"src={webImg} /> */}
                                            <h4>DevOps Website Customization</h4>
                                            <p>Customized features for your online stores with iQuinceSoft DevOps services. We create, add and apply templates, functionalities and styles with simple CSS and HTML. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="img"src={webImg1} /> */}
                                            <h4>API Integration</h4>
                                            <p>We manage every single facet of an online store with the help of API integration. We connect the PHP app to the DevOps store with REST API.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="img"src={webImg2} /> */}
                                            <h4>DevOps Migration</h4>
                                            <p>We ensure the migration process is perfectly executed and there is no loss of any existing data, including orders, customer details and products. We offer flawless and straightforward migration for your current eCommerce store from any platform.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="img"src={webImg3} /> */}
                                            <h4>DevOps Plugin Development</h4>
                                            <p>We adhere to best practices to create an online store with added extensions. We develop unique add-ons and tools to build a DevOps shopping cart. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="img"src={webImg4} /> */}
                                            <h4>Payment Gateway Integration</h4>
                                            <p>We add several secured payment gateways within your eCommerce portal. We offer your customer several gateways and carry out their shopping with easy check-out. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="img"src={webImg5} /> */}
                                            <h4>Hire DevOps Developers</h4>
                                            <p>Hire iQuinceSoft DevOps developers and save efforts, time and money significantly. Our developers work as per your instructions and contribute as an extended in-house team.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="img"src={webImg5} /> */}
                                            <h4>DevOps Consulting</h4>
                                            <p>We offer need-based customized consulting services to help you grow with the growth of your business and improve sales. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="img"src={webImg} /> */}
                                            <h4>DevOps Website Customization</h4>
                                            <p>Customized features for your online stores with iQuinceSoft DevOps services. We create, add and apply templates, functionalities and styles with simple CSS and HTML. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="img"src={webImg1} /> */}
                                            <h4>API Integration</h4>
                                            <p>We manage every single facet of an online store with the help of API integration. We connect the PHP app to the DevOps store with REST API.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="img"src={webImg2} /> */}
                                            <h4>DevOps Migration</h4>
                                            <p>We ensure the migration process is perfectly executed and there is no loss of any existing data, including orders, customer details and products. We offer flawless and straightforward migration for your current eCommerce store from any platform.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="img"src={webImg3} /> */}
                                            <h4>DevOps Plugin Development</h4>
                                            <p>We adhere to best practices to create an online store with added extensions. We develop unique add-ons and tools to build a DevOps shopping cart. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="img"src={webImg4} /> */}
                                            <h4>Payment Gateway Integration</h4>
                                            <p>We add several secured payment gateways within your eCommerce portal. We offer your customer several gateways and carry out their shopping with easy check-out. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="img"src={webImg5} /> */}
                                            <h4>Hire DevOps Developers</h4>
                                            <p>Hire iQuinceSoft DevOps developers and save efforts, time and money significantly. Our developers work as per your instructions and contribute as an extended in-house team.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"> </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="img"src={webImg5} /> */}
                                            <h4>DevOps Consulting</h4>
                                            <p>We offer need-based customized consulting services to help you grow with the growth of your business and improve sales. </p>
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
                                                What are DevOps services?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                DevOps refers to the practices and policies involved in the software development process. DevOps services include implementing strategies
                                                like planning, developing, integrating, testing and deploying the product.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How does DevOps work?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                The DevOps model works by collaborating the development team of the organization and the operations team to achieve a common goal and offer value.
                                                DevOps removes the barriers between the operations team and development.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Can I hire DevOps developers from iQuinceSoft?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. You can hire our seasoned and skilled DevOps developers.
                                                You can manage them as your extended team on your projects. In addition to this,
                                                we offer a free-of-cost project manager to you as a single point of contact for you.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What type of DevOps services you offer?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                The DevOps services that we offer are environment configuration with the help of AWS, Google Cloud, end-to-end DevOps testing, continuous integration, DevOps maintenance and monitoring, reliable support solutions and DevOps consulting.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What are the technologies you use for DevOps solutions?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We help businesses with the help of implementing DevOps strategies that include the following tech stacks like:
                                                • GitHub, BitBucket (for Source Code Repository)
                                                • AWS Backup, Storage Gateway (for Backup)
                                                • Jenkins, Gitlab CI (for continuous Deployment)
                                                • Gradle, Ant (for Build)
                                                • Selenium, WireMock (for Automated Testing)
                                                • AWS, GCP (for Clouds)
                                                • Sonar, Black Duck (for Code Analysis)
                                                • Datadog, Zabbix (for Monitoring)
                                                • Windows Server Family, Oracle Linux (for Security Scanning)
                                                • Argo (for Workflow Automation)
                                                • Okta, AWS Security Hub (for Security)
                                                • Terraform, Cloudformation (for IAC & Configuration Management)
                                                • AWS ECR, Azure Container Registry (for Container Image Registry)
                                                • ElasticSearch, Fluentd (For Log Management)
                                                • Clair, Nessus (for Security Scanning)
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
                                        {Devops_ServicesJson && Devops_ServicesJson.map(Devops_ServicesJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{Devops_ServicesJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: Devops_ServicesJsonS.content.substr(0, 100) + '...' }}></p>
                                                    <Link to={`/PostPage/${Devops_ServicesJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {Devops_ServicesJson && Devops_ServicesJson.map((Devops_ServicesJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={Devops_ServicesJsonS.id}>
                                                        <h4>{Devops_ServicesJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: Devops_ServicesJsonS.content.substr(0, 100) + '...' }}></p>
                                                        <Link to={`/PostPage/${Devops_ServicesJsonS.slug}`} >READ MORE </Link>
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

export default DevOpsDev;

