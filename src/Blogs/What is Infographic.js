import React from 'react'
import BlogHeader from './BlogHeader'
import PostComment from './PostComment'
import RecentPosts from './RecentPosts'
import { Helmet } from 'react-helmet';


function WhatisInfographic() {
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
                  <img src="img/blogs/28.png" alt="" class="img-fluid"/>
                </div>

                <h2 class="title">What is Infographic</h2>

               

                <div class="content">
                  <p align="justify"/>




                  Infographic is a visual representation of any kind of information or data. Infographics are made up of two words like Info-Information and Graphics-visual images it simply means that any information should be shown through graphics in the form of images or

pictures. With the help of Infographics, you can convey your information to people quickly and easily. According to research, 80-90% of the information that comes to your mind comes due to visual content,  that is why infographic is an effective medium, it is being used in digital marketing, it will also help in increasing your business. Because of the infographic, you can reach your information to more and more people in less time, it is running a lot on social media these days. Infographics can make your business grow very quickly. This is one of the best ways to reach your information to the people to grow your business. you can get the information to the target audience quickly and easily. Helps you differentiate between information and information from the traditional content

displayed on infographics. Infographics are mostly beneficial for professionals and students who want to highlight information or

information in their research or presentation. Nowadays organizations from charities to corporate are also using infographics to spread awareness about all kinds of events<br/><br/>

The Benefit of Infographic:

Any Traditional information or information can be well understood and explained using infographics.
The use of infographics has increased a lot on social media, with the help of this you can reach your information to a lot of people in less time.
With the help of infographics, people can be made aware.
In infographics, your point can be explained to the people in very few words.
You can also earn money online by doing infographics. You can earn a lot of money by doing infographics for people’s companies and blogs.
How to use infographics

If you have created a computer infographics and you want to promote your infographics online then your infographic should be tablet and mobile friendly which can be understood by mobile and tablet users as well. Writing information in your computer graphics in short code and adding a link to your website are two ways in which you can increase traffic to your website. 
                  














<br/>
<br/>
Sonal Gurve<br/>
<br/>
 Intern,PSK Technologies




   
                 
    



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

export default WhatisInfographic;