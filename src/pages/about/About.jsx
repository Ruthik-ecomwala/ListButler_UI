import React from 'react'
import './about.css'

import aaron from '../../assets/Aaron.png'
import keith from '../../assets/Keith.png'
import Blogs from '../../components/blogs/Blogs'
import heartIcon from '../../assets/values/heart-icon.png'
import labourHard from '../../assets/values/LabourHard.png'
import learn from '../../assets/values/Learn.png'
import laugh from '../../assets/values/Laugh.png'
import linked from '../../assets/values/linked.png'
import vision from '../../assets/vision.png'
import mission from '../../assets/mission.png'
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='about-outer-container'>
      <header className='about-container-text'>
        <h1>About Us</h1>
        <h3>Our Founders</h3>
        <p>Meet our visionary founders, dedicated to innovating and guiding our collective success with passion and expertise.</p>
      </header>
      <div className="founders-container">

        <div className="card">
            <div className="profile-pic">
              <img src={aaron} alt="" />
            </div>
            <div className="bottom">
                <div className="content">
                    <span className="name">Aaron Hughes</span>
                    <span className="about-me">Aaron is 7-figure seller and knows first hand the struggles of trying to maintain content across various platforms. Aaron also runs a full-service eCom. agency of 70+ team members helping brands and agencies thrive on Amazon, Walmart & TikTok. </span>
                </div>
                <div className="bottom-bottom">

                <Link to="https://www.linkedin.com"><IoLogoLinkedin className='ln-icon' /></Link>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="profile-pic profile-pic-keith">
              <img src={keith} alt="" />
            </div>
            <div className="bottom">
                <div className="content">
                    <span className="name">Keith Brink</span>
                    <span className="about-me">Keith Brink, eCommerce SaaS entrepreneur, pioneered AZLabels for 8,000+ sellers and PrepBusiness for 200+ 3PLs, handling 74 million items shipped into Amazon FBA. His $100k/month success as an Amazon seller reflects deep marketplace insight. </span>
                </div>
                <div className="bottom-bottom">

                <Link to="https://www.linkedin.com"><IoLogoLinkedin className='ln-icon' /></Link>
                </div>
            </div>
        </div>


      </div>
      <div className="about-blogs-container">
        <Blogs />
      </div>

      <div className="visionAndMission">
      
        <div className="vision-text-container">
          <h1>Our Vision</h1>
          <p>Building a Solution that solves a unique problem for brand owners with a company culture of servant leaders.</p>
        </div>
        <div className="vision-img-container">
          <img src={vision} alt="" />
        </div>
      </div>
      <div className="visionAndMission">
        
       
        <div className="vision-text-container">
          <h1>Our Mission</h1>
          <p>Helping agencies, brands & aggregators optimize & manage listings in 1 place at scale across all marketplaces.</p>
        </div>
        <div className="vision-img-container">
          <img src={mission} alt="" />
        </div>
      </div>

    <div className="values">

      <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                {/* <p class="title">FLIP CARD</p> */}
                <img src={heartIcon} alt="" />
            </div>
            <div class="flip-card-back">
                <p class="title">Love</p>
            </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                {/* <p class="title">FLIP CARD</p> */}
                <img src={labourHard} alt="" />
            </div>
            <div class="flip-card-back">
                <p class="title">Labour Hard</p>
            </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                {/* <p class="title">FLIP CARD</p> */}
                <img src={learn} alt="" />
            </div>
            <div class="flip-card-back">
                <p class="title">Learn</p>
            </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                {/* <p class="title">FLIP CARD</p> */}
                <img src={laugh} alt="" />
            </div>
            <div class="flip-card-back">
                <p class="title">Laugh</p>
            </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                {/* <p class="title">FLIP CARD</p> */}
                <img src={linked} alt="" />
            </div>
            <div class="flip-card-back">
                <p class="title">Linked</p>
            </div>
        </div>
      </div>
    </div>

      <div className="about-bottom-text">
        <p>At ListButler AI, our commitment extends beyond providing powerful tools. We prioritize your success by offering a user-friendly experience coupled with unparalleled customer support. Here's why choosing ListButler is your key to content optimization excellence:</p>
        <p>Our tools are at the forefront of innovation, ensuring that you stay ahead in the ever-evolving digital landscape. From Amazon A+ Content optimization to paragraph extending, ListButler is synonymous with cutting-edge solutions.</p>
        <p>When it comes to Amazon A+ Content and imaging, ListButler AI stands as a trusted advisor. Leverage our expertise to enhance your product listings, captivate customers, and boost your sales on the world's largest online marketplace.</p>
        <p>ListButler AI presents a cutting-edge paragraph extender that extends your writing without affecting quality. Improve the length and complexity of your product descriptions, Listings, blogs, and articles by using a tool made to keep readers interested.</p>
        <p>Our data sourcing capabilities ensure that you make informed decisions backed by accurate and timely information. Rely on ListButler to streamline your data acquisition process and eliminate uncertainties from your strategies.</p>
        <p>Your satisfaction is our priority. ListButler provides dedicated customer support to assist you at every step. Have a question or need guidance? Our support team is ready to provide the assistance you require.</p>
        <p>Embark on a transformative journey with ListButler AI and experience content creation and optimization like never before. Whether you're a seasoned professional or just starting, our tools are designed to meet your needs. Your success is our mission, and at ListButler, we're dedicated to being the catalyst for your content optimization triumphs.</p>
        <p>Best <em>Product Information Management</em> and <em>Digital Asset Management</em> Software. Product information management (PIM) is essential for creating PDPs that win on category pages. Digital Asset Management (DAM) needs to have powerful tools and features for successful eCommerce use.</p>
      </div>
    </section>
  )
}

export default About
