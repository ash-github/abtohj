import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Index from "./Components/Index";
import Contact from "./Components/Contact";
import Webdevelopment from "./Components/Webdevelopment";
import About from "./Components/About";
import DigitalMarketing from "./Components/DigitalMarketing";
import WebHosting from "./Components/WebHosting";
import SalesandServices from "./Components/SalesandServices";
import Internship from "./Components/Internship";
import PostComment from "./Blogs/PostComment";
import RecentPosts from "./Blogs/RecentPosts";
import Gallery from "./Components/Gallery";
import Blog from "./Components/Blog";


// blog
import Effectoftechnologyondailylife from "./Blogs/Effect of technology on daily life";
import Cybersecurity from "./Blogs/Cybersecurity";
import ScopeofArtificialIntelligence from "./Blogs/Scope of Artificial Intelligence";
import ContentMarketingAndSeo from "./Blogs/Content Marketing And Seo";
import MERNstackdeveloper from "./Blogs/MERNstackdeveloper";
import MERNStackDevelopmentonCloud from "./Blogs/MERN Stack Development on Cloud";
import ScopeofMernStackDeveloper from "./Blogs/Scope of Mern Stack Developer";
import PAYPERCLICKADVERTISMENT from "./Blogs/PAY PER CLICK ADVERTISMENT";
import AffiliateMarketing from "./Blogs/Affiliate Marketing";
import HowtoCrackInterviewofMultinationalCompanies from "./Blogs/How to Crack Interview of Multinational Companies";
import CanIGetajobaftertheinternship from "./Blogs/Can I Get a job after the internship";
import ImportanceofInterpersonalSkills from "./Blogs/Importance of Interpersonal Skills";
import WhatlanguageisuseforUIDesign from "./Blogs/What language is use for UI Design";
import WHYARESOFTSKILLSIMPORTANT from "./Blogs/WHY ARE SOFT SKILLS IMPORTANT";
import ImportanceOfBasicProgrammingLanguage from "./Blogs/Importance Of Basic Programming Language";
import ImportanceOfCommunicationSkills from "./Blogs/Importance Of Communication Skills";
import ImportanceOfSocialMediaMarketing from "./Blogs/Importance Of Social Media Marketing";
import IMPORTANCEOFTIMEMANAGEMENTFORSUCCESS from "./Blogs/IMPORTANCE OF TIME MANAGEMENT FOR SUCCESS";
import HOWTOBECOMEADEVELOPER from "./Blogs/HOW TO BECOME A DEVELOPER ";


// blog1
import Blog1 from "./Components/Blog1";
import BlogHeader from "./Blogs/BlogHeader";
import RollofLinuxinCloudComputing from "./Blogs/Roll of Linux in Cloud Computing";
import PHPFULLSTACKDEVELOPMENTONCLOUD from "./Blogs/PHP FULL STACK DEVELOPMENT ON CLOUD";
import ImportanceOfGraphicDesign from "./Blogs/Importance Of Graphic Design";
import ImportanceofTechnicalskillsandSoftskillsintheWorkplace from "./Blogs/Importance of Technical skills and Soft skills in the Workplace";
import BenefitsofOnPageSEO from "./Blogs/Benefits of On-Page SEO";
import ProfessionalFullstackDevelopmentWithCloudForWebandMobile from "./Blogs/Professional Fullstack Development With Cloud For Web and  Mobile";
import BenefitsofofPageSEO from "./Blogs/Benefits of of-Page SEO";
import WhatisInfographic from "./Blogs/What is Infographic";
import BenefitsofimagesharingsitesforoffpageSEO from "./Blogs/Benefits of image-sharing sites for off-page SEO";
import DifferencebetweenFacebookProfileandFacebookPage from "./Blogs/Difference between Facebook Profile and Facebook Page";
import MostImportantDigitalMarketingChannel from "./Blogs/Most Important Digital Marketing Channel";
import TheBenefitsOfDirectorySubmissionForSEO from "./Blogs/The Benefits Of Directory Submission For SEO";
import BenefitsofKeywordsinSEO from "./Blogs/Benefits of Keywords in SEO";
import Howtomakeacareerindigitalmarketing from "./Blogs/How to make a career in digital marketing";
import BaseKeywordresearchtools from "./Blogs/Base Keyword research tools";
import Thenecessityofwebhostingin2023 from "./Blogs/The necessity of web hosting in 2023";
import HowtoCreateaBusinessWebsite from "./Blogs/How to Create a Business Website";
import ImportanceofKeywords from "./Blogs/Importance of Keywords";
import Importanceoffacebooks from "./Blogs/Importance of facebooks";

// blog2
import Blog2 from "./Components/Blog2";
import TOPPROGRAMMINGLANGUAGETOBUILDWEBSITE from "./Blogs/TOP PROGRAMMING LANGUAGE TO BUILD WEBSITE";
import WhyIsFlyerImportanttogrowyourBusiness from "./Blogs/Why Is Flyer Important to grow your Business";
import ImportanceofSocialMediatogrowyourBusiness from "./Blogs/Importance of Social Media to grow your Business";
import ScopeofDigitalMarketing from "./Blogs/Scope of Digital Marketing";
import DiscountOnTrainingAndLiveInternship from "./Blogs/50 % Discount on Training & Live Internship";
import FeaturesAndBenefitsOfBootstrap4 from "./Blogs/Features and Benefits of Bootstrap 4";
import BestPracticesforEcommerce from "./Blogs/Best Practices for Ecommerce";
import eCommerceWorthyFeatures from "./Blogs/eCommerce Worthy Features";
import WhyWordPress from "./Blogs/Why WordPress";
import WAYSTOGROWYOURBUSINESS from "./Blogs/4 WAYS TO GROW YOUR BUSINESS";
import STRATEGYANDTACTICSTOIMPROVEDIGITALMARKETINGACTIVITY from "./Blogs/STRATEGY AND TACTICS TO IMPROVE DIGITAL MARKETING ACTIVITY";
import PostOnSocialMedia from "./Blogs/PostOnSocialMedia";
import ContentMarketing from "./Blogs/Content Marketing";
import TheValueofWebsiteContent from "./Blogs/The Value of Website Content";


// blog3

import ImportanceOfDigitalMarketing from "./Blogs/Importance Of Digital Marketing";
import FutureScopeofWebdevelopmen from "./Blogs/Future Scope of Web development";
import FutureScopeofWebdevelopment from "./Blogs/Future Scope of Web development";
import WebDevelopmentTraining from "./Blogs/Web Development Training";
import Blog3 from "./Components/Blog3";
import TOPBENEFITSOFECOMMERCEWEBSITE from "./Blogs/TOP BENEFITS OF ECOMMERCE WEBSITE";

