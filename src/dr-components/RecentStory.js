import React from 'react';
import {Link} from 'react-router-dom';
let Recent = () => {
    return (
<div> 
  <section className="">
    <div className="container">
      <div className="row">
        <div className="col-md-7 heading-section ftco-animate fadeInUp ftco-animated">
          <h2 className="mb-4"><span>Recent Stories</span></h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 order-md-last col-lg-6 ftco-animate fadeInUp ftco-animated">
          <div className="blog-entry">
            <div className="img img-big d-flex align-items-end" style={{backgroundImage: 'url(assets/images/image_2.jpg)'}}>
              <div className="overlay" />
              <div className="text">
                <span className="subheading">Food</span>
                <h3><Link to="/single">Tasty &amp; Delicious Foods</Link></h3>
                <p className="mb-0"><Link to="/single" className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></Link></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6 ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry">
                <Link to="/single" className="img d-flex align-items-end" style={{backgroundImage: 'url(assets/images/image_1.jpg)'}}>
                  <div className="overlay" />
                </Link>
                <div className="text pt-3">
                  <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                  <h3><Link to="/single">Tasty &amp; Delicious Foods</Link></h3>
                  <p className="mb-0"><Link to="/single" className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></Link></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry">
                <Link to="/single" className="img d-flex align-items-end" style={{backgroundImage: 'url(assets/images/image_3.jpg)'}}>
                  <div className="overlay" />
                </Link>
                <div className="text pt-3">
                  <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                  <h3><Link to="/single">Tasty &amp; Delicious Foods from Scotland</Link></h3>
                  <p className="mb-0"><Link to="/single" className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></Link></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry">
                <Link to="/single" className="img d-flex align-items-end" style={{backgroundImage: 'url(assets/images/image_4.jpg)'}}>
                  <div className="overlay" />
                </Link>
                <div className="text pt-3">
                  <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                  <h3><Link to="/single">Tasty &amp; Delicious Foods</Link></h3>
                  <p className="mb-0"><Link to="/single" className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></Link></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry">
                <Link to="/single" className="img d-flex align-items-end" style={{backgroundImage: 'url(assets/images/image_5.jpg)'}}>
                  <div className="overlay" />
                </Link>
                <div className="text pt-3">
                  <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                  <h3><Link to="/single">Tasty &amp; Delicious Foods</Link></h3>
                  <p className="mb-0"><Link to="/single" className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    );
}
export default Recent;