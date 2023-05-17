import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../statics/images/logo-text.png'

function Header() {
  const navigate = useNavigate();
  const navIntro = () => {
    navigate('/introduction#main')
    window.scrollTo(0, 0);
  }
  const navCase = () => {
    navigate('/cases')
    window.scrollTo(0, 0);
  }
  const navCheck = () => {
    navigate('/check')
    window.scrollTo(0, 0);
  }

  return (
    <HeaderContainer>
        <Logo onClick={()=>navigate('/')}>
            <LogoImgSection src={LogoImg} />
        </Logo>
        <Nav>
            <NavList>
                <NavItem onClick={navIntro}>INTRODUCTION</NavItem>
                <NavItem onClick={navCase}>CASE</NavItem>
                <NavItem>
                    <ResultBtn onClick={navCheck}>Check the result</ResultBtn>
                </NavItem>
            </NavList>
        </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
    height: 4vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: AkiraExpanded;
`

const Logo = styled.div`
    margin-top: 0.3vw;
    cursor: pointer;
`

const LogoImgSection = styled.img`
    width: 35vh;
`

const Nav = styled.nav`
    width: 70%;
`

const NavList = styled.ul`
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 1.8vh;
`

const NavItem = styled.li`
    width: 100%;
    list-style-type: none;
    cursor: pointer;
    &:hover {
        color: #4285ec;
        transition: 0.3s;
    }
`

const ResultBtn = styled.button`
    padding: 0.5vw 1.5vw;
    margin: 1vw;
    font-size: 0.85vw;
    font-family: AkiraExpanded; 
    border-radius: 3vw;
    border: 0.2vw solid black;
    background-color: white;
    white-space : nowrap;
    cursor: pointer;
	color: black;

    &:hover{
        background: linear-gradient(to right, #4285ec, #0bbafb);
        color: white;
        transition: ease-in 0.3s;
    }
`

export default Header;