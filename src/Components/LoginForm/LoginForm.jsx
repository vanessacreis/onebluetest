import React, { useState } from "react";
import * as S from "./loginForm.js";
import SIcon from "../../Assets/icons/icon_black_small.png";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import { Api } from "../../Services/api.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const validationPost = yup.object().shape({
  name: yup.string().required("Name field is required."),
  password: yup
    .string()
    .required("Password field is required.")
    .max(8, "Password must be a maximum of 8 characters."),
});

const LoginForm = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleOnChange = () => {
    setData({ ...dados, [e.target.name]: e.target.value });
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const api = (data) => {
    Api.post("/login", data)
      .then((response) => {
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  return (
    <S.Container>
      <header>
        <img src={SIcon} alt="" />
        <h1>Stories App </h1>
        <h3>I just want to see <span className="blueText" >beauty</span> in the world.</h3>
      </header>
      <S.Form>
        <Input
          name="name"
          type="text"
          register={{ ...register("name") }}
          onChange={handleOnChange}
          error={errors.name?.message}
        />
        <Input
          name="password"
          type="password"
          register={{ ...register("password") }}
          onChange={handleOnChange}
          error={errors.password?.message}
        />
        <Button name="Login" />
      </S.Form>
    </S.Container>
  );
};

export default LoginForm;
