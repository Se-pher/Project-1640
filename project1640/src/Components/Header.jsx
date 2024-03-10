import React from "react";
import { Link } from "react-router-dom";
import * as s from "../Style/Header";

const Header = () => {
  return (
    <s.HeaderContainer>
      <div>
        <s.Logo src="/logo.png" alt="Logo" />
        <s.Title>My Website</s.Title>
      </div>
      <s.Navigation>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/about">About</Link>
      </s.Navigation>
      <s.SearchBar type="text" placeholder="Search..." />
      <s.LoginLink to="/login">Login</s.LoginLink>
    </s.HeaderContainer>
  );
};

export default Header;
