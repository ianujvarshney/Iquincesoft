
import React, { Component } from 'react';

import icon from '../images/icon.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/icon6.png';

class FeatureSec extends Component {
 render() {  
 return (
  <>
   <div className="feature-sec" data-aos="fade-up">
    <h3>Our Featured Clients</h3>
    <div className="container">
     <div className="row">
      <div className="col-lg-12 col-md-12">
       <ul>
	    <li><a href="#"><img src={icon} /></a></li>
		<li><a href="#"><img src={icon1} /></a></li>
		<li><a href="#"><img src={icon2} /></a></li>
		<li><a href="#"><img src={icon3} /></a></li>
		<li><a href="#"><img src={icon4} /></a></li>
		<li><a href="#"><img src={icon5} /></a></li>
		<li><a href="#"><img src={icon6} /></a></li>
		<li><a href="#"><img src={icon3} /></a></li>
		<li><a href="#"><img src={icon2} /></a></li>
		<li><a href="#"><img src={icon1} /></a></li>
	   </ul>
	  </div>
     </div>
    </div>
   </div>
  </>
 );
 }
}

export default FeatureSec;