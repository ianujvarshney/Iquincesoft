
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo1 from '../images/logo1.png';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Menu } from '../json/menu';

class Footer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			links: [],
			Servicelinks: [],
			Hirelinks: [],
		}
	}

	componentDidMount() {
		Menu.getFooterQuickLink().then((menus, err) => {
			if (!err) {
				this.setState({
					links: menus,
				});
			}
		});

		Menu.getFooterMenu().then((menus, err) => {
			if (!err) {
				this.setState({
					Servicelinks: menus,
				});
			}
		});
		Menu.getFooterHireMenu().then((menus, err) => {
			if (!err) {
				this.setState({
					Hirelinks: menus,
				});
			}
		});

	}

	render() {
		const { links, Servicelinks, Hirelinks } = this.state;
		return (
			<footer>
				<div className="container">
					<div className="row desk-footer">
						<div className="col-lg-3 col-md-6">
							<Link to="/"><img alt="img" src={logo1} /></Link>
							<div><Link to="https://www.facebook.com/iquincesoft"><FaFacebook /></Link><Link to="https://www.linkedin.com/company/iquincesoft-consulting-services-pvt-ltd-/mycompany/"><FaLinkedin /></Link><Link to="https://twitter.com/iquincesoft"><FaTwitter /></Link><Link to="https://www.instagram.com/iquincesoft/"><FaInstagram /></Link></div>
						</div>

						<div className="col-lg-2 col-md-12">
							<h3>Services</h3>
							<ul>
								{Servicelinks.map(link => {
									return (<li key={link.id}><Link to={link.to}></Link><NavLink className={link.class} activeClassName={"active"} to={`/${link.to}`} hash={link.hash}>{link.name}</NavLink></li>);
								})}
							</ul>
						</div>
						<div className="col-lg-5 col-md-12">
							<h3>Hire Developers</h3>
							<ul>
								{Hirelinks.map(link => {
									return (<li key={link.id}><Link to={link.to}></Link><NavLink className={link.class} activeClassName={"active"} to={`/${link.to}`} hash={link.hash}>{link.name}</NavLink></li>);
								})}
							</ul>
						</div>

						<div className="col-lg-2 col-md-6">
							<h3>Quick Links</h3>
							<ul>
								{links.map(link => {
									return (<li key={link.id}><Link to={link.to}></Link><NavLink className={link.class} activeClassName={"active"} to={link.to} >{link.name}</NavLink></li>);
								})}
							</ul>
						</div>
					</div>

					<div className="row dd-2">
						<div className="col-lg-3 col-md-3"><h3>Drop us a line: <span><a href="mailto:info@iquincesoft.com">info@iquincesoft.com</a></span></h3></div>
						<div className="col-lg-9 col-md-9">
							<div className="row">
								<div className="col-lg-3 col-md-4">
									<h3>Headquarters</h3>
									<h6><Link to="#">ul. Dolnych Wałów 8 Gliwice, 44-100 Poland</Link></h6>
								</div>

								<div className="col-lg-3 col-md-4">
									<h3>India Office</h3>
									<h6><Link to="#">NH-2 Agra Delhi Highway	Mathura – 281001</Link></h6>
								</div>

								<div className="col-lg-3 col-md-4">
									<h3>Sales</h3>
									<h6><Link to="#">ul. Dolnych Wałów 8 Gliwice, 44-100 Poland</Link></h6>
								</div>
							</div>
						</div>
					</div>

					<div className="row mob-footer">
						<div className="col-lg-12 col-md-12">
							<Link to="https://www.facebook.com/iquincesoft"><FaFacebook /></Link><Link to="https://www.linkedin.com/company/iquincesoft-consulting-services-pvt-ltd-/mycompany/"><FaLinkedin /></Link><Link to="https://twitter.com/iquincesoft"><FaTwitter /></Link><Link to="https://www.instagram.com/iquincesoft/"><FaInstagram /></Link>
							<h4>Drop us a line: <Link to="mailto:info@iquincesoft.com">info@iquincesoft.com</Link></h4>
							<h3>Quick Links</h3>
							<ul>
								{links.map(link => {
									return (<li key={link.id}><Link to={link.to}></Link><NavLink className={link.class} activeClassName={"active"} to={`/${link.to}`} hash={link.hash}>{link.name}</NavLink></li>);
								})}
							</ul>

							<input className="box-1" type="text" name="" placeholder="e-Mail Address" />
							<Link className="sub-btn" to="#">Subscribe to Newsletter</Link>
						</div>
					</div>
				</div>
				<p>© 2020-2021 All Rights Reserved.</p>
			</footer>
		);
	}
}

export default Footer;