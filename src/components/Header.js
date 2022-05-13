
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Menu } from '../json/menu';

import logo from '../images/logo.png';
// import aboutLogo from '../images/about-logo.png';
import flag from '../images/flag.jpg';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import popupImg from '../images/popup-img.png';
import arrow6 from '../images/arrow6.png';
import arrow2 from '../images/arrow2.png';
import arrow_white from '../images/arrow-white.png';

import { FaRegCalendar, FaLockOpen, FaRegUserCircle, FaRegEnvelope, FaPhoneAlt, FaPaperPlane, FaAngleDown } from 'react-icons/fa';



class Header extends Component {
   constructor(props) {
      super(props)
      this.state = {
         toggleSidenav: false,
         toggleDropdown: false,
         toggleDropdown1: false,
         toggleDropdown2: false,
         links: []
         /*links : [
          {'id':1,'name':'Services','class':'nav-link','liClassName':'','img':mobIcon,'to':'service'},
          {'id':2,'name':'Case Studies','class':'nav-link','liClassName':'','img':mobIcon1,'to':'caseStudies'},
          {'id':3,'name':'Careers','class':'nav-link','liClassName':'','img':mobIcon2,'to':'career'},
          {'id':4,'name':'How We Deliver','class':'nav-link','liClassName':'','img':mobIcon3,'to':'howWeDeliver'},
          {'id':5,'name':'Get Inspired','class':'nav-link','liClassName':'','img':mobIcon4,'to':'blog'},
          {'id':6,'name':'Talk to Sales','class':'nav-link','liClassName':'mob-link','img':mobIcon5,'to':'contactUs'},
          {'id':7,'name':'Client Login','class':'nav-link','liClassName':'mob-link','img':mobIcon6,'to':'/'},
          {'id':8,'name':'+1 (347) 960-4166','class':'nav-link','liClassName':'mob-link','img':flag,'to':'','hash':'tel:+1 (347) 960-4166'}
         ]*/
      }
   }

   // componentDidMount() {
   //    window.scrollTo(0, 0);
   //    Menu.getMenu().then((menus, err) => {
   //       if (!err) {
   //          this.setState({
   //             links: menus,
   //          });
   //       }
   //    });
   // }
   handleClick = () => {
      this.setState({
         toggleSidenav: !this.state.toggleSidenav
      });
   }

   handleDropdownClick = () => {
      this.setState({
         toggleDropdown: !this.state.toggleDropdown
      });
   }

   render() {
      // const { links } = this.state;

      AOS.init({
         offset: 300,
         duration: 2000,
         easing: 'ease',
      });

      return (
         <header className={this.props.headerClass}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-1 col-md-2"><Link className="logo" to="/"><img src={logo} /></Link></div>
                  <div className="col-lg-6 col-md-1">
                     <div className="bottom-head">
                        <nav className="navbar navbar-expand-md">
                           <button className={`${(this.state.toggleSidenav) ? '' : 'collapsed'} navbar-toggler`} onClick={() => this.handleClick()} type="button">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                           </button>
                           <div className={`${(this.state.toggleSidenav) ? 'show' : ''} navbar-collapse collapse`}>
                              <div className="mob-logo"><a href="#"><img src={logo} /></a></div>
                              <ul className="navbar-nav">

                                 <li className={`${(this.state.toggleDropdown) ? 'show' : ''} dropdown`}>
                                    <Link href="/service" className="nav-link">Services</Link> <span><FaAngleDown onClick={() => this.handleDropdownClick()} /></span>
                                    <ul className={`${(this.state.toggleDropdown) ? 'show' : ''} dropdown-menu`}>
                                       <li>
                                          <h4>Front-end</h4>
                                          <Link to={"/HireReactDevelopers"}>React.js</Link>
                                          <Link to={"/HireVueDevelopers"}>Vue.js</Link>
                                          <Link to={"/HireAngularDevelopers"}>Angular</Link>
                                          <Link to={"/HireMERNStackDevelopers"}>MERN</Link>
                                          <Link to={"/HireZendStackDevelopers"}>ZEND</Link>
                                          <Link to={"/HireMeanstackDevelopers"}>MEAN</Link>
                                       </li>
                                       <li>
                                          <h4>Backend</h4>
                                          <Link to={"/HireNodeDevelopers"}>Node.js</Link>
                                          <Link to={"/HirePHPDevelopers"}>PHP</Link>
                                          <Link to={"/HireLaravelDevelopers"}>Laravel</Link>
                                          <Link to={"/HireSymfonyDevelopers"}>Symfony</Link>
                                          <Link to={"/HireCodeIgniterDevelopers"}>CodeIgniter</Link>
                                       </li>

                                       <li>
                                          <h4>E-Commerce</h4>
                                          <Link to={"/HireMagentoDevelopers"}>Magento</Link>
                                          <Link to={"/HireWooCommerceDevelopers"}>WooCommerce</Link>
                                          <Link to={"/HireShopifyDevelopers"}>Shopify</Link>
                                          <Link to={"/HireopencartDevelopers"}>OpenCart</Link>
                                          <Link to={"/HireWixDevelopers"}>Wix</Link>
                                       </li>
                                       <li>
                                          <h4>CMS</h4>
                                          <Link to={"/HireDrupalDevelopers"}>Drupal</Link>
                                          <Link to={"/HireWordpressDevelopers"}>Wordpress</Link>
                                       </li>
                                       <li>
                                          <h4>Mobile</h4>
                                          <Link to={"/HireIosDevelopers"}>Ios</Link>
                                          <Link to={"/HireAndroidDevelopers"}>Android</Link>
                                          <Link to={"/HireReactNativeDevelopers"}>ReactNative</Link>
                                          <Link to={"/HireionicDevelopers"}>Ionic</Link>
                                       </li>
                                       <li>
                                          <h4>LowCode/No Code</h4>
                                          {/* <a href="/Web_Development">Web Development</a>
                                          <a href="/Web_Development">Web Development</a>
                                          <a href="/Web_Development">Web Development</a>
                                          <a href="/Web_Development">Web Development</a>
                                          <a href="/Web_Development">Web Development</a> */}
                                       </li>
                                    </ul>
                                 </li>


                                 <li><Link className="nav-link" to={"/career"}>Career</Link></li>
                                 <li><Link className="nav-link" to={"/casestudies"}>Case Studies</Link></li>
                                 <li><Link className="nav-link" to={"/about"}>About Us</Link></li>
                                 <li><Link className="nav-link" to={"/blog"}>Get Inspired</Link></li>
                                 <li className="mob-link"><a className="nav-link" href="#">Talk to Sales</a></li>
                                 <li className="mob-link"><a className="nav-link" href="#">Client Login</a></li>
                                 <li className="mob-link"><a className="nav-link" href="tel:+1 (347) 960-4166"><img src={flag} /> +1 (347) 960-4166</a></li>
                              </ul>
                           </div>
                        </nav>
                     </div>
                  </div>

                  <div className="col-lg-5 col-md-9">
                     <ul className="head-sec">
                        <li><Popup className="popup-sec" trigger={<button className="talk-btn">Talk to Sales</button>}
                           modal lockScroll={true} >
                           {close => (
                              <div className="modal">
                                 <button className="close" onClick={close}>&times;</button>
                                 <div className="content">
                                    <div className="row">
                                       <div className="col-lg-6 col-md-6">
                                          <img src={popupImg} />
                                          <div className="popup-box">
                                             <h4>Schedule a 15 minute Free Consultation</h4>
                                             <p>If we can help you in any way, please don’t hesitate to set a time to meet or talk, or leave your details and we will get back to you.</p>
                                          </div>
                                       </div>

                                       <div className="col-lg-6 col-md-6">
                                          <form>
                                             <h3>Start Here <img src={arrow_white} /></h3>
                                             <div className="in-box"><FaRegUserCircle /> <input className="box" type="text" name="" placeholder="Name" /></div>
                                             <div className="in-box"><FaRegEnvelope /> <input className="box" type="text" name="" placeholder="Work e-Mail*" /></div>
                                             <div className="in-box"><FaPhoneAlt /> <input className="box" type="text" name="" placeholder="Phone Number" /></div>
                                             <a href="#"><FaPaperPlane /></a>
                                             <ul>
                                                <li><FaRegCalendar /> <p>Pick a date & time of your choice</p></li>
                                                <li><FaLockOpen /> <p>No obligation. Cancel any time.</p></li>
                                             </ul>
                                          </form>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           )}
                        </Popup></li>
                        <li><a className="clt-btn" href="#">Client Login</a></li>
                        <li><img src={flag} /> <a href="tel:+1 (347) 960-4166">+1 (347) 960-4166</a></li>
                     </ul>
                  </div>
               </div>
            </div >
         </header >
      );
   }
}

export default Header;