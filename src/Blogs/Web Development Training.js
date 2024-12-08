import React from 'react'
import BlogHeader from './BlogHeader'
import PostComment from './PostComment'
import RecentPosts from './RecentPosts'
import { Helmet } from 'react-helmet';

function WebDevelopmentTraining() {
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
       
            <BlogHeader></BlogHeader>
      
        {/* <!-- Header End --> */}
        <br/>
        <br/>
        <br/>
        <br/>
    <div class="container">
      <div class="row">

        <div class="col-lg-8">

          {/* <!-- Blog Details Section --> */}
          <section id="blog-details" class="blog-details section"/>
            <div class="container">

              <article class="article"/>

                <div class="post-img">
                  <img src="img/blogs/64.png" alt="" class="img-fluid"/>
                </div>

                <h2 class="title">Web Development Training
                </h2>

               

                <div class="content">
                  <p align="justify"/>



                  We Build your Dream
New Online Batch is Going to start from 15 April 2021<br/><br/>

Include:<br/><br/>

C
C++
HTML
CSS
JAVASCRPIT,
JQUERY,
BOOTSTRAP
PHP
WORDPRESS,
CODEIGNITER
LIVE PROJECT
WEB DEVELOPMENT TRAINING
New Online Batch is Going to start from 15 April 2021 PSK Technologies Pvt. Ltd. @ 99 75 288 300
                       


















   
                 
    



    <p/>


</div>

              

              {/* </article> */}

            </div>
          {/* </section> */}

        
          <section id="blog-comments" class="blog-comments section"/>

            <div class="container">

            

              <div id="comment-1" class="comment">
                <div class="d-flex">
                
                  <div>
                    
                  </div>
                </div>
              </div>





                </div>

            

              <PostComment></PostComment>

          

          {/* <!-- Comment Form Section --> */}

        </div>

        <div class="col-lg-4 sidebar">

         
             
<RecentPosts></RecentPosts>
             
                
              {/* <!-- End recent post item--> */}

            </div>

          
            <div class="tags-widget widget-item">

              
               

        </div>

      </div>
   </div>
   </div>




  
  )
}

export default WebDevelopmentTraining;