import phpframeworkdeveloper2023 from "./Blogs/phpframeworkdeveloper2023";
import BlockchainTrainingInNagpur from "./Blogs/Blockchain Training In Nagpur";
import ApacheSparkTrainingInNagpur from "./Blogs/Apache Spark Training In Nagpur";
import ArtificialIntelligenceTrainingInNagpur from "./Blogs/Artificial Intelligence Training In Nagpur";
import rpataininginnagpur from "./Blogs/rpataininginnagpur";
import iottraininginnagpur from "./Blogs/iottraininginnagpur";
import iPhoneTrainingInNagpur from "./Blogs/iPhone Training In Nagpur";
import AndroidTrainingInNagpur from "./Blogs/Android Training In Nagpur";
import OracleTrainingInNagpur from "./Blogs/Oracle Training In Nagpur";
import StrutsTrainingInNagpur from "./Blogs/Struts Training In Nagpur";
import CNETTrainingInNagpur from "./Blogs/CNET Training In Nagpur";
import SeleniumTrainingInNagpur from "./Blogs/Selenium Training In Nagpur";
import HadoopTrainingInNagpur from "./Blogs/Hadoop Training In Nagpur";
import PythonTrainingInNagpur from "./Blogs/Python Training In Nagpur";
import DataScienceTrainingInNagpur from "./Blogs/Data Science Training In Nagpur";
import NodeJSTrainingInNagpur from "./Blogs/Nodejstraininginnagpur";
import ReactNativeTrainingInNagpur from "./Blogs/React Native Training In Nagpur";
import Angularjstraininginnagpur from "./Blogs/Angularjstraininginnagpur";
import Whyshouldmakecareerinadvancecomputerhardware from "./Blogs/Why should make career in advance computer hardware ";
import whatispositionofwordpressin2021 from "./Blogs/whatispositionofwordpressin2021";
import Top4CareerOptionInITField from "./Blogs/Top 4 Career Option In IT Field";
import EcommerceWebsite from "./Blogs/Ecommerce Website";
import cakephp from "./Blogs/cakephp";
import PHPFULLSTACKDEVELOPER from "./Blogs/PHP FULL STACK DEVELOPER";
import WhatIsDomainName from "./Blogs/What Is Domain Name";
import PHPFramework from "./Blogs/PHP Framework";
// import whatislaravel from "./Blogs/whatislaravel";
import WhatisCodeigniter from "./Blogs/What is Codeigniter";
import WhatIsWebHosting from "./Blogs/What Is Web Hosting";
import MachineLearningTrainingInNagpur from "./Blogs/Machine Learning Training In Nagpur";
import EnglishSpeakingTrainingInNagpur from "./Blogs/English Speaking Training In Nagpur";
import OnlineInternship from "./Blogs/Online Internship";
import PersonalityDevelopment from "./Blogs/Personality Development";
import ResumeWriting from "./Blogs/Resume Writing";
import InterviewTechnique from "./Blogs/Interview Technique";
import PHPonlineTrainingInNagpur from "./Blogs/PHP online Training In Nagpur";
import AdvanceHardwareOnlineTrainingInNagpur from "./Blogs/Advance Hardware Online Training In Nagpur";
import LinuxOnlineTrainingInNagpur from "./Blogs/Linux Online Training In Nagpur";
import HowtomakeacareerinWordPress2024 from "./Blogs/How to make a career in WordPress 2024";
import MCITPMCSEClassesInNagpur from "./Blogs/MCITPMCSEClassesInNagpur";
import BestITCompanyinNagpur from "./Blogs/Best IT Company in Nagpur";
import BestDigitalMarketingCompanyinNagpur from "./Blogs/Best Digital Marketing Company in Nagpur";
import SoftwareDevelopmentCompanyInNagpur from "./Blogs/software development company in Nagpur";
import WebDevelopmentCompanyInNagpur from "./Blogs/Web Development Company In Nagpur";
import CareerOpportunitiesforFreshersintheITSectorinNagpur from "./Blogs/Career Opportunities for Freshers in the IT Sector in Nagpur";
import Blog5 from "./Components/Blog5";
import Page from "./Components/Page";
import Gallery1 from "./Components/Gallery1";
import Example from "./Components/Example";
import ContactForm from "./Components/ContactForm";
import FetchContact from "./Components/FetchContact";
import ContactList from "./Components/ContactList";
import Carousel from "./Components/Carousel1";
import Carousel1 from "./Components/Carousel1";

// import blogpagination from "./Components/blogpagination";
// import HowToMakeACareer from "./Blogs/How to make a career";
// import MCITPMCSEOnlineTrainingInNagpur from "./Blogs/MCITP MCSE online Training In Nagpur";
// import CCNAOnlineTrainingInNagpur from "./Blogs/CCNA online Training In Nagpur";
// import HTMLCSSJavaScriptOnlineTrainingInNagpur from "./Blogs/HTML CSS JavaScript online Training In Nagpur";
// import  ConlineTrainingInNagpur from "./Blogs/ConlineTrainingInNagpur";
// import CLanguageonlineTrainingInNagpur from "./Blogs/C Language online Training In Nagpur";










