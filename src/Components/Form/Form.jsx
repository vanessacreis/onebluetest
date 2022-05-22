import React, { useState } from "react";
import * as S from "./form.js";
import Icon from "../../Assets/icons/icon_black_small.png";
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

const Form = ({ apiroute, namebtn }) => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnChange = () => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const api = (data) => {
    Api.post(`${apiroute}`, data)
      .then((response) => {
        const name = response.data.login;
        console.log(name);
        navigate(`/success/${name}`);
        console.log(response);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <S.Container>
      <header>
        <img src={Icon} alt="" />
        <h1>Stories App </h1>
        <h3>
          I just want to see <span className="blueText">beauty</span> in the
          world.
        </h3>
      </header>
      <S.Form onSubmit={handleSubmit(api)}>
        <Input
          name="name"
          type="text"
          register={{ ...register("name") }}
          onChange={handleOnChange}
          error={errors.name?.message}
        />
        <Input
          name="password"
          type="text"
          register={{ ...register("password") }}
          onChange={handleOnChange}
          error={errors.password?.message}
        />
        <Button name={namebtn} />
      </S.Form>
    </S.Container>
  );
};

export default Form;
