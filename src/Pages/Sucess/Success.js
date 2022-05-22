import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Main = styled.main`
  width: 100vw;
  height: calc(100vh - 5rem);
  padding-top: 10rem;
  background-image: linear-gradient(
      to bottom,
      transparent 0%,
      ${colors.white} 95%
    ),
    url(/src/Assets/imgs/bg_success.jpg);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .blueText {
    color: ${colors.blue};
  }

  > .col-a {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
      font-size: 5.2rem;
      font-weight: 300;
      line-height: 7rem;
      text-align: center;
    }

    > h2 {
      font-size: 2.8rem;
      font-weight: 300;
    }

    > p {
      width: 55%;
      font-size: 1.6rem;
      text-align: center;
      margin-block: 2rem;
    }

    > .button {
      margin: 2rem;
      padding-inline: 3.6rem;
      padding-block: 1.2rem;
      border-radius: 1rem;
      background-color: ${colors.gray};
      font-size: 1.6rem;
      color: ${colors.black};
      text-decoration: none;
      box-shadow: 2px 2px 5px ${colors.darkgray};
      transition: background 0.5s;
    }

    > .button:hover {
      background-color: ${colors.blue};
      color: ${colors.gray};
    }
  }

  > .col-b {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
