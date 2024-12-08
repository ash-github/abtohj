import React from "react";
import { Helmet } from 'react-helmet';

function Navbar() {
  return (
    <div>
      <Helmet>
        <title>Best IT Company In Nagpur</title>
        <meta
          name="description"
          content="Software Training Company IT education fields like C, C++, JAVA, PHP, MySQL, HTML, CSS, JS, JQuery, Bootstrap, Framework, CMS."
        />
        <meta
          name="keywords"
          content="Best Digital Marketing Company in Nagpur,Career opportunities for freshers in india,Computer repair at your doorstep Nagpur , Software Development Company In Nagpur, Best IT Company In Nagpur, Web Development Company In Nagpur, Best Digital Marketing Company in Nagpur, PSK Technologies, IT Company, Website Development, Digital Marketing, IT Training, Internship, Sales, Nagpur, Best IT training & internship company in Nagpur"
        />
        <meta
          property="og:title"
          content="Best Digital Marketing Company in Nagpur | Free SEO for your website"
        />
        <meta
          property="og:description"
          content="PSK Technologies Pvt. Ltd. IT Company Nagpur provides Website Development &amp; Designing @ Rs. 2999/- only with free SEO, responsive webpages, Contact us +919975288300"
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
              "description": "Best Digital Marketing Company in Nagpur PSK Technologies offeres Best services in SEO(ON-Page, Off Page), SEM, SMM, google ads, facebook Marketing",
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
      
      {/* <!-- Spinner Start --> */}
      {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-secondary" style={{width: "3rem",height: "3rem", role:"status"}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}
      {/* <!-- Spinner End --> */}

      {/* <!-- Topbar Start --> */}
      <div className="container-fluid bg-primary px-5 d-none d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-5 text-center text-lg-start mb-lg-0">
            <div className="d-flex">
              <a href="contact.html" className="text-muted me-4">
                <i className="fas fa-envelope text-secondary me-2"></i>
                <font color="white">support@pskitservices.com </font>
              </a>
              <a href="contact.html" className="text-muted me-0">
                <i className="fas fa-phone-alt text-secondary me-2"></i>
                <font color="white">09975288300</font>
              </a>
            </div>
          </div>
          <div className="col-lg-7 text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <a
                className="btn btn-sm btn-outline-light btn-square rounded-circle me-3"
                href="https://twitter.com/TechnologiesPsk"
              >
                <i className="fab fa-twitter fw-normal text-secondary"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-square rounded-circle me-3"
                href="https://www.facebook.com/psktechnologies.pvt.ltd/"
              >
                <i className="fab fa-facebook-f fw-normal text-secondary"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-square rounded-circle me-3"
                href="https://www.linkedin.com/company/20297753/admin/"
              >
                <i className="fab fa-linkedin-in fw-normal text-secondary"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-square rounded-circle me-3"
                href="https://www.instagram.com/itcompany_psktechnologies/"
              >
                <i className="fab fa-instagram fw-normal text-secondary"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-square rounded-circle me-3"
                href="https://www.youtube.com/@psktechnologiespvt.ltd.itc5927"
              >
                <i className="fab fa-youtube fw-normal text-secondary"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-square rounded-circle"
                href="https://in.pinterest.com/psktechnologies_itcompany/"
              >
                <i className="fab fa-pinterest fw-normal text-secondary"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End -->

        <!-- Navbar & Hero Start --> */}
  
<div class="container-fluid nav-bar p-0">
  <nav class="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0 sticky-top">
    <a href="" class="navbar-brand p-0 psk">
      <h1 class="display-4 text-secondary m-0">
        <img src="img/tlogo.png" class="img-fluid" alt="" />
        &nbsp;<font size="5">PSK TECHNOLOGIES PVT. LTD.</font>
      </h1>
    </a>
    <button
      class="navbar-toggler psk"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="fa fa-bars"></span>
    </button>

    <a href="" class="navbar-brand p-0 psk1">
      <img src="img/f.png" class="img-fluid" alt="" />
    </a>
    <button
      class="navbar-toggler psk1"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="fa fa-bars"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto py-0">
        <a href="/" class="nav-item nav-link active">
          Home
        </a>
        <a href="/about" class="nav-item nav-link">
          About
        </a>
        <div class="nav-item dropdown">
          <a href="#" class="nav-link" data-bs-toggle="dropdown">
            <span class="dropdown-toggle">Services</span>
          </a>
          <div class="dropdown-menu m-0">
            <a href="/webdevelopment" class="dropdown-item">
              Web Development
            </a>
            <a href="/digitalmarketing" class="dropdown-item">
              Digital Marketing
            </a>
            <a href="/webhosting" class="dropdown-item">
              Web Hosting
            </a>
            <a href="/salesandservices" class="dropdown-item">
              Sales & Services
            </a>
            <a href="/internship" class="dropdown-item ">
              IT Internship
            </a>
          </div>
        </div>
        <a href="/gallery" class="nav-item nav-link">
          Our Gallery
        </a>
        <a href="/blog" class="nav-item nav-link">
          Blog
        </a>
        <a href="/contact" class="nav-item nav-link">
          Contact
        </a>
      </div>
    </div>
  </nav>
</div>
{/* <!-- Navbar & Hero End --> */}



      {/* <!-- Navbar & Hero End --></br> */}
    </div>
  );
}

export default Navbar;
