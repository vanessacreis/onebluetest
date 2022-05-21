import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel.jsx";
import * as S from "./home.js";

const Home = () => {
  return (
    <S.Main>
      <S.Home>
        <div className="content">
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
        <div className="wrapper">
          <div className="col-a">
            <h2>
              Complete your <span className="blueText">history</span> with
              Stories App.
            </h2>
            <p>
              Using Stories App you can share artworks, memories and much more
              like a pro. Add informations, videos and much more to your
              creations.
            </p>
            <div className="noBox">
              <p className="no blueText">No</p>
              <p>
                audience algorithm
                <br />
                video expiration
                <br />
                dances
                <br />
                likes count
                <br />
                filters
                <br />
                time bar
                <br />
              </p>
            </div>
          </div>
          <div className="col-b">
            <Carousel />
          </div>
        </div>
      </S.About>
    </S.Main>
  );
};

export default Home;
