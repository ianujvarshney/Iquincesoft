import React, { Component } from 'react'
import Headers from './Header';
export default class NextSection extends Component {

    render() {
        return (
            <>
                <Headers />
                <div id="main" className="Know_more">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="item">
                                    <div className="banner-caption">
                                        <h1>Resourceful.<br />Resilient.<br />Adaptive.</h1>
                                        <div className="desc">
                                            <p>Indians are the first choice for tech <br />giants around the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
            </>
        )
    }
}
