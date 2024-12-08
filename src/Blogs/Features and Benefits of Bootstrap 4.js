import React from 'react';
import BlogHeader from "./BlogHeader";
import PostComment from "./PostComment";
import RecentPosts from "./RecentPosts";
import { Helmet } from 'react-helmet';


function FeaturesAndBenefitsOfBootstrap4() {
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

      {/* Header Start */}
      <BlogHeader />
      {/* Header End */}
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Blog Details Section */}
            <section id="blog-details" className="blog-details section">
              <div className="container">
                <article className="article">
                  <div className="post-img">
                    <img src="img/blogs/46.png" alt="" className="img-fluid" />
                  </div>

                  <h2 className="title">Features and Benefits of Bootstrap 4</h2>

                  <div className="content">
                    <p align="justify">
                      1. **Sass Instead of LESS**  
                      Until now Bootstrap has used LESS as its main CSS preprocessor, but for the new major release, the style rules will be refactored to Sass, which is much more popular among frontend developers, has a huge contributor base, generally easier to use and offers more possibilities. Thanks to the powerful Libsass Sass Compiler written in C/C++, Bootstrap 4 will compile much faster than before.
                      <br /><br />
                      2. **New Grid Tier for Smaller Screens**  
                      Bootstrap has a sophisticated responsive grid system that allows developers to target devices with different viewports. Bootstrap 3 currently has 4 grid classes for columns: `.col-xs-XX` for mobile phones, `.col-sm-XX` for tablets, `.col-md-XX` for desktops, and `.col-lg-XX` for larger desktops. Bootstrap 4 will enhance the grid system with a fifth one to facilitate targeting smaller devices under 480px viewport width.
                      <br /><br />
                      3. **Introduces Relative CSS Units**  
                      Bootstrap 4 finally drops support for Internet Explorer 8. This allows them to get rid of polyfills and convert to relative CSS units. Instead of pixels, the new major release will use REMs and EMs for responsive typography.
                      <br /><br />
                      4. **Brand New Bootstrap Cards**  
                      The development team decided to unify some previous elements of Bootstrap’s user interface, introducing a new UI component called Cards. Cards will replace former wells, thumbnails, and panels, providing a more streamlined workflow.
                      <br /><br />
                      5. **New Reboot Module**  
                      The new Reboot module replaces the previous normalize.css reset file, including all generic CSS selectors and reset styles in a single, easy-to-use SCSS file.
                      <br /><br />
                      6. **Opt-in Flexbox Support**  
                      Bootstrap 4 makes it possible to take advantage of CSS3’s Flexbox Layout, though the default version uses floats for compatibility with IE9.
                      <br /><br />
                      7. **Streamlined Variable Customization**  
                      All Sass variables used in the new Bootstrap release are included in a single file called `_variables.scss`, simplifying the development process.
                      <br /><br />
                      8. **New Utility Classes for Spacing**  
                      Bootstrap 4 adds more practical utility classes to quickly change paddings and margins on sites.
                      <br /><br />
                      9. **Tooltips and Popovers Powered By Tether**  
                      Bootstrap 4 tooltips and popovers use the Tether library, ensuring proper placement of elements.
                      <br /><br />
                      10. **Refactored JavaScript Plugins**  
                      Each JavaScript plugin for the new release has been refactored using EcmaScript 6, improving the frontend experience.
                    </p>
                  </div>

                </article>
              </div>
            </section>
            {/* End Blog Details Section */}

            <section id="blog-comments" className="blog-comments section">
              <div className="container">
                <h3>Comments</h3>
                <div id="comment-1" className="comment">
                  <div className="d-flex">
                    <div className="comment-author">John Doe:</div>
                    <div className="comment-text">
                      Great article! Very informative.
                    </div>
                  </div>
                </div>
                <PostComment />
                {/* Comment Form Section */}
              </div>
            </section>
          </div>

          <div className="col-lg-4 sidebar">
            <RecentPosts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesAndBenefitsOfBootstrap4;
