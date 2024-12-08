import React from "react";
import { Helmet } from 'react-helmet';

function RecentPosts() {
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

      <div class="recent-posts-widget widget-item">
        <h3 class="widget-title">Recent Posts</h3>
        <div class="post-item">
          <img src="img/blogs/1.png" alt="" class="flex-shrink-0" />
          <div>
            <h4>
              <a href="blogdetail1.html">Effect of technology on daily life</a>
            </h4>
            {/* <!-- <time datetime="2020-01-01">Jan 1, 2020</time> --> */}
          </div>
        </div>
        {/* <!-- End recent post item--> */}
        <div class="post-item">
          <img src="img/blogs/2.png" alt="" class="flex-shrink-0" />
          <div>
            <h4>
              <a href="blogdetails2.html">
                The Crucial Importance of Cybersecurity in Today’s Digital
                Landscape
              </a>
            </h4>
            {/* <!-- <time datetime="2020-01-01">Jan 1, 2020</time> --> */}
          </div>
        </div>
        {/* <!-- End recent post item--> */}
        <div class="post-item">
          <img src="img/blogs/5.png" alt="" class="flex-shrink-0" />
          <div>
            <h4>
              <a href="blogdetails5.html">
                IMPORTANCE OF SOFTSKILLS IN DAY-TO-DAY LIFE
              </a>
            </h4>
            {/* <!-- <time datetime="2020-01-01">Jan 1, 2020</time> --> */}
          </div>
        </div>
        {/* <!-- End recent post item--> */}
        <div class="post-item">
          <img src="img/blogs/4.png" alt="" class="flex-shrink-0" />
          <div>
            <h4>
              <a href="blogdetails4.html">CONTENT MARKETING AND SEO</a>
            </h4>
            {/* <!-- <time datetime="2020-01-01">Jan 1, 2020</time> --> */}
          </div>
        </div>
        {/* <!-- End recent post item--> */}
        <div class="post-item">
          <img src="img/blogs/3.png" alt="" class="flex-shrink-0" />
          <div>
            <h4>
              <a href="blogdetails3.html">
                Scope of Artificial Intelligence (AI) and Machine Learning (ML).
              </a>
            </h4>
            {/* <!-- <time datetime="2020-01-01">Jan 1, 2020</time> --> */}
          </div>
        </div>
        {/* <!-- End recent post item--> */}
        <div class="tags-widget widget-item">
          <h3 class="widget-title">Tags</h3>
          <ul>
            <li>
              <a href="webdevelopment.html">Web Development</a>
            </li>
            <li>
              <a href="Digital Marketing.html">Digital Marketing</a>
            </li>
            <li>
              <a href="webhosting.html">Web Hosting</a>
            </li>
            <li>
              <a href="webdevelopment.html">Website Design and Development</a>
            </li>
            <li>
              <a href="webdevelopment.html">Design</a>
            </li>
            <li>
              <a href="internship.html">IT Internship</a>
            </li>
            <li>
              <a href="internship.html">IT Training</a>
            </li>
            <li>
              <a href="Digital Marketing.html">Social Media Marketing</a>
            </li>
            <li>
              <a href="Digital Marketing.html">SMM</a>
            </li>
            <li>
              <a href="Digital Marketing.html">SEO</a>
            </li>
            <li>
              <a href="Digital Marketing.html">Marketing</a>
            </li>
          </ul>
        </div>
        {/* <!--/Tags Widget --> */}
      </div>
    </div>
  );
}

export default RecentPosts;
