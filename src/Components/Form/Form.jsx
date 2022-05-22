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
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";

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
        if (apiroute === "/login") {
          const name = response.data.login;
          toast.success("Hi, welcome back!😄", {
            className: "toast",
            draggable: false,
            transition: Zoom,
          });
          setTimeout(() => {
            navigate(`/success/${name}`);
          }, 3000);
        } else {
          toast.success("Yeah! Your account has created! 🎉 ", {
            className: "toast",
            draggable: false,
            transition: Zoom,
          });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      })
      .catch((error) => {
        if (error) {
          toast.error(
            "Oh-oh... Please, check your informations and try again.😥",
            {
              className: "toast",
              draggable: false,
              transition: Zoom,
            }
          );
        }
      });
  };

  return (
    <S.Container className="animate__animated animate__fadeIn">
      <header>
        <img src={Icon} alt="" className="animate__animated animate__pulse" />
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
          type="password"
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
