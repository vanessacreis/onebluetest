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
  height: 90vh;
  background-image: linear-gradient(
      to bottom,
      transparent 0%,
      ${colors.white} 95%
    ),
    url(/src/Assets/imgs/bg_home.jpg);
  background-size: cover;
  padding-top: 10rem;

  .content {
    width: 40rem;
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
      font-size: 4.2rem;
      line-height: 5rem;
      text-align: center;
      color: ${colors.black};
    }

    > .button {
      margin: 4rem;
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
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3.6rem;
    font-weight: 300;
    margin-bottom: 5rem;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  height: 80%;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1;
  gap: 2rem;
  .topics {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
      width: 80%;
      height: 80%;
      object-fit: cover;
      border-radius: 0.5rem;
      opacity: 0.8;
      transition: opacity 0.8s;

      &:hover {
        opacity: 1;
        box-shadow: 2px 2px 5px ${colors.darkgray};
      }
    }

    > p {
      margin-top: 1rem;
      font-size: 1.8rem;
      text-align: center;
    }
  }
`;

export const Pics = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    ${colors.darkgray} 95%
  );

  .col-a {
    width: 50%;
    padding: 10rem;

    h2 {
      font-size: 3.6rem;
      font-weight: 300;
    }

    .no {
      display: flex;
      margin-block: 5rem;
      > h2 {
        font-size: 7rem;
        font-weight: 300;
        margin-right: 2rem;
        text-transform: uppercase;
      }
      > p {
        font-size: 2.4rem;
        line-height: 3rem;
        font-weight: 300;
      }
    }
  }

  .col-b {
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
