import React from "react";
import BlogHeader from "./BlogHeader";
import PostComment from "./PostComment";
import RecentPosts from "./RecentPosts";
import { Helmet } from 'react-helmet';
function StrutsTrainingInNagpur() {
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
                      <img src="img/blogs/77.png" alt="" class="img-fluid" />
                    </div>

                    <h2 class="title">Struts Training In Nagpur</h2>

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
                      Struts 1.x and 2.x Training Overview
The Apache Struts web framework is a free open-source solution for creating Java web applications. It provides various components that can be used to develop MVC based web applications that are easy to develop and maintain.
<br/><br/>
This advanced course shows JSP and servlet programmers how to build web applications using the Apache Struts framework. Learner learn the Struts architecture and see how it captures a great deal of pre-existing best practice: in model-view-controller action mappings, form beans, custom tags for working with HTML forms, input validation, and the Tiles view-building framework. This Struts 1.3 and 2.0 version of the course illustrates the use of Struts 1.3 in detail and 2.0.
<br/><br/>
Struts 1.x & 2.x Course Prerequisite
Java Programming, Java Web Programming, or Java Enterprise Edition. Java Servlet and JSP programming experience, and a basic understanding of HTML and XML is required.
<br/><br/>
Struts 1.x & 2.x Training Course Objective
Facilitate understanding of the Model-View-Controller (MVC) design pattern and how it is best applied to Java Web development
Use Struts actions and action mappings to take control of HTTP requests/responses.
Manage HTML form input and output with form beans, and use these beans to simplify data handling in the controller.
Use JSTL and Struts custom tags to build robust and reusable JSP presentation logic.
Support multiple client locales with various internationalization techniques.
Define validation rules for input forms, and provide clear user feedback.
Build complex presentations using decoupled, reusable tiles, screens and layouts.
Struts 1.x and 2.x Training Course Duration
60 Working days, daily one and half hour
Struts 1.x and 2.x Training Course Content
<br/><br/>
STRUTS – 1.x
Different types of Applications
Different Layers in Application
Presentation Processing Layer
Business Processing Layer
Data Storage and Access Layer
Web Application Designing Models
Model1-Architecture
Model2-Architecture(MVC)
Designing web application using MVC architecture
Struts Introduction
Struts Architecture
Struts Resources
JSP
ActionServlet
web.xml
ActionForm
Action class
Struts Configuration File
Explanation about Struts-configuration File
Detailed explanation of struts request processing flow
Customizing RequestProcessor
Validations in Struts
Client Validations
Server-side Validations
By using validate() method – programmatic approach
By using Validator Framework – declarative approach
Combination of programmatic approach and declarative approach
Different types of Action Forms and Dynamic Action Forms
Action Form
DynaActionForm
ValidatorForm
DynavalidatorForm
ValidatorActionForm
DynaValidatorActionForm
Exception Handling in Struts
Programmatic Approach
Declarative Approach 
Local Forwards and Global Forwards
Local Exceptions and Global Exceptions
Struts predefined Tag libraries
HTML Tag Library
Bean Tag Library
Logic Tag Library
Nested Tag Library
Tiles Tag Library
Predefined Action Classes
ForwardAction
IncludeAction
DispatchAction
LookupDispatchAction
MappingDispatchAction
SwitchAction
LocaleAction
DownloadAction
EventDispatchAction
Internationalization(I18N) in Struts 1.x
Struts with Ajax Example
Preventing Double Submits
Data Source
File Uploading and Downloading in Struts
Tiles Framework
IDEs: Eclipse, Netbeans
<br/><br/>
STRUTS – 2.x
Basic Components of Struts 2
Struts 2 Features
Differences between Struts 1.x & 2.x
Steps to Create Struts 2 Application
Core Components in Struts 2
Filter Dispatcher
Interceptors
Value Stack
Action Context
Action Invocation
OGNL(Object Graph Notation Language)
Struts 2 Work Flow
Struts 2 Action
Struts 2 Configuration
Multi Configuration
MultiNameSpace
Struts 2 Tag Library
<br/><br/>
Interceptors
Params Interceptor
Model Driven Interceptor
Custom Interceptor
Exception Handling
Struts 2 Validation
Custom Validation
Input Validation
Aware Interfaces
Application Aware
Session Aware
Request and Response Awares
Internationalization(I18N) in Struts 2.x
Zero Configuration
By Convention
By  Annotation
Files Uploading and Downloading
Securing struts application
Debugging and profiling
Progress Meters
Custom interceptors
Data store using struts 2
JFreechart plugins
Struts2 with Tiles2
IDEs: Eclipse, Netbeans

</p>
                  
                  


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

export default StrutsTrainingInNagpur;
