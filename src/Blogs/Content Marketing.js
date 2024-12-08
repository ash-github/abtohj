import React from "react";
import BlogHeader from "./BlogHeader";
import PostComment from "./PostComment";
import RecentPosts from "./RecentPosts";
import { Helmet } from 'react-helmet';
function ContentMarketing() {
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

            <section id="blog-details" class="blog-details section">
              <div class="container">
                <article class="article">
                  <div class="post-img">
                    <img src="img/blogs/53.png" alt="" class="img-fluid" />
                  </div>

                  <h2 class="title">Content Marketing</h2>

                  {/* <!-- <div class="meta-top">
                  <ul> 
                    <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                    <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2020-01-01">Jan 1, 2022</time></a></li>
                    <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                  </ul>
                </div> --> */}
                  {/* <!-- End meta top --> */}

                  <div class="content">
                    <p align="justify"></p>
                    {/* <!-- <br>
<br>
GAURAV GIRADKAR

<br>
<br>
 Intern,PSK Technologies --> */}
                    You have probably heard the term Content Marketing but may
                    not be sure what it means. Content Marketing involves the
                    creation and sharing of media and publishing content in
                    order to acquire customers. This information can be
                    presented in a variety of formats, including blog posts,
                    news, videos, white papers, infographics, case studies,
                    how-to guides, photos, etc. Content Marketing is one of the
                    best methodologies for marketing your website and your
                    business. Posting relevant, valuable and frequently updated
                    information on your website will boost search engine
                    optimization (SEO), help position you as an expert, and
                    allow you to build relationships with your audience. All are
                    priceless benefits for any business.
                    <br />
                    <br />
                    How It Used To Work In the past websites have tended to rely
                    on using page titles and meta data such as the common
                    keyword and description tags to encourage Google to rank
                    their sites highly for certain keywords or phrases. To some
                    extent search engines relied on the content within these
                    special tags because it was much quicker and easier for them
                    to process pages this way. However with improvements in
                    computing power search engines now have algorithms to
                    properly analyse the entire content of a page, and most
                    therefore ignore meta tags entirely when it comes to page
                    ranking. The exception is the title tag of a page which is
                    still considered an important indicator of the page
                    contents.
                    <br />
                    <br />
                    Market Research The content of your website should always
                    begin with proper market research. First, you should
                    determine your high value customers (HVC) and define
                    personas for your website. Then you should determine how you
                    will target them. Taglines and slogans that are
                    customer-centric (i.e., focuses on the needs and wants of
                    the customer) are essential to capturing the attention of
                    your prospective customers. Keywords are the king of the SEO
                    world, and if you want to have a higher ranking on the
                    search engines you need to understand what keywords your
                    potential customers are searching on. Search engines look
                    for keywords within your website content to determine what a
                    page is about. <br />
                    <br />
                    Using the right keywords on a site can push it up the search
                    engine rankings, but be careful! If you overuse a keyword
                    search engines can penalise your site, this is known as
                    ‘keyword stuffing’ and is a common problem with older sites
                    and content.
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

export default ContentMarketing;
