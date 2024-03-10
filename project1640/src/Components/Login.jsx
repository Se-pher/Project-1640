import React from "react";
import * as s from "../Style/Login";
import { Link } from 'react-router-dom';
import Img from "../Image/Login.png";

const Login = () => {
  return (
    <s.Container>
      <s.ImageContainer>
        <s.Image src={Img} alt="Login" />
      </s.ImageContainer>
      <s.LoginContainer>
        <s.Title>Login</s.Title>
        <s.InputWrapper>
          <s.Label>Email:</s.Label>
          <s.Input name="myInput" placeholder="Input Email" />
        </s.InputWrapper>
        <s.InputWrapper>
          <s.Label>Password:</s.Label>
          <s.Input name="myInput" placeholder="Input Password" />
        </s.InputWrapper>
        <s.ForgotPassword>
          <Link to="/forgot-password">Forgot Password?</Link>
        </s.ForgotPassword>
        <s.ButtonWrapper>
          <s.button type="button">Login</s.button>
        </s.ButtonWrapper>
        <s.Divider>
          <s.DividerText>Or Continue with</s.DividerText>
        </s.Divider>
      </s.LoginContainer>
    </s.Container>
  );
};

export default Login;