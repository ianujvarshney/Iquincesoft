
import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Header from './Header';
import Footer from './Footer';
import FormPopup from '../container/FormPopup';
import ReviewSec from '../container/ReviewSec';
import EuquireSec from '../container/EuquireSec';
import AwardSec from '../container/AwardSec';

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import { AboutJson } from '../json/aboutJson';

import arrow4 from '../images/arrow4.png';
import storyLogo from '../images/story-logo.png';
import storyLogo1 from '../images/story-logo1.png';
import storyLogo2 from '../images/story-logo2.png';
import priImg from '../images/pri-img.png';
import priImg1 from '../images/pri-img1.png';
import priMob from '../images/pri-mob.png';
import priMob1 from '../images/pri-mob1.png';


class About extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ContentData: [],
            Storyjson: [],
            Helpjson: [],
            Officejson: [],
            Culturejson: [],
        }
    }

    componentDidMount() {
        AboutJson.getAbout().then((data, err) => {
            if (!err) {
                this.setState({
                    ContentData: data,

                });
            }
        });
        AboutJson.getStory().then((story, err) => {
            if (!err) {
                this.setState({
                    Storyjson: story,

                });
            }
        });
        AboutJson.gethelp().then((help, err) => {
            if (!err) {
                this.setState({
                    Helpjson: help,

                });
            }
        });
        AboutJson.getoffice().then((office, err) => {
            if (!err) {
                console.log(office)
                this.setState({
                    Officejson: office,

                });
            }
        });
        AboutJson.getCulture().then((culture, err) => {
            if (!err) {
                console.log(culture)
                this.setState({
                    Culturejson: culture,

                });
            }
        });
    }


    render() {
        const { ContentData, Storyjson, Helpjson, Officejson, Culturejson } = this.state;
        const officeSlide = {
            items: 1,
            responsive: {
                480: { items: 1 },
                320: { items: 1, }
            },
            loop: true,
            autoplay: true
        };

        const culture = {
            items: 4,
            responsive: {
                768: { items: 4 },
                480: { items: 1 },
                320: { items: 1, }
            },
            loop: true
        };

        return (
            <>
                <Header headerClass={'about-head'} />
                <div div className="about-banner" >
                    <div className="about-box">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-9" data-aos="fade-up">
                                    {Helpjson && Helpjson.map(HelpjsonS => {
                                        return (
                                            <>
                                                {HelpjsonS.name == 'Heading' ? <h1 dangerouslySetInnerHTML={{ __html: HelpjsonS.content }}></h1> : null}
                                                {HelpjsonS.name == 'Paragraph' ? <p dangerouslySetInnerHTML={{ __html: HelpjsonS.content }}></p> : null}
                                            </>
                                        );
                                    })
                                    }

                                    <a href="#"><img src={arrow4} /> Read our story</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {Helpjson && Helpjson.map(HelpjsonS => {
                        return (
                            <>
                                {HelpjsonS.name == 'Background' ?
                                    <>
                                        <img className="abt-img" width="100%" src={HelpjsonS.img} />
                                        <img className="abt-mob" width="100%" src={HelpjsonS.img} />
                                    </> : null
                                }
                            </>
                        );
                    })
                    }
                </div>
                <div>

                </div>


                <div className="story-sec" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-6 col-md-7 sty-sec" data-aos="fade-right">
                                <h4>The Story</h4>
                                <h3>Get to know us</h3>
                                <div className="row">
                                    {Storyjson && Storyjson.map(StoryjsonS => {
                                        return (
                                            <>
                                                {(StoryjsonS.name == 'img-1') ? <div className="col-lg-6 col-md-6"><img width="100%" src={StoryjsonS.img} /></div> : null}
                                                {(StoryjsonS.name == 'img-2') ? <div className="col-lg-6 col-md-6"><img width="100%" src={StoryjsonS.img} /></div> : null}

                                            </>
                                        );
                                    })}
                                </div>
                                <div className="row">
                                    {Storyjson && Storyjson.map(StoryjsonS => {
                                        return (
                                            <>
                                                {StoryjsonS.name == 'img-3' ?
                                                    <><div className="col-lg-1 col-md-1"></div>
                                                        <div className="col-lg-10 col-md-10"><img width="100%" src={StoryjsonS.img} /></div></>
                                                    : null
                                                }
                                            </>
                                        );
                                    })}
                                </div>
                                <div className="row">
                                    {Storyjson && Storyjson.map(StoryjsonS => {
                                        return (
                                            <>
                                                {StoryjsonS.name == 'img-4' ?
                                                    <><div className="col-lg-6 col-md-6"></div>
                                                        <div className="col-lg-6 col-md-6"><img width="100%" src={StoryjsonS.img} /></div></>
                                                    : null
                                                }
                                            </>
                                        );
                                    })}
                                </div>
                                <div className="sty-logo"><img src={storyLogo} /> <img src={storyLogo1} /> <img src={storyLogo2} /></div>
                            </div>

                            <div className="col-lg-4 col-md-5">
                                <ul data-aos="fade-up">
                                    {Storyjson && Storyjson.map(StoryjsonS => {
                                        return (
                                            <>
                                                {StoryjsonS.content == '' ? null : <li><span>{StoryjsonS.name}</span> <p dangerouslySetInnerHTML={{ __html: StoryjsonS.content }}></p></li>}
                                            </>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="meet-sec" data-aos="fade-down">
                    <h4>Leadership Team</h4>
                    <h3>Meet the people who make it happen</h3>
                    <div className="container">
                        <div className="row">

                            {ContentData && ContentData.map(ContentDatas => {
                                return (
                                    <div className="col-lg-2 col-md-3" key={ContentDatas.id}><img src={ContentDatas.img} /> <h5><span>{ContentDatas.name}</span> Leadership Team</h5></div>
                                );
                            })}

                        </div>
                    </div>
                    <a href="#">Meet the whole team</a>
                    <h6><span>The Office</span> Step inside our headquarters</h6>
                </div>

                <div className="office-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <OwlCarousel options={officeSlide}>

                                    {Officejson && Officejson.map(OfficejsonS => {
                                        return (
                                            <>
                                                <div>
                                                    <h3 dangerouslySetInnerHTML={{ __html: OfficejsonS.name }}></h3>
                                                    <img width="100%" src={OfficejsonS.img} />
                                                    <p dangerouslySetInnerHTML={{ __html: OfficejsonS.content }}></p>
                                                </div>

                                                <div>
                                                    <h3 dangerouslySetInnerHTML={{ __html: OfficejsonS.name }}></h3>
                                                    <img width="100%" src={OfficejsonS.img} />
                                                    <p dangerouslySetInnerHTML={{ __html: OfficejsonS.content }}></p>
                                                </div>

                                                <div>
                                                    <h3 dangerouslySetInnerHTML={{ __html: OfficejsonS.name }}></h3>
                                                    <img width="100%" src={OfficejsonS.img} />
                                                    <p dangerouslySetInnerHTML={{ __html: OfficejsonS.content }}></p>
                                                </div>

                                            </>
                                        );
                                    })}
                                </OwlCarousel>
                            </div>
                            {Officejson && Officejson.map((OfficejsonS, index) => {
                                return (
                                    (index % 2 == 0) ?
                                        <>
                                            <div className="col-lg-6 col-md-6 off-txt" data-aos="fade-right" key={OfficejsonS.id}>
                                                <h3 dangerouslySetInnerHTML={{ __html: OfficejsonS.name }}></h3>
                                                <p dangerouslySetInnerHTML={{ __html: OfficejsonS.content }}></p>
                                            </div>
                                            <div className="col-lg-6 col-md-6"><img width="100%" src={OfficejsonS.img} /></div>
                                        </>
                                        :
                                        <>
                                            <div className="col-lg-6 col-md-6"><img width="100%" src={OfficejsonS.img} /></div>
                                            <div className="col-lg-6 col-md-6 off-txt1" data-aos="fade-up">
                                                <h3 dangerouslySetInnerHTML={{ __html: OfficejsonS.name }}></h3>
                                                <p dangerouslySetInnerHTML={{ __html: OfficejsonS.content }}></p>
                                            </div>
                                        </>

                                );
                            })}

                        </div>
                    </div>
                </div>

                <div className="price-sec">
                    <h3>Pricing Models</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6" data-aos="fade-up"><img className="pri-desk" src={priImg} /> <img className="pri-mob" src={priMob} /> <h4>Dedicated <span>Hiring</span></h4></div>
                            <div className="col-lg-6 col-md-6" data-aos="fade-down"><img className="pri-desk" src={priImg1} /> <img className="pri-mob" src={priMob1} /> <h4>Fixed Cost <span>Projects</span></h4></div>
                        </div>
                    </div>
                    <FormPopup />
                    <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                </div>

                <div className="culture-sec" data-aos="fade-down">
                    <h3>Culture</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                {Culturejson.length && (
                                    <OwlCarousel options={culture}>
                                        {Culturejson.map((CulturejsonS) => {
                                            return (
                                                <div key={CulturejsonS.id} className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <img src={CulturejsonS.img} />
                                                    <span dangerouslySetInnerHTML={{ __html: CulturejsonS.content }}></span>
                                                </div>
                                            );
                                        })}


                                    </OwlCarousel>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <ReviewSec />

                <EuquireSec />

                <AwardSec />

                <Footer />
            </>
        );
    }
}

export default About;