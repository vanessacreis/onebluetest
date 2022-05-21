import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Footer = styled.footer`
  width: 100%;
  height: 5rem;
  background-color: ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Copyright = styled.div`
  color: ${colors.darkgray};
  font-size: 1.3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1.5rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1.5rem;
  }
`;
