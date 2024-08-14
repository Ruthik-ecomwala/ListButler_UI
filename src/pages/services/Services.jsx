import React from 'react'

import './services.css'

import productDescription from '../../assets/services/product_description.png'
import seo from '../../assets/services/SEO.png'
import listing from '../../assets/services/listing.png'
import bulletPoints from '../../assets/services/bullet-points.png'
import content from '../../assets/services/content.png'
import dataSource from '../../assets/services/data-source.png'

const Services = () => {
  return (
    <section className='services-container'>
      <h1>Our Services</h1>
      <div className="services-list">
        <div className="service">
          <img src={productDescription} alt="" />
          <h2>Product descriptions</h2>
          <p>Our AI E-commerce Product Description Generator takes the guesswork out of content creation, ensuring each description is not only unique but also tailored to enhance your product's visibility on search engines. This innovative tool is your key to effortlessly creating SEO-optimized, engaging product descriptions that captivate your audience and drive conversions.</p>
        </div>
        <div className="service">
          <img src={seo} alt="" />
          <h2>SEO-optimized content</h2>
          <p>Elevate your online store's visibility and drive organic traffic. From Saas SEO tools to B2B SEO solutions, we offer a comprehensive suite that ensures your store stays ahead in the digital landscape. Experience the power of automation with our seamlessly integrated, automatically generated content feature, saving you time and effort while keeping your site fresh and engaging.</p>
        </div>
        <div className="service">
          <img src={listing} alt="" />
          <h2>Listings</h2>
          <p>Revolutionize your e-commerce product listings with our top-notch services! Our expert E-commerce Product Listing Services ensure that your products stand out in the crowded digital marketplace. Leverage the power of our Listing Description Generator, powered by AI, to create compelling and keyword-rich descriptions that captivate potential customers.</p>
        </div>
        <div className="service">
          <img src={bulletPoints} alt="" />
          <h2>Bullet-points</h2>
          <p>Craft compelling and informative Amazon Bullet Points effortlessly, maximizing your product's visibility and desirability. Our tool ensures that you make the most of the Amazon Bullet Points character limit, providing concise yet impactful information about your product's key features.</p>
        </div>
        <div className="service">
          <img src={content} alt="" />
          <h2>Content Generation</h2>
          <p>Our E-commerce Content Writing AI tool is specialized in creating compelling, SEO-optimized content to elevate your online presence. Unlock the true potential of your existing content with our Content Improver tool, designed to enhance readability, engagement, and conversion rates.</p>
        </div>
        <div className="service">
          <img src={dataSource} alt="" />
          <h2>Data Sourcing</h2>
          <p>With our E-commerce Data Sourcing solutions, empower your business with the valuable information needed to make informed, data-driven decisions and thrive in the competitive e-commerce landscape. Whether you need product information, market trends, or customer behavior insights, our expert team ensures that you have access to the most relevant and up-to-date data.</p>
        </div>
      </div>
      
    </section>
  )
}

export default Services
