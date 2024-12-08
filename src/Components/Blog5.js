import React from "react";
import BlogHeader from "../Blogs/BlogHeader";
import { Helmet } from 'react-helmet';
import Page from "./Page"

function Blog5() {
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
      {/* <!-- Header Start  --> */}
      <div class="container-fluid bg-breadcrumb">
        <div class="container text-center py-5" style={{  maxWidth: "900px" }}>
          <h3 
            class="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Blogs
          </h3> 
          <ol
            class="breadcrumb justify-content-center text-white mb-0 wow fadeInDown"
            data-wow-delay="0.
            3s"
          >
            <li class="breadcrumb-item">
              <a href="index.html" class="text-white">
                Home
              </a>
            </li>
            {/* <!-- <li class="breadcrumb-item"><a href="#" class="text-white">Pages</a></li> --> */}
            <li class="breadcrumb-item active text-secondary">Blogs</li>
          </ol>
        </div>
      </div>
      {/* <!-- Header End --> */}
      <div style={{ padding: "10px" }}></div>

      <b12 class="blog-page" />

      <main class="main" />

      {/* <!-- Page Title --> */}

      {/* <!-- End Page Title --> */}

      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            {/* <!-- Blog Posts Section --> */}
            <section id="blog-posts" class="blog-posts section">
              <div class="container">
                <div class="row gy-4">
                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/101.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/DigitalMarketing">
                        Digital Marketing
                        </a>
                      </h2>

                      <div class="content">
                        <div class="read-more">
                          <a href="/DigitalMarketing">Read More</a>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/* <!-- End post list item --> */}

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/102.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/Website Designing & Development">Website Designing & Development</a>
                      </h2>

                      <div class="content">
                        <div class="read-more">
                          <a href="/Website Designing & Development">Read More</a>
                        </div>
                      </div>
                    </article>
                  </div>

                  {/* <!-- End post list item --> */}

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/103.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/OnlineInternship">
                        Online Internship
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/OnlineInternship">Read More</a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/104.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/PersonalityDevelopment">
                        Personality Development
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/PersonalityDevelopment">
                            Read More
                          </a>
                        </div>
                      </div>
                    </article>   
                  </div>

                  {/* <!-- End post list item --> */}

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/105.png" alt="" class="img-fluid" />
                      </div>   

                      <h2 class="title">
                        <a href="/ResumeWriting">
                        Resume Writing
                        </a>
                      </h2>

                      <div class="meta-top">
                        {/* <!--  <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                      </ul> --> */}
                      </div>

                      <div class="content">
                        {/* <!--  <p>
                        Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui.
                        Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.
                      </p> --> */}
                        <div class="read-more">
                          <a href="/ResumeWriting">Read More</a>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/* <!-- End post list item --> */}

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/106.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/InterviewTechniqu">
                        Interview Technique
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/InterviewTechnique">
                            Read More
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/* <!-- End post list item --> */}

                  <div class="col-lg-12">  
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/107.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/InterviewTechnique">
                        Interview Technique
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/InterviewTechnique ">Read More</a>
                        </div>
                      </div>
                    </article>
                  </div>

                  {/* <!-- End post list item --> */}

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/108.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/HowToMakeACareer">How To Make A Career</a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/HowToMakeACareer">Read More</a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/109.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/MCITPMCSEOnlineTrainingInNagpur">
                        MCITP MCSE Online Training In Nagpur
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/MCITPMCSEOnlineTrainingInNagpur">
                            Read More
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/110.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/CCNAOnlineTrainingInNagpur">
                        CCNA Online Training In Nagpur
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/CCNAOnlineTrainingInNagpur">
                            Read More
                          </a>
                        </div>
                      </div>
                    </article>
                  </div> 

                  {/* <!-- End post list item --> */}

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/111.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/HTMLCSSJavaScriptOnlineTrainingInNagpur">
                        HTML CSS JavaScript Online Training In Nagpur
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/HTMLCSSJavaScriptOnlineTrainingInNagpur">
                            Read More
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/112.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/ConlineTrainingInNagpur">
                        C online Training In Nagpur
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/ConlineTrainingInNagpur">
                            Read More
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>

                  {/* <!-- End post list item --> */}

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                      <img src="img/blogs/113.png" alt="" class="img-fluid" />

                       </div>

                      <h2 class="title">
                        <a href="/CLanguageonlineTrainingInNagpur">
                        C Language online Training In Nagpur
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/CLanguageonlineTrainingInNagpur">Read More</a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/114.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/PHPonlineTrainingInNagpur">
                        PHP online Training In Nagpur
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/PHPonlineTrainingInNagpur">Read More</a>
                        </div>
                      </div>
                    </article>
                  </div>

                  {/* <!-- End post list item --> */}

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/115.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/AdvanceHardwareOnlineTrainingInNagpur">
                        Advance Hardware Online Training In Nagpur
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/AdvanceHardwareOnlineTrainingInNagpur">Read More</a>
                        </div>
                      </div>
                    </article>
                  </div>

                  {/* <!-- End post list item --> */}

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/116.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/LinuxOnlineTrainingInNagpur">
                        Linux Online Training In Nagpur
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/LinuxOnlineTrainingInNagpur">Read More</a>
                        </div>
                      </div>
                    </article>
                  </div>

                  {/* <!-- End post list item --> */}

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/117.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/HowtomakeacareerinWordPress2024">
                        How to make a career in WordPress 2024
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/HowtomakeacareerinWordPress2024e">Read More</a>
                        </div>
                      </div>
                    </article>
                  </div>

                  {/* !-- End post list item -->
                   */}

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/38.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/ImportanceofKeywords">
                        MCITP MCSE Classes In Nagpur                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/ImportanceofKeywords">Read More</a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/39.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/Importanceoffacebook">
                          Importance of Keywords
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/Importanceoffacebook">Read More</a>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div class="col-lg-12">
                    <article>
                      <div class="post-img">
                        <img src="img/blogs/40.png" alt="" class="img-fluid" />
                      </div>

                      <h2 class="title">
                        <a href="/HOWTOBECOMEADEVELOPER">
                          HOW TO BECOME A DEVELOPER ?
                        </a>
                      </h2>

                      <div class="meta-top"></div>

                      <div class="content">
                        <div class="read-more">
                          <a href="/HOWTOBECOMEADEVELOPER">Read More</a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>
            <br />
            <br />

            <Page></Page>
          </div>
          <br />
          <br />

          <div class="col-lg-4 sidebar">
            <div class="widgets-container">
              <div class="recent-posts-widget widget-item">
                <h3 class="widget-title">Recent Posts</h3>

                <div class="post-item">
                  <img src="img/blogs/1.png" alt="" class="flex-shrink-0" />
                  <div>
                    <h4>
                      <a href="blogdetail1.html">
                        Effect of technology on daily life
                      </a>
                    </h4>
                  </div>
                </div>

                <div class="post-item">
                  <img src="img/blogs/2.png" alt="" class="flex-shrink-0" />
                  <div>
                    <h4>
                      <a href="blogdetails2.html">
                        The Crucial Importance of Cybersecurity in Today’s
                        Digital Landscape
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
                        Scope of Artificial Intelligence (AI) and Machine
                        Learning (ML).
                      </a>
                    </h4>
                    {/* <!-- <time datetime="2020-01-01">Jan 1, 2020</time> --> */}
                  </div>
                </div>

                {/* <!-- End recent post item--> */}
              </div>

              {/* <!--/Recent Posts Widget --> */}

              {/* <!-- Tags Widget --> */}
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
                    <a href="webdevelopment.html">
                      Website Design and Development
                    </a>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog5;
