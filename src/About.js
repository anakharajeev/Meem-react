import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>



        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">

                <Link className="logo" to="/">
                    <img src="img/logo.png" alt="logo"/>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar"><i className="fas fa-bars"></i></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto valign">
                        <li className="nav-item">
                           <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                       
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">
                                <button className="btn-curve btn-lit">
                                    <span>Contact Us</span>
                                </button>
                            </a>
                        </li>
                    </ul>
                
                </div>
            </div>
        </nav>


        <header className="pages-header bg-img valign parallaxie"  style={{ backgroundImage: 'url(../img/slide/inner.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cont text-center">
                            <h1>About Us</h1>
                            <div className="path">
                                <a href="index.html">Home</a><span>/</span><a href="about.html" className="active">About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>




        <div className="main-content about-page">

        
            <div className="about section-padding">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <img src="img/about/about-main-2.png" alt=""/>
                        </div>
                        <div className="col-lg-6 valign">
                            <div className="content-inner">
                                <div className="sub-title">
                                    <h6>About Us</h6>
                                    <span></span>               
                                </div>
                                <h3 className="main-title wow" data-splitting>Who <span className="clr-main">we are</span></h3>
                                <p className="wow txt">MEEM is a Saudi Arabian Company that provides Oil & Gas 
                                    Equipment Rentals for Drilling and Production Activities. Our 
                                    equipment is offered  on rental, lease or direct sales bases along 
                                    with a full range of spares and accessories. <br/>
                                    Apart from being a 100% Saudi Company (which is an 
                                    IKTVA advantage), we were established to support the 
                                    industry with a business model that allows our customers to 
                                    reduce their Capex burden. We Specialize in Sand 
                                    Management & Expendable clean up and flow back systems 
                                    enabling our customers to tackle their variable market needs 
                                    using OPEX budget rather than Capex. Our Well Testing 
                                    Equipment is built to the highest industry standards "API6a, 
                                    API16c, DNV 2.7- 1, ASME VIII DIV2" designed to enhance 
                                    operability. <br/>
                                    In accordance with In-Kingdom Total Value Add (IKTVA) 
                                    program, MEEM emboldens the evolution of a viable, cost- 
                                    effective, industry-focused and globally competitive and 
                                    efficient services offered by the best experienced engineers in 
                                    the field.
                                </p>
                            
                                
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>

            <div className="mv-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-20">
                            <div className="sub-title">
                                <h6>Mission & Vision</h6>
                                <span></span>               
                            </div>
                            <h3 className="main-title wow" data-splitting>Our <span className="clr-main">Mission & Vision</span></h3>
                        </div>
                        <div className="col-md-6">
                            <div className="mv-image">
                                <img src="img/about/abt-inner.png" alt="" className="mv-img1"/>
                                <img src="img/about/circle.png" alt="" className="mv-img2"/>
                            </div>

                        </div>
                        <div className="col-md-6 valign">
                            <div className="vm-content">
                                <div className="mission-vision">
                                    <h3 className="wow" data-splitting>Our <span className="clr-main">Mission</span></h3>
                                    <p>To become one of the first 100% Saudi service provider to support
                                        the Oil & Gas service industry in the Kingdom.</p>
                                </div>
                                <div className="mission-vision mb-0">
                                    <h3 className="wow" data-splitting>Our <span className="clr-main">Vision</span></h3>
                                    <p>With a dedicated team of highly technical and service minded team, 
                                        we at MEEM offer our customers a comprehensive fleet of rental 
                                        equipment and services for use in a harsh natural environment. 
                                        MEEM offers the offshore and onshore industry excellent surface 
                                        equipment for well test and well clean-up operations.</p>
                                </div>
                            </div>
                        
                        </div>

                    
                    </div>
                </div>
            </div>
            <div className="meem-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 meem-box">
                            <h2>M</h2>
                            <div className="meem-content">
                                <h3 className="wow" data-splitting>Maximizing</h3>
                                <h5 className="wow" data-splitting>Customers benefits</h5>
                            </div>
                        </div>
                        <div className="col-md-3 meem-box">
                            <h2>E</h2>
                            <div className="meem-content">
                                <h3 className="wow" data-splitting>Embrace</h3>
                                <h5>Safety as a way of life</h5>
                            </div>
                        </div>
                        <div className="col-md-3 meem-box">
                            <h2>E</h2>
                            <div className="meem-content">
                                <h3 className="wow" data-splitting>Empower</h3>
                                <h5>Our employees</h5>
                            </div>
                        </div>
                        <div className="col-md-3 meem-box">
                            <h2>M</h2>
                            <div className="meem-content">
                                <h3 className="wow" data-splitting>Master</h3>
                                <h5 className="wow" data-splitting>Everything we do</h5>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>

            <div className="business-section service-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content">
                                <div className="sub-title">
                                    <h6>Meem business models</h6>
                                    <span></span>               
                                </div>
                                <h3 className="main-title wow" data-splitting>Business <span className="clr-main">Models</span></h3>
                                <p>At MEEM, we adopt a multifaceted approach to our business models, ensuring we meet the diverse needs of our clients in the oil and gas sector. Our strategic business models are designed to provide flexibility, reliability, and efficiency. They include:</p>
                                <div className="row">
                                    <div className="business-area">
                                        <div className="row d-flex align-items-center flex-column flex-md-row">
                                            <div className="col-lg-1">
                                                <h5>01</h5>
                                            </div>
                                            <div className="col-lg-3">
                                                <h2>Drilling Accessories</h2>
                                            </div>
                                    
                                            <div className="col-lg-8">
                                                <p>We supply a comprehensive range of high-quality drilling accessories, essential for efficient and effective drilling operations. Our accessories are designed to meet the rigorous demands of the oil and gas industry, ensuring optimum performance and durability.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="business-area">
                                        <div className="row d-flex align-items-center flex-column flex-md-row">
                                            <div className="col-lg-1">
                                                <h5>02</h5>
                                            </div>
                                            <div className="col-lg-3">
                                                <h2>Equipment Lease to Own</h2>
                                            </div>
                                        
                                            <div className="col-lg-8">
                                                <p>Our lease-to-own model provides clients with a flexible and cost-effective solution to acquire essential equipment. It offers the advantage of utilizing the equipment immediately with the option to purchase at the end of the lease term, optimizing financial flexibility.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="business-area">
                                        <div className="row d-flex align-items-center flex-column flex-md-row">
                                            <div className="col-lg-1">
                                                <h5>03</h5>
                                            </div>
                                            <div className="col-lg-3">
                                                <h2>Equipment Maintenance</h2>
                                            </div>
                                
                                            <div className="col-lg-8">
                                                <p>Our expert team provides exceptional equipment maintenance services, ensuring the longevity and optimal functionality of your equipment. We emphasize preventive maintenance and timely repairs, minimizing downtime and maintaining operational efficiency.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="business-area">
                                        <div className="row d-flex align-items-center flex-column flex-md-row">
                                            <div className="col-lg-1">
                                                <h5>04</h5>
                                            </div>
                                            <div className="col-lg-3">
                                                <h2>Equipment Redesign & Engineering</h2>
                                            </div>
                                    
                                            <div className="col-lg-8">
                                                <p>We offer innovative equipment redesign and engineering solutions, optimizing the performance and reliability of equipment. Our experienced engineers utilize advanced technologies and methodologies to enhance equipment functionality and meet specific client requirements.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="business-area">
                                        <div className="row d-flex align-items-center flex-column flex-md-row">
                                            <div className="col-lg-1">
                                                <h5>05</h5>
                                            </div>
                                            <div className="col-lg-3">
                                                <h2>Equipment Lease</h2>
                                            </div>
                                    
                                            <div className="col-lg-8">
                                                <p>MEEM offers flexible equipment leasing options, allowing clients to access top-quality equipment without the financial burden of purchasing. Our leasing solutions are tailored to meet individual client needs, ensuring availability and operational readiness of equipment when needed.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="business-area">
                                        <div className="row d-flex align-items-center flex-column flex-md-row">
                                            <div className="col-lg-1">
                                                <h5>06</h5>
                                            </div>
                                            <div className="col-lg-3">
                                                <h2>Equipment Sales</h2>
                                            </div>
                                        
                                            <div className="col-lg-8">
                                                <p>We provide a variety of equipment for direct purchase, meeting the diverse needs of our clients. Our equipment is manufactured to the highest industry standards, ensuring reliability, durability, and optimal performance.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="business-area border-b0">
                                        <div className="row d-flex align-items-center flex-column flex-md-row">
                                            <div className="col-lg-1">
                                                <h5>07</h5>
                                            </div>
                                            <div className="col-lg-3">
                                                <h2>Spare Parts Sale</h2>
                                            </div>
                                    
                                            <div className="col-lg-8">
                                                <p>MEEM supplies a wide range of spare parts and accessories, ensuring the continuous and seamless operation of your equipment. Our spare parts are of the highest quality, designed to meet the exacting standards of the oil and gas industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 custm-soltn">
                                        <h4>Customized Business Solutions</h4>
                                        <p>Our diverse business models are customizable, allowing us to provide solutions that are precisely aligned with our clients’ operational and financial requirements. At MEEM, we are dedicated to exceeding client expectations through our innovative and flexible business solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    

                    </div>
                </div>
            </div>

            <div className="founder-section section-padding">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-5">
                            <img src="img/about/co-founder.png" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-lg-7 valign">
                            <div className="founder-div">
                                <div className="sub-title">
                                    <h6>Board of Director</h6>
                                    <span></span>               
                                </div>
                                <h3 className="main-title wow" data-splitting>Our <span className="clr-main">Founder</span></h3>
                                <div className="col-md-12 founder-details">
                                    <p>MEEM was founded in 2020 with a business idea: "To be the best local leader in 
                                        well-testing service providing and manufacturing in the MENA region" <br/>
                                        Since 2011, Mr. Thobaiti is a shareholder/owner as well as the Deputy Managing 
                                        Director of Takamul Project Management Co. <br/>
                                        Mr. Thobaiti has more than Seventeen (17) years proven track record of 
                                        performance success, planning, coordination, supervision of construction process 
                                        and service support at Petro-chemical companies such as Saudi Aramco Total 
                                        Refinery and Petrochemical (SATOROP). <br/>
                                        He is specialized in project management, planning, designing and maintenance 
                                        engineering. Additionally, he is a member of the Project Management Institute, 
                                        Institute of Transportation Engineers, Saudi Society for Technology Development 
                                        and Transfer, Saudi Council of Engineers, Architects Int'l Group of the Middle East 
                                        and the American Institute of Architects.</p>
                                        <div className="founder-img">
                                        
                                            <div className="founder-name">
                                                <h4>Majid Al-Thobaiti</h4>
                                                <h6>Founder</h6>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            
                        </div>
                    
                    </div>
                </div>
            </div>


            <footer>
                <div className="container">
                    <div className="newsletter">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Join our newsletter</h4>
                                <p>We'll send you a nice letter once per week.no spam</p>
                            </div>
                            <div className="col-md-6">
                                <form>
                                    <div className="form-group custom-font">
                                        <input type="email" name="subscribe" placeholder="Your Email"/>
                                        <button className="cursor-pointer">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-img">
                                <img src="img/logo.png" alt=""/>
                                <h6><a href="/">King Abdulaziz Road, 10th Street Cross, Madinat Al Ummal</a></h6>
                                <h6><a href="mailto:yasser.elabd@meem-ksa.com">yasser.elabd@meem-ksa.com</a></h6>
                                <h6><a href="tel:966556709270">+966556709270</a></h6>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="quick-links">
                                <div className="row">
                                    <h4>Links</h4>
                                    <div className="col-md-6">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="client.html">Clients & Partners</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul>
                                            <li><a href="service.html">Services</a></li>
                                            <li><a href="product.html">Products</a></li>
                                            <li><a href="contact.html">Contact Us </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="container bottom-footer">
                    <div className="row">
                        <div className="col-md-6">
                            <a href="/" className="copyright">COPYRIGHTS © 2023. ALL RIGHTS RESERVED BY MEEM</a>
                        </div>
                        <div className="col-md-6">
                            <div className="social">
                                <a href="/" className="icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="/" className="icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="/" className="icon">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="/" className="icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>



    </div>
  );
};

export default About;