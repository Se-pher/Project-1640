import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  margin-right: 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  align-self: start;
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 350px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0;
    border-color: #F6793E;
  }

  &:focus {
    outline: none;
    border-color: #F6793E;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
  margin-right: 1rem;
`;

export const button = styled.button`
   width: 200px;
    padding: 0.5rem;
    border-radius: 13px;
    background-color: #F6793E;
    color: White;
    border: none;
`

export const ForgotPassword = styled.div`
  color: #F6793E;
  margin-left: 0.5rem;
  &:hover{
    color: #F6793E;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  width: 350px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: black;
  }

  &::before {
    margin-right: 1rem;
  }

  &::after {
    margin-left: 1rem;
  }
`;

export const DividerText = styled.span`
  font-size: 0.9rem;
  color: black;
`;