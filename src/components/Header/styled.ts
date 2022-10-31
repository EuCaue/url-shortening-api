/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { TbMenu2 } from 'react-icons/tb';
import * as colors from '../../assets/styles/configColors/colors';

interface ShowNavMobile {
  navMobile: boolean;
}

// blank space
export const Divider = styled.div`
  width: 21em;
`;

// SignUp Button
export const SignUp = styled.a`
  background-color: ${colors.cyan};
  border: none;
  color: #fff !important;
  border-radius: 2em;
  padding: 0.3em 1.5em;
`;

// NOTE: WhiteHover on buttons
export const WhiteHover = styled.span`
  background-color: red;
  width: fit-content;
  border-radius: 2em;
  margin-left: 1em;
  :hover {
    background-color: white;
    opacity: 50%;
    transition: all 400ms ease-out;
  }
`;

// navBar
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: auto;
  width: 65em;
  margin-top: 1.2em;

  a {
    text-decoration: none;
    color: ${colors.grayishViolet};
    font-weight: 700;
    :hover {
      cursor: pointer;
      color: ${colors.veryDarkViolet};
      transition: all 400ms ease-out;
    }
    /* HACK: login && signUp box */
    + div + span {
      width: 14em;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`;

//* Mobile
export const NavBarMobile = styled.nav<ShowNavMobile>`
  display: flex;
  align-items: center;
  position: relative;
  display: none;
`;

export const UlMobile = styled.ul<ShowNavMobile>`
  align-items: center;
  display: ${(props) => (props.navMobile === true ? 'flex' : 'none')};
  justify-content: center;
  text-align: center;
  flex-direction: column;
  position: absolute;
  width: 18em;
  height: 22em;
  border-radius: 12px;
  top: 5em;
  right: calc(-62vw - 10%);
  background-color: ${colors.darkViolet};
  animation: box 500ms linear;
  a {
    color: white;
    font-weight: 700;
    text-decoration: none;
  }
  li {
    display: flex;
    margin-top: 2em;
    list-style-type: none;
  }
  li:nth-child(1) {
    margin-top: 0;
  }
`;

// NOTE: grayline in menu
export const GrayLine = styled.span`
  background-color: ${colors.grayishViolet};
  position: absolute;
  top: 12.5em;
  opacity: 50%;
  width: 15em;
  height: 0.01em;
  transition: none;
  animation: none;
`;

// SignUpMobile Button
export const SignUpMobile = styled(SignUp)`
  width: 15em;
  height: 2.3em;
  text-align: center;
`;

// Icon for the menu
export const TbMenuStyled = styled(TbMenu2)`
  position: absolute;
  left: calc(84vw);
`;

// NOTE: mediaquerie && container
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  /* position: relative; */

  /* Media query */
  @media screen and (max-width: 60em) and (min-width: 20em) {
    ${NavBarMobile} {
      display: flex;
      padding-top: 2em;
      margin-left: 1em;
    }

    ${UlMobile} {
    }

    ${NavBar} {
      display: none;
    }
    ${GrayLine} {
      opacity: 50%;
      position: absolute;
      top: 12.3em;
    }
    @keyframes box {
      from {
        top: 1.5em;
      }
      25% {
        top: 2.5em;
      }

      50% {
        top: 3.5em;
      }
      to {
        top: 5em;
      }
    }
  }
`;
