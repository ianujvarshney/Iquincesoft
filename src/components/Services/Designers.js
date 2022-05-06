
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
import 'react-accessible-accordion/dist/fancy-example.css';
import FAQ from '../../container/FAQ';
import AwardFormsec from '../../container/AwardFormsec';
import { FaCode } from 'react-icons/fa';
import { TailSpin } from 'react-loader-spinner';
import Partner from '../../container/Partner';
import icon1 from '../../images/design-icon1.svg';

class Designers extends Component {
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
                320: { items: 1 },
            }
        }
        const hires = {
            items: 1,
            responsive: {
                480: { items: 2 },
                320: { items: 1 },
            }
        }

        return (
            this.state.Loading ? <div className="spinner"><TailSpin color="#00ccff" height={80} width={80} /></div>  :
                <>
                    <Header headerClass={'serv-head'} />
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" data-aos="fade-up">
                                    <h1><strong>Design Team you always ‘wished for</strong><br /></h1>
                                    <h2>We build brands with great web, social, mobile, and print designs.<br /></h2>
                                    {/*<ul>
                                        <p>The iQuinceSoft Advantage ensures you:</p>
                                        <li>Higher revenues by a significant margin.</li>
                                        <li>Guaranteed results</li>
                                        <li>Regular updates and insights on the ongoing projects</li>
                                        <li>Swift initiation with the process</li>
                                        <li>skilled team to deliver meaningful outputs outcomes. </li>
                                    </ul>*/}
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>

                    <div className="culture-sec cr-sec cr-sec-2 dd">
                        <div className="container">
                            <div className="row ">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" data-aos="fade-right">
                                    <h2>Hire Web and Graphic designers and use their skills to enhance your business revenue and branding purposes. Get reduced costs and enhanced business revenues.</h2>
                                </div>
                            </div>
                            <div className="row mid-border">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-4 col-md-12">
                                    <ul>
                                        <li><img src={icon1} /> <span>Work with some of the best creative minds in the industry</span></li>
                                        <li><img src={icon1} /> <span>Build your designer team and clear your creative bottlenecks.</span></li>
                                        <li><img src={icon1} /> <span>Increase your productivity.</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-12">
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

                    <div className="Design-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12">
                                    <h3>Simplify your message and Reshape your Branding with iQuinceSoft</h3>
                                    <h2>A good design can make you stand out in the crowd. It is an effective way to convey the message. The first thing that attracts eyes is a design that navigates people towards the written content.
                                        When you shake hands with our design team, you get fresh ideas and creative visuals that are visually appealing designs and help simplify your message and convey a message that is easy to understand.
                                        We create designs for print, social media, and web applications. That is how we make you stand out and convey a simple and compelling message while strengthening your brand.</h2>
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
                                        <div className="col-lg-4 col-md-4">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>Web Designs</h4>
                                                <p>Do you wish to make customized layouts for your websites? We offer design services with more informative and engaging means. Web design by iQuinceSoft includes website mockups, visualization and consultations. We make you a part of the process.  </p>
                                                <Link className="design-btn" to="/Web_Development">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>Social Ads</h4>
                                                <p>Do you want a visually appealing ad campaign that looks wow? iQuinceSoft designers can grab attention and get the eye-popping designs towards the message. Set yourself apart from the competition with stylish and modern visuals. </p>
                                                <Link className="design-btn" to="#">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>Social Media Graphics</h4>
                                                <p>We can help you design professional and appealing social media graphics for Instagram, Twitter, Pinterest, Snapchat, LinkedIn, Facebook, etc. We can timely deliver you quotes, blog images, GIFs, infographics, cover art, screenshots, and logos. </p>
                                                <Link className="design-btn" to="#">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>UI/UX designs</h4>
                                                <p>We can deliver amazing design mockups that highlight your ideal goals. We keep the best practices in mind with mobile-first implementations.  </p>
                                                <Link className="design-btn" to="/HireDesigners">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>Custom Graphic Designs</h4>
                                                <p>Let us know your design needs, and we’ll deliver that requirement. We recruit some of the best creative minds from the cream layer of the talent pools. We can help you differentiate your brand from the rest of the crowd and make it a top-ranked brand with no extra costs. </p>
                                                <Link className="design-btn" to="#">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>Flyers and Brochures</h4>
                                                <p>The print has never been off-track. It is again very much ‘in-trend’ now. You can put your information online at a place, but you can not override the power of the printed brochures.
                                                    iQuincesoft can deliver you all types of brochures in full color.  </p>
                                                <Link className="design-btn" to="#">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>Animated Videos</h4>
                                                <p>Video marketing is the new normal in the domains of marketing. Videos are the most influential type of marketing that can create an impact. Increase your video marketing with the help of custom-designed animated videos.
                                                    Team iQuinceSoft can create bespoke videos and explainer videos for you. Each video is different and helps your brand stand out from the other.   </p>
                                                <Link className="design-btn" to="#">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>Brand Designs</h4>
                                                <p>Your brand design is the basic reflection of your business. Therefore, make it classic, elegant and impactful. Team iQuinceSoft can offer a wide range of finishes, looks and papers so that you can have them in any way you wish.   </p>
                                                <Link className="design-btn" to="#">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="design-box">
                                                <img src={icon1} />
                                                <h4>Landing Page Designs</h4>
                                                <p>We deliver insightful UX wireframes and high-fidelity UI designs that can be used for Marketing, Product and Digital teams. Connect us to explore the types of landing page designs. </p>
                                                <Link className="design-btn" to="#">Learn More</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5>
                    </div>

                    <div className="whois-sec">
                        <div className="container">
                            <h1>Who is this for?</h1>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12">
                                    <div className="whois-box">
                                        <div className="whois-part1">
                                            <img src={icon1} />
                                        </div>
                                        <div className="whois-part2">
                                            <h3>For Agencies</h3>
                                            <p>We are the white-label design partner</p>
                                            <p>If you’re a web design company, digital marketing agency or SEO agency, we are the trusted partner you seek. We can help you with optimum design services for your product lineup with no extra need for employee recruitment. </p>
                                            <ul>
                                                <li>Meet the client deadlines</li>
                                                <li>Save money and time </li>
                                                <li>Escalate or de-escalate the team size as per the need. </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12">
                                    <div className="whois-box">
                                        <div className="whois-part1">
                                            <img src={icon1} />
                                        </div>
                                        <div className="whois-part2">
                                            <h3>For small businesses</h3>
                                            <p>Faster campaign execution with dedicated creative teams who can turn things around in favor. </p>
                                            <p>It is hard to find the marketing assets on time for the marketing teams. iQuinceSoft can clear such bottlenecks with a regular and bankable supply of graphics designed to meet your designing campaign needs.</p>
                                            <ul>
                                                <li>Clear the bottlenecks.</li>
                                                <li>Get three times faster creative to market</li>
                                                <li>Complement your existing graphic design process.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12">
                                    <div className="whois-box">
                                        <div className="whois-part1">
                                            <img src={icon1} />
                                        </div>
                                        <div className="whois-part2">
                                            <h3>For Marketing Teams</h3>
                                            <p>Faster campaign execution with dedicated creative teams who can turn things around in favor. </p>
                                            <p>It is hard to find the marketing assets on time for the marketing teams. iQuinceSoft can clear such bottlenecks with a regular and bankable supply of graphics designed to meet your designing campaign needs.</p>
                                            <ul>
                                                <li>Clear the bottlenecks.</li>
                                                <li>Get three times faster creative to market</li>
                                                <li>Complement your existing graphic design process</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="hire-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12">
                                    <h1>Why Hire Dedicated Designers from iQuinceSoft?</h1>
                                </div>
                            </div>
                            <div className="row">
                                <OwlCarousel options={hires}>
                                    <div className="hire-owl">
                                        <div className="hire-part1">
                                            <img src={icon1} />
                                        </div>
                                        <div className="hire-part2">
                                            <h2>Unmatched Quality</h2>
                                            <p>Graphic design is the first point of contact between your brand and your prospective customer. If the graphic is not up to the mark, the prospect will never convert to the customer list, and the entire impression about the company will vanish.
                                                Team iQuinceSoft will offer amazing designs full of information and visually-appealing layouts that can help you sell more.</p>
                                        </div>
                                    </div> <div className="hire-owl">
                                        <div className="hire-part1">
                                            <img src={icon1} />
                                        </div>
                                        <div className="hire-part2">
                                            <h2>Unmatched Quality</h2>
                                            <p>Graphic design is the first point of contact between your brand and your prospective customer. If the graphic is not up to the mark, the prospect will never convert to the customer list, and the entire impression about the company will vanish.
                                                Team iQuinceSoft will offer amazing designs full of information and visually-appealing layouts that can help you sell more.</p>
                                        </div>
                                    </div>
                                    <div className="hire-owl">
                                        <div className="hire-part1">
                                            <img src={icon1} />
                                        </div>
                                        <div className="hire-part2">
                                            <h2>Unmatched Quality</h2>
                                            <p>Graphic design is the first point of contact between your brand and your prospective customer. If the graphic is not up to the mark, the prospect will never convert to the customer list, and the entire impression about the company will vanish.
                                                Team iQuinceSoft will offer amazing designs full of information and visually-appealing layouts that can help you sell more.</p>
                                        </div>
                                    </div>
                                    <div className="hire-owl">
                                        <div className="hire-part1">
                                            <img src={icon1} />
                                        </div>
                                        <div className="hire-part2">
                                            <h2>Unmatched Quality</h2>
                                            <p>Graphic design is the first point of contact between your brand and your prospective customer. If the graphic is not up to the mark, the prospect will never convert to the customer list, and the entire impression about the company will vanish.
                                                Team iQuinceSoft will offer amazing designs full of information and visually-appealing layouts that can help you sell more.</p>
                                        </div>
                                    </div>
                                    <div className="hire-owl">
                                        <div className="hire-part1">
                                            <img src={icon1} />
                                        </div>
                                        <div className="hire-part2">
                                            <h2>Unmatched Quality</h2>
                                            <p>Graphic design is the first point of contact between your brand and your prospective customer. If the graphic is not up to the mark, the prospect will never convert to the customer list, and the entire impression about the company will vanish.
                                                Team iQuinceSoft will offer amazing designs full of information and visually-appealing layouts that can help you sell more.</p>
                                        </div>
                                    </div>
                                </OwlCarousel>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="hire-box">
                                        <div className="hire-part1">
                                            <img src={icon1} />
                                        </div>
                                        <div className="hire-part2">
                                            <h2>Unmatched Quality</h2>
                                            <p>Graphic design is the first point of contact between your brand and your prospective customer. If the graphic is not up to the mark, the prospect will never convert to the customer list, and the entire impression about the company will vanish.
                                                Team iQuinceSoft will offer amazing designs full of information and visually-appealing layouts that can help you sell more.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="hire-box">
                                        <div className="hire-part1">
                                            <img src={icon1} />
                                        </div>
                                        <div className="hire-part2">
                                            <h2>Increased Efficiency</h2>
                                            <p>iQuinceSoft ensures you better efficiency with the design services. We ensure you get timely designs that complement your campaigns and help you sell more.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-1 col-md-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="hire-box">
                                        <div className="hire-part1">
                                            <img src={icon1} />
                                        </div>
                                        <div className="hire-part2">
                                            <h2>Image Building</h2>
                                            <p>The first thing that comes to the customer’s mind is the design. Your design speaks on your behalf. Your design reflects your professionalism, quality of service and sincerity. Your design should reflect the same. Therefore, we offer you quality design services that are competitive, customized, and help you build the image you want. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="hire-box">
                                        <div className="hire-part1">
                                            <img src={icon1} />
                                        </div>
                                        <div className="hire-part2">
                                            <h2>Images last long: Use the best ones:</h2>
                                            <p>The image of your brand is directly proportional to the business. Once you have made an image, your customer will keep it. With the help of amazing designs and content by iQuinceSoft, you can build a rock-solid image of professionalism and quality service provider. Thus, they may weigh you over the competitor, and you may earn a good market share.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1 col-md-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="hire-box">
                                        <div className="hire-part1">
                                            <img src={icon1} />
                                        </div>
                                        <div className="hire-part2">
                                            <h2>We help you gain Trust.</h2>
                                            <p>When the customer starts identifying your brand with your visuals, a bond builds between the brand and the customer. We help you build those long-lasting, and amazing visuals that may be identified by the customer and a bond is established between your business and your customer. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="hire-box">
                                        <div className="hire-part1">
                                            <img src={icon1} />
                                        </div>
                                        <div className="hire-part2">
                                            <h2>The Promise of Quality</h2>
                                            <p>Your graphic design is your prospects’ first introduction to your brand.
                                                If you have low-quality, badly-executed design, your prospects will pick up on that—and they won’t become your customers. But by having your design developed by our professionals,
                                                you’ll assure your customers that your brand takes matters of quality seriously.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5>
                    </div>

                    <div className="process-sec dd">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12">
                                    <h1>We follow a Process</h1>
                                    <p>We follow a process to make designs for our clients. We undergo the same deep and creative approach in all of our approaches across all our services. Graphic design is the process in which we focus on the what and how graphics requirements that can suit your brand needs.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <picture><img src={icon1} /></picture>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <span className="blue">01</span>
                                        <h3>Analysis</h3>
                                        <p>We analyze your existing content to determine what works best for you and whatnot. We figure out what you like and how it sets you different from the competitors. We understand your market, competition and your larger business goals.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <span className="blue">02</span>
                                        <h3>Develop </h3>
                                        <p>Once we collect enough information about your brand, competition and market, we plan out the strategies for your design, mockups and frameworks. We share the insights with you, and based on the feedback, we fine-tune them as your choices. That is how you remain in total control of development.</p>
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
                                        <h3> Implementation</h3>
                                        <p>We take a survey of your existing content to find out what’s working for you and what isn’t. We determine what you like, how it sets you apart from your competitors, research your market, and work with you to understand your larger goals. It’s only in the context of understanding the broader picture that we’re able to present visuals that will make your brand come to life.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <span className="blue">04</span>
                                        <h3> Maintenance</h3>
                                        <p>If the design needs us to stick around, we will help. We’ll work with you to help develop fresh designs and strategies and increase brand messaging. We’ll refine the earlier stages we have come across to keep you posted with the new, fresh and engaging visuals.</p>
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <picture><img src={icon1} /></picture>
                                </div>
                            </div>
                        </div>
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

export default Designers;

{/* <OwlCarousel options={culture}>
                                //     <div className="cult-box">
                                //         <div class="tech-dot"></div>
                                //         <h4>Object-oriented Libraries</h4>
                                //         <p>Laravel composes of 20+ libraries. It offers CSRF protection, database security, and encryption.  </p>
                                //     </div>

                                //     <div className="cult-box">
                                //         <div class="tech-dot"></div>
                                //         <h4>Ease of Documentation</h4>
                                //         <p>Laravel comes with Model View Controller (MVC) pattern. This pattern ensures high-End architecture and neat and organized documentation efficiently. </p>
                                //     </div>

                                //     <div className="cult-box">
                                //         <div class="tech-dot"></div>
                                //         <h4>Blade Template Engine</h4>
                                //         <p>Laravel ensures easy data display and extends web layouts while maintaining the app's speed. </p>
                                //     </div>

                                //     <div className="cult-box">
                                //         <div class="tech-dot"></div>
                                //         <h4>Unit-Testing</h4>
                                //         <p>Smooth and easy to perform unit-tests of an existing web function or new feature is accessible with Laravel. </p>
                                //     </div>

                                //     <div className="cult-box">
                                //         <div class="tech-dot"></div>
                                //         <h4>Caching</h4>
                                //         <p>APC, Redis, and Memcached caching systems are easy to integrate. It helps to enhance the app's performance. </p>
                                //     </div>

                                //     <div className="cult-box">
                                //         <div class="tech-dot"></div>
                                //         <h4>Security</h4>
                                //         <p>Laravel prevents illegal access. Thus, it ensures the security of the web app and systems with proper authentication.  </p>
                                //     </div>


// </OwlCarousel>*/}
