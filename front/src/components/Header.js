import React from "react";
import styled from 'styled-components';
import Logo from '../statics/images/logo-text.png'

function Header() {
  return (
    <HeaderDiv>
        <LogoImg src={Logo} />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
	font-family: AkiraExpanded;

`

const LogoImg = styled.img`
    width: 1em;
    // height: 1em;

`

export default Header;
