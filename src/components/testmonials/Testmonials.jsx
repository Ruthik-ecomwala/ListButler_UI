import React from 'react'
import Slider from "react-slick";
import './testmonials.css'

import testmonial1 from '../../assets/testmonials/Scott Harned.jpeg'
import testmonial2 from '../../assets/testmonials/Vince.jpeg'
import testmonial3 from '../../assets/testmonials/Scott.jpeg'
import brandLogo1 from '../../assets/testmonials/Harvest Amazon Builder - Black.png'
import brandLogo2 from '../../assets/testmonials/Artboard 3.png'
import brandLogo3 from '../../assets/testmonials/My_Perfect_Goatee_Company_Logo.png'
import Testmonial from '../testmonial/Testmonial';

const data = [
  
  {
    id: 1,
    imageUrl : testmonial1,
    brandLogo: brandLogo1,
    text: '“I sell on 5 different marketplaces and making sure all my content lines up for each one can be a real pain.. ListButler is solving a huge bandwidth problem for me and giving me 10 hours a week back!”',
    name: 'Scott Harned',
    brandName: 'Harvest AMZ Owner'
  },
  {
    id: 2,
    imageUrl : testmonial2,
    brandLogo: brandLogo2,
    text: '“I have over 1,000 SKUs and you can imagine how time consuming it is to make sure listings have all the content they should or monitoring which content hasn’t synced to the platforms. LB helps me manage that effectively and I leverage their full-service model to go a step further too, they do great work & is hands off for me.”',
    name: 'Vince',
    brandName: 'Paracord Store Owner'
  },
  {
    id: 3,
    imageUrl : testmonial3,
    brandLogo: brandLogo3,
    text: '“I sell on 5 different marketplaces and making sure all my content lines up for each one can be a real pain. ListButler is solving a huge bandwidth problem for me and giving me 10 hours a week back!”',
    name: 'Scott',
    brandName: 'My Perfect Goatee Founder '
  },
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, marginRight: "60px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,  marginLeft: "60px" }}
      onClick={onClick}
    />
  );
}

const Testmonials = () => {

    const settings = {
        className: "testmonials-slider",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
  return (
    <section className='testmonials-container'>
      <Slider  {...settings}>

        {
          data.map((item)=>{
            return(
              
              <Testmonial data={item} />
              

            )
          })
        }

      </Slider>
      <span style={{color:"transparent"}}>F </span>

    </section>
  )
}

export default Testmonials

// const slider = React.useRef(null);
// ref={slider}
// <button onClick={() => slider?.current?.slickPrev()}>Prev</button>