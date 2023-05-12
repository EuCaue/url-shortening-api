/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { TbMenu2 } from 'react-icons/tb';
import * as colors from '../../assets/styles/configColors/colors';

interface ShowNavMobile {
  navMobile: boolean;
}

export const Divider = styled.div`
  width: 21em;
`;

export const SignUp = styled.button`
  background-color: ${colors.cyan};
  border: none;
  color: #fff !important;
  border-radius: 2em;
  padding: 0.3em 1.5em;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: auto;
  width: 65em;
  margin-top: 1.2em;

  a,
  button {
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

export const NavBarMobile = styled.nav<ShowNavMobile>`
  display: none;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

export const UlMobile = styled.ul<ShowNavMobile>`
  align-items: center;
  display: ${(props) => (props.navMobile === true ? 'flex' : 'none')};
  justify-content: center;
  text-align: center;
  flex-direction: column;
  position: absolute;
  width: 85%;
  height: 50%;
  border-radius: 12px;
  inset: 0 0 25% 0;
  margin: auto;
  box-shadow: 0 0 100vh 5px rgba(0, 0, 0, 0.8);
  animation: box 500ms ease;
  gap: 2rem;
  list-style-type: none;
  background-color: ${colors.darkViolet};
  a {
    color: white;
    font-weight: 700;
    text-decoration: none;
  }

  li:nth-child(3) {
    position: relative;
    ::before {
      content: '';
      position: absolute;
      border: 2px solid ${colors.grayishViolet};
      width: 14rem;
      top: 2.2rem;
      left: -75%;
    }
  }
`;

export const SignUpMobile = styled(SignUp)`
  width: 15em;
  height: 2.3em;
  text-align: center;
`;

export const TbMenuStyled = styled(TbMenu2)``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  @media screen and (max-width: 60em) and (min-width: 20em) {
    ${NavBarMobile} {
      display: flex;
      padding-top: 2em;
      margin-left: 1em;
    }

    ${NavBar} {
      display: none;
    }

    @keyframes box {
      from {
        inset: 0 0 0% 0;
      }
      to {
        inset: 0 0 25% 0;
      }
    }
  }
`;
