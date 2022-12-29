import React from 'react';
import Carr from '../../components/Carousel/Carousel';
import HeroSlide from '../../components/HeroSlide/HeroSlide';

export const Landing =() =>{

  const images = [
    { image: "http://gadgetsmobile.pk/web/image/9153/xiomi_banner.jpg?access_token=7078234b-cf3d-4b5d-a7e3-41b1f4605247" },
    { image: "https://www.mygsm.me/media/catalog/product/7/_/7_1_12.jpg" },
    { image: "https://www.inmovil.es/img/cms/Agregar%20un%20ti%CC%81tulo.png" },
    { image: "https://www.inmovil.es/img/cms/redmi%209%20.png" },
    { image: "https://www.inmovil.es/img/cms/note%209%20pro.png" },
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

