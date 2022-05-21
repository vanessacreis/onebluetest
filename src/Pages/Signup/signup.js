import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Main = styled.main`
  width: 100vw;
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      to bottom,
      transparent 0%,
      ${colors.gray} 98%
    ),
    url(/src/Assets/imgs/bg_signup.jpg);
  background-size: cover;
`;
