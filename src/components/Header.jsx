import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src="./images/logo.jpg" alt="logo" />
      </NavLink>
      <Nav/>
    </MainHeader>
  );
};

const MainHeader = styled.section`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 9rem;
    border-radius:100%
  }
`;
export default Header;
