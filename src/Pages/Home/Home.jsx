import React from "react";
import * as S from "./home.js";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import Carousel from "../../Components/Carousel/Carousel.jsx";

const Home = () => {
  return (
    <S.Main>
      <S.Home>
        <div className="content animate__animated animate__fadeInLeft">
          <h1>
            I just want to see <span className="blueText">beauty</span> in the
            world. <br />
          </h1>
          <Link to="/signup" className="button">
            Create an account
          </Link>
        </div>
      </S.Home>
      <S.About>
        <AnimationOnScroll animateIn="animate__animated animate__fadeInLeft">
          <h2>
            Complete your <span className="blueText">history</span> with Stories
            App.
          </h2>
        </AnimationOnScroll>
        <S.Wrapper>
          <AnimationOnScroll
            animateIn="animate__animated animate__fadeIn"
            delay="500"
          >
            <div className="topics">
              <img src="/src/Assets/imgs/video.jpg" alt="" />
              <p>Video based</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__animated animate__fadeIn"
            delay="1000"
          >
            <div className="topics">
              <img src="/src/Assets/imgs/group.jpg" alt="" />
              <p>Interest groups</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__animated animate__fadeIn"
            delay="1500"
          >
            <div className="topics">
              <img src="/src/Assets/imgs/shop.jpg" alt="" />
              <p>Special shops</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__animated animate__fadeIn"
            delay="2000"
          >
            <div className="topics">
              <img src="/src/Assets/imgs/live.jpg" alt="" />
              <p>Live commerce</p>
            </div>
          </AnimationOnScroll>
        </S.Wrapper>
      </S.About>
      <S.Pics>
        <div className="col-a">
          <AnimationOnScroll animateIn="animate__animated animate__fadeInLeft">
            <h2>A innovative Moderation platform.</h2>
            <div className="no">
              <h2 className="blueText">No</h2>
              <p>
                audience algorithm
                <br />
                video expiration
                <br />
                likes count
                <br />
                time bar
                <br />
                dances
                <br />
                filters
              </p>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="col-b animate__animated animate__fadeInRight animate__delay-7s">
          <Carousel
            img1="/src/Assets/imgs/carousel-1.jpg"
            img2="/src/Assets/imgs/carousel-2.png"
            img3="/src/Assets/imgs/carousel-3.png"
            img4="/src/Assets/imgs/carousel-4.png"
            img5="/src/Assets/imgs/carousel-5.png"
            img6="/src/Assets/imgs/carousel-6.jpg"
          />
        </div>
      </S.Pics>
    </S.Main>
  );
};

export default Home;
