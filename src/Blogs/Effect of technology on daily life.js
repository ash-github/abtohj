import React from "react";
import BlogHeader from "./BlogHeader";
import PostComment from "./PostComment";
import RecentPosts from "./RecentPosts";
import { Helmet } from 'react-helmet';

function Effectoftechnologyondailylife() {
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
      {/* <!-- Header End --> */}

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* <!-- Blog Details Section --> */}
            <section id="blog-details" className="blog-details section">
              <div className="container">
                <article className="article">
                  <div className="post-img">
                    <img src="img/blogs/1.png" alt="" className="img-fluid" />
                  </div>

                  <h2 className="title">Effect of technology on daily life</h2>

                  {/* <!-- <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2020-01-01">Jan 1, 2022</time></a></li>
                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                  </ul>
                </div> --> */}
                  {/* <!-- End meta top --> */}

                  <div className="content">
                    <p>
                      Technology is the use of scientific knowledge for
                      practical purposes, and for solving problems. Technology
                      can aid human life or industries
                    </p>
                    <p>What is Technology?</p>
                    {/* 
                 <!--  <blockquote>
                    <p>
                      Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
                    </p>
                  </blockquote>
 --> */}
                    <p align="justify">
                      Technology means a lot of things these days. The word
                      “technology” brings to mind various devices, such as
                      laptops, phones, and tablets. Technology may also make you
                      think of the internet, data, or advancements in the world
                      of engineering. This may be a narrow scope though, as
                      technology includes so many creative solutions to many
                      everyday problems humans have faced all throughout
                      history. When you think of the word ‘technology’, what
                      comes to mind? It might sound like something from a sci-fi
                      show, or something that has to run on electricity.
                      Technology makes us think of the very complex, but
                      technology doesn’t have to be complex. Technology is the
                      use of scientific knowledge for practical purposes or
                      applications, whether in industry or in our everyday
                      lives. So, basically, whenever we use our scientific
                      knowledge to achieve some specific purpose, we’re using
                      technology. Well, there is slightly more to it than that.
                      Technology usually involves a specific piece of equipment,
                      but that equipment can be incredibly simple or dazzlingly
                      complex. It can be anything from the discovery of the
                      wheel, all the way up to computers and MP3 players.
                    </p>
                    <h3>What are examples of technology?</h3>
                    <p align="justify">
                      Types of technologies include: mechanical technology,
                      medical technology, communications technology, electronic
                      technology, and industrial and manufacturing technologies.
                      Examples include: electronic devices, simple machines, and
                      factories.
                    </p>
                    {/* <!-- <img src="assets/img/blog/blog-inside-post.jpg" className="img-fluid" alt=""> --> */}
                    <h3>What are the main types of technology?</h3>
                    <p align="justify">
                      There are six main types of technology. They are:
                      mechanical technology, medical technology, communications
                      technology, electronic technology, and industrial and
                      manufacturing technologies.
                    </p>
                    <h3>Technology In Education</h3>
                    <p align="justify">
                      With growing educational technology, children experience a
                      better learning environment. They can extract and learn
                      tough concepts. With the help of technology, children can
                      share and discuss their questions with their teachers.
                      Also, they can network with people around the world to
                      gain knowledge and also access resources for exams and
                      project work.Technology continues to improve the education
                      industry over time. Technology puts a variety of learning
                      tools at our fingertips for students and parents. Teachers
                      can collaborate with classNamerooms around the world and share
                      ideas and resources online. Students have instant access
                      to a wealth of great information on the Internet. Teachers
                      and students can access numerous resources available on
                      the Internet and use them for project work, research, and
                      more. Online learning has changed the education system.
                      The COVID-19 pandemic has brought about a paradigm shift
                      through the use of technology. School-age children
                      continue to be educated at home, and schools are making it
                      easier for teachers to provide education online from home.
                      The student learned and used his 21st-century skills and
                      tools such as virtual classNamerooms, AR (augmented reality),
                      and robotics. All of these have greatly improved
                      communication and collaboration.
                    </p>
                    <h3>Technology In Health Sector</h3>
                    <p align="justify">
                      Technological advancements have improved the quality of
                      life and longevity of individuals and the lives of many
                      medical professionals and students training to become
                      medical professionals. It allows quick access to each
                      patient’s medical records. The Internet has dramatically
                      changed the patient-physician relationship. Everyone can
                      stay on top of the latest medical discoveries, share
                      treatment information, and support each other in dealing
                      with medical issues. Thanks to modern technology, it is
                      now possible to contact a doctor from the comfort of your
                      home. There are many websites and apps for contacting
                      doctors and getting medical help Breakthrough innovations
                      in surgery, artificial organs, brain implants, and
                      connected sensors are examples of groundbreaking
                      developments in the healthcare industry. Hospitals use a
                      variety of tools and applications to perform
                      administrative tasks and use digital marketing to promote
                      their services.
                    </p>
                    <h3>Technology in government</h3>
                    <p align="justify">
                      The government has utilized technology in two main areas.
                      These include the facilitation of the delivery of citizen
                      services and the improvement of defense and national
                      security. The government is spending large sums of money
                      on wireless technologies, mobile gadgets, and
                      technological applications. This is in an effort to
                      improve their operations and ensure that the needs of
                      citizens are fulfilled.For example, in order to enhance
                      safety and improve service delivery, Cisco developed a
                      networking approach known as Connected Communities. This
                      networking system connects citizens with the government
                      and the community. The system was developed to improve the
                      safety and security of citizens, improve service delivery
                      by the government, empower citizens, and encourage
                      economic development. The government uses technology to
                      provide information and services to citizens. This
                      encourages economic development and fosters social
                      inclusion. Technology is also useful in improving national
                      security and the safety of citizens. It integrates several
                      wireless technologies and applications that make it easy
                      for security agencies to access and share important
                      information effectively. Technology is widely used by
                      security agencies to reduce vulnerability to terrorism.
                      Technologically advanced gadgets are used in airports,
                      hospitals, shopping malls, and public buildings to screen
                      people for explosives and potentially dangerous materials
                      or gadgets that may compromise the safety of citizens
                      (Bonvillian and Sharp, 2001, par2).
                    </p>
                    <h3>Technology in business</h3>
                    <p align="justify">
                      Technology is used in the business world to improve
                      efficiency and increase productivity. Most important,
                      technology is used as a tool to foster innovation and
                      creativity (Ray, 2004, p.62). Other benefits of technology
                      to businesses include the reduction of injury risk to
                      employees and improved competitiveness in the markets. For
                      example, many manufacturing businesses use automated
                      systems instead of manual systems. These systems eliminate
                      the costs of hiring employees to oversee manufacturing
                      processes. They also increase productivity and improve the
                      accuracy of the processes because of the reduction of
                      errors (Ray, 2004, p.63). Technology improves productivity
                      due to Computer-aided Manufacturing (CAM),
                      Computer-integrated Manufacturing (CIM), and
                      Computer-aided Design (CAD). CAM reduces labor costs,
                      increases the speed of production, and ensures a higher
                      level of accuracy (Hunt, 2008, p.44). CIM reduces labor
                      costs, while CAD improves the quality and standards of
                      products and reduces the cost of production. Another
                      example of the use of technology in improving productivity
                      and output is the use of database systems to store data
                      and information. Many businesses store their data and
                      other information in database systems that make
                      accessibility of information fast, easy, and reliable.
                      Technology has changed how international business is
                      conducted. With the advent of e-commerce, businesses
                      became able to trade through the Internet on the
                      international market. This means that there is a large
                      market for products and services. In addition, it implies
                      that most markets are open 24 hours a day. For example,
                      customers can shop for books or music on Amazon.com at any
                      time of the day. E-commerce has given businesses the
                      opportunity to expand and operate internationally.
                      Countries such as China and Brazil are taking advantage of
                      opportunities presented by technology to grow their
                      economy.
                    </p>
                    <h3>Negative Effects of Technology </h3>
                    <p align="justify">
                      Technology is inevitable and even critical to our daily
                      lives today and plays a vital role in our mental and
                      physical existence in the world – it’s no longer “I think,
                      therefore I am” but is “I digitize, therefore I am”. While
                      technology offers a new and unlimited medium for
                      information and knowledge to our children and a
                      border-free means of communication, the negative effects
                      of technology cannot be overstated. Let’s see some of the
                      most common dangers of technology use on the physical and
                      mental health, education and social life of children and
                      teenagers.
                    </p>
                    <h3>Physical effects </h3>
                    <p align="justify">
                      The negative impacts of technology on the physical health
                      of youngsters is probably the most easily quantifiable of
                      all the negatives of technology. The most commonly touted
                      health effect of technology use has been metabolic
                      diseases caused by sedentary lifestyles fostered by
                      technology use. Sitting with a digital device not only
                      reduces the amount of physical movement required to stay
                      healthy, but also induces snacking more, all of which
                      leads among many illnesses, to obesity. Constant sitting
                      also leads to back and neck problems, which have now been
                      exacerbated by bending into the handheld device all the
                      time, leading to an entirely new disease – Text Neck.
                      Tendonitis in the thumb caused by repeated use of thumbs
                      to push buttons on devices or playing too many games and
                      Carpel Tunnel syndrome are other physical problems that
                      are caused by overuse of the wrist and fingers to type on
                      different devices. Constant staring at the screen could
                      lead to chronic headaches and poor eyesight; the digital
                      vision syndrome is now a new set of ailments that is
                      becoming prevalent. Loud and incessant music in headphones
                      is likely to cause hearing loss and ringing in the ears.
                      Download Mobicip for free to start managing your child’s
                      screen time and keep them within healthy limits. Using
                      technology too close to bedtime interferes with sleep,
                      both through causing melatonin-seratonin imbalance and by
                      hyperactivating the thought process through sensory
                      overstimulation. Authors of a study found that blue light
                      emitted by various screens seriously disturb the body’s
                      natural circadian rhythm, which can lead to insomnia and
                      related mental fog.
                    </p>
                    <h3>Mental health</h3>
                    <p align="justify">
                      Technology addiction is a serious mental health problem
                      that is triggered by use/overuse of the digital tools, and
                      this can destroy the child’s health and social life, and
                      destroys social and family bonds. Chronic Smartphone
                      Stress is a newly discovered problem of digital usage,
                      wherein constant notifications and interactions with the
                      digital tools is establishing new stress-fear memory
                      pathways in the brain. The part of our brains that
                      normally deal with higher level thinking shuts down under
                      such flight-fight states and costs us brain power and
                      time. Depression and anxiety has been shown to be directly
                      linked with social network usage. Several systematic
                      reviews showed the link between social networks and
                      depression/anxiety. Children who overuse technology may be
                      more likely to experience mental health issues, including
                      lack of attention, low creativity, delays in language
                      development, delays in social and emotional development,
                      and addiction to these technologies. A study of teenagers
                      aged 15–16 found that those engaging in digital media for
                      longer times had an increased chance of developing
                      symptoms of attention-deficit hyperactivity disorder
                      (ADHD).
                    </p>
                    <h3>Social Health</h3>
                    <p align="justify">
                      Human beings are social animals and have over millennia,
                      lived in social groups. The social recluse has always been
                      an exception than the norm, until the advent of the
                      Internet and social media, originally intended to bring
                      people together, has physically isolated us from each
                      other. This appears especially true of the young
                      population. A 2017 study of young adults in the age group
                      of 19–32 years found that people with higher social media
                      use were more than three times as likely to feel socially
                      isolated than those who did not use social media as often.
                      “Social networking” is in reality “social isolation”. It
                      has been said that the overuse of technology is depriving
                      our children of social skills. Children prefer to chat on
                      online platforms rather than meet up with a friend in
                      person.. Replacement of real-life interaction with online
                      communication results in the loss in the ability to read
                      cues like facial expressions, body language and tone.
                    </p>
                    <h3>Education</h3>
                    <p align="justify">
                      While the unlimited amount of information available online
                      is apparently conducive to education, it has not really
                      advanced the cause of education to any great extent, it
                      seems. The ready availability of information has led to an
                      overuse of technology in the classNameroom which obviously
                      negatively affects the learning process. Apart from
                      fostering plagiarism and cheating in the classNameroom, the
                      overuse of technology and the Internet has adversely
                      affected powers of analysis and critical thinking. This is
                      not mere speculation and studies have shown that increased
                      engagement in entertainment technologies like games and
                      social media leads to poorer academic performance.
                    </p>
                    <h3>Safety</h3>
                    <p align="justify">
                      Misuse of technology can expose the child to a number of
                      risks. One in three teenagers are victims of
                      cyberbullying. Another risky teenage technology abuse is
                      sexting; 39% of teens admit to have sent sext messages,
                      and almost half of the teenagers have received digital
                      messages containing nudity. The ease of information access
                      has blurred the borders of privacy and personal
                      information can be used by hackers for nefarious purposes,
                      thus putting the child at risk.
                    </p>
                    <h3>Conclusion</h3>
                    <p align="justify">
                      Technology is a vital component of life in the modern
                      world. People are so dependent on technology that they
                      cannot live without it. Technology is important and useful
                      in all areas of human life today. It has made life easy
                      and comfortable by making communication faster and travel
                      faster, making movements between places easier, making
                      actions quick, and easing interactions. Technology is
                      useful in the following areas of life: transport,
                      communication, interaction, education, healthcare, and
                      business. Despite its benefits, technology has negative
                      impacts on society. Technology has eased communication and
                      transport. The discovery of the telephone and the later
                      invention of the mobile phone changed the face of
                      communication entirely. People in different geographical
                      regions can communicate easily and in record time. In the
                      field of health care, technology has made significant
                      contributions in disease prevention and health promotion.
                      The development of vaccines has eradicated certain
                      diseases, and the use of the Internet is vital in
                      promoting health and health care. The government uses
                      technology to enhance the delivery of services to citizens
                      and the improvement of defense and security. In the
                      education sector, teaching and learning processes have
                      undergone significant changes owing to the impact of
                      technology. Teachers are able to relate to different types
                      of learners, and the learners have access to various
                      resources and learning materials. Businesses benefit from
                      technology through the reduction of costs and increased
                      efficiency of business operations. Despite the benefits,
                      technology has certain disadvantages. It has negatively
                      affected human interactions and socialization and has led
                      to widespread unemployment. In addition, its application
                      in the healthcare sector has elicited controversies due to
                      certain medical practices such as stem cell research and
                      gene therapy. Technology is very important and has made
                      life easier and more comfortable than it was in the past.
                    </p>
                    <br />
                    <br />
                    Intern Vaishnavi bhakne
                    <br />
                    <br />
                    (Mern Stack Developer)
                  </div>

                  {/* <!-- End post content --> */}

                  {/* <!-- <div className="meta-bottom">
                  <i className="bi bi-folder"></i>
                  <ul className="cats">
                    <li><a href="#">Business</a></li>
                  </ul>

                  <i className="bi bi-tags"></i>
                  <ul className="tags">
                    <li><a href="#">Creative</a></li>
                    <li><a href="#">Tips</a></li>
                    <li><a href="#">Marketing</a></li>
                  </ul>
                </div> --> */}

                  {/* <!-- End meta bottom --> */}
                </article>
              </div>
            </section>

            {/* {/* <!-- /Blog Details Section --> */}

            {/* <!-- Blog Comments Section --> */}
            <section id="blog-comments" className="blog-comments section" />

            <div className="container">
              <div id="comment-1" className="comment">
                <div className="d-flex">
                  <div></div>
                </div>
              </div>
            </div>

            {/* <!-- Comment Form Section --> */}
            <section id="comment-form" className="comment-form section">
              <div className="container">
                <PostComment></PostComment>
              </div>
            </section>

            {/* <!-- Comment Form Section --> */}
          </div>

          <div className="col-lg-4 sidebar">
            <div className="widgets-container">
              {/* <!-- Recent Posts Widget --> */}
              <div className="recent-posts-widget widget-item">
                {/*  */}

                <RecentPosts></RecentPosts>
              </div>

             

              {/* <!-- Tags Widget --> */}
              <div className="tags-widget widget-item"></div>

              {/* <!--/Tags Widget --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Effectoftechnologyondailylife;
