import React from "react";
import * as S from "./carousel.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ img1, img2, img3, img4, img5, img6 }) => {
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
          <img src={img1} alt="Imagem do carrossel" />
        </div>
        <div>
          <img src={img2} alt="Imagem do carrossel" />
        </div>
        <div>
          <img src={img3} alt="Imagem do carrossel" />
        </div>
        <div>
          <img src={img4} alt="Imagem do carrossel" />
        </div>
        <div>
          <img src={img5} alt="Imagem do carrossel" />
        </div>
        <div>
          <img src={img6} alt="Imagem do carrossel" />
        </div>
      </Slider>
    </S.Carousel>
  );
};

export default Carousel;
