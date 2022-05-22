import React from "react";
import * as S from "./carousel.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Carousel>
      <Slider {...settings}>
        <div>
          <img
            src="/src/Assets/imgs/carousel-1.jpg"
            alt="Imagem do carrossel"
          />
        </div>
        <div>
          <img
            src="/src/Assets/imgs/carousel-2.png"
            alt="Imagem do carrossel"
          />
        </div>
        <div>
          <img
            src="/src/Assets/imgs/carousel-3.png"
            alt="Imagem do carrossel"
          />
        </div>
        <div>
          <img
            src="/src/Assets/imgs/carousel-4.png"
            alt="Imagem do carrossel"
          />
        </div>
        <div>
          <img
            src="/src/Assets/imgs/carousel-5.png"
            alt="Imagem do carrossel"
          />
        </div>
        <div>
          <img
            src="/src/Assets/imgs/carousel-6.jpg"
            alt="Imagem do carrossel"
          />
        </div>
      </Slider>
    </S.Carousel>
  );
};

export default Carousel;
