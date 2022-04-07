import React, { Component } from 'react'

import award from '../images/award-img.png';
import award1 from '../images/award-img1.png';
import award2 from '../images/award-img2.png';
import award3 from '../images/award-img3.png';
import award4 from '../images/award-img4.png';
import award5 from '../images/award-img5.png';
import award6 from '../images/award-img6.png';
import award7 from '../images/award-img7.png';
import award8 from '../images/award-img8.png';
import Client1 from '../images/Client1.png'

import talk from '../images/talk.png';


class AwardFormsec extends Component {
    render() {
        return (
            <div className="award-form-sec">
                <div className="container">
                    <div className="row" hidden>
                        <div className="col-lg-12 col-md-12">
                            {/* <ul>
                                <li><img src={Client1} /></li>
                                <li><img src={award1} /></li>
                                <li><img src={award2} /></li>
                                <li><img src={award3} /></li>
                                <li><img src={award4} /></li>
                                <li><img src={award5} /></li>
                                <li><img src={award6} /></li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="row award-form-sec2">
                        <div className="col-lg-12">
                            <div className="form-sec">
                                <img src={talk} />
                                <p><span>We’re actual humans here on the other side 👋</span></p>
                                <h1>Schedule a 15 minutes call to discuss your requirement</h1>
                                <a href="#">Schedule an Appointment </a>
                                <p><span>Or, Use this form to share your requirements.
                                    Get guaranteed response within 8 Hrs.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default AwardFormsec;
    // /* background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);