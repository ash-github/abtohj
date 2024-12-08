import React, { useState } from "react";
import "./Gallery.css";
import { Helmet } from 'react-helmet';

function DigitalMarketing() {
  // Define titles for each image
  const [activeTab, setActiveTab] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  // Image categories with titles
  const imageCategories = {
    all: [
      { src: "images/certificates/c1.webp", title: "JCOM Achievement" },
      { src: "images/certificates/cc9.png", title: "BIZ IX" },
      { src: "images/certificates/cc8.png", title: "BIZ IX" },
      { src: "images/certificates/c1.jpeg", title: "Speech Craft" },

      { src: "images/certificates/c2.jpeg", title: "Effective Public Speaking" },
      { src: "images/certificates/c3.jpeg", title: "AOS 2024" },
      { src: "images/certificates/cc5.jpeg", title: "Microsoft Certified" },
      { src: "images/certificates/c4.jpeg", title: "Speech Craft" },


      { src: "images/certificates/cc6.jpeg", title: "Microsoft Certified" },
      { src: "images/certificates/cc7.jpeg", title: "Job Training Certificate" },
      { src: "images/certificates/cc13.jpeg", title: "CAPP" },
      { src: "images/certificates/cc12.jpeg", title: "Seminar" },

      // { src: "images/certificates/cc12.jpeg", title: "Certificate 3" },
    
    ],
    certificate: [

      { src: "images/certificates/c1.webp", title: "JCOM Achievement" },
      { src: "images/certificates/cc9.png", title: "BIZ IX" },
      { src: "images/certificates/cc8.png", title: "BIZ IX" },
      { src: "images/certificates/c1.jpeg", title: "Speech Craft" },

      { src: "images/certificates/c2.jpeg", title: "Effective Public Speaking" },
      { src: "images/certificates/c3.jpeg", title: "AOS 2024" },
      { src: "images/certificates/cc5.jpeg", title: "Microsoft Certified" },
      { src: "images/certificates/c4.jpeg", title: "Speech Craft" },


      { src: "images/certificates/cc6.jpeg", title: "Microsoft Certified" },
      { src: "images/certificates/cc7.jpeg", title: "Job Training Certificate" },
      { src: "images/certificates/cc13.jpeg", title: "CAPP" },
      { src: "images/certificates/cc12.jpeg", title: "Seminar" },

      // { src: "images/certificates/cc12.jpeg", title: "Certificate 3" },


      { src: "images2/industrialvisit/18.webp", title: "Kamla Nehru Collage 2024" },
      { src: "images2/industrialvisit/19.webp", title: "Kamla Nehru Collage 2024" },
      { src: "images2/industrialvisit/1.webp", title: "Ambedkar Collage Industrial Visit 2023" },
      { src: "images2/industrialvisit/7.webp", title: "Kamla Nehru Collage Industrial Visit 2023" },
      { src: "images2/industrialvisit/8.webp", title: "Kamla Nehru Collage Industrial Visit 2023" },
      { src: "images2/industrialvisit/9.webp", title: "Kamla Nehru Collage Industrial Visit 2023" },
      { src: "images2/industrialvisit/10.webp", title: "SFS Collage Industrial Visit" },
      { src: "images2/industrialvisit/11.webp", title: "SFS Collage Industrial Visit" },
      { src: "images2/industrialvisit/13.webp", title: "SFS Collage Industrial Visit" },
      { src: "images2/industrialvisit/16.webp", title: "JD Collge seminar 2024" },
      { src: "images2/industrialvisit/3.webp", title: "JD Collge seminar 2024" },
      // { src: "images2/industrialvisit/3.webp", title: "JD Collge seminar 2023" },
      { src: "images2/industrialvisit/5.webp", title: "JD Collge seminar 2023" },
      // { src: "images2/industrialvisit/5.webp", title: "JD Collge seminar 2023" },


    
     
    ],
    visit: [
      { src: "images2/industrialvisit/18.webp", title: "Kamla Nehru Collage 2024" },
      { src: "images2/industrialvisit/19.webp", title: "Kamla Nehru Collage 2024" },
      { src: "images2/industrialvisit/1.webp", title: "Ambedkar Collage Industrial Visit 2023" },
      { src: "images2/industrialvisit/7.webp", title: "Kamla Nehru Collage Industrial Visit 2023" },
      { src: "images2/industrialvisit/8.webp", title: "Kamla Nehru Collage Industrial Visit 2023" },
      { src: "images2/industrialvisit/9.webp", title: "Kamla Nehru Collage Industrial Visit 2023" },
      { src: "images2/industrialvisit/10.webp", title: "SFS Collage Industrial Visit" },
      { src: "images2/industrialvisit/11.webp", title: "SFS Collage Industrial Visit" },
      { src: "images2/industrialvisit/13.webp", title: "SFS Collage Industrial Visit" },
      { src: "images2/industrialvisit/16.webp", title: "JD Collge seminar 2024" },
      { src: "images2/industrialvisit/3.webp", title: "JD Collge seminar 2024" },
      // { src: "images2/industrialvisit/3.webp", title: "JD Collge seminar 2023" },
      { src: "images2/industrialvisit/5.webp", title: "JD Collge seminar 2023" },
      // { src: "images2/industrialvisit/5.webp", title: "JD Collge seminar 2023" },
    ],
    seminar: [
      // { src: "images/certificates/c4.webp", title: "Seminar 1" },
      { src: "images2/industrialvisit/16.webp", title: "JD Collge seminar 2024" },
      // { src: "images2/industrialvisit/3.webp", title: "JD Collge seminar 2024" },
      // { src: "images2/industrialvisit/3.webp", title: "JD Collge seminar 2023" },
      { src: "images2/industrialvisit/5.webp", title: "JD Collge seminar 2023" },
      // { src: "images2/industrialvisit/5.webp", title: "JD Collge seminar 2023" },
    ],
    event: [
      // { src: "images/event/27.png", title: " 26-05-2024 Toys & Clothes donation camp Successfully Done By JCI Nagpur Central" },
     
      
     
      { src: "images2/industrialvisit/21.webp", title: " 13-05-2024 Got Invitation From Dr. Ambedkar institute of management studies & research Nagpur For On Job Training (OJT) Viva Voce of M.C.M Department as an External examiner & *MOU Signed* For Students Career growth & Development Between Dr.Ambedkar institute of Management Studies & Research, College Deekshabhoomi Nagpur & PSK Technologies Pvt. Ltd. IT Company Nagpur Maharashtra" },

      { src: "images/event/26.png", title: " CAPP Training Successfully Done @ Naivedhyam Eastoria Nagpur Hosted By JCI Nagpur Metro !" },
      { src: "images/event/25.png", title: "JCI Nagpur Central LGB Meeting Done Successfully ! JCI Nagpur Central Most active Member Mr.Datta Survase Birthday Celebration With team !" },

      { src: "images/event/24.png", title: "Nagpur JCOM TABLE 2.0 In association with *JCI Nagpur Central & JCI Nagpur Shikhar & JCI Nagpur Vibrant MULTI LO BUSINESS MEET & TRADE FAIR" },

      { src: "images/event/23.png", title: "26,27,28 April 2024 JCI Speech Craft 2024" },

      { src: "images/event/21.png", title: "JCOM Business Meeting" },

      { src: "images2/industrialvisit/29.webp", title: " Shivani Tai Dani General secretary BJYM (Maharashtra ) of Did conversation with PSK Technologies Pvt Ltd IT company Employees & Interns for Voting in Upcoming lok sabha Election 2024 . !" },
      { src: "images/event/01.webp", title: "  AOS Successfully Done @ Hotel Gunj & Resort Tumsar Organise By JCI Tumsar Kube 2024" },
    
      { src: "images/event/03.jpg", title: " Efective Public speaking Training Successfully Done By JCI Nagpur Central @ PSK Technologies Pvt Ltd IT Company Nagpur.2024" },
      { src: "images/event/04.jpg", title: " Efective Public speaking Training Successfully Done By JCI Nagpur Central @ PSK Technologies Pvt Ltd IT Company Nagpur.2024" },  
    

      { src: "images/event/05.jpg", title: " JCI Nagpur Central Orientation Seminar Done Successfully @ PSK Technologies Pvt Ltd IT Company Nagpur ! 2024" },
      { src: "images/event/06.jpg", title: " JCI Nagpur Central Orientation Seminar Done Successfully @ PSK Technologies Pvt Ltd IT Company Nagpur !2024" },

      { src: "images/event/08.jpg", title: " Day 2 JCI LO Officer's Training Seminar Done successfully 2024" },

      { src: "images/event/09.jpg", title: "    Day 1 JCI LO Officer's Training Seminar Done successfully 2024" },

      
    { src: "images/event/15.jpg", title: "Be leader ! Make Leaders ! Empower people JCI Nagpur Central 2024" },

    { src: "images/event/16.jpg", title: " Be leader ! Make Leaders ! Empower people JCI Nagpur Central 2024" },

    { src: "images/event/17.jpg", title: "J JCI Nagpur Central association with PSK Technologies Pvt Ltd IT company Organised Training Session on Communication SkillsCOM Business Meeting" },

    { src: "images/event/18.jpg", title: "  JCI Nagpur Central association with PSK Technologies Pvt Ltd  IT company Organised Training Session on Communication Skills" },
    { src: "images/event/21.png", title: "JCOM Business Meeting" },
  
  ],
  celebration: [
    // { src: "images/certificates/c4.webp", title: "Seminar 1" },
    { src: "images/celebration/18.png", title: "9th Wedding Anniversary Celebration" },
    // { src: "images2/industrialvisit/3.webp", title: "JD Collge seminar 2024" },
    // { src: "images2/industrialvisit/3.webp", title: "JD Collge seminar 2023" },
    { src: "images/celebration/1.jpg", title: "Sanjana Kashimkar Birthday Celebration 2024" },
    // { src: "images2/industrialvisit/5.webp", title: "JD Collge seminar 2023" },
    { src: "images/celebration/2.jpg", title: "13th anniversary & New Year Celebration 2024" },
    { src: "images/celebration/3.jpg", title: "13th anniversary & New Year Celebration 2024" },
    { src: "images/celebration/5.jpg", title: "Khushi's Birthday celebration 2024" },


    { src: "images/celebration/6.jpg", title: "Makarsankranti Celebration 2024" },
    { src: "images/celebration/7.jpg", title: "Republic Day Celebration 2024" },

    { src: "images/celebration/9.jpg", title: "Women's Day Celebration 2024" },

    { src: "images/celebration/11.jpg", title: "Shardul Gosawi Birthday Celebration 2024" },

    { src: "images/celebration/12.jpg", title: "Tanushri & Ayushie Birthday celebration 2024" },

    { src: "images/celebration/13.jpg", title: "Shubhangi Tijare Birthday celebration 2024" },

    { src: "images/celebration/14.jpg", title: "Tejas & Balwesh Birthday Celebration" },

    { src: "images/event/30.png", title: "Independence Celebratipn 2023" },
    { src: "images/event/31.png", title: "Teacher's day & Birthday Celebration 2023" },
    { src: "images/event/33.png", title: "Intern Birthday Celebration 2023" },
    { src: "images/event/32.png", title: "JCI Nagpur Central 2023" },
      { src: "images/event/34.png", title: "JCI Nagpur Central 2023" },
      { src: "images/event/35.png", title: "Birthday Celebration 2023" },
      { src: "images/event/36.png", title: "Interns Got Job After Completing Training with Live Internship @PSK Technologies" },


      // { src: "images/event/35.png", title: "Birthday Celebration 2023" },



  ],

  };

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const openModal = (image, title) => {
    setCurrentImage(image);
    setCurrentTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage("");
    setCurrentTitle("");
  };

  return (
    <div>


<Helmet>
        <title>Our Gallery-PSK Technologies Pvt. Ltd. - IT Company in Nagpur</title>
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



      {/* Header */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5">
          <h3 className="text-white display-3 mb-4">Our Gallery</h3>
          <ol className="breadcrumb justify-content-center text-white mb-0">
            <li className="breadcrumb-item">
              <a href="index.html" className="text-white">Home</a>
            </li>
            <li className="breadcrumb-item active text-secondary">Gallery</li>
          </ol>
        </div>
      </div>

      {/* Tabs */}
      <div className="menu-list-back">
        <div className="menulist">
          <h5 onClick={() => handleTabClick("all")}>All</h5>
          <h5 onClick={() => handleTabClick("certificate")}>Certificate</h5>
          <h5 onClick={() => handleTabClick("visit")}>Industrial Visit</h5>
          <h5 onClick={() => handleTabClick("seminar")}>Collage Seminar</h5>
          <h5 onClick={() => handleTabClick("event")}>Event</h5>
          <h5 onClick={() => handleTabClick("celebration")}>Celebration</h5>
        </div>
      </div>

      {/* Gallery */}
      <div className="container certificate-home">
        <div className="certificate">
          <h1>All Images</h1>
          <p>
            Explore captivating moments in a visual symphony with our immersive image gallery.
          </p>
        </div>

        <div className="row">
          {/* Render images based on the active tab */}
          {imageCategories[activeTab].map((image, index) => (
            <div key={index} className="col-lg-4 cert">
              <div className="items">
                <img
                  className="gallery-image"
                  src={image.src}
                  alt={image.title}
                  onClick={() => openModal(image.src, image.title)}
                />
                <div className="image-title">{image.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for zoomed-in image */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={currentImage} alt={currentTitle} className="zoomed-image" />
            <div className="modal-title">{currentTitle}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DigitalMarketing;
