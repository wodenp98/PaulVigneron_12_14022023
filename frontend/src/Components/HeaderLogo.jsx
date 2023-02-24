import React from "react";
import styled from "styled-components";
import LogoSportSee from "../assets/logoSportSee.png";
import NavBarHorizontal from "./NavBarHorizontal";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 91px;
  background-color: black;
  box-sizing: border-box;
  padding: 0px 90px 0px 25px;
`;

const LogoTitle = styled.h1`
  margin: 0 130px 0 0;
  > img {
    width: 178px;
  }
`;

const HeaderLogo = () => {
  return (
    <Header>
      <LogoTitle>
        <img src={LogoSportSee} alt="Logo SportSee" />
      </LogoTitle>
      <NavBarHorizontal />
    </Header>
  );
};

export default HeaderLogo;
