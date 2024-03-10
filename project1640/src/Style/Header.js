import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #black;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 3rem;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const Title = styled.h2`
  margin-left: 10px;
`;

export const Navigation = styled.div`
  display: flex;
  gap: 10px;
  a {
    text-decoration: none;
    color: #000000;
    transition: color 0.3s;
  }
`;

export const SearchBar = styled.input`
  padding: 0.5rem;
  border-radius: 10px;
  margin-left: 10px;
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  margin-left: 10px;
`;
