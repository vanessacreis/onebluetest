import React from "react";
import Form from "../../Components/Form/Form.jsx";
import * as S from "./login.js";

const Login = () => {
  return (
    <S.Main>
      <Form apiroute="/login" namebtn="Login" />
    </S.Main>
  );
};

export default Login;
