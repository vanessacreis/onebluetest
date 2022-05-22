import React from "react";
import * as S from "./home.js";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

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
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <h2>
            Complete your <span className="blueText">history</span> with Stories
            App.
          </h2>
        </AnimationOnScroll>
        <S.Wrapper>
          <AnimationOnScroll animateIn="animate__fadeIn" delay=".5">
            <div className="topics">
              <img src="/src/Assets/imgs/video.jpg" alt="" />
              <p>Video based</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" delay="1">
            <div className="topics">
              <img src="/src/Assets/imgs/group.jpg" alt="" />
              <p>Interest groups</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" delay="1.5">
            <div className="topics">
              <img src="/src/Assets/imgs/shop.jpg" alt="" />
              <p>Special shops</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" delay="2">
            <div className="topics">
              <img src="/src/Assets/imgs/live.jpg" alt="" />
              <p>Live commerce</p>
            </div>
          </AnimationOnScroll>
        </S.Wrapper>
      </S.About>
    </S.Main>
  );
};

export default Home;
