import React from 'react';
import { Link } from 'react-router-dom';
import { BannerCarousel, ServiceCarousel, ProductCarousel } from './carousel';

const Home = () => {
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

      <BannerCarousel/>


      <div className="main-content">

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
          <div className="about section-padding">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 valign">
                          <div className="content">
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
                                  the field.</p>
                              <a href="about.html"><button className="btn-curve btn-lit readmore-btn wow">
                                  <span>Read More</span>
                              </button></a>
                              
                          </div>
                      </div>
                      <div className="col-lg-4 about-img">
                        <img src="img/about/abt-img.png" alt=""/>
                      </div>

                  </div>
              </div>
          </div>

          <div className="mv-section section-padding">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
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
                      <div className="col-md-6">
                        <div className="mv-img"></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="service-section section-padding">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="content">
                              <div className="sub-title">
                                  <h6>What we do </h6>
                                  <span></span>               
                              </div>
                              <h3 className="main-title wow" data-splitting>Our <span className="clr-main">Services</span></h3>
                              
                              <ServiceCarousel />
                          </div>
                      </div>
                    

                  </div>
              </div>
          </div>

          <div className="service-section product-section section-padding">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="content">
                              <div className="sub-title">
                                  <h6>Products</h6>
                                  <span></span>               
                              </div>
                              <h3 className="main-title wow" data-splitting>Our <span className="clr-main">products</span></h3>
                              
                              <ProductCarousel />
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
                              
                              <div className="row">
                                  <div className="col-md-5">
                                      <div className="service-box" style= {{backgroundImage: 'url(img/business/1.jpg)',}}>
                                          <div className="service-content">
                                    
                                              <h2>Drilling accessories</h2>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-7">
                                      <div className="row">
                                          <div className="col-md-6">
                                              <div className="service-box" style= {{backgroundImage: 'url(img/business/2.jpg)',}}>
                                                  <div className="service-content">
                                                      <h2>Equipment Lease to own</h2>
                                                    
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div className="service-box" style= {{backgroundImage: 'url(img/business/3.jpg)',}}>
                                                  <div className="service-content">
                                                      <h2>Equipment Maintenance</h2>
                                                    
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="row">
                                          <div className="col-md-3">
                                              <div className="service-box" style= {{backgroundImage: 'url(img/business/5.jpg)',}}>
                                                  <div className="service-content">
                                                      <h2>Equipment Redesign / Engineering</h2>
                                                    
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-md-3">
                                              <div className="service-box" style= {{backgroundImage: 'url(img/business/6.jpg)',}}>
                                                  <div className="service-content">
                                                      <h2>Equipment lease</h2>
                                                    
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-md-3">
                                              <div className="service-box" style= {{backgroundImage: 'url(img/business/8.jpg)',}}>
                                                  <div className="service-content">
                                                      <h2>Equipment Sales</h2>
                                                    
                                                  </div>
                                              </div>
                                          </div>
                                    
                                          <div className="col-md-3">
                                              <div className="service-box" style= {{backgroundImage: 'url(img/business/7.jpg)',}}>
                                                  <div className="service-content">
                                                      <h2>Spare parts sales</h2>
                                                    
                                                  </div>
                                              </div>
                                          </div>
                                        
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
                              <h6><a href="index.html">King Abdulaziz Road, 10th Street Cross, Madinat Al Ummal</a></h6>
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
                          <a href="index.html" className="copyright">COPYRIGHTS © 2023. ALL RIGHTS RESERVED BY MEEM</a>
                      </div>
                      <div className="col-md-6">
                          <div className="social">
                              <a href="index.html" className="icon">
                                  <i className="fab fa-facebook-f"></i>
                              </a>
                              <a href="index.html" className="icon">
                                  <i className="fab fa-twitter"></i>
                              </a>
                              <a href="index.html" className="icon">
                                  <i className="fab fa-instagram"></i>
                              </a>
                              <a href="index.html" className="icon">
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

export default Home;