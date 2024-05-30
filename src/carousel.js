import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Item } from './components/Item';

const settings = {
  autoplay: true,          
  autoplaySpeed: 5000,     
  infinite: true,           
  speed: 500,              
  slidesToShow: 1,          
  slidesToScroll: 1,        
  margin: 0,               
  arrows: true,             
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const settings1 = {
  autoplay: true,          
  autoplaySpeed: 5000,     
  infinite: true,           
  speed: 500,              
  slidesToShow: 3,          
  slidesToScroll: 1,        
  margin: 10,               
  arrows: true,             
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const settings2 = {
  autoplay: true,          
  autoplaySpeed: 5000,     
  infinite: true,           
  speed: 500,              
  slidesToShow: 4,          
  slidesToScroll: 1,        
  margin: 10,               
  arrows: true,             
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};


const BannerCarousel = () => {
  return (
    <div className="sliderx text-center">
    
        <Slider {...settings}>
          <div className="item">
            <div className="swiper-slide">
              <div className="bg-img valign" style={{ backgroundImage: 'url(../img/slide/1.jpg)' }}>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="caption center">
                        <h1>Welcome to modern energy for 
                              <br/> equipments maintenance</h1>
                        <p>Energy is essential to improving the lives of people across the globe. 
                            As one of Canada's largest independent midstream businesses, 
                            we are connecting energy for life.</p>
                        <a href="about.html"><button  className="btn-curve btn-lit">
                            <span>Learn More</span>
                        </button></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="swiper-slide">
              <div className="bg-img valign" style={{ backgroundImage: 'url(../img/slide/2.jpg)' }}>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="caption center">
                        <h1>Welcome to modern energy for 
                              <br/> equipments maintenance</h1>
                        <p>Energy is essential to improving the lives of people across the globe. 
                            As one of Canada's largest independent midstream businesses, 
                            we are connecting energy for life.</p>
                        <a href="about.html"><button  className="btn-curve btn-lit">
                            <span>Learn More</span>
                        </button></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
     
    </div>
  );
};


const ServiceCarousel = () => {
  return (
    <div className="service-carousel">
      <Slider {...settings1}>
        <Item 
        heading='Electromechanical Projects'
        details='Our electromechanical services stand as a testament to our commitment to innovation and excellence. We undertake comprehensive electromechanical projects, integrating mechanical and electrical components seamlessly, ensuring optimum functionality and reliability. We focus on delivering solutions that are efficient, sustainable, and tailored to meet the unique requirements of the oil and gas sector.'
        backgroundImage='../img/service/3.jpg'
        />
          <Item 
        heading='Equipment Design'
        details='Our expertise in equipment design is unrivaled. We engineer cutting-edge equipment solutions that are robust, reliable, and tailored to meet the specific needs of our clients. We emphasize precision and innovation, developing equipment that not only meets the rigorous demands of the industry but also enhances operational efficiency and productivity.'
        backgroundImage='../img/service/2.jpg'
        />
          <Item 
        heading='Engineering'
        details='MEEM prides itself on offering expert engineering services. Our seasoned team of engineers is dedicated to providing industry-focused, globally competitive, and cost-effective solutions. Leveraging advanced engineering principles, we address the unique challenges of the oil and gas industry, ensuring our clients receive the highest levels of service quality and satisfaction.'
        backgroundImage='../img/service/1.jpg'
        />
       
      </Slider>
    </div>
  );
};

const ProductCarousel = () => {
  return (
    <div className="product-carousel">
        <Slider {...settings2}>
            <div className="item">
                <div className="service-box"  style= {{backgroundImage: 'url(img/product/1.jpg)',}}>
                    <div className="product-content">
                        <h4>Oil and Gas Rentals</h4>
                        <p>We provide a broad spectrum of rental equipment, ideal for drilling and production activities. Our rental solutions are flexible, cost-effective, and designed to reduce the Capex burden of our clients, allowing them to operate with efficiency and reliability.</p>
                        <a href="oil-gas.html"><div className="pro-arrow">
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8567 1.20969C15.8429 0.797336 15.4975 0.47423 15.0851 0.488009L8.36551 0.712544C7.95316 0.726322 7.63005 1.07177 7.64383 1.48412C7.65761 1.89647 8.00306 2.21958 8.41541 2.2058L14.3884 2.00621L14.588 7.97922C14.6018 8.39157 14.9472 8.71468 15.3596 8.7009C15.7719 8.68712 16.095 8.34167 16.0813 7.92932L15.8567 1.20969ZM1.36883 17.0196L15.6557 1.74494L14.5645 0.724332L0.277657 15.999L1.36883 17.0196Z"/>
                            </svg>
                                
                        </div></a>
                    </div>
                </div>
            
            </div>
            <div className="item">
                <div className="service-box" style= {{backgroundImage: 'url(img/product/2.jpg)',}}>
                    <div className="product-content">
                        <h4>Slickline</h4>
                        <p>We offer the highest standard of customer service, with technical support both before and after sales. We offer operating, assembly, and disassembly instructions for a wide array of our wireline and slickline assemblies.</p>
                        <a href="slickline.html"><div className="pro-arrow">
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8567 1.20969C15.8429 0.797336 15.4975 0.47423 15.0851 0.488009L8.36551 0.712544C7.95316 0.726322 7.63005 1.07177 7.64383 1.48412C7.65761 1.89647 8.00306 2.21958 8.41541 2.2058L14.3884 2.00621L14.588 7.97922C14.6018 8.39157 14.9472 8.71468 15.3596 8.7009C15.7719 8.68712 16.095 8.34167 16.0813 7.92932L15.8567 1.20969ZM1.36883 17.0196L15.6557 1.74494L14.5645 0.724332L0.277657 15.999L1.36883 17.0196Z"/>
                            </svg>
                                
                        </div></a>
                    </div>
                </div>
            
            </div>
            <div className="item">
                <div className="service-box" style= {{backgroundImage: 'url(img/product/3.jpg)',}}>
                    <div className="product-content">
                        <h4>Steam Boilers</h4>
                        <p>Our advanced steam boilers are engineered to meet the stringent demands of the oil and gas sector. These boilers are robust, efficient, and designed to enhance operational performance, providing a continuous and reliable supply of steam for various applications.</p>
                        <a href="steam-boilers.html"><div className="pro-arrow">
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8567 1.20969C15.8429 0.797336 15.4975 0.47423 15.0851 0.488009L8.36551 0.712544C7.95316 0.726322 7.63005 1.07177 7.64383 1.48412C7.65761 1.89647 8.00306 2.21958 8.41541 2.2058L14.3884 2.00621L14.588 7.97922C14.6018 8.39157 14.9472 8.71468 15.3596 8.7009C15.7719 8.68712 16.095 8.34167 16.0813 7.92932L15.8567 1.20969ZM1.36883 17.0196L15.6557 1.74494L14.5645 0.724332L0.277657 15.999L1.36883 17.0196Z"/>
                            </svg>
                                
                        </div></a>
                    </div>
                </div>
            
            </div>
            <div className="item">
                <div className="service-box" style= {{backgroundImage: 'url(img/product/3.jpg)',}}>
                    <div className="product-content">
                        <h4>Surface Well Testing</h4>
                        <p>We specialize in comprehensive surface well testing solutions, designed to ascertain reservoir productivity, fluid properties, and overall well performance. Our testing equipment is built to the highest industry standards, ensuring accurate and reliable results every time.</p>
                        <a href="surface.html"><div className="pro-arrow">
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8567 1.20969C15.8429 0.797336 15.4975 0.47423 15.0851 0.488009L8.36551 0.712544C7.95316 0.726322 7.63005 1.07177 7.64383 1.48412C7.65761 1.89647 8.00306 2.21958 8.41541 2.2058L14.3884 2.00621L14.588 7.97922C14.6018 8.39157 14.9472 8.71468 15.3596 8.7009C15.7719 8.68712 16.095 8.34167 16.0813 7.92932L15.8567 1.20969ZM1.36883 17.0196L15.6557 1.74494L14.5645 0.724332L0.277657 15.999L1.36883 17.0196Z"/>
                            </svg>
                                
                        </div></a>
                    </div>
                </div>
            
            </div>
        </Slider>
    </div>
  );
};

export {BannerCarousel, ServiceCarousel, ProductCarousel};