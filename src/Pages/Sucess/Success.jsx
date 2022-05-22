import React from "react";
import { Link, useParams } from "react-router-dom";
import * as S from "./Success.js";
import "animate.css";
import Carousel from "../../Components/Carousel/Carousel.jsx";

const Account = () => {
  const { name } = useParams();

  return (
    <S.Main>
      <div className="col-a animate__animated animate__fadeIn">
        <h1>
          Hi <span className="blueText">{name}</span>!
        </h1>
        <h2>Welcome to Stories App.</h2>
        <p>
          Using Stories App you can share artworks, memories and much more like
          a pro. Add informations, videos and much more to your creations.
          <br />
          Let's show and see only the <span className="blueText">beauty </span>
          together!
        </p>
        <Link to="/" className="button">
          Soon in your app store.
        </Link>
      </div>
      <div className="col-b">
        <Carousel />
      </div>
    </S.Main>
  );
};

export default Account;
