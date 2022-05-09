
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

import { FaRegCalendar, FaLockOpen, FaRegUserCircle, FaRegEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';



class Header extends Component {
   constructor(props) {
      super(props)
      this.state = {
         toggleSidenav: false,
         toggleDropdown: false,
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

   componentDidMount() {
      window.scrollTo(0, 0);
      Menu.getMenu().then((menus, err) => {
         if (!err) {
            this.setState({
               links: menus,
            });
         }
      });
   }
   handleClick = () => {
      this.setState({
         toggleSidenav: !this.state.toggleSidenav
      });
   }

   render() {
      const { links } = this.state;

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
                              <div className="mob-logo"><Link to="/"><img src={logo} /></Link></div>
                              <ul className="navbar-nav">
                                 {links.map(link => {
                                    if (link.hash) {
                                       return (<li key={link.id} className={link.liClassName}><a className={link.class} href={link.hash}><img src={link.img} /> {link.name}</a></li>);
                                    } else {
                                       return (<li key={link.id} className={link.liClassName}><NavLink className={link.class} activeClassName={"active"} to={link.to} hash={link.hash}><img src={link.img} /> {link.name}</NavLink></li>);
                                    }
                                 })}
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