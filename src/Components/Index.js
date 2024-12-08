import { Carousel } from "bootstrap";
import React from "react";
import Carousel1 from "./Carousel1";
import { Helmet } from 'react-helmet';
import "./index.css";

function Index() {




  
  return (
    <div>



<Helmet>
        <title>PSK Technologies Pvt. Ltd. - IT Company in Nagpur</title>
        <meta
          name="description"
          content="PSK Technologies Pvt. Ltd. offers best services in website designing & development, digital marketing, IT training, internships, and sales & services in Nagpur."
        />
        <meta
          name="keywords"
          content="Software Development Company In Nagpur, Best IT Company In Nagpur, Web Development Company In Nagpur, Best Digital Marketing Company in Nagpur, PSK Technologies, IT Company, Website Development, Digital Marketing, IT Training, Internship, Sales, Nagpur, Best IT training & internship company in Nagpur"
        />
        <meta
          property="og:title"
          content="PSK Technologies Pvt. Ltd. - IT Company in Nagpur"
        />
        <meta
          property="og:description"
          content="PSK Technologies Pvt. Ltd. offers website design, digital marketing, IT training, internships, and IT products & services in Nagpur."
        />
        <meta
          property="og:image"
          content="https://www.pskitservices.com/og-mg/img/PSK Technologies.jpg"
        />
        <link rel="canonical" href="https://www.pskitservices.com/" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "PSK Technologies Pvt Ltd IT Company",
              "url": "https://www.pskitservices.com/",
              "logo": "https://www.pskitservices.com/img/tlogo.png",
              "image": "https://www.pskitservices.com/img/PSK it services.png",
              "description": "PSK Technologies Pvt. Ltd. offers best services in website designing & development, digital marketing, IT training, internships, and sales & services in Nagpur",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "PSK Technologies , Lower Ground Fortune Mall, behind Maharashtra bank, Sitabuldi, Nagpur",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "postalCode": "440012",
                "addressCountry": "India"
              },
              "sameAs": [
                "https://www.facebook.com/psktechnologies.pvt.ltd/",
                "https://www.instagram.com/itcompany_psktechnologies/",
                "https://twitter.com/TechnologiesPsk",
                "https://www.linkedin.com/company/20297753/admin/",
                "https://www.youtube.com/@psktechnologiespvt.ltd.itc5927",
                "https://in.pinterest.com/psktechnologies_itcompany/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919975288300",
                "contactType": "customer support"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="custom-carousel-header">
  <div id="customCarouselId" className="carousel slide" data-bs-ride="carousel">
    <ol className="carousel-indicators"></ol>
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active">
        <img src="img/1.gif" className="img-fluid" alt="Image" />
        <div className="custom-carousel-caption">
          <div className="custom-text-container">
            <h1
              className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
              data-wow-delay="0.3s" 
              style={{ fontSize: "40px" }}
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
                  src="img/gif/14e.gif"
                  className="img-fluid mx--3"
                  alt="Image"
                />

                <div style={{ padding: "20px" }}></div>
                <div className="row gy-4 align-items-center">
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
                </div>
              </div>
            </div>
            <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
              <h5 className="sub-title pe-3">About the company</h5>
              <h4 className="display-5 mb-4">
                <strong>
                  PSK which means Programming & Skills & Knowledge.
                </strong>
              </h4>
              <p className="mb-4" align="justify">
                Company Profile PSK Technologies is an IT services provider and
                Software Company with a skilled and competent Staff. PSK
                Technologies Pvt. Ltd. laid its foundation on 2011 in IT
                Training education & IT Hardware and Software services, web
                based services, design and creative, desktop based application ,
                SEO services, Cloud Services, Payment Gateway Services, Security
                Systems and Digital Marketing & hosting services . PSK
                Technologies Pvt. Ltd. stringent plus point is to keep the
                skilled resources available with best skills and abilities
                employed to ride out the best results out of the organization.
                Being proven infrastructure wise, resource wise and financially
                developed clients gain the advantages of value-based solutions
                and services excellent staff and techniques.
              </p>
              <div className="row gy-4 align-items-center">
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <i className="fas fa-map-marked-alt fa-2x text-secondary"></i>
                  <h6 className="ms-3">Best Immigration Resources</h6>
                </div>
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <i className="fas fa-passport fa-2x text-secondary"></i>
                  <h6 className="ms-3">Return Visas Availabile</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About End -->



       
        <!-- Counter Facts Start --> */}
      <div className="container-fluid counter-facts py-5">
        <div className="container py-5">
          <div className="row g-4">
            <div
              className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="counter">
                <div className="counter-icon">
                  <i className="fas fa-passport"></i>
                </div>
                <div className="counter-content">
                  <h3>Projects</h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value" data-toggle="counter-up">
                      500
                    </span>
                    <h4
                      className="text-secondary mb-0"
                      style={{ fontWeight: "600", fontSize: "25px" }}
                    >
                      +
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="counter">
                <div className="counter-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="counter-content">
                  <h3>Team Members</h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value" data-toggle="counter-up">
                      10
                    </span>
                    <h4
                      className="text-secondary mb-0"
                      style={{ fontWeight: "600", fontSize: "25px" }}
                    >
                      +
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="counter">
                <div className="counter-icon">
                  <i className="fas fa-user-check"></i>
                </div>
                <div className="counter-content">
                  <h3>Interns Placed</h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value" data-toggle="counter-up">
                      2000
                    </span>
                    <h4
                      className="text-secondary mb-0"
                      style={{ fontWeight: "600", fontSize: "25px" }}
                    >
                      +
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="counter">
                <div className="counter-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="counter-content">
                  <h3>Client Satisfaction</h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value" data-toggle="counter-up">
                      98
                    </span>
                    <h4
                      className="text-secondary mb-0"
                      style={{ fontWeight: "600", fontSize: "25px" }}
                    >
                      %
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Counter Facts End -->


       



        <!-- Features Start --> */}
      <div className="container-fluid features overflow-hidden py-5">
        <div className="container">
          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3">Why Choose Us</h5>
            </div>
            <h1 className="display-5 mb-4">
              Offer Tailor Made Services That Our Client Requires
            </h1>
            <p className="mb-0">We Create Website As Per Your Requirements</p>
          </div>
          <div className="row g-4 justify-content-center text-center">
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  {/* <!-- <i className="fas fa-dollar-sign fa-4x text-primary"></i> --> */}
                  <img src="img/gif/1e.gif" width="100px" height="100px" />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">eCommerce Developement</h5>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  {/* <!-- <i className="fab fa-cc-visa fa-4x text-primary"></i> --> */}
                  <img src="img/gif/2e.gif" width="100px" height="100px" />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">Website Designing & Development</h5>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  {/* <!-- <i className="fas fa-users fa-4x text-primary"></i> --> */}
                  <img src="img/gif/4e.gif" width="100px" height="100px" />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">Hosting & Domain Name Registration</h5>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  {/* <!-- <i className="fas fa-users fa-4x text-primary"></i> --> */}
                  <img src="img/gif/5e.gif" width="100px" height="100px" />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">Search Engine Optimization</h5>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  {/* <!-- <i className="fas fa-users fa-4x text-primary"></i> --> */}
                  <img src="img/gif/6e.gif" width="100px" height="100px" />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">Social Media Marketing</h5>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  {/* <!-- <i className="fas fa-users fa-4x text-primary"></i> --> */}
                  <img src="img/gif/7e.gif" width="100px" height="100px" />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">Digital Marketing</h5>
                  {/* <!--    <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2"></i></a> --> */}
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  {/* <!-- <i className="fas fa-users fa-4x text-primary"></i> --> */}
                  <img src="img/gif/10e.gif" width="100px" height="100px" />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">Cloud Computing</h5>
                  {/* <!--    <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                                <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2"></i></a> --> */}
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  {/* <!-- <i className="fas fa-users fa-4x text-primary"></i> --> */}
                  <img src="img/gif/12e.gif" width="100px" height="100px" />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">Sales and Services</h5>
                </div>
              </div>
            </div>

            {/* <!-- <div className="col-12">
                        <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">More Features</a>
                    </div> --> */}
          </div>
        </div>
      </div>

      <Carousel1></Carousel1>

      {/* <!---3div Slider--> */}

     
        {/* <!-- First Div: Text and Image --> */}
       

        {/* <!-- Second Div: Image Carousel --> */}
      
        {/* <!-- Third Div: Text --> */}
    
      

      {/* <!---3div Slider End-->


  <!-- Features Start --> */}
      <div className="container-fluid features overflow-hidden py-5">
        <div className="container py-5">
          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            {/* <!-- <div className="sub-style">
                <h5 className="sub-title text-primary px-3">Why Choose Us</h5>
            </div> --> */}
            {/* <h1 className="display-5 mb-4">Technologies We Work</h1>
            <!-- <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p> --> */}
          </div>
          <div className="row g-4 justify-content-center text-center">
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="feature-item text-center p-1">
                <div className="feature-icon p-3 mb-4">
                  <img
                    src="img/technologies/1t.png"
                    width="100px"
                    height="100px"
                  />
                </div>
                <br/>
                  <br/>
                  <br/>
                  
                <div className="feature-content d-flex flex-column">
                 

                  <h5 className="mb-3">PHP<br></br> Development</h5>
                  {/* <!-- <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                        <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2"></i></a> --> */}
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  <img
                    src="img/technologies/2t.png"
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">Laravel <br></br> Development</h5>
                  {/* <!-- <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p> -->
                        <!-- <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2"></i></a> --> */}
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  <img
                    src="img/technologies/3t.png"
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">CodeIgniter Development</h5>
                  {/* <!-- <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p>
                        <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2"></i></a> --> */}
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  <img
                    src="img/technologies/4t.png"
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">WordPress Development</h5>
                  {/* <!-- <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p> -->
                        <!-- <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2"></i></a> --> */}
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  <img
                    src="img/technologies/5t.png"
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">WooCommerce Development</h5>
                  {/* <!-- <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p> --> */}
                  {/* <!-- <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2"></i></a> --> */}
                </div>
              </div>
            </div>
            {/* <!-- <div className="col-12">
                <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="#">More Features</a>
            </div> --> */}

            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  <img
                    src="img/technologies/6t.png"
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">Magento <br></br>Development</h5>
                  {/* <!-- <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p> -->
                        <!-- <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2"></i></a> --> */}
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  <img
                    src="img/technologies/7t.png"
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">Bootstrap Development</h5>
                  {/* <!-- <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p> -->
                        <!-- <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2"></i></a> --> */}
                </div>
              </div>
            </div>

            {/* 

           <!--  <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                <div className="feature-item text-center p-4">
                    <div className="feature-icon p-3 mb-4">
                        <img src="img/technologies/8t.png" width="100px" height="100px"/>
                    </div>
                    <div className="feature-content d-flex flex-column">
                        <h5 className="mb-3">Java Development
                        </h5> -->
                        <!-- <p className="mb-3">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,</p> -->
                        <!-- <a className="btn btn-secondary rounded-pill" href="#">Read More<i className="fas fa-arrow-right ms-2"></i></a> -->
                <!--     </div>
                </div>
            </div> --> */}

            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  <img
                    src="img/technologies/9t.png"
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">App<br/> Development</h5>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  <img
                    src="img/technologies/10t.png"
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">Cloud Computing</h5>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  <img
                    src="img/technologies/11t.png"
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">Linux</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
}

export default Index;
