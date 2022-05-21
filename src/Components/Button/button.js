import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Button = styled.button`
  width: 90%;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: ${colors.blue};
  font-size: 1.6rem;
  color: ${colors.white};
  text-decoration: none;
  border: none;
  box-shadow: 2px 2px 5px ${colors.darkgray};
  margin-top: 2rem;
  cursor: pointer;
`;
