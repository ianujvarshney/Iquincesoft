
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
import { FaCode } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';
import Partner from '../../container/Partner';
import icon2 from '../../images/vue-logo.svg';
import cycle from '../../images/cycle-image.svg';
import icon1 from '../../images/design-icon1.svg';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';


class DedicatedTeams extends Component {
    constructor(props) {
        super(props)
        this.state = {
            LaravelJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getLaravel().then((Laravel, err) => {
            if (!err) {
                this.setState({
                    LaravelJson: Laravel,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { LaravelJson } = this.state;
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
        const Designer = {
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
                    <Header headerClass={'serv-head dd'} />
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" data-aos="fade-up">
                                    <h1><strong>Dedicated Development Teams:</strong><br /></h1>
                                    <h4 className="service-h4">We offer you a platform to hire dedicated developers. Use their top-notch skills as per hourly or fixed cost projects. Manage them as your extended remote team. </h4>
                                    <ul>
                                        <p>iQuinceSoft offers you to:</p>
                                        <li>Hire development developers with a hands-on experience like your own. </li>
                                        <li>Slash down the time to market. </li>
                                        <li>Keep control over the projects, milestones and deliverables. </li>
                                        <li>Eliminate the overhead, admin and hiring costs.</li>
                                        <li>Augment the in-house teams with skilled experts in the specific subject. </li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>

                    <div className="culture-sec cr-sec cr-sec-2">
                        <div className="container">
                            <div className="row ">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12" data-aos="fade-right">
                                    <h2>Hire Web and Graphic designers and use their skills to enhance your business revenue and branding purposes. Get reduced costs and enhanced business revenues.</h2>
                                </div>
                            </div>
                            <div className="row mid-border">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-4 col-md-6">
                                    <ul>
                                        <li><img src={icon1} /> <span>Work with some of the best creative minds in the industry</span></li>
                                        <li><img src={icon1} /> <span>Build your designer team and clear your creative bottlenecks.</span></li>
                                        <li><img src={icon1} /> <span>Increase your productivity.</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <ul>
                                        <li><img src={icon1} /> <span>Hire dedicated designers and use their skills to benefit your brand directly.</span></li>
                                        <li><img src={icon1} /> <span>Higher revenues by a significant margin.</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-1">
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></h5>
                    </div>

                    <div className="build-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12">
                                    <h1>Build Your Dedicated Team With
                                        Our Top Tech Skills</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img src={icon2} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Hire highly skilled developers in Laravel, Symphony, Codeigniter, Yii, Zend, WordPress, Drupal, and Magento. </p>
                                            <Link to={"/HirePHPDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img src={icon2} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                It is the one of the best PHP framework offering an open source development platform. We ensure you get the simplest way to use the modular methods and get an explicit function. </p>
                                            <Link to={"/HireCodeIgniterDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img src={icon2} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Node.js is a preferred choice of developers who wish to build real-time, scalable and collaborative apps and tools. </p>
                                            <Link to={"/HireNodeDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img src={icon2} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                The best advantage of Laravel is that it follows – Model, View and Controller-based architectural pattern and beautiful syntax</p>
                                            <Link to={"/HireLaravelDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img src={icon2} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Hire iQuinceSoft developers for the best Magento solutions that can help online merchants scale high in the spheres of eCommerce. </p>
                                            <Link to={"/HireMagentoDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img src={icon2} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Hire React developers to build interactive UI, simple views and component-based structures. </p>
                                            <Link to={"/HireReactDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img src={icon2} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Hire our Angular developers to create dynamic Single Page Applications (SPAs) - for web and mobile. </p>
                                            <Link to={"/HireAngularDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img src={icon2} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                The go-to choice for developing next-gen apps that are small and robust. </p>
                                            <Link to={"/HireVueDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img src={icon2} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Hire DevOps developers who are experts in Docker, Kubernetes, AWS, GCP, Azure, GitLab CI/CD, Jenkins and more.  </p>
                                            <Link to={"/DevOps"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img src={icon2} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Automation software and manual testing services, including security, functional, server-side, etc.  </p>
                                            <Link to={"/QualityAssurance"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img src={icon2} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Hire developers with a specialization in iOS, Android, Xamarin, Apache Cordova, PWA, Flutter, Ionic, React Native and more </p>
                                            <Link to={"/Mobile_Developement"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img src={icon2} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Hire our WordPress developers and have a sigh of relief from the concept, development, QA and delivery part.  </p>
                                            <Link to={"/HireWordpressDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="Design-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12">
                                    <h3>Offshore Software Development & IT Outsourcing Services</h3>
                                </div>
                            </div>

                            <div className="row">
                                <OwlCarousel options={Designer}>
                                    <div className="Design-owl">
                                        <img src={icon1} />
                                        <h4>Web Designs</h4>
                                        <p>Do you wish to make customized layouts for your websites? We offer design services with more informative and engaging means. Web design by iQuinceSoft includes website mockups, visualization and consultations. We make you a part of the process.  </p>
                                    </div>
                                    <div className="Design-owl">
                                        <img src={icon1} />
                                        <h4>Web Designs</h4>
                                        <p>Do you wish to make customized layouts for your websites? We offer design services with more informative and engaging means. Web design by iQuinceSoft includes website mockups, visualization and consultations. We make you a part of the process.  </p>
                                    </div>
                                    <div className="Design-owl">
                                        <img src={icon1} />
                                        <h4>Web Designs</h4>
                                        <p>Do you wish to make customized layouts for your websites? We offer design services with more informative and engaging means. Web design by iQuinceSoft includes website mockups, visualization and consultations. We make you a part of the process.  </p>
                                    </div>
                                </OwlCarousel>

                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>Hire Dedicated Developers</h4>
                                                <p>Hire dedicated developers and use their expertise in the Front end, Back-end, UI/UX, QA, DevOps, Digital Marketing and much more.</p>
                                                <Link className="design-btn" to={'/DedicatedDevelopmentTeams'}>Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>Front-end Development</h4>
                                                <p>Build interactive, modern and reliable user interfaces across all the business domains with us. We use modern tools and frameworks like React.js, Vue.js, and Angular, for designing and developing robust, fast, and engaging user-friendly interfaces.</p>
                                                <Link className="design-btn" to="/HireReactDevelopers">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>Backend Development</h4>
                                                <p>From API integration to database migration to set up server-side technologies, a backend developer plays a vital role in getting your project.  </p>
                                                <Link className="design-btn" to="/HireNodeDevelopers">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>Software Development</h4>
                                                <p>Meet your business needs with custom functionality and features. We offer custom software services that help you address your business needs. </p>
                                                <Link className="design-btn" to="#">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>Custom Graphic Designs</h4>
                                                <p>Let us know your design needs, and we’ll deliver that requirement. We recruit some of the best creative minds from the cream layer of the talent pools. We can help you differentiate your brand from the rest of the crowd and make it a top-ranked brand with no extra costs. </p>
                                                <Link className="design-btn" to="/HireDesigners">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>Web Development</h4>
                                                <p>Get the benefit of state-of-the-art technologies and development practices to create custom web apps and systems for your business. We conceptualize and create apps from scratch that meet your business needs.’ now. You can put your information online at a place, but you can not override the power of the printed brochures.
                                                    iQuincesoft can deliver you all types of brochures in full color.  </p>
                                                <Link className="design-btn" to="/Web_Development">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                    </div>

                    <div className="process-sec dd">
                        <div className="container">
                            <h1>Our Process</h1>
                            <div className="row">
                                <p className="process-heading-para">The Process we use to build your dedicated development team</p>
                                <div className="col-lg-5 col-md-6">
                                    <picture><img src={icon1} /></picture>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <span className="blue">01</span>
                                        <h3>Choose Developers</h3>
                                        <p>We serve businesses across the globe with the help of our dedicated developers. Screen, Scrutinize and interview the selected ones from our pre-vetted talent pool and finalize who will work and help you. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <span className="blue">02</span>
                                        <h3>Smooth Integration:</h3>
                                        <p>The chosen developers gel well in the form of your extended teams and fit into your existing processes. The developers function as your in-house team under your direct supervision. </p>
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <picture><img src={icon1} /></picture>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <picture><img src={icon1} /></picture>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <span className="blue">03</span>
                                        <h3>Scale on-demand:</h3>
                                        <p>iQuinceSoft offers best-fit hiring models to meet all your business needs. Hire developers from the best talent pool to meet your business needs and your business needs and budget. We help you scale on-demand and grow the team following the high-workload periods and ramp down the team size when required. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dedicate-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12">
                                    <h1>Benefits of a hiring a dedicated development team from iQuinceSoft:</h1>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12">
                                    <ul>
                                        <li>
                                            <label><img src={icon1} /> Diverse Teams:</label>
                                            <p>According to your project specifications, our diverse and versatile teams will deliver you result-driven solutions with expertise in key skills like PHP, Python, Django, NodeJS, Angular, WordPress, React Native, and other services areas.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>

                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12">
                                    <ul>
                                        <li>
                                            <label><img src={icon1} /> Efficient Delivery:</label>
                                            <p>We are a highly skilled and efficient team that leads the clients to forge long-term relations with us, from full-scale software development to quick customizations of pre-designed platforms.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>

                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12">
                                    <ul>
                                        <li>
                                            <label><img src={icon1} /> Quick Ramp-ups:</label>
                                            <p>We can swiftly ramp up your development projects by implementing the business transformations significantly in the blink of an eye. We leverage our developers to complete the tasks with minimum time to market. </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>

                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12">
                                    <ul>
                                        <li>
                                            <label><img src={icon1} /> Quick Ramp-ups:</label>
                                            <p>We can swiftly ramp up your development projects by implementing the business transformations significantly in the blink of an eye. We leverage our developers to complete the tasks with minimum time to market. </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>


                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12">
                                    <ul>
                                        <li>
                                            <label><img src={icon1} /> Quick Ramp-ups:</label>
                                            <p>We can swiftly ramp up your development projects by implementing the business transformations significantly in the blink of an eye. We leverage our developers to complete the tasks with minimum time to market. </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12">
                                    <ul>
                                        <li>
                                            <label><img src={icon1} /> Transparent Costing:</label>
                                            <p>We offer transparent and fair costing at all stages of software development. We charge what is reasonably right and suit your budget by matching our highest quality benchmarks.  </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>
                        </div>
                    </div>


                    <WebSec />

                    <EasySec />

                    <div className="ideal-sec">
                        <div className="container">
                            <h1>Benefits of a hiring a dedicated development team from iQuinceSoft: </h1>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="ideal-part">
                                        <img src={cycle} />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem>
                                            <AccordionItemButton>Project Manager</AccordionItemButton>
                                            <AccordionItemPanel>
                                                <p>The project managers are the people who are the all-round performers from planning and scheduling to process tracking and workflow optimization.</p>
                                                <p><strong>Related tools and technologies:</strong></p>
                                                <h5>Product Roadmap, Burndown chart, Release Plan, Jira, Team Work, Risk Register, Budget Tracker, Project Charter.</h5>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>Business Analyst</AccordionItemButton>
                                            <AccordionItemPanel>
                                                <p>Our business analysts can improve your business processes with the help of rigorous research and insightful documentation and help you refine the project requirements.</p>
                                                <p><strong>Related tools and technologies:</strong></p>
                                                <h5>Story map, Product Backlog, Business Model Canvas, Value Proposition.</h5>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>UI Designers</AccordionItemButton>
                                            <AccordionItemPanel>
                                                <p>The designers from iQuinceSoft can help you transform the product vision into user-friendly designs. We create the user experiences optimized for the highest conversion rates. </p>
                                                <p><strong>Related tools and technologies:</strong></p>
                                                <h5>Sketch, Figma, inVision, Adobe CC, Principle, Pencil, Piece of paper, Zeplin, Story Map.</h5>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>Frontend Developers</AccordionItemButton>
                                            <AccordionItemPanel>
                                                <p>The frontend developers build the front-end  that users interact with. They make sure that the user experience is equally smooth and easy to use to every visitor.</p>
                                                <p><strong>Related tools and technologies:</strong></p>
                                                <h5>JavaScript, HTML, CSS, React, Vue, Angular, React Native, and Ionic. </h5>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>Backend Developers</AccordionItemButton>
                                            <AccordionItemPanel>
                                                <p>The backend developers plan and develop the architecture of the web app and decides on the services and database part, API and external integrations and ensure the product is stable and secure.</p>
                                                <p><strong>Related tools and technologies:</strong></p>
                                                <h5>Python, PHP, RoR, Java, Node.js, GoLang, SQL, Algorithm, Microservices, Architecture. </h5>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>DevOps Engineers</AccordionItemButton>
                                            <AccordionItemPanel>
                                                <p>Our DevOps Engineers use the best CI/CD practices to minimize the errors during integration and deployment to streamline the project. </p>
                                                <p><strong>Related tools and technologies:</strong></p>
                                                <h5>Azure, Cloud Computing, AWS, Docker, Integration/Delivery, Kubernetes, Ansible, Terraform.</h5>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>Testing and QA Teams</AccordionItemButton>
                                            <AccordionItemPanel>
                                                <p>Our QA engineers and testing teams ensure the software solution to be free from any performance, stability, or functionality issues from meticulous manual testing to writing complex automated testing solutions.  </p>
                                                <p><strong>Related tools and technologies:</strong></p>
                                                <h5>JavaScript, Selenium, Cucumber, Cypress, TestCraft, Katalon, WebDriver, Appium, Jasmine, Apptester.
                                                </h5>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                    </div>

                    <FAQ />


                    <WorkSec />


                    <ReviewSec />

                    <div className="culture-sec insight-sec">
                        <h3>Featured Insights</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <OwlCarousel options={culture}>
                                        {LaravelJson && LaravelJson.map(LaravelJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{LaravelJson.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: LaravelJsonS.content }}></p>
                                                    <a href="#">Read More</a>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {LaravelJson && LaravelJson.map((LaravelJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={LaravelJsonS.id}>
                                                        <h4>{LaravelJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: LaravelJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${LaravelJsonS.slug}`} >READ MORE </Link>
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


                    <EuquireSec />

                    <AwardSec />

                    <Footer />
                </>
        );
    }
}

export default DedicatedTeams;
