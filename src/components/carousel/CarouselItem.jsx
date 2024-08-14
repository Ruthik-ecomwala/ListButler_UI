import React from 'react'

const CarouselItem = ({ imgUrl, imgTitle }) => {
    console.log("Hello")
  return (
    <div className="carousel-card">
      <img src={imgUrl} alt={imgTitle}></img>

    </div>
  )
}

export default CarouselItem
