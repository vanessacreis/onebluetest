import React from "react";
import * as S from "./button.js";

const Button = ({ name }) => {
  return <S.Button type="submit">{name}</S.Button>;
};

export default Button;
