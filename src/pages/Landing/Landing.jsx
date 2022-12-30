import React from 'react';
import '../Initial/Initial.css';

import Carr from '../../containers/Carousel';
import HeroSlide from '../../components/HeroSlide/HeroSlide';

export const Landing =() =>{

  const images = [
    { image: 'https://tecstore.pe/media/bannercito_xiaomi.png' },
    { image: 'https://www.aventurasnerd.com/wp-content/uploads/2021/05/redmi-note-10pro-null-banner.jpg' },
    { image: 'https://www.inmovil.es/img/cms/Agregar%20un%20ti%CC%81tulo.png' },
    { image: 'https://www.inmovil.es/img/cms/redmi%209%20.png' },
    { image: 'https://www.inmovil.es/img/cms/note%209%20pro.png' },
  ]

  return (
    <>
      <div className='hero'>
        <HeroSlide images={images} />
      </div>
        <Carr />
    </>
  )
}

export default Landing;
