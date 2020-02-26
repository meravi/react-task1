import React from 'react';
import {Link} from 'react-router-dom';
let FeaturedPost = () => {
    return (
<div>
  <section className="ftco-section ftco-no-pt">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="row">
            <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
              <h2 className="mb-4"><span>Featured Posts</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry">
                <Link to="/single" className="img-2"><img src="assets/images/blog-1.jpg" className="img-fluid" alt="Sara Template" /></Link>
                <div className="text pt-3">
                  <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                  <h3><Link to="/single">Tasty &amp; Delicious Foods</Link></h3>
                  <p className="mb-0"><Link to="/single" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></Link></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry">
                <Link to="/single" className="img-2"><img src="assets/images/blog-2.jpg" className="img-fluid" alt="Sara Template" /></Link>
                <div className="text pt-3">
                  <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                  <h3><Link to="/single">Tasty &amp; Delicious Foods</Link></h3>
                  <p className="mb-0"><Link to="/single" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></Link></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry">
                <Link to="/single" className="img-2"><img src="assets/images/blog-3.jpg" className="img-fluid" alt="Sara Template" /></Link>
                <div className="text pt-3">
                  <p className="meta d-flex"><span className="pr-3">Dessert</span><span className="ml-auto pl-3">March 01, 2018</span></p>
                  <h3><Link to="/single">Tasty &amp; Delicious Foods</Link></h3>
                  <p className="mb-0"><Link to="/single" className="btn btn-black py-2">Read More <span className="icon-arrow_forward ml-4" /></Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="sidebar-wrap">
            <div className="sidebar-box p-4 about text-center ftco-animate fadeInUp ftco-animated">
              <h2 className="heading mb-4">About Me</h2>
              <img src="assets/images/author.jpg" className="img-fluid" alt="Sara-Template" />
              <div className="text pt-4">
                <p>Hi! My name is Sara behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
              </div>
            </div>
            <div className="sidebar-box p-4 ftco-animate fadeInUp ftco-animated">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon icon-search" />
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    );
}

export default FeaturedPost;