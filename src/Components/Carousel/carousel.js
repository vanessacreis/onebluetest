import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Carousel = styled.div`
  width: 40%;
  height: 100%;

  .slick-slider img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    padding: 5px;
  }
`;
