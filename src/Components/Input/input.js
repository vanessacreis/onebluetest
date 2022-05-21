import styled from "styled-components";
import { colors } from "../../Style/globalStyle.js";

export const Fieldset = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;

export const Input = styled.input`
  width: 90%;
  height: 3rem;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid ${colors.blue};
  background-color: transparent;
  font-size: 1.6rem;
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 1.4rem;
  color: ${colors.black};
  text-align: center;
  margin-bottom: 1rem;
`;

export const Error = styled.p`
  color: red;
  font-size: 1.2rem;
`;
