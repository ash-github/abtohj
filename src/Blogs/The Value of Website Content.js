import React from "react";
import BlogHeader from "./BlogHeader";
import PostComment from "./PostComment";
import RecentPosts from "./RecentPosts";
import { Helmet } from 'react-helmet';
function TheValueofWebsiteContent() {
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
      {/* <!-- Header Start --> */}
      <BlogHeader />
      <br />
      {/* <!-- Header End --> */}

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* <!-- Blog Details Section --> */}

            {/* <!-- Blog Details Section --> */}
            <section id="blog-details" class="blog-details section">
              <div class="container">
                <article class="article">
                  <div class="post-img">
                    <img src="img/blogs/54.png" alt="" class="img-fluid" />
                  </div>

                  <h2 class="title">The Value of Website Content</h2>

                  {/* <!-- <div class="meta-top">
                  <ul> 
                    <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                    <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2020-01-01">Jan 1, 2022</time></a></li>
                    <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                  </ul>
                </div> --> */}
                  {/* <!-- End meta top --> */}

                  <div class="content">
                    <p align="justify">
                      The success of your website is determined primarily by its
                      content. Ultimately, content wins the wallets of your
                      customers. All other components of your website (design,
                      visuals, videos, etc.) provide a secondary support role.
                      If you have effective taglines, great design will only
                      enhance their effectiveness. Design itself does not sell.
                      The key to a successful website is having clear, relevant
                      content that delivers the right message with power and
                      conviction. The content on your website should target your
                      audience, engage them and persuade them to take action. If
                      your website does not have enough quality content then it
                      simply will not rank highly within search results. Google
                      doesn’t see how your website ‘looks’ to visitors, so all
                      it cares about is content, content, and content.
                      <br />
                      <br />
                      Importance of Content One of the benefits of publishing
                      good content is that it will increase the number of people
                      who find your website through search engines. Search
                      engines love content, especially frequently updated
                      content, and if you want to get people to your site, it’s
                      important to provide content that people want to see.
                      Similarly, a search engine’s job is to find content for
                      their customers. Consider the following: How many pages do
                      you have detailing your company’s products and services on
                      your website? You probably have a limited number. In a
                      blog, for example, you can add fresh, relevant content
                      virtually every day. Every additional page of content is
                      potentially a new entry point (landing page) for your
                      website.
                      <br />
                      <br />
                      Many companies seek close relationships with their
                      customers. It is wise to post relevant and useful
                      information on your website in the form of blog posts,
                      articles or whitepapers. This provides prospective
                      customers to see you as an expert in your industry and be
                      more inclined to conduct business with you. When you use
                      content marketing, you establish trusted lines of
                      communication with your customers, and build credibility
                      in the process.
                    </p>
                    {/* <!-- <br>
<br>
GAURAV GIRADKAR

<br>
<br>
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
  );
}

export default TheValueofWebsiteContent;
