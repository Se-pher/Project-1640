// File header.js
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const Title = styled.h2`
  margin-left: 10px;
`;

export const Navigation = styled.nav`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
`;

export const SearchBar = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  margin: 0 10px;
`;

export const LoginLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
`;
