import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import sku from '../../assets/Icons/SKU.png'
import channels from '../../assets/Icons/Channels.png'
import seo from '../../assets/Icons/SEO.png'
import image from '../../assets/Icons/Images.png'
import dashboard from '../../assets/Icons/Dashboard.png'
import socialPublisher from '../../assets/Icons/Social Media.gif'
import brand from '../../assets/Icons/Brand.jpg'
import { FaInfinity } from "react-icons/fa6";

import './pricing.css'

const Pricing = () => {

  const [monthlyPlan, setMonthlyPlan] = useState(true)
  
  const monthlyPlans = [
    {
      id:1,
      price: 99,
      stripeLink : '',
    },
    {
      id:2,
      price: 199,
      stripeLink : '',
    },
    {
      id:3,
      price: 499,
      stripeLink : '',
    },
  ];

  const yearlyPlans = [
    {
      id:1,
      price: 79,
      stripeLink : '',
    },
    {
      id:2,
      price: 159,
      stripeLink : '',
    },
    {
      id:3,
      price: 399,
      stripeLink : '',
    },
  ]

  const handleToggle = () => {
    setMonthlyPlan(!monthlyPlan);
  };

  const plansToDisplay = monthlyPlan ? monthlyPlans : yearlyPlans;
  const planDurationText = monthlyPlan ? 'Per Month' : 'Per Year';

  return (
    <section className='pricing-outer-container'>
      <div className="pricing-text-container">
        <h3>Success at Every Price</h3>
        <h1>Our Pricing & Plans</h1>
        <p>Affordable AI-Generated Product Images and Product Listings Flexible Monthly and Yearly Subscription</p>
      </div>
      <div className="pricing-container">
        <div className="pricing-plans-buttons">
          <div className={`pricing-plans-label ${monthlyPlan ? 'plan-active' : ''}`}>Monthly plans</div>
          <div>
            <input type="checkbox" name="checkbox" id="checkbox" onChange={handleToggle} />
            <label for="checkbox" class="label"> </label>
          </div>
          <div className={`pricing-plans-label ${!monthlyPlan ? 'plan-active' : ''}`}>Yearly plans</div>
        </div>
        <div className="pricing-plans">
          {
             plansToDisplay.map((item,index)=>{
              return (
                  <div className="pricing-plan" key={index}>
                    <div className="pricing-plan-header">
                      <h1>Brand</h1>
                      <p>$ {item.price} <span>/ {planDurationText}</span></p>
                      
                    </div>
                    <ul className='plan-services'>
                      <li>
                        <img src={sku} alt="" />
                        <span>10 SKUs</span>
                      </li>
                      <li>
                        <img src={channels} alt="" />
                        <span>10 Channels</span>
                      </li>
                      <li>
                        <img src={seo} alt="" />
                        <span>SEO Builder</span>
                      </li>
                      <li>
                        <img src={image} alt="" />
                        <span>Image Builder</span>
                      </li>
                      <li>
                        <img src={dashboard} alt="" />
                        <span>Order Dashboard</span>
                      </li>
                      <li>
                        <img src={socialPublisher} alt="" />
                        <span>Social Publisher</span>
                      </li>
                      <li>
                        <img src={brand} alt="" />
                        <span>1 Brand</span>
                      </li>
                    </ul>
                    <div className="plan-link">
                      <Link to={item.stripeLink}>Start Free Trail</Link>
                    </div>
                  </div>
              )
            })
          }
          

          <div className="pricing-plan">
            <div className="pricing-plan-header">
              <h1>Conceirge</h1>
              <div className='conceirge-text'>
                <FaInfinity className='infinite-icon'  />
                <p>Contact Us For A Custom Quote</p>
              </div>
            </div>
            <ul className='plan-services'>
              <li>
                <img src={sku} alt="" />
                <span>10 SKUs</span>
              </li>
              <li>
                <img src={channels} alt="" />
                <span>10 Channels</span>
              </li>
              <li>
                <img src={seo} alt="" />
                <span>SEO Builder</span>
              </li>
              <li>
                <img src={image} alt="" />
                <span>Image Builder</span>
              </li>
              <li>
                <img src={dashboard} alt="" />
                <span>Order Dashboard</span>
              </li>
              <li>
                <img src={socialPublisher} alt="" />
                <span>Social Publisher</span>
              </li>
              <li>
                <img src={brand} alt="" />
                <span>1 Brand</span>
              </li>
            </ul>
            <div className="plan-link">
              <Link>Start Free Trail</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
