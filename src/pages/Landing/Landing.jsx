import React from 'react';
import Carr from '../../components/Carousel/Carousel';
import HeroSlide from '../../components/HeroSlide/HeroSlide';

export const Landing =() =>{

  const images = [
    { image: "http://localhost:3000/image-1.jpg" },
    { image: "http://localhost:3000/image-2.jpg" },
    { image: "http://localhost:3000/image-3.jpg" },
    { image: "http://localhost:3000/image-4.jpg" },
    { image: "http://localhost:3000/image-5.jpg" },
  ]

  const heroStyles = {
    width: "100%",
    height: "400px",
    marginTop: "10px",
  };

  return (
    <>
      <div style={heroStyles}>
        <HeroSlide images={images}/>
      </div>
        <Carr />
    </>
  )
}

export default Landing;

