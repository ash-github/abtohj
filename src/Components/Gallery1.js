import React from "react";

function Index() {
  return (
    <div>
      <div className="carousel-header">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators"></ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src="img/PHP.gif" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div
                  className="text-lg-start p-4"
                  style={{ maxWidth: "900px" }}
                >
                  <h1
                    className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    Commited For Ethical Work
                  </h1>
                  <p
                    className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    We have a team of qualified and skilled professionals <br />
                    who stay updated about the changing trends to <br />
                    cater to the demands that our clients have
                  </p>
                  <a
                    className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp"
                    data-wow-delay="0.7s"
                    href="/about"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div>
        <!-- Carousel End --> */}

      {/* 
        <!-- Modal Search Start --> */}
      {/* <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h4 className="modal-title text-secondary mb-0" id="exampleModalLabel">Search by keyword</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center">
                        <div className="input-group w-75 mx-auto d-flex">
                            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1"/>
                            <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
      {/* <!-- Modal Search End -->

 
 <!-- About Start --> */}
      <div className="container-fluid py-5 about2">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="bg-white rounded">
                <img
                  src="img/gif/seo.gif"
                  className="img-fluid mx--3"
                  alt="Image"
                />

                <div style={{ padding: "20px" }}></div>
                {/* <div className="row gy-4 align-items-center">
                  <div className="col-lg-6 col-md-3">
                    <div className="bg-light text-center rounded p-3">
                      <div className="mb-2">
                        <i className="fas fa-ticket-alt fa-3x text-primary"></i>
                      </div>
                      <h1 className="display-5 fw-bold mb-2">13+</h1>
                      <p className="text-muted mb-0">Years of Experience</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-9">
                    <div className="mb-5">
                      <p className="text-primary h6 mb-3">
                        <i className="fa fa-check-circle text-secondary me-2"></i>{" "}
                        Offer 100 % Genuine Assistance
                      </p>
                      <p className="text-primary h6 mb-3">
                        <i className="fa fa-check-circle text-secondary me-2"></i>{" "}
                        It’s Faster & Reliable Execution
                      </p>
                      <p className="text-primary h6 mb-3">
                        <i className="fa fa-check-circle text-secondary me-2"></i>{" "}
                        Accurate & Expert Advice
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
              {/* <h5 className="sub-title pe-3">Do You Know Digital Marketing?</h5> */}
              <h4 className="display-5 mb-4">
                <strong>
                Do You Know Digital Marketing?
                </strong>
              </h4>
              <p className="mb-4" align="justify">
              Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, 
              social media, email, and other websites to connect with current and prospective customers.
              
This is the process of optimizing your website to “rank” higher in search engine like google, Bing, yahoo etc. Results pages, thereby increasing the amount of organic (or free) traffic your website receives. The channels that benefit from SEO include websites, blogs, and info graphics. 
There are a number of ways to approach SEO in order to generate qualified traffic to your website. 
              </p>
              {/* <div className="row gy-4 align-items-center">
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <i className="fas fa-map-marked-alt fa-2x text-secondary"></i>
                  <h6 className="ms-3">Best Immigration Resources</h6>
                </div>
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <i className="fas fa-passport fa-2x text-secondary"></i>
                  <h6 className="ms-3">Return Visas Availabile</h6>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About End -->



       
        <!-- Counter Facts Start --> */}
        
      <div className="container-fluid counter-facts py-5">
        <div className="container py-5">
          
          <div className="row g-4">
          <h1 align="center">
          Choose Your Prefect Starter Plan
          
            </h1>
           
            
            <a className="btn btn-primary rounded-pill py-3 px-5" href="#">Download Plan</a>
          </div>
        </div>
      </div>
      {/* <!-- Counter Facts End -->


       



       

     

       
       




  <!-- Features Start --> */}
      <div className="container-fluid features overflow-hidden py-5">
        
      </div>
    </div>
  );
}

export default Index;
