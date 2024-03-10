import React from "react";
import { Link } from "react-router-dom";
import * as s from "../Style/Header";
import WebLogo from "../Image/web.png";

const Header = () => {
  return (
    <s.HeaderContainer>
      <s.LeftContainer>
          <s.Logo src={WebLogo} alt="Logo" />
          <s.Title>My Website</s.Title>
      </s.LeftContainer>
      <s.RightContainer>
        <s.Navigation>
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/about">About</Link>
        </s.Navigation>
        <s.SearchBar type="text" placeholder="Search..." />
        <s.LoginLink>
        <Link to="/login">Login</Link>
        </s.LoginLink>
      </s.RightContainer>
    </s.HeaderContainer>
  );
};

export default Header;
