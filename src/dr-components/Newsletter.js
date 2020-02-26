import React from 'react';
let Newsletter = () => {
    return (
<div>
  <section className="ftco-subscribe ftco-section bg-light">
    <div className="overlay">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 text-wrap text-center heading-section ftco-animate fadeInUp ftco-animated">
            <h2 className="mb-4"><span>Subcribe to our Newsletter</span></h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <div className="row d-flex justify-content-center mt-4 mb-4">
              <div className="col-md-8">
                <form action="#" className="subscribe-form">
                  <div className="form-group d-flex">
                    <input type="text" className="form-control" placeholder="Enter email address" />
                    <input type="submit" defaultValue="Subscribe" className="submit px-3" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
      <div className="container">
          <h4 className="text-center">Design By Sara Themes &copy; 2020</h4>
      </div>
  </section>
</div>

    );
}
export default Newsletter;