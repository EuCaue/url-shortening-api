/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import * as colors from '../../assets/styles/configColors/colors';

interface ShowNavMobile {
  navMobile: boolean;
}

export const Divider = styled.div`
  width: 21em;
`;

export const SignUp = styled.a`
  background-color: ${colors.cyan};
  border: none;
  color: #fff !important;
  border-radius: 2em;
  padding: 0.3em 1.5em;
`;

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

export const NavBar = styled.nav`
  /* visibility: visible; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: auto;
  /* width: 85.7%; */
  /* width: 100%; */
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

export const GrayLine = styled.span`
  background-color: ${colors.grayishViolet};
  position: absolute;
  top: 12.5em;
  opacity: 20%;
  width: 15em;
  height: 0.01em;
`;

export const SignUpMobile = styled(SignUp)`
  width: 15em;
  height: 2.3em;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  @media screen and (max-width: 49em) and (min-width: 40em) {
    ${NavBarMobile} {
      display: flex;
      gap: 14em;
      margin-left: 1.5em;
      margin-right: 1.5em;
      padding-top: 2em;
    }

    ${UlMobile} {
      margin-left: 3.7em;
    }

    ${NavBar} {
      display: none;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 39em) {
    ${NavBarMobile} {
      display: flex;
      gap: 13em;
      margin-left: 1.5em;
      margin-right: 1.5em;
      padding-top: 2em;
    }
    ${UlMobile} {
      margin-left: 2em;
    }

    ${GrayLine} {
      opacity: 65%;
      position: absolute;
      top: 12em;
    }

    ${NavBar} {
      display: none;
    }
  }

  @media screen and (max-width: 29em) and (min-width: 20em) {
    ${NavBarMobile} {
      gap: 10.3em;
      display: flex;
      padding-top: 2em;
      margin-left: 1.5em;
      margin-right: 1.5em;
    }
    ${NavBar} {
      display: none;
    }
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
`;
