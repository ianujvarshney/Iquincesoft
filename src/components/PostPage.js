
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
            console.log(data)
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
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-5 col-md-5">
                                        <h3><img src={arrow1} /><strong><a href="/blog">Back to all the blogposts</a></strong></h3>
                                        <h4>02 March 2022</h4>
                                        <h1><strong>{PostPageJsonS.name}</strong></h1>
                                        <h5><img src={blog_img} /> <span><strong>Author name</strong> QA Specialist</span></h5>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <img width="100%" src={PostPageJsonS.img} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-3">
                                    </div>
                                    <div className="col-lg-5 col-md-8">
                                        <p dangerouslySetInnerHTML={{ __html: PostPageJsonS.content }}></p>
                                        {/* <p><strong dangerouslySetInnerHTML={{ __html: PostPageJsonS.content.substr(0, 100) }}></strong></p> */}
                                        {/* <h2 className="Post-pera"><span>In the design process, keep your ideas close but user research closer</span></h2> */}
                                        {/* <p><span>You come up with an idea for a software-based business that seems very likely to be a big hit.You think about the functionalities, sometimes about the general looks and aesthetics.Since software development is a team sport, you’ll need developers, testers, architects, and designers to build the app.Find people, complete formalities, and off to work.</span></p> */}
                                        {/* <blockquote><p><b>So how to deliver the desired product that will be a hit not only inside your head? Keep your target group close from the very beginning of the design process by introducing the design discovery phase.</b></p></blockquote> */}
                                        {/* <img width="100%" src={PostPageJsonS.img} /> */}
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




/*<div class="container">
    {PostPageJson && PostPageJson.map(PostPageJsonS => {
        { console.log(PostPageJsonS) }
        return (
            <div class="row">
                <div class="col-lg-5">
                    <h1>{PostPageJsonS.name}</h1>
                    <p dangerouslySetInnerHTML={{ __html: PostPageJsonS.content }}></p>
                </div>
            </div>
        );
    })
    }
</div>*/