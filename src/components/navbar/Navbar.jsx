import React, { useState } from 'react'
import './navbar.css'
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from "react-icons/rx";
import logo1 from '../../assets/Logo-01.jpg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <header className='header-nav'>
        <nav>
            <div className="logo">
                <img src={logo1} alt="logo" />
            </div>
            <ul className={isOpen ? "nav-link active" : "nav-link"} >
                <li>
                    <a href="/" className='active'>Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/blogs">Blogs</a>
                </li>
                <li>
                    <a href="/contact">Contact Us</a>
                </li>
            </ul>
            <div className="icon" onClick={toggleMenu}>
               {
                isOpen ? <RxCross2 /> : <FaBars/>
               } 
            </div>
        </nav>
    </header>
  )
}

export default Navbar
