
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { PostCate } from '../json/PostCate';
import blog_img from '../images/cont-img1.jpg'
import arrow1 from '../images/arrow1.png'

class PostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PostPageJson: [],
            Loading: true,
            url: this.props.match.params.post
        }
    }
    componentDidMount() {
        PostCate.getWoocommerceDetails(this.state.url).then((data, err) => {
            if (!err) {
                this.setState({
                    PostPageJson: data,
                    Loading: false,
                });
            }
        });
    }
    render() {
        const { PostPageJson } = this.state;
        return (
            <>
                <Header headerClass={'job-head'} />
                {PostPageJson && PostPageJson.map(PostPageJsonS => {
                    return (
                        <div className="Post-sec">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-7">
                                        <h3><img alt="img" src={arrow1} /><a href="/blog">Back to all the blogposts</a></h3>
                                        <h4>{PostPageJsonS.date}abc</h4>
                                        <h1><strong>{PostPageJsonS.name}</strong></h1>
                                        <h5><img alt="img" src={blog_img} /> <span><strong>{PostPageJsonS.author}</strong> QA Specialist</span></h5>
                                    </div>
                                    <div className="col-lg-4 col-md-5">
                                        <img alt="img" width="100%" src={PostPageJsonS.img} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <p dangerouslySetInnerHTML={{ __html: PostPageJsonS.content }}></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <Footer />
            </>
        );
    }
}

export default PostPage;