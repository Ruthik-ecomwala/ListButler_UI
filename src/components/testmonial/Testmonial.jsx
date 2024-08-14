import React from 'react'
import './testmonial.css'


const Testmonial = ({data: props}) => {
    const {imageUrl , brandLogo, text, name, brandName} = props

  return (
    <div className='testmonial-container'>

        <img src={imageUrl} alt="testmonial profile" className='testmonial-image' /> 

        <div className="testmonial-right">
            <p className='testmonial-text'>{text}</p>
            <div className='testmonials-logos'>
                <img src={brandLogo} alt=""  className='testimonial-brand-logo'/>
                <div>
                    <p className='testmonial-name'> -  {name}</p>
                    <p className='testimonial-brand-name'>{brandName}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testmonial