function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/about" element={<About />} />

          <Route exact path="/webdevelopment" element={<Webdevelopment />} />
          <Route
            exact
            path="/digitalmarketing"
            element={<DigitalMarketing />}
          />
          <Route exact path="/webhosting" element={<WebHosting />} />
          <Route
            exact
            path="/salesandservices"
            element={<SalesandServices />}
          />
          <Route exact path="/internship" element={<Internship />} />
          <Route exact path="/gallery" element={<Gallery/>} />
          <Route exact path="/postcomments" element={<PostComment />} />
          <Route exact path="/recentpost" element={<RecentPosts />} />

          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog1" element={<Blog1 />} />
          <Route exact path="/blog2" element={<Blog2 />} />
          {/* <Route exact path="/blog4" element={<Blog4/>} /> */}
          <Route exact path="/blog5" element={<Blog5/>} />
          <Route
            exact
            path="/RollofLinuxinCloudComputing"
            element={<RollofLinuxinCloudComputing />}
          />
          <Route
            exact
            path="/php"
            element={<PHPFULLSTACKDEVELOPMENTONCLOUD />}
          />
          <Route
            exact
            path="/ImportanceOfGraphicDesign"
            element={<ImportanceOfGraphicDesign />}
          />
          <Route
            exact
            path="/ImportanceofTechnicalskillsandSoftskillsintheWorkplace"
            element={<ImportanceofTechnicalskillsandSoftskillsintheWorkplace />}
          />

          <Route
            exact
            path="/BenefitsofOnPageSEO"
            element={<BenefitsofOnPageSEO />}
          />

          <Route
            exact
            path="/ProfessionalFullstackDevelopmentWithCloudFo"
            element={
              <ProfessionalFullstackDevelopmentWithCloudForWebandMobile />
            }
          />

          <Route
            exact
            path="/BenefitsofofPageSEO"
            element={<BenefitsofofPageSEO />}
          />

          <Route
            exact
            path="/WhatisInfographic"
            element={<WhatisInfographic />}
          />

          <Route
            exact
            path="/BenefitsofimagesharingsitesforoffpageSEO"
            element={<BenefitsofimagesharingsitesforoffpageSEO />}
          />

          <Route
            exact
            path="/DifferencebetweenFacebookProfileandFacebookPage"
            element={<DifferencebetweenFacebookProfileandFacebookPage />}
          />

          <Route
            exact
            path="/MostImportantDigitalMarketingChannel"
            element={<MostImportantDigitalMarketingChannel />}
          />

          <Route
            exact
            path="/TheBenefitsOfDirectorySubmissionForSEO"
            element={<TheBenefitsOfDirectorySubmissionForSEO />}
          />

          <Route
            exact
            path="/BenefitsofKeywordsinSEO "
            element={<BenefitsofKeywordsinSEO />}
          />

          <Route
            exact
            path="/Howtomakeacareerindigitalmarketing "
            element={<Howtomakeacareerindigitalmarketing />}
          />

          <Route
            exact
            path="/BaseKeywordresearchtools"
            element={<BaseKeywordresearchtools />}
          />

          <Route
            exact
            path="/Thenecessityofwebhostingin2023"
            element={<Thenecessityofwebhostingin2023 />}
          />

          <Route
            exact
            path="/HowtoCreateaBusinessWebsite"
            element={<HowtoCreateaBusinessWebsite />}
          />

          <Route
            exact
            path="/ImportanceofKeywords"
            element={<ImportanceofKeywords />}
          />

          <Route
            exact
            path="/Importanceoffacebook"
            element={<Importanceoffacebooks />}
          />

          <Route
            exact
            path="/HOWTOBECOMEADEVELOPER"
            element={<HOWTOBECOMEADEVELOPER />}
          />

          {/* //blog3 */}


          <Route
            exact
            path="/blog3"
            element={<Blog3 />}
          />






          <Route
            exact
            path="/ImportanceOfDigitalMarketing"
            element={<ImportanceOfDigitalMarketing />}
          />

          <Route
            exact
            path="/FutureScopeofWebdevelopmen"
            element={<FutureScopeofWebdevelopment />}
          />

          <Route exact path="/blogheader" element={<BlogHeader />} />
          <Route
            exact
            path="/Effectoftechnologyondailylife"
            element={<Effectoftechnologyondailylife />}
          />
          <Route
            exact
            path="/The Crucial Importance of Cybersecurity in Today’s Digital Landscape"
            element={<Cybersecurity />}
          />
          <Route
            exact
            path="/ScopeofArtificialIntelligence"
            element={<ScopeofArtificialIntelligence />}
          />
          <Route
            exact
            path="/contentarketing"
            element={<ContentMarketingAndSeo />}
          />
          <Route
            exact
            path="/mernstackdeveloper"
            element={<MERNstackdeveloper />}
          />
          <Route
            exact
            path="/mernstackdeveloperoncloud"
            element={<MERNStackDevelopmentonCloud />}
          />

          <Route
            exact
            path="/scopeofmernstackdeveloper"
            element={<ScopeofMernStackDeveloper />}
          />
          <Route
            exact
            path="/payperclickadvertise"
            element={<PAYPERCLICKADVERTISMENT />}
          />
          <Route
            exact
            path="/affiliatemarketing"
            element={<AffiliateMarketing />}
          />
          <Route
            exact
            path="/howtocrackinterviewofmultinationalcompanies"
            element={<HowtoCrackInterviewofMultinationalCompanies />}
          />
          <Route
            exact
            path="/canigetjobaftertheinterview"
            element={<CanIGetajobaftertheinternship />}
          />
          <Route
            exact
            path="/importanceofinterpersonalskills"
            element={<ImportanceofInterpersonalSkills />}
          />
          <Route
            exact
            path="/whatlanguageisuseforuidesign"
            element={<WhatlanguageisuseforUIDesign />}
          />
          <Route
            exact
            path="/whyaresoftskillsimportant"
            element={<WHYARESOFTSKILLSIMPORTANT />}
          />
          <Route
            exact
            path="/importanceofbasicprogramminglangauge"
            element={<ImportanceOfBasicProgrammingLanguage />}
          />
          <Route
            exact
            path="/importanceofcommunicationskills"
            element={<ImportanceOfCommunicationSkills />}
          />
          <Route
            exact
            path="/importanceofSocialMediaMarketing"
            element={<ImportanceOfSocialMediaMarketing />}
          />
          <Route
            exact
            path="/importanceoftimemanagemetforsuccess"
            element={<IMPORTANCEOFTIMEMANAGEMENTFORSUCCESS />}
          />

          {/* blog2 */}
          <Route exact path="/blog2" element={<Blog2 />} />
          <Route
            exact
            path="/topprogramminglanguagetobuldwebsite"
            element={<TOPPROGRAMMINGLANGUAGETOBUILDWEBSITE />}
          />
          <Route
            exact
            path="/whyisflyerimportanttogrowyourbusiness"
            element={<WhyIsFlyerImportanttogrowyourBusiness />}
          />
          <Route
            exact
            path="/importanceofsocialmediatogrowyourbusiness"
            element={<ImportanceofSocialMediatogrowyourBusiness />}
          />
          <Route
            exact
            path="/scopeofdigitalmarketing"
            element={<ScopeofDigitalMarketing />}
          />
          <Route
            exact
            path="/50%DiscountOnTrainingAndLiveInternship"
            element={<DiscountOnTrainingAndLiveInternship />}
          />

          <Route
            exact
            path="/featuresandbenifitsofbootstrap4"
            element={<FeaturesAndBenefitsOfBootstrap4 />}
          />
          <Route
            exact
            path="/bestpracticesforecommerce"
            element={<BestPracticesforEcommerce />}
          />
          <Route
            exact
            path="/ecommerceWorthyFeatures"
            element={<eCommerceWorthyFeatures />}
          />
          <Route exact path="/whywordpress" element={<WhyWordPress />} />
          <Route exact path="/4waystogrowyourbusiness" element={<WAYSTOGROWYOURBUSINESS />} />
          <Route exact path="/strategyandtacticstoimprovedigitalmarketingactivity" element={<STRATEGYANDTACTICSTOIMPROVEDIGITALMARKETINGACTIVITY />} />
          <Route exact path="/postonsocialmedia" element={<PostOnSocialMedia/>}/>
          <Route exact path="/contentmarketing" element={<ContentMarketing/>}/>
          <Route exact path="/thevalueofwebsitecontent" element={<TheValueofWebsiteContent/>}/>
          
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/WebDevelopmentTraining" element={<WebDevelopmentTraining />} />

          <Route exact path="/TOPBENEFITSOFECOMMERCEWEBSITE" element={<TOPBENEFITSOFECOMMERCEWEBSITE/>} />
          <Route exact path="/phpframeworkdeveloper2023" element={<phpframeworkdeveloper2023/>} />
          <Route exact path="/BlockchainTrainingInNagpur" element={<BlockchainTrainingInNagpur/>} />
          <Route exact path="/ApacheSparkTrainingInNagpur" element={<ApacheSparkTrainingInNagpur/>} />
          <Route exact path="/ArtificialIntelligenceTrainingInNagpur" element={<ArtificialIntelligenceTrainingInNagpur/>} />
          <Route exact path="/ApacheSparkTrainingInNagpur" element={<ApacheSparkTrainingInNagpur/>} />
          <Route exact path="/rpataininginnagpur" element={<rpataininginnagpur/>} />
          <Route exact path="/iottraininginnagpur" element={<iottraininginnagpur/>} />
          <Route exact path="/iPhonetraininginnagpur" element={<iPhonetraininginnagpur/>} />
          <Route exact path="/AndroidTrainingInNagpu" element={<AndroidTrainingInNagpur/>} />
          <Route exact path="/OracleTrainingInNagpur" element={<OracleTrainingInNagpur/>} />
          <Route exact path="/StrutsTrainingInNagpu" element={<StrutsTrainingInNagpur/>} />
          <Route exact path="/CNETTrainingInNagpur" element={<CNETTrainingInNagpur/>} />
          <Route exact path="/SeleniumTrainingInNagpur" element={<SeleniumTrainingInNagpur/>} />
          <Route exact path="/HadoopTrainingInNagpu" element={<HadoopTrainingInNagpur/>} />
          <Route exact path="/PythonTrainingInNagpu" element={<PythonTrainingInNagpur/>} />
          <Route exact path="/DataScienceTrainingInNagpur" element={<DataScienceTrainingInNagpur/>} />
          <Route exact path="/NodeJSTrainingInNagpur" element={<NodeJSTrainingInNagpur/>} />
          <Route exact path="/ReactNativeTrainingInNagpur" element={<ReactNativeTrainingInNagpur/>} />
          <Route exact path="/Angularjstraininginnagpur" element={<Angularjstraininginnagpur/>} />
          <Route exact path="/Whyshouldmakecareerinadvancecomputerhardware" element={<Whyshouldmakecareerinadvancecomputerhardware/>} />
          <Route exact path="/whatispositionofwordpressin2021" element={<whatispositionofwordpressin2021/>} />

          <Route exact path="/Top4CareerOptionInITField" element={<Top4CareerOptionInITField/>} />


          
          <Route exact path="/EcommerceWebsite" element={<EcommerceWebsite/>} />
          <Route exact path="/cakephp" element={<cakephp/>} />
          <Route exact path="/PHPFULLSTACKDEVELOPER" element={<PHPFULLSTACKDEVELOPER/>} />
          <Route exact path="/WhatIsDomainName" element={<WhatIsDomainName/>} />
          <Route exact path="/PHPFramework" element={<PHPFramework/>} />
          {/* <Route exact path="/whatislaravel" element={<whatislaravel/>} /> */}
          <Route exact path="/WhatisCodeigniter" element={<WhatisCodeigniter/>} />
          <Route exact path="/WhatIsWebHosting" element={<WhatIsWebHosting/>} />
          <Route exact path="/MachineLearningTrainingInNagpur" element={<MachineLearningTrainingInNagpur/>} />

          <Route exact path="/EnglishSpeakingTrainingInNagpur" element={<EnglishSpeakingTrainingInNagpur/>} />


          <Route exact path="/EnglishSpeakingTrainingInNagpur" element={<DigitalMarketing/>} />
          <Route exact path="/DigitalMarketing" element={<DigitalMarketing/>}/>
          <Route exact path="/OnlineInternship" element={<OnlineInternship/>}/>
          <Route exact path="/PersonalityDevelopment" element={<PersonalityDevelopment/>}/>
          <Route exact path="/ResumeWriting" element={<ResumeWriting/>}/>
          <Route exact path="/InterviewTechniqu" element={<InterviewTechnique/>}/>
          {/* <Route exact path="/HowToMakeACareer" element={<HowToMakeACareer/>}/> */}
          {/* <Route exact path="/MCITPMCSEOnlineTrainingInNagpur" element={<MCITPMCSEOnlineTrainingInNagpur/>}/> */}
          {/* <Route exact path="/CCNAOnlineTrainingInNagpur" element={<CCNAOnlineTrainingInNagpur/>}/>
          <Route exact path="/HTMLCSSJavaScriptOnlineTrainingInNagpur" element={<HTMLCSSJavaScriptOnlineTrainingInNagpur/>}/>
  
          <Route exact path="/ConlineTrainingInNagpur" element={<ConlineTrainingInNagpur/>}/>
          <Route exact path="/CLanguageonlineTrainingInNagpur" element={<CLanguageonlineTrainingInNagpur/>}/> */}

