
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { HashLink as Link } from 'react-router-hash-link';
import contImg from '../images/cont-img.jpg';
import contImg1 from '../images/cont-img1.jpg';
import contImg2 from '../images/cont-img2.jpg';
import contImg3 from '../images/cont-img3.jpg';
import contImg4 from '../images/cont-img4.jpg';
import contImg5 from '../images/cont-img5.jpg';
import contImg6 from '../images/cont-img6.jpg';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaYoutube, FaStar, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

class ContactUs extends Component {
	render() {
		return (
			<>
				<Header headerClass={'case-head'} />

				<div className="contact-sec">
					<div className="container">
						<div className="row">
							<div className="col-lg-7 col-md-7" data-aos="fade-up">
								<h3>What do you want to achieve? <span>SELECT AN OPTION & FILL THE FORM BELOW</span></h3>
								<div className="row check-txt">
									<div className="col-lg-4 col-md-12"><input type="checkbox" name="" /> Build a Digital Product</div>
									<div className="col-lg-4 col-md-12"><input type="checkbox" name="" /> Speed up Development</div>
									<div className="col-lg-4 col-md-12"><input type="checkbox" name="" /> Optimize product usability</div>
									<div className="col-lg-4 col-md-12"><input type="checkbox" name="" /> Scale up a team</div>
									<div className="col-lg-4 col-md-12"><input type="checkbox" name="" /> Other</div>
								</div>

								<div className="in-box"><input className="box" type="text" name="" placeholder="Your Name *" /></div>
								<div className="in-box"><input className="box" type="text" name="" placeholder="Your e-Mail Address *" /></div>
								<div className="in-box"><input className="box" type="text" name="" placeholder="Phone Number (Optional)" /></div>
								<div className="in-box"><textarea className="box" rows="3" placeholder="Tell us about your project or the challenge you have *"></textarea></div>

								<div className="row">
									<div className="col-lg-5 col-md-12"><a className="send-btn" href="#">Send us a Message</a></div>
									<div className="col-lg-7 col-md-12"><h5>Or contact us directly at <a href="mailto:info@iquincesoft.com">info@iquincesoft.com</a></h5></div>
								</div>
							</div>

							<div className="col-lg-5 col-md-5 cont-box">
								<img src={contImg} />
								<h4>They are more than just a software company. They are the partner who will help you achieve what you want to achieve.</h4>
								<FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
								<h6><span>Jaylon Calzoni</span> Managing Director at Speakers Corner</h6>
							</div>
						</div>
					</div>
				</div>

				<div className="case-txt cont-txt" data-aos="fade-down">
					<h2>Our Offices</h2>
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<img width="100%" src={contImg1} />
								<div className="case-box">
									<h3>iQuinceSOFT India</h3>
									<p><FaMapMarkerAlt /> <span>Mani Casadona, Unit No 8E4, Action Area #2 F, New Town, Kolkata 700156, West Bengal, India</span></p>
									<p><FaPhoneAlt /> <span><a href="#">+91-33-6799-2222</a></span></p>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<img width="100%" src={contImg2} />
								<div className="case-box">
									<h3>iQuinceSOFT Australia</h3>
									<p><FaMapMarkerAlt /> <span>Mani Casadona, Unit No 8E4, Action Area #2 F, New Town, Kolkata 700156, West Bengal, India</span></p>
									<p><FaPhoneAlt /> <span><a href="#">+91-33-6799-2222</a></span></p>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<img width="100%" src={contImg3} />
								<div className="case-box">
									<h3>iQuinceSOFT New York</h3>
									<p><FaMapMarkerAlt /> <span>Mani Casadona, Unit No 8E4, Action Area #2 F, New Town, Kolkata 700156, West Bengal, India</span></p>
									<p><FaPhoneAlt /> <span><a href="#">+91-33-6799-2222</a></span></p>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<img width="100%" src={contImg4} />
								<div className="case-box">
									<h3>iQuinceSOFT India</h3>
									<p><FaMapMarkerAlt /> <span>Mani Casadona, Unit No 8E4, Action Area #2 F, New Town, Kolkata 700156, West Bengal, India</span></p>
									<p><FaPhoneAlt /> <span><a href="#">+91-33-6799-2222</a></span></p>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<img width="100%" src={contImg5} />
								<div className="case-box">
									<h3>iQuinceSOFT Australia</h3>
									<p><FaMapMarkerAlt /> <span>Mani Casadona, Unit No 8E4, Action Area #2 F, New Town, Kolkata 700156, West Bengal, India</span></p>
									<p><FaPhoneAlt /> <span><a href="#">+91-33-6799-2222</a></span></p>
								</div>
							</div>


							<div className="col-lg-4 col-md-6">
								<img width="100%" src={contImg6} />
								<div className="case-box">
									<h3>iQuinceSOFT India</h3>
									<p><FaMapMarkerAlt /> <span>Mani Casadona, Unit No 8E4, Action Area #2 F, New Town, Kolkata 700156, West Bengal, India</span></p>
									<p><FaPhoneAlt /> <span><a href="#">+91-33-6799-2222</a></span></p>
								</div>
							</div>
						</div>
					</div>

					<div className="cont-social" data-aos="fade-right"><a href="https://www.facebook.com/iquincesoft"><FaFacebook /></a> <a href="https://twitter.com/iquincesoft"><FaTwitter /></a> <a href="https://www.instagram.com/iquincesoft"><FaInstagram /></a> <a href="https://www.linkedin.com/company/iquincesoft-consulting-services-pvt-ltd-/mycompany/"><FaLinkedin /></a> <a href="https://in.pinterest.com/iquincesoft/"><FaPinterest /></a> <a href="https://www.youtube.com/c/Iquincesoft"><FaYoutube /></a></div>
				</div>

				<Footer />
			</>
		);
	}
}

export default ContactUs;