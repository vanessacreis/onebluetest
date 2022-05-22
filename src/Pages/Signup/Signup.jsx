import React from "react";
import Form from "../../Components/Form/Form.jsx";
import * as S from "./signup.js";

const Signup = () => {
  return (
    <S.Main>
      <Form apiroute="/user/cadaster" namebtn="Create my account" />
    </S.Main>
  );
};

export default Signup;