<Route exact path="/PHPonlineTrainingInNagpur" element={<PHPonlineTrainingInNagpur/>}/>
<Route exact path="/AdvanceHardwareOnlineTrainingInNagpur" element={<AdvanceHardwareOnlineTrainingInNagpur/>}/>
<Route exact path="/LinuxOnlineTrainingInNagpur" element={<LinuxOnlineTrainingInNagpur/>}/>  
<Route exact path="/HowtomakeacareerinWordPress2024" element={<HowtomakeacareerinWordPress2024/>}/>   
<Route exact path="/MCITPMCSEClassesInNagpur" element={<MCITPMCSEClassesInNagpur/>}/>   
<Route exact path="/BestITCompanyinNagpur" element={<BestITCompanyinNagpur/>}/>  
<Route exact path="/BestDigitalMarketingCompanyinNagpur" element={<BestDigitalMarketingCompanyinNagpur/>}/> 
<Route exact path="/SoftwareDevelopmentCompanyInNagpur" element={<SoftwareDevelopmentCompanyInNagpur/>}/> 
<Route exact path="/WebDevelopmentCompanyInNagpur" element={<WebDevelopmentCompanyInNagpur/>}/>  
<Route exact path="/CareerOpportunitiesforFreshersintheITSectorinNagpur" element={<CareerOpportunitiesforFreshersintheITSectorinNagpur/>}/>  
<Route exact path="/Page" element={<Page/>}/> 
<Route exact path="/Gallery1" element={<Gallery1/>}/> 

<Route exact path="/Example" element={<Example/>}/> 

<Route exact path="/form" element={<ContactForm/>}/> 


<Route exact path="/Fetch" element={<FetchContact/>}/> 

<Route exact path="/list" element={<ContactList/>}/> 

<Route exact path="/Carousel" element={<Carousel1/>}/> 




         
        
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;












