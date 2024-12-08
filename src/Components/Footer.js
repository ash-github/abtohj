import React from "react";
import { Helmet } from 'react-helmet';

function Footer() {
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
      {/* <!-- Footer Start --> */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <img src="img/footer.png" />
                {/* <!--                             <h4 className="text-secondary mb-4">Contact Info</h4>
                            <a href=""><i className="fa fa-map-marker-alt me-2"></i> 123 Street, New York, USA</a>
                            <a href=""><i className="fas fa-envelope me-2"></i> info@example.com</a>
                            <a href=""><i className="fas fa-phone me-2"></i> +012 345 67890</a>
                            <a href="" className="mb-3"><i className="fas fa-print me-2"></i> +012 345 67890</a> --> */}
                {/* <!--    <div className="d-flex align-items-center">
                                <i className="fas fa-share fa-2x text-secondary me-2"></i>
                                <a className="btn mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn mx-1" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div> --> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">Contact us</h4>
                <a href="">
                  <i className="fas fa-phone me-2"></i> +91 9975288300
                </a>

                <a href="">
                  <i className="fas fa-envelope me-2"></i> support@pskitservices.com
                </a>

                <a href="">
                  <i className="fa fa-map-marker-alt me-2"></i> Lower Ground Fortune
                  Mall, behind Maharashtra bank, Sitabuldi, Nagpur
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">Our Services</h4>
                <a href="/webdevelopment" className="">
                  <i className="fas fa-angle-right me-2"></i> Web Development
                </a>
                <a href="/webdevelopment" className="">
                  <i className="fas fa-angle-right me-2"></i> Web Hosting
                </a>
                {/* <!-- <a href="#" className=""><i className="fas fa-angle-right me-2"></i>Web Hosting</a> --> */}
                <a href="/digitalmarketing" className="">
                  <i className="fas fa-angle-right me-2"></i> Digital Marketing
                </a>
                <a href="/salesandservices" className="">
                  <i className="fas fa-angle-right me-2"></i> Sales & Services
                </a>
                <a href="/internship" className="">
                  <i className="fas fa-angle-right me-2"></i> IT Internship
                </a>
                {/* <!-- <a href="#" className=""><i className="fas fa-angle-right me-2"></i> Work / Career</a> --> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-secondary mb-4">Social Accounts</h4>
                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-secondary me-2"></i>
                  <a
                    className="btn mx-1"
                    href="
                                https://www.facebook.com/psktechnologies.pvt.ltd/"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn mx-1"
                    href="https://twitter.com/TechnologiesPsk"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn mx-1"
                    href="https://www.instagram.com/itcompany_psktechnologies/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn mx-1"
                    href="https://www.linkedin.com/company/20297753/admin/"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn mx-1"
                    href="https://www.youtube.com/@psktechnologiespvt.ltd.itc5927"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // <!-- Footer End --> */}
      {/* <!-- Copyright Start --> */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-white">
                <a href="#" className="border-bottom text-white">
                  <i className="fas fa-copyright text-light me-2"></i>
                  www.pskitservices.com
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-white">
              Designed By{" "}
              <a
                className="border-bottom text-white"
                href="https://www.pskitservices.com"
              >
                PSK Technologies Pvt.Ltd
              </a>
              <a
                className="border-bottom text-white"
                href="https://themewagon.com"
              ></a>
            </div>
          </div>
        </div>
      </div>
{/* 
      <!-- Back to Top --> */}
        <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>  


        <div className="social-share1">
        <a href="  https://www.facebook.com/psktechnologies.pvt.ltd/" className="facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M20.05,0H3.95A3.952,3.952,0,0,0,0,3.95V20.05A3.952,3.952,0,0,0,3.95,24H12.63V14.71H9.62v-3H12.63v-1.5c0-3.6,2.2-5.55,5.38-5.55a28.475,28.475,0,0,1,3.18.16v3L18.79,9c-1.7,0-2,.81-2,1.95v1.5h4.05l-.53,3.05H16.8V24H20.05A3.952,3.952,0,0,0,24,20.05V3.95A3.952,3.952,0,0,0,20.05,0Z" />
        </svg>
        </a>
        <a href="https://www.instagram.com/itcompany_psktechnologies/" className="instagram"><svg viewBox="0 0 24 24">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
       </svg></a>
       <a href="https://www.linkedin.com/company/20297753/admin/" className="linkedin"><svg viewBox="0 0 64 64">
        <path d="M8,54.7C8,55.4,8.6,56,9.3,56h9.3c0.7,0,1.3-0.6,1.3-1.3V23.9c0-0.7-0.6-1.3-1.3-1.3H9.3 c-0.7,0-1.3,0.6-1.3,1.3V54.7z"></path>
        <path d="M46.6,22.3c-4.5,0-7.7,1.8-9.4,3.7c-0.4,0.4-1.1,0.1-1.1-0.5l0-1.6c0-0.7-0.6-1.3-1.3-1.3h-9.4 c-0.7,0-1.3,0.6-1.3,1.3c0.1,5.7,0,25.4,0,30.7c0,0.7,0.6,1.3,1.3,1.3h9.5c0.7,0,1.3-0.6,1.3-1.3V37.9c0-1,0-2,0.3-2.7 c0.8-2,2.6-4.1,5.7-4.1c4.1,0,6,3.1,6,7.6v15.9c0,0.7,0.6,1.3,1.3,1.3h9.3c0.7,0,1.3-0.6,1.3-1.3V37.4C60,27.1,54.1,22.3,46.6,22.3 z"></path>
        <path d="M13.9,18.9L13.9,18.9c3.8,0,6.1-2.4,6.1-5.4C19.9,10.3,17.7,8,14,8c-3.7,0-6,2.3-6,5.4 C8,16.5,10.3,18.9,13.9,18.9z"></path>
        </svg></a>
        <a href="https://www.youtube.com/@psktechnologiespvt.ltd.itc5927" className="youtube"><svg viewBox="0 0 256 180 ">
        <path d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"></path>
       </svg></a>
        <a href="https://api.whatsapp.com/send?phone=919975288300&text=Prashant Kadhao." className="whatsapp"><svg viewBox="0 0 64 64">
        <path d="M6.9,48.4c-0.4,1.5-0.8,3.3-1.3,5.2c-0.7,2.9,1.9,5.6,4.8,4.8l5.1-1.3c1.7-0.4,3.5-0.2,5.1,0.5 c4.7,2.1,10,3,15.6,2.1c12.3-1.9,22-11.9,23.5-24.2C62,17.3,46.7,2,28.5,4.2C16.2,5.7,6.2,15.5,4.3,27.8c-0.8,5.6,0,10.9,2.1,15.6 C7.1,44.9,7.3,46.7,6.9,48.4z M21.3,19.8c0.6-0.5,1.4-0.9,1.8-0.9s2.3-0.2,2.9,1.2c0.6,1.4,2,4.7,2.1,5.1c0.2,0.3,0.3,0.7,0.1,1.2 c-0.2,0.5-0.3,0.7-0.7,1.1c-0.3,0.4-0.7,0.9-1,1.2c-0.3,0.3-0.7,0.7-0.3,1.4c0.4,0.7,1.8,2.9,3.8,4.7c2.6,2.3,4.9,3,5.5,3.4 c0.7,0.3,1.1,0.3,1.5-0.2c0.4-0.5,1.7-2,2.2-2.7c0.5-0.7,0.9-0.6,1.6-0.3c0.6,0.2,4,1.9,4.7,2.2c0.7,0.3,1.1,0.5,1.3,0.8 c0.2,0.3,0.2,1.7-0.4,3.2c-0.6,1.6-2.1,3.1-3.2,3.5c-1.3,0.5-2.8,0.7-9.3-1.9c-7-2.8-11.8-9.8-12.1-10.3c-0.3-0.5-2.8-3.7-2.8-7.1 C18.9,22.1,20.7,20.4,21.3,19.8z"></path>
      </svg></a>
  </div> 
    </div>
  );
}

export default Footer;
