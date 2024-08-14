import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Blogs from './components/blogs/Blogs';
import Contact from './pages/contact/Contact';
import Pricing from './pages/pricing/Pricing';
import TermsOfService from './pages/termsOfService/TermsOfService'
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy'
import Footer from './components/footer/Footer';
import "react-widgets/styles.css";

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='app'>

      
      <Routes >
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/services' element={ <Services /> } />
        <Route path='/blogs' element={ <Blogs /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/pricing' element={ <Pricing /> } />
        <Route path='/termsOfService' element={ <TermsOfService /> } />
        <Route path='/privacyPolicy' element={ <PrivacyPolicy /> } />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
