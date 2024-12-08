import React from 'react'
import BlogHeader from './BlogHeader'
import PostComment from './PostComment'
import RecentPosts from './RecentPosts'
import { Helmet } from 'react-helmet';
function RollofLinuxinCloudComputing() {
  return (
    <div>
      

     

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
                  <img src="img/blogs/21.png" alt="" class="img-fluid"/>
                </div>

                <h2 class="title">Roll of Linux in Cloud Computing</h2>

               

                <div class="content">
                  <p align="justify">
          What is Linux?             

Linux is an operating system created in the early 1990s by Linus Torvalds and the free software foundation (FSF).

Most commonly used Linux by distribution

Centos
RedHat
Ubuntu

 <br/><br/>

What is Cloud Computing?

Cloud computing is a method of running applications and storing related data in the central computer system and providing access to the client.

 Cloud computing is the delivery of different services through the internet. These resources include tools and applications like data storage, servers, databases, networking, and software.

Cloud services accelerate big data and business intelligence computing operations. Software modernization for microservices are all for an e-commerce software engine. It results in streamlining and simplifying business applications.<br/><br/>

 

Importance of Linux in Cloud Computing

The server over which the client must be running the desired services will be having any one of many linux distributions as the operating system.

It makes an easy and affordable process for all types and sizes
Most internet users avail the services using a mobile phone, and cable providers.
It is fast and free.
It is important for servers.
It is the biggest open source project and inspires many users to share their projects.
It is open-projects, and improvements to happen also easier as an open source operating system.
 
<br/><br/>
Role of Linux in Cloud Computing

Linux is the operating system that enables Cloud computing.
Its modular, power efficient, reliable, open source, affordable, Scale to support critical workloads.
It makes easier deployment process as contributors are adapting its capability to serve their needs.
Linux serves everything from single-machine operating systems to multi-national networks.
Linux is stable and more efficient and can configure for everyone with a modular capability that allows developers to implement most efficient combination of technology
Linux is also security efficient which is a key attribute as it addresses any data concerns organizations may have of being in the public cloud. Open source allows a community to contribute security patching at pace and on demand.
<br/><br/>
It has a great influence in the market, all the major public cloud providers amazon web services(AWS), Microsoft Azure, and Google cloud platform(GCP) use different versions of linux.
Linux has grown into an essential technology recognizing entire industries.
The developer committed time and resources to its development making linux an attractive and stable operating system for the cloud computing needs of companies, irrespective of their size.
We expect the open-source development model proven successful by linux, will continue to empower developers around the world to create similar communities to solve technical challenges in the future. Whether its playing a fundamental role in an organization’s cloud strategy, securing and maintaining compliance, controlling it spent or optimizing your environment linux has a role to play
 

 <br/><br/>

 

 

Advantages

Improves flexibility
Cost friendly
Strong command-line support – makes it easy to manage Linux machines remotely even over mobile networks
Auto-Scaling- It is easier to automate simple configurations in all configurations are done using config files & commands.
 <br/><br/>

Improves innovations
Uses

File Storage: The Cloud offers a variety of storage options, including files & emails.

File Sharing: The file can be shared with multiple users using the cloud at the same time.

Backup data: The cloud secures your data files.

 

                  

                  

    
<br/>
<br/>
Nitesh M.Sendare<br/>
<br/>
 Intern,PSK Technologies


    </p>









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

export default RollofLinuxinCloudComputing
