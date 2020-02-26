import React from 'react';
import {Link} from 'react-router-dom';
let Holiday = () => {
    return (
<div>
<section className="">
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
              <h2 className="mb-4"><span>Holiday Seasons Recipes</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry">
                <div className="img img-big img-big-2 d-flex align-items-end" style={{backgroundImage: 'url(assets/images/image_1.jpg)'}}>
                  <div className="overlay" />
                  <div className="text">
                    <span className="subheading">Food</span>
                    <h3><Link to="/single">ham sandwich on white surface</Link></h3>
                    <p className="mb-0"><Link to="/single" className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry">
                <div className="img img-big img-big-2 d-flex align-items-end" style={{backgroundImage: 'url(assets/images/image_3.jpg)'}}>
                  <div className="overlay" />
                  <div className="text">
                    <span className="subheading">Lifestyle</span>
                    <h3><Link to="/single">White and red ceramic plate</Link></h3>
                    <p className="mb-0"><Link to="/single" className="btn-custom">Read More <span className="icon-arrow_forward ml-4" /></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="sidebar-wrap pt-4">
            <div className="sidebar-box categories text-center ftco-animate fadeInUp ftco-animated">
              <h2 className="heading mb-4">Categories</h2>
              <ul className="category-image">
                <li>
                  <Link to="/holiday" className="img d-flex align-items-center justify-content-center text-center" style={{backgroundImage: 'url(assets/images/category-1.jpg)'}}>
                    <div className="text">
                      <h3>Holidays</h3>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/recent" className="img d-flex align-items-center justify-content-center text-center" style={{backgroundImage: 'url(assets/images/category-2.jpg)'}}>
                    <div className="text">
                      <h3>Lifestyle</h3>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="img d-flex align-items-center justify-content-center text-center" style={{backgroundImage: 'url(assets/images/category-2.jpg)'}}>
                    <div className="text">
                      <h3>Featured</h3>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    );
}
export default Holiday;