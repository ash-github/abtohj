import React from "react";
import BlogHeader from "./BlogHeader";
import PostComment from "./PostComment";
import RecentPosts from "./RecentPosts";
import { Helmet } from 'react-helmet';

function MERNstackdeveloper() {
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
            <section id="blog-details" className="blog-details section">
              <div className="container">
                <article className="article">
                  <div className="post-img">
                    <img src="img/blogs/5.png" alt="" className="img-fluid" />
                  </div>

                  <h2 className="title">
                    IMPORTANCE OF SOFTSKILLS IN DAY-TO-DAY LIFE
                  </h2>

                  <div className="content">
                    <h2>What are Soft Skills?</h2>
                    <p align="justify">
                      Soft skills are essential interpersonal and communication
                      abilities that enable individuals to interact effectively
                      with others and navigate various social and professional
                      situations. These skills play a crucial role in both
                      personal and professional settings, influencing the way we
                      communicate, collaborate, and manage relationships.
                    </p>
                    <p align="justify">
                      Here’s why soft skills are important in day-to-day life:
                    </p>
                    <ul align="justify">
                      <li>
                        Effective Communication: Soft skills such as active
                        listening, empathy, and clear articulation enhance
                        communication. They help avoid misunderstandings, foster
                        healthy discussions, and build stronger relationships.
                      </li>
                      <li>
                        Relationship Building: Building positive relationships
                        is key to personal and professional success...
                      </li>
                      {/* Add other list items here */}
                    </ul>
                    <p align="justify">
                      Summary: Soft skills are not just complementary to
                      technical skills but are fundamental for success in
                      various aspects of life. They contribute to effective
                      communication, relationship-building, problem-solving, and
                      personal growth. Developing these skills can lead to
                      improved interactions, increased emotional intelligence,
                      and enhanced overall well-being.
                    </p>
                    <br />
                    <p>
                      Intern Anjali Meshram
                      <br />
                      <br />
                      (Mern Stack Developer)
                    </p>
                  </div>
                </article>
              </div>
            </section>

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

export default MERNstackdeveloper;
