import React from 'react'
import './home.css'

import { cardDetails } from "../../carousel-config";

import Testmonials from '../../components/testmonials/Testmonials'
import promotionalVideo from '../../assets/promotionaVideo.mp4'
import channelImg1 from '../../assets/channels.png'
import channelImg2 from '../../assets/channels2.png'
import CarouselItem from '../../components/carousel/CarouselItem'
import service3 from '../../assets/service3.webp'
import bookACall from '../../assets/bookACall.png'
import AI1 from '../../assets/undraw_01.png'
import AI2 from '../../assets/undraw_02.png'
import markTem from '../../assets/marktem.png'
import robo1 from '../../assets/robo1.jpg'

import bgImg from '../../assets/bg-gray-3.png'

const Home = () => {
  return (
    <section className='home-container'>
      
      <div className='hero-main-home'>
        <h1>AI-Powered Content Tailored to Each Online Marketplace</h1>
        <p>ListButler will become the source of truth to streamline your e-commerce with AI-driven listing optimization and one-click publishing across major platforms.</p>
      </div>
      <div className='robo-home robo-left'><img src={robo1} alt="" /></div>
      <div className='robo-home robo-right'><img src={robo1} alt="" /></div>
      <div className="video-container-home">
        <video src={promotionalVideo} width="100%" height="100%" autoPlay muted loop/>
      </div>
      <div className="hero-home-container">
        <div className="hero-home-left">
          <img src={channelImg1} alt="allchannels" className='hero-img' />
        </div>
        <div className='hero-border-line'></div>
        <div className="hero-home-right">
          <h1 className='hero-section-heading'>One-Click
          Ecommerce Powerhouse</h1>
          <p className='hero-section-text'>World's first dashboard for AI-powered SEO listings & images, simplifying one-click publishing to all major e-commerce channels.</p>
        </div>
      </div>
      <div className="hero-home-container">
        <div className="hero-home-left">
          <h1 className='hero-section-heading'>Your eCom
          Co-Pilot</h1>
          <p className='hero-section-text'>Along with AI-powered solutions for content & images, You will have access to Winston, your eCom co-pilot that is trained on best practices for each marketplace. No more guesswork, Winston & our in-house eCom experts are here to guide you to prosper online.</p>
        </div>
        <div className='hero-border-line'></div>
        <div className="hero-home-right">
          <img src={markTem} alt="Services" className='hero-img' />
        </div>
      </div>
      <div className="hero-home-container">
        <div className="hero-home-left">
          <img src={AI2} alt="allchannels" className='hero-img service3-img' />
        </div>
        <div className='hero-border-line'></div>
        <div className="hero-home-right">
          <h1 className='hero-section-heading'>One-Click
          Ecommerce Powerhouse</h1>
          <p className='hero-section-text'>World's first dashboard for AI-powered SEO listings & images, simplifying one-click publishing to all major e-commerce channels.</p>
        </div>
      </div>
      <div className="hero-home-container">
        <div className="hero-home-left">
          <h1 className='hero-section-heading'>Our AI Writer</h1>
          <p className='hero-section-text'>Write content for most of the marketplaces just with the clicks. Our AI is ready to help you create best SEO for your ecommerce listings.</p>
        </div>
        <div className='hero-border-line'></div>
        <div className="hero-home-right">
          <img src={AI1} alt="Services" className='hero-img' />
        </div>
      </div>

      <div className="trustedBy-container-home">
        <h1>Grow your business</h1>
        <p>Today is the day to build the business of your dreams. Share your mission with the world - and blow your customers away.</p>
        <div className="book-a-call">
          <img src={bookACall} alt="bookACall" />  <span>Book a call</span>
        </div>

        <div className="trustedBy-people">
          <div className="carousel-container">
            
            <div className="carousel-track">
              
              {Object.keys(cardDetails).map((detailKey,index) => {
                return (
                  <CarouselItem
                  key={index}
                    imgUrl={cardDetails[detailKey].imgUrl}
                    imgTitle={cardDetails[detailKey].title}
                  ></CarouselItem>
                );
              })}
              {Object.keys(cardDetails).map((detailKey) => {
                return (
                  <CarouselItem
                    imgUrl={cardDetails[detailKey].imgUrl}
                    imgTitle={cardDetails[detailKey].title}
                  ></CarouselItem>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='testimonial-home-container'>

      <Testmonials />
      </div>
    </section>
  )
}

export default Home
