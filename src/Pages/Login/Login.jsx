import React from "react";
import Form from "../../Components/Form/Form.jsx";
import * as S from "./login.js";
import { ToastContainer } from "react-toastify";

const Login = () => {
  return (
    <S.Main>
      <ToastContainer />
      <Form apiroute="/login" namebtn="Login" />
    </S.Main>
  );
};

export default Login;
