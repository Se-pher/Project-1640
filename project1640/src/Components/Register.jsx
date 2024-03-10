import React from "react";
import * as s from "../Style/Register";
import Img from "../Image/Login.png";

const Register = () => {
  return (
    <s.Container>
      <s.ImageContainer>
        <s.Image src={Img} alt="Register" />
      </s.ImageContainer>
      <s.RegisterContainer>
        <s.Title>Register</s.Title>
        <s.InputWrapper>
          <s.Label>Username:</s.Label>
          <s.Input name="username" placeholder="Input Username" />
        </s.InputWrapper>
        <s.InputWrapper>
          <s.Label>Email:</s.Label>
          <s.Input name="email" placeholder="Input Email" />
        </s.InputWrapper>
        <s.InputWrapper>
          <s.Label>Password:</s.Label>
          <s.Input name="password" placeholder="Input Password" />
        </s.InputWrapper>
        <s.ButtonWrapper>
          <s.button type="button">Register</s.button>
        </s.ButtonWrapper>
        <s.Divider>
          <s.DividerText>Or Continue with</s.DividerText>
        </s.Divider>
      </s.RegisterContainer>
    </s.Container>
  );
};

export default Register;