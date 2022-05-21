import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Carousel = styled.div`
  width: 80%;
  height: 100%;

  .slick-slide img {
    width: 70%;
    height: 70%;
    object-fit: cover;
    border-radius: 1rem;
    padding: 0.5rem;
  }
`;
