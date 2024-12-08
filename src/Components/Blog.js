import React from "react";
import RecentPosts from "../Blogs/RecentPosts";
import { Helmet } from 'react-helmet';
import Page from "./Page";
function Blog() {
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


      {/* <!-- Header Start --> */}
      <div class="container-fluid bg-breadcrumb">
        <div class="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3
            class="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Blogs
          </h3>
          <ol
            class="breadcrumb justify-content-center text-white mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
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

      <div class="blog-page">
        <main class="main">
          {/* <!-- Page Title --> */}
          {/* <!-- <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Blog</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li class="current">Blog</li>
          </ol>
        </nav>
      </div>
    </div> --> */}

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
                            <img
                              src="img/blogs/Best Digital Marketing Company In Nagpur.Webp"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="/BestDigitalMarketingCompanyinNagpur">
                            Best Digital Marketing Company In Nagpur
                            </a>
                          </h2>

                          {/* <!--     <div class="meta-top">
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                      </ul>
                    </div>
 --> */}
                          <div class="content">
                            <p>
                              Introduction: In our increasingly interconnected
                              world, where technology plays a pivotal role in
                              almost every aspect
                            </p>
                            <div class="read-more">
                              <a href="/BestDigitalMarketingCompanyinNagpur">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>







                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/Best IT Company In Nagpur.webp"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="/BestITCompanyinNagpur">
                            Best IT Company in Nagpur
                            </a>
                          </h2>

                          {/* <!--     <div class="meta-top">
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                      </ul>
                    </div>
 --> */}
                          <div class="content">
                            <p>
                              Introduction: In our increasingly interconnected
                              world, where technology plays a pivotal role in
                              almost every aspect
                            </p>
                            <div class="read-more">
                              <a href="/BestITCompanyinNagpur">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>





                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/Career Opportunities for Freshers in the IT Sector in Nagpur.webp"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="/CareerOpportunitiesforFreshersintheITSectorinNagpur">
                            Career Opportunities for Freshers in the IT Sector in Nagpur
                            </a>
                          </h2>

                          {/* <!--     <div class="meta-top">
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                      </ul>
                    </div>
 --> */}
                          <div class="content">
                            <p>
                              Introduction: In our increasingly interconnected
                              world, where technology plays a pivotal role in
                              almost every aspect
                            </p>
                            <div class="read-more">
                              <a href="/CareerOpportunitiesforFreshersintheITSectorinNagpur">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>





                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/Software Development Company in Nagpur.webp"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="/SoftwareDevelopmentCompanyInNagpur">
                            Software Development Company In Nagpur
                            </a>
                          </h2>

                          {/* <!--     <div class="meta-top">
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                      </ul>
                    </div>
 --> */}
                          <div class="content">
                            <p>
                              Introduction: In our increasingly interconnected
                              world, where technology plays a pivotal role in
                              almost every aspect
                            </p>
                            <div class="read-more">
                              <a href="/SoftwareDevelopmentCompanyInNagpur">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>





                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/web development company in nagpur.webp"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="/WebDevelopmentCompanyInNagpur">
                            Web Development Company In Nagpur
                            </a>
                          </h2>

                          {/* <!--     <div class="meta-top">
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                      </ul>
                    </div>
 --> */}
                          <div class="content">
                            <p>
                              Introduction: In our increasingly interconnected
                              world, where technology plays a pivotal role in
                              almost every aspect
                            </p>
                            <div class="read-more">
                              <a href="/WebDevelopmentCompanyInNagpur">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
















                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/1.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetail1.html">
                              Effect of technology on daily life
                            </a>
                          </h2>

                          {/* <!--  <div class="meta-top">
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                      </ul>
                    </div> --> */}

                          <div class="content">
                            <p>
                              What is the simple definition of technology?
                              Technology is the use of scientific knowledge for
                              practical
                            </p>

                            <div class="read-more">
                              <a href="blogdetail1.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/2.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails2.html">
                              The Crucial Importance of Cybersecurity in Today’s
                              Digital Landscape
                            </a>
                          </h2>

                          {/* <!--     <div class="meta-top">
                      <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                      </ul>
                    </div>
 --> */}
                          <div class="content">
                            <p>
                              Introduction: In our increasingly interconnected
                              world, where technology plays a pivotal role in
                              almost every aspect
                            </p>
                            <div class="read-more">
                              <a href="blogdetails2.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/3.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails3.html">
                              Scope of Artificial Intelligence (AI) and Machine
                              Learning (ML).
                            </a>
                          </h2>

                          <div class="meta-top">
                            {/* <!-- <ul>
                        <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                        <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                      </ul> --> */}
                          </div>

                          <div class="content">
                            {/* <!-- <p>
                        Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.
                        Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.
                      </p> --> */}
                            <div class="read-more">
                              <a href="blogdetails3.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/4.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails4.html">
                              CONTENT MARKETING AND SEO
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
                        Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe   cum eligendi eaque iste omnis a qui.
                        Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.
                      </p> --> */}
                            <div class="read-more">
                              <a href="blogdetails4.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/6.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails6.html">
                              What Is Full Stack Developer and MERN Stack
                              Developer?
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
                              <a href="blogdetails6.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>

                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/7.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails7.html">
                              MERN Stack Development on Cloud
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
                              <a href="blogdetails6.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/8.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails8.html">
                              Scope of Mern Stack Developer
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
                              <a href="blogdetails8.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/9.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails9.html">
                              PAY PER CLICK ADVERTISMENT
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
                              <a href="blogdetails9.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/10.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails10.html">Affiliate Marketing</a>
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
                              <a href="blogdetails10.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/11.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails11.html">
                              How to Crack Interview of Multinational Companies
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
                              <a href="blogdetails11.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/12.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails12.html">
                              How To Be Motivate Yourself To Be Successful
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
                              <a href="blogdetails12.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/13.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails13.html">
                              Can I Get a job after the internship?
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
                              <a href="blogdetails13.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/14.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails14.html">
                              Importance of Interpersonal Skills
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
                              <a href="blogdetails14.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/15.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails15.html">
                              What language is use for UI Design?
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
                              <a href="blogdetails15.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/16.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails16.html">
                              WHY ARE SOFT SKILLS IMPORTANT?
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
                              <a href="blogdetails16.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/17.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails17.html">
                              Importance Of Basic Programming Language
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
                              <a href="blogdetails17.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/18.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails18.html">
                              Importance Of Communication Skills
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
                              <a href="blogdetails18.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/19.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails19.html">
                              Importance Of Social Media Marketing
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
                              <a href="blogdetails19.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}

                      <div class="col-lg-12">
                        <article>
                          <div class="post-img">
                            <img
                              src="img/blogs/20.png"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <h2 class="title">
                            <a href="blogdetails20.html">
                              IMPORTANCE OF TIME MANAGEMENT FOR SUCCESS
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
                              <a href="blogdetails20.html">Read More</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* <!-- End post list item --> */}
                    </div>
                    {/* <!-- End blog posts list --> */}
                  </div>
                </section>
                {/* <!-- /Blog Posts Section --> */}
                <br />
                <br />

                {/* <!-- Blog Pagination Section --> */}
                {/* <section id="blog-pagination" class="blog-pagination section">
                  <div class="container">
                    <div class="d-flex justify-content-center">
                      
                      <ul>
                        <li>
                          <a href="#">
                            <i class="bi bi-chevron-left"></i>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">1</a>
                        </li>
                        <li>
                          <a href="blog1.html" class="">
                            2
                          </a>
                        </li>
                        <li>
                          <a href="blog2.html">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>...</li>
                        <li>
                          <a href="#">10</a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="bi bi-chevron-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section> */}

             <Page></Page>
                {/* <!-- /Blog Pagination Section --> */}
              </div>
              <br />
              <br />

              <div class="col-lg-4 sidebar">
                <div class="widgets-container">
                  {/* <!-- Search Widget --> */}
                  {/* <!-- <div class="search-widget widget-item">

              <h3 class="widget-title">Search</h3>
              <form action="">
                <input type="text">
                <button type="submit" title="Search"><i class="bi bi-search"></i></button>
              </form>

            </div> --> */}
                  {/* <!--/Search Widget --> */}

                  {/* <!-- Categories Widget --> */}
                  {/* <!--        <div class="categories-widget widget-item">

              <h3 class="widget-title">Categories</h3>
              <ul class="mt-3">
                <li><a href="#">General <span>(25)</span></a></li>
                <li><a href="#">Lifestyle <span>(12)</span></a></li>
                <li><a href="#">Travel <span>(5)</span></a></li>
                <li><a href="#">Design <span>(22)</span></a></li>
                <li><a href="#">Creative <span>(8)</span></a></li>
                <li><a href="#">Educaion <span>(14)</span></a></li>
              </ul>

            </div>
 --> */}

                  {/* <!--/Categories Widget --> */}

                  {/* <!-- Recent Posts Widget --> */}
                  <div class="recent-posts-widget widget-item">
                    <RecentPosts />
                  </div>
                  {/* <!--/Recent Posts Widget --> */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Blog;
