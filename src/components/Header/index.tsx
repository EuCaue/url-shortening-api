/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  Container,
  NavBar,
  NavBarMobile,
  Divider,
  SignUp,
  UlMobile,
  SignUpMobile,
  TbMenuStyled,
} from './styled';
import logo from '../../assets/images/logo.svg';

interface PropsUl {
  li1: string;
  li2: string;
  li3: string;
  li4: string;
  li5: string;
  navMobile: boolean;
}
function Menu({ li1, li2, li3, li4, li5, navMobile }: PropsUl): JSX.Element {
  return (
    <UlMobile navMobile={navMobile}>
      <li>
        <a href="#">{li1}</a>
      </li>
      <li>
        <a href="#">{li2}</a>
      </li>
      <li>
        <a href="#">{li3}</a>
      </li>
      <li>
        <a href="#">{li4}</a>
      </li>
      <li>
        <SignUpMobile>{li5}</SignUpMobile>
      </li>
    </UlMobile>
  );
}

export default function Header(): JSX.Element {
  const [navMobile, setNavMobile] = useState<boolean>(false);

  return (
    <Container>
      <NavBar>
        <img
          src={logo}
          alt="Shortly"
        />
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
        <Divider />

        <span>
          <a href="#">Login</a>
          <SignUp>Sign Up</SignUp>
        </span>
      </NavBar>

      <NavBarMobile navMobile={navMobile}>
        <img
          src={logo}
          width="110"
          alt="Shortly"
        />
        <TbMenuStyled
          size={35}
          color={navMobile ? 'black' : 'gray'}
          onClick={() => {
            setNavMobile(!navMobile);
          }}
        />

        <Menu
          li1="Features"
          li2="Pricing"
          li3="Resources"
          li4="Login"
          li5="Sign Up"
          navMobile={navMobile}
        />
      </NavBarMobile>
    </Container>
  );
}
