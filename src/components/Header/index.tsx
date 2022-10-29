import React, { useState } from 'react';
import {
  Container,
  NavBar,
  NavBarMobile,
  Divider,
  SignUp,
  WhiteHover,
  UlMobile,
  SignUpMobile,
  GrayLine,
  TbMenuStyled,
} from './styled';
import logo from '../../assets/images/logo.svg';

export default function Header(): JSX.Element {
  interface PropsUl {
    li1: string;
    li2: string;
    li3: string;
    li4: string;
    li5: string;
  }

  // NOTE: true: show the navBarMobile
  const [navMobile, setNavMobile] = useState<boolean>(false);

  // NOTE: Menu for the navbar mobile
  const Menu = (props: PropsUl): JSX.Element => {
    return (
      <UlMobile navMobile={navMobile}>
        <li>
          <a href="#">{props.li1}</a>
        </li>
        <li>
          <a href="#">{props.li2}</a>
        </li>
        <li>
          <a href="#">{props.li3}</a>
        </li>
        <GrayLine />
        <li>
          <a href="#">{props.li4}</a>
        </li>
        <li>
          <SignUpMobile href="#">{props.li5}</SignUpMobile>
        </li>
      </UlMobile>
    );
  };
  return (
    <Container>
      {/* navbar PC */}
      <NavBar>
        <img src={logo} alt="Shortly" />
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>

        {/* NOTE: blank space */}
        <Divider />

        {/* login && SignUp button */}
        <span>
          <a href="#">Login</a>
          <WhiteHover>
            <SignUp href="#">Sign Up</SignUp>
          </WhiteHover>
        </span>
      </NavBar>

      {/* NOTE: mobile navbar  */}
      <NavBarMobile navMobile={navMobile}>
        <img src={logo} width="110" alt="Shortly" />

        {/* NOTE: icon button for open the menu */}
        <TbMenuStyled
          size={35}
          color={navMobile ? 'black' : 'gray'}
          onClick={() => {
            if (navMobile) return setNavMobile(false);
            return setNavMobile(true);
          }}
        />
        <Menu
          li1="Features"
          li2="Pricing"
          li3="Resources"
          li4="Login"
          li5="Sign Up"
        />
      </NavBarMobile>
    </Container>
  );
}
