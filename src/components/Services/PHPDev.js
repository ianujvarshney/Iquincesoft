
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
import { serviceapi } from '../../json/serviceapi';
import 'react-accessible-accordion/dist/fancy-example.css';
import FAQ from '../../container/FAQ';
import AwardFormsec from '../../container/AwardFormsec';
import { FaCode } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';
import Partner from '../../container/Partner';


class HirePHPDevelopers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            servicesJson: [],
            appjson: [],
            Questionjson: [],
            PhpJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getPhp().then((Php, err) => {
            if (!err) {
                this.setState({
                    PhpJson: Php,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { PhpJson } = this.state;
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
                                    <h1><strong>Hire PHP Developers</strong><br /></h1>
                                    <ul>
                                        <p>What is my benefit in it?</p>
                                        <li>Use our PHP Developers to get the results you desire.</li>
                                        <li>PHP Developer – Your projects, Our Resources. Make them count deliver substantial results.</li>
                                        <li>Your Project + Our Developer Team = Success is unparalleled. Hire the developers to achieve timely and satisfying deliverables.</li>
                                        <li>Hire as per your project and budget base needs, make a remote team that functions as your in-house team. Hire from our pool of developers.</li>
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
                                    <h3>Why PHP?</h3>
                                    <p>You will be provided with the necessary space, tools, and resources to pursue your own ambitions, develop in the chosen direction and even create a personal expert brand.</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Opensource:</h4>
                                        <p>PHP is Opensource. It is free to use. It costs no license fee, and third-party changes make it a preferential choice for most business owners.  </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Strengthening the web:</h4>
                                        <p>PHP is the most used server-Side scripting language on the web, with more than 80% websites.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Web-Friendly:</h4>
                                        <p>PHP is a web-friendly language. It has built-in modules to access FTP servers and multiple database servers. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Scalable:</h4>
                                        <p>One can deploy PHP to scale horizontally to manage the extra users and the traffic with no performance issues. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cross-Platform:</h4>
                                        <p>pHP can function across Linux, Unix, Windows, and Solaris platforms.  </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Swift Development:</h4>
                                        <p>PRADO, Symfony, Phalcon, Zend, CakePHP, CodeIgniter, Laravel, and Yii Framework are a few frameworks from PHP that one can use to develop an app swiftly. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Opensource:</h4>
                                        <p>PHP is Opensource. It is free to use. It costs no license fee, and third-party changes make it a preferential choice for most business owners.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Strengthening the web:</h4>
                                        <p>PHP is the most used server-Side scripting language on the web, with more than 80% websites.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Web-Friendly:</h4>
                                        <p>PHP is a web-friendly language. It has built-in modules to access FTP servers and multiple database servers. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Scalable:</h4>
                                        <p>One can deploy PHP to scale horizontally to manage the extra users and the traffic with no performance issues.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cross-Platform:</h4>
                                        <p>FpHP can function across Linux, Unix, Windows, and Solaris platforms.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Swift Development:</h4>
                                        <p>PRADO, Symfony, Phalcon, Zend, CakePHP, CodeIgniter, Laravel, and Yii Framework are a few frameworks from PHP that one can use to develop an app swiftly. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>PHP Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-up">
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Web Services & API Development:</h4>
                                            <p>Make robust and powerful iOS & Android mobile apps or grant access to the platform data with safe, stable, and well-documented web services and APIs. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>App Development:</h4>
                                            <p>We use API first approach to offer safer and scalable web applications. Our skilled and experienced PHP developers can help you with tailor-made web solutions.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Support & Maintenance:</h4>
                                            <p>We help to resolve your complex issues. We provide result-oriented solutions and responses from skilled domain experts. We help you with the ongoing maintenance as well.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Web development:</h4>
                                            <p>We build a website full of features according to your needs. We use PHP-based CMS like WordPress or Drupal. We also build websites from scratch with the help of frameworks like Symfony, Zend, CodeIgniter, and Laravel. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Migration</h4>
                                            <p>Migrate your web apps to PHP from Java, Python, and ASP.NET with no data loss or functionality. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>ECommerce:</h4>
                                            <p>Create custom online stores with the help of PHP at the platforms like WooCommerce, Magento. If you wish to build one from scratch, we can help with that. As per your business needs, we can help you in integration with shipping, inventory, and 3rd party services.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Consulting:</h4>
                                            <p>For application architecture, design and implementation, and application development and management, we can help you with custom consulting services as well. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Cloud Solutions:</h4>
                                            <p>We can help you build cloud-native apps, deploy, manage and scale them as per your convenient schedule. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Integration and Extensions:</h4>
                                            <p>Explore our powerful CRM system that has helped hundreds of businesses with integrations and app creation. You can customize Hubspot as well to suit your needs. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire PHP Developers:</h4>
                                            <p>Save time and money from hiring an in-house team when the remote developer can do the needful. Hire our skilled PHP developers. We offer rental paid services as per your needs. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Web Services & API Development:</h4>
                                            <p>Make robust and powerful iOS & Android mobile apps or grant access to the platform data with safe, stable, and well-documented web services and APIs. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>App Development:</h4>
                                            <p>We use API first approach to offer safer and scalable web applications. Our skilled and experienced PHP developers can help you with tailor-made web solutions.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Support & Maintenance:</h4>
                                            <p>We help to resolve your complex issues. We provide result-oriented solutions and responses from skilled domain experts. We help you with the ongoing maintenance as well.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Web development:</h4>
                                            <p>We build a website full of features according to your needs. We use PHP-based CMS like WordPress or Drupal. We also build websites from scratch with the help of frameworks like Symfony, Zend, CodeIgniter, and Laravel. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Migration</h4>
                                            <p>Migrate your web apps to PHP from Java, Python, and ASP.NET with no data loss or functionality. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>ECommerce:</h4>
                                            <p>Create custom online stores with the help of PHP at the platforms like WooCommerce, Magento. If you wish to build one from scratch, we can help with that. As per your business needs, we can help you in integration with shipping, inventory, and 3rd party services.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Consulting:</h4>
                                            <p>For application architecture, design and implementation, and application development and management, we can help you with custom consulting services as well. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Cloud Solutions:</h4>
                                            <p>We can help you build cloud-native apps, deploy, manage and scale them as per your convenient schedule. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Integration and Extensions:</h4>
                                            <p>Explore our powerful CRM system that has helped hundreds of businesses with integrations and app creation. You can customize Hubspot as well to suit your needs. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire PHP Developers:</h4>
                                            <p>Save time and money from hiring an in-house team when the remote developer can do the needful. Hire our skilled PHP developers. We offer rental paid services as per your needs. </p>
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
                        <h3>Featured Php</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <OwlCarousel options={culture}>
                                        {PhpJson && PhpJson.map(PhpJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{PhpJson.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: PhpJsonS.content }}></p>
                                                    <a href="#">Read More</a>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {PhpJson && PhpJson.map((PhpJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={PhpJsonS.id}>
                                                        <h4>{PhpJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: PhpJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${PhpJsonS.slug}`} >READ MORE </Link>
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

export default HirePHPDevelopers;

