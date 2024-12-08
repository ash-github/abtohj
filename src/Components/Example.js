import React from 'react'

function DigitalMarketing() {
  return (
    <div>
    


    <div>
        {/* <!-- Header Start --> */}
        <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{maxWidth:" 900px"}}>
                <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Digital Marketing</h3>
                <ol className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
                    {/* <!-- <li className="breadcrumb-item"><a href="#" className="text-white">Pages</a></li> --> */}
                    <li className="breadcrumb-item active text-secondary">Digital Marketing</li>
                </ol>    
            </div>
        </div>
        {/* <!-- Header End --> */}




{/* <!-- digital Start --> */}
        <div className="container-fluid bg-light py-5">
            <div className="container py-5 text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.3s">
                        {/* <!-- <h1 className="display-1">Do You Know Digital Marketing?</h1> --> */}
                        <h1><b>Do You Know Digital Marketing?</b></h1>
                        <p>Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and other websites to connect with current and prospective customers.</p>
                        
                    </div>
                </div>
            </div>
        </div>



        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-xl-1"></div>
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                        {/* <!-- <div className="bg-light rounded"> --> */}
                            <img src="img/digital.png" className="img-fluid w-100" style={{marginBottom: "-7px;" }}alt="Image"/>
                            {/* <!-- <img src="img/about-3.jpg" className="img-fluid w-100 border-bottom border-5 border-primary" style="border-top-right-radius: 300px; border-top-left-radius: 300px;" alt="Image"> --> */}
                        {/* <!-- </div> --> */}
                    </div>
                    <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.3s">
                        {/* <!-- <br/><br/><br/><br/> --> */}
                         <br className="br1"/><br className="br1"/><br className="br1"/>
                        <p className="mb-4" align="justify"><b>This is the process of optimizing your website to “rank” higher in search engine like google, Bing, yahoo etc. Results pages, thereby increasing the amount of organic (or free) traffic your website receives. The channels that benefit from SEO include websites, blogs, and info graphics. There are a number of ways to approach SEO in order to generate qualified traffic to your website.</b></p>
                        
                    </div>
                    <div className="col-xl-1"></div>
                </div>
            </div>
        </div>



        <div className="container-fluid bg-light py-5">
            <div className="container py-5 text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.3s">
                        <h1><b>Choose Your Prefect Starter Plan</b></h1>
                        {/* <!-- <i className="bi bi-exclamation-triangle display-1 text-secondary"></i> --> */}
                        <a className="btn btn-primary rounded-pill py-3 px-5" href="#">Download Plan</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- digital End --> */}
    </div>


    </div>
  )
}

export default DigitalMarketing
