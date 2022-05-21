import React from "react";
import * as S from "./carousel.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgCarousel1 from "../../Assets/imgs/carousel-1.jpg";
import ImgCarousel2 from "../../Assets/imgs/carousel-2.png";
import ImgCarousel3 from "../../Assets/imgs/carousel-3.png";
import ImgCarousel4 from "../../Assets/imgs/carousel-4.png";
import ImgCarousel5 from "../../Assets/imgs/carousel-5.png";
import ImgCarousel6 from "../../Assets/imgs/carousel-6.jpg";

const Carousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Carousel>
      <Slider {...settings}>
        <div>
          <img src={ImgCarousel1} alt="Imagem do carrossel" />
        </div>
        <div>
          <img src={ImgCarousel2} alt="Imagem do carrossel" />
        </div>
        <div>
          <img src={ImgCarousel3} alt="Imagem do carrossel" />
        </div>
        <div>
          <img src={ImgCarousel4} alt="Imagem do carrossel" />
        </div>
        <div>
          <img src={ImgCarousel5} alt="Imagem do carrossel" />
        </div>
        <div>
          <img src={ImgCarousel6} alt="Imagem do carrossel" />
        </div>
      </Slider>
    </S.Carousel>
  );
};

export default Carousel;
