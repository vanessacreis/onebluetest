import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Footer = styled.footer`
  width: 100vw;
  height: 4rem;
  background-color: ${colors.darkgray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 3rem;
`;

export const Copyright = styled.div`
  color: ${colors.black};
  font-size: 1.3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-inline: 3rem;

  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1.5rem;
  }
`;
