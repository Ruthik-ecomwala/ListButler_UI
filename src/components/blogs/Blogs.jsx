import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './blogs.css'

import blog1 from '../../assets/blog/blog-01.jpg'
import blog2 from '../../assets/blog/blog-02.jpg'
import blog3 from '../../assets/blog/blog-03.jpg'
import blog4 from '../../assets/blog/blog-04.jpg'
import blog5 from '../../assets/blog/blog-05.jpg'
import blog6 from '../../assets/blog/blog-06.jpg'

const Blogs = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
  return (
    <div className="slider-container">
        <Slider {...settings}>
          <div className="blog-slide">
              <img src={blog1} alt="" />
              <h3>Unveiling the Power of Amazon GPT-44X: A Breakthrough in AI Technology</h3>
          </div>
          <div className="blog-slide">
              <img src={blog2} alt="" />
              <h3>Do Your Brands Actually Need A Virtual Assistant For Amazon Seller Central?</h3>
          </div>
          <div className="blog-slide">
              <img src={blog3} alt="" />
              <h3>Create Stunning Product Images Without Any Design Skills for any ecommerce platform</h3>
          </div>
          <div className="blog-slide">
              <img src={blog4} alt="" />
              <h3>7 of the Best Examples of Beautiful Blog Design</h3>
          </div>
          <div className="blog-slide">
              <img src={blog5} alt="" />
              <h3>5 Principles Of Effective Web Design</h3>
          </div>
          <div className="blog-slide">
              <img src={blog6} alt="" />
              <h3>14 Common Problems with modern Web Design</h3>
          </div>
         
        </Slider>
    </div>
  )
}

export default Blogs
