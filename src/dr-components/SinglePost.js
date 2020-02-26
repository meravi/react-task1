import React from 'react';
import {Link} from 'react-router-dom';
let SinglePost = () => {
    return (
<div>
  <section className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url("assets/images/bg_4.jpg")'}}>
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text align-items-end justify-content-center">
        <div className="col-md-9 ftco-animate pb-5 text-center fadeInUp ftco-animated">
          <h1 className="mb-3 bread">Article Single</h1>
          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Article Single<i className="ion-ios-arrow-forward" /></span></p>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 order-lg-last ftco-animate fadeInUp ftco-animated">
          <h2 className="mb-3">It is a long established fact a reader be distracted</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
          <p>
            <img src="assets/images/image_6.jpg" alt="single post" className="img-fluid" />
          </p>
          <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
          <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
          <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
          <p>
            <img src="assets/images/image_4.jpg" alt="single post" className="img-fluid" />
          </p>
          <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
          <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
          <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
          <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
          <div className="tag-widget post-tag-container mb-5 mt-5">
            <div className="tagcloud">
              <Link to="/single" className="tag-cloud-link">Life</Link>
              <Link to="/single" className="tag-cloud-link">Sport</Link>
              <Link to="/single" className="tag-cloud-link">Tech</Link>
              <Link to="/recent" className="tag-cloud-link">Travel</Link>
            </div>
          </div>
          <div className="about-author d-flex p-4 bg-light">
            <div className="bio mr-5">
              <img src="assets/images/person_1.jpg" alt="Image-placeholder" className="img-fluid mb-4" />
            </div>
            <div className="desc">
              <h3>George Washington</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>
          </div>
        </div> {/* .col-md-8 */}
        <div className="col-lg-4 sidebar pr-lg-5 ftco-animate fadeInUp ftco-animated">
          <div className="sidebar-box">
            <form action="#" className="search-form">
              <div className="form-group">
                <span className="icon icon-search" />
                <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
              </div>
            </form>
          </div>
          <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
            <ul className="categories">
              <h3 className="heading mb-4">Categories</h3>
              <li><a href="#">Travel <span>(12)</span></a></li>
              <li><a href="#">Tour <span>(22)</span></a></li>
              <li><a href="#">Destination <span>(37)</span></a></li>
              <li><a href="#">Drinks <span>(42)</span></a></li>
              <li><a href="#">Foods <span>(14)</span></a></li>
              <li><a href="#">Travel <span>(140)</span></a></li>
            </ul>
          </div>
          <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
            <h3 className="heading mb-4">Recent Blog</h3>
            <div className="block-21 mb-4 d-flex">
              <Link to="/holiday" className="blog-img mr-4" style={{backgroundImage: 'url(assets/images/image_1.jpg)'}} />
              <div className="text">
                <h3><Link to="/holiday">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                <div className="meta">
                  <div><Link to="/recent"><span className="icon-calendar" /> February 12, 2019</Link></div>
                  <div><Link to="/recent"><span className="icon-person" /> Admin</Link></div>
                  <div><Link to="/recent"><span className="icon-chat" /> 19</Link></div>
                </div>
              </div>
            </div>

            <div className="block-21 mb-4 d-flex">
              <Link to="/holiday" className="blog-img mr-4" style={{backgroundImage: 'url(assets/images/image_1.jpg)'}} />
              <div className="text">
                <h3><Link to="/holiday">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                <div className="meta">
                  <div><Link to="/recent"><span className="icon-calendar" /> February 12, 2019</Link></div>
                  <div><Link to="/recent"><span className="icon-person" /> Admin</Link></div>
                  <div><Link to="/recent"><span className="icon-chat" /> 19</Link></div>
                </div>
              </div>
            </div>

            <div className="block-21 mb-4 d-flex">
              <Link to="/holiday" className="blog-img mr-4" style={{backgroundImage: 'url(assets/images/image_1.jpg)'}} />
              <div className="text">
                <h3><Link to="/holiday">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                <div className="meta">
                  <div><Link to="/recent"><span className="icon-calendar" /> February 12, 2019</Link></div>
                  <div><Link to="/recent"><span className="icon-person" /> Admin</Link></div>
                  <div><Link to="/recent"><span className="icon-chat" /> 19</Link></div>
                </div>
              </div>
            </div>

            <div className="block-21 mb-4 d-flex">
              <Link to="/holiday" className="blog-img mr-4" style={{backgroundImage: 'url(assets/images/image_1.jpg)'}} />
              <div className="text">
                <h3><Link to="/holiday">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                <div className="meta">
                  <div><Link to="/recent"><span className="icon-calendar" /> February 12, 2019</Link></div>
                  <div><Link to="/recent"><span className="icon-person" /> Admin</Link></div>
                  <div><Link to="/recent"><span className="icon-chat" /> 19</Link></div>
                </div>
              </div>
            </div>

            <div className="block-21 mb-4 d-flex">
              <Link to="/holiday" className="blog-img mr-4" style={{backgroundImage: 'url(assets/images/image_1.jpg)'}} />
              <div className="text">
                <h3><Link to="/holiday">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                <div className="meta">
                  <div><Link to="/recent"><span className="icon-calendar" /> February 12, 2019</Link></div>
                  <div><Link to="/recent"><span className="icon-person" /> Admin</Link></div>
                  <div><Link to="/recent"><span className="icon-chat" /> 19</Link></div>
                </div>
              </div>
            </div>

          </div>
          <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
            <h3 className="heading mb-4">Tag Cloud</h3>
            <div className="tagcloud">
           <Link to="/recent" className="tag-cloud-link">Recent</Link>
           <Link to="/holiday" className="tag-cloud-link">Holiday</Link>
           <Link to="/features" className="tag-cloud-link">Featured Post</Link>
            </div>
          </div>
          <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
            <h3 className="heading mb-4">Paragraph</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    );
}
export default SinglePost;