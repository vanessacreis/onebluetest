import React from "react";
import * as S from "./input.js";

const Input = ({ name, value, type, register, onChange, error }) => {
  return (
    <S.Fieldset>
      <S.Input
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        required
        {...register}
      />
      <S.Label>{name}</S.Label>
      <S.Error>{error}</S.Error>
    </S.Fieldset>
  );
};

export default Input;
