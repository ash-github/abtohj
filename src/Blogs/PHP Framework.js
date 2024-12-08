import React from "react";
import BlogHeader from "./BlogHeader";
import PostComment from "./PostComment";
import RecentPosts from "./RecentPosts";
import { Helmet } from 'react-helmet';
function PHPFramework() {
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

      <div>
        {/* <!-- Header Start --> */}
        <BlogHeader />
        <br />
        {/* <!-- Header End --> */}

        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* <!-- Blog Details Section --> */}
              <section id="blog-details" class="blog-details section">
                <div class="container">
                  <article class="article">
                    <div class="post-img">
                      <img src="img/blogs/94.png" alt="" class="img-fluid" />
                    </div>

                    <h2 class="title">PHP Framework</h2>

                    {/* <!-- <div class="meta-top">
                  <ul> 
                    <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                    <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2020-01-01">Jan 1, 2022</time></a></li>
                    <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                  </ul>
                </div> --> */}
                    {/* <!-- End meta top --> */}

                    <div class="content">
                    <p align="justify"/>
                     
                    
                    <p align="justify">

What is Framework?

Framework is a Platform for Developing Software Application. With The Help Of Framework Software Develpors can Build programs For specific platform.
<br/><br/>

On The Basis Of Technology Services And Functions Framework Is required To Support Many Business Applications, common System services,Network services, Security Services etc. Developing Software is a Complex Process.Which Include Coding, Designing  And Testing.For Only The Coding Part,Programmers Had To take care Of The Syntax,Declaration, Garbage collection,Statements,Exceptions And Many More. To Overcome All This Things Framework Is Used. Which Allow The Developers To Take Control Of The Entity software Development Process, or Most Of It, From single Platform
<br/><br/>

Following are The Types Of Framework

Linear Automation Framework.
Modular Based Testing Framework.
Library Architecture Testing Framework.
Data-Driven Framework.
Keyword-Driven Framework.
Hybrid Testing Framework.
There are many Web development frameworks in the market.
<br/><br/>

Choosing the right framework is a complex and tricky task. If you are an enterprise, choose a framework that will be maintained for the next 5 years and fit your company’s resources and goals. If you are a developer looking for a job, choose a high demand framework in the job market, and fit your profile. 

      


</p>
    
    

    


<br/>
<br/>
Jayashree Mohature
<br/>
<br/>
PHP Developer

<p/>









                 

                  


                      {/* <!-- <br/>
<br/>
GAURAV GIRADKAR

<br/>
<br/>
 Intern,PSK Technologies --> */}
                    </div>

                    {/* <!-- End post content --> */}

                    {/* <!-- <div class="meta-bottom">
                  <i class="bi bi-folder"></i>
                  <ul class="cats">
                    <li><a href="#">Business</a></li>
                  </ul>

                  <i class="bi bi-tags"></i>
                  <ul class="tags">
                    <li><a href="#">Creative</a></li>
                    <li><a href="#">Tips</a></li>
                    <li><a href="#">Marketing</a></li>
                  </ul>
                </div> --> */}

                    {/* <!-- End meta bottom --> */}
                  </article>
                </div>
              </section>

              {/* <!-- /Blog Details Section end--> */}
              {/* Blog Comments Section */}
              <section id="blog-comments" className="blog-comments section">
                <div className="container">
                  <div id="comment-1" className="comment">
                    <div className="d-flex">
                      <div></div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Comment Form Section */}
              <section id="comment-form" className="comment-form section">
                <div className="container">
                  <PostComment />
                </div>
              </section>
            </div>
            <div className="col-lg-4 sidebar">
              <div className="widgets-container">
                {/* Recent Posts Widget */}
                <div className="recent-posts-widget widget-item">
                  <RecentPosts />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PHPFramework

