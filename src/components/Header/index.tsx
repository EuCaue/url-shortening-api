import React from 'react';

import { NavBar, Divider, SignUp, WhiteHover } from './styled';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <>
      <NavBar>
        <img src={logo} alt="Shortly" />
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>

        <Divider />

        <span>
          <a href="#">Login</a>
          <WhiteHover>
            <SignUp href="#">Sign Up</SignUp>
          </WhiteHover>
        </span>
      </NavBar>
    </>
  );
}
