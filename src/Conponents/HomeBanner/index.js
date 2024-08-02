
import Slider from 'react-slick';
import React from 'react'


const HomeBanner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay: true, // Correct syntax
    autoplaySpeed: 3000, // Adjust the auto-slide speed if necessary
  };
  
  const images = [
    "https://sslimages.shoppersstop.com/sys-master/root/h7a/h30/33182085316638/SS24-web_3u0--ej9.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-uhp-290724-dailybanners-z6-p1-Trends-Under999-Bullmer-Maniac-Under499.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h7d/h33/33231755378718/Watches-web---2024--07--27--new--hp-pg.jpg"
  ];

  return (
    <div className='homeBannerSection'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className='item' key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeBanner;