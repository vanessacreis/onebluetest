import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Container = styled.div`
  width: 45rem;
  height: 40rem;
  background-color: ${colors.gray};
  margin-inline: auto;
  margin-block: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;

  .toast {
    font-size: 1.6rem;
  }

  > header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block: 3rem;

    > img {
      width: 10rem;
      height: 10rem;
    }

    > h1 {
      width: 25rem;
      font-size: 2.2rem;
      font-weight: 500;
      text-align: center;
    }

    > h3 {
      width: 30rem;
      font-size: 1.8rem;
      font-weight: 400;
      text-align: center;

      .blueText {
        color: ${colors.blue};
      }
    }
  }
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
