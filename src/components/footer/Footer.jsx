import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo-01.jpg'
import { FaLinkedin } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-inner-container">
            <div className="footer-items-container">
                <div className="footer-column footer-column-1">
                    <Link to="" className='footer-link'><img  src={logo} alt="" className='footer-logo' /></Link>
                    
                    <p>Arkansas, USA</p>
                    <p><Link to="" className='footer-link'>aaron@listbutler.ai</Link></p>
                    <FaLinkedin className='footer-ln-icon footer-link' />
                </div>
                <div className="footer-column">
                    <h1 className="footer-heading ">
                        <Link className='footer-heading-link footer-link'> Home</Link>
                    </h1>
                    <ul>
                        <li><Link to="" className='footer-link'>What we do?</Link></li>
                        <li><Link to="" className='footer-link'>Testimonials</Link></li>
                        <li><Link to="" className='footer-link'>FAQs</Link></li>
                        <li><Link to="" className='footer-link'>Contact Us</Link></li>
                        <li><Link to="" className='footer-link'>Login</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h1 className="footer-heading">
                        <Link className='footer-heading-link footer-link'> About</Link>
                    </h1>
                    <ul>
                        <li><Link to="" className='footer-link'>Our Founders</Link></li>
                        <li><Link to="" className='footer-link'>Our Vision</Link></li>
                        <li><Link to="" className='footer-link'>Our Mission</Link></li>
                        <li><Link to="" className='footer-link'>Our values</Link></li>
                        <li><Link to="" className='footer-link'>Our Blog</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h1 className="footer-heading">
                        <Link className='footer-heading-link footer-link'> Our Services</Link>
                    </h1>
                    <ul>
                        <li><Link to="" className='footer-link'>Product Listing</Link></li>
                        <li><Link to="" className='footer-link'>AI Product Images</Link></li>
                        <li><Link to="" className='footer-link'>Infographics</Link></li>
                        <li><Link to="" className='footer-link'>Lifestyle Images</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h1 className="footer-heading">
                        <Link className='footer-heading-link footer-link'>Pricing Plans</Link>
                    </h1>
                    <ul>
                        <li><Link to="" className='footer-link'>Brand</Link></li>
                        <li><Link to="" className='footer-link'>Brand +</Link></li>
                        <li><Link to="" className='footer-link'>Agency</Link></li>
                        <li><Link to="" className='footer-link'>Concierge</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <h1><Link to="/termsOfService" className='footer-link'>Terms of Service</Link></h1>
                <Link to="/"><p>2024 © Copyright <span>listbutler.ai</span>. All Rights Reserved</p></Link>
                <h1><Link to="/privacyPolicy" className='footer-link'>Privacy Policy</Link></h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer
