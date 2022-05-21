import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Main = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: ${colors.white};

  .blueText {
    color: ${colors.blue};
  }
`;

export const Home = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      transparent 0%,
      ${colors.white} 95%
    ),
    url(/src/Assets/imgs/bg_home.jpg);
  background-size: cover;
  padding-top: 10rem;

  > .content {
    width: 35rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    left: 5rem;
    top: 10rem;

    > h1 {
      font-weight: 300;
      font-size: 3.6rem;
      line-height: 5rem;
      text-align: center;
      color: ${colors.black};
    }

    > .button {
      padding-inline: 3.6rem;
      padding-block: 1.2rem;
      border-radius: 1.5rem;
      background-color: ${colors.blue};
      font-size: 1.6rem;
      color: ${colors.white};
      text-decoration: none;
      box-shadow: 2px 2px 5px ${colors.darkgray};
    }
  }
`;

export const About = styled.section`
  width: 100vw;
  height: 80vh;
  display: flex;

  > .wrapper {
    height: 100%;
    width: 95%;
    margin-inline: auto;
    display: flex;
    align-items: center;

    > .col-a {
      width: 60%;

      > h2 {
        width: 40rem;
        font-weight: 400;
        font-size: 2.8rem;
        line-height: 3.6rem;
        margin-bottom: 2.5rem;
      }

      > p {
        width: 50rem;
        font-size: 1.8rem;
        line-height: 2.6rem;
      }

      > .noBox {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        > .no {
          font-size: 10rem;
          text-transform: uppercase;
          font-weight: 300;
        }

        > p {
          font-size: 1.6rem;
        }
      }
    }

    > .col-b {
      width: 40%;
    }
  }
`;
