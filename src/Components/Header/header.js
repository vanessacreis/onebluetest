import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Header = styled.header`
  width: 100vw;
  height: 10rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 4rem;
  position: fixed;
  z-index: 100;

  img {
    margin-left: 5rem;
  }

  .nav_link {
    color: ${colors.black};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.6rem;

    &.active {
      color: ${colors.blue};
    }

    &:hover {
      color: ${colors.blue};
    }
  }

  .nav_link::after {
    content: "";
    width: 0;
    height: 2px;
    background-color: ${colors.blue};
    display: block;
    position: relative;
    bottom: -2rem;
    left: -0.5rem;
    transition: width 0.2s;
  }

  .nav_link:hover::after,
  .nav_link.active::after {
    width: 100%;
    padding-inline: 0.8rem;
  }
`;
