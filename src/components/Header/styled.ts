/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import * as colors from '../../assets/styles/configColors/colors';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: auto;
  /* width: 85.7%; */
  /* width: 100%; */
  /* width: 42em; */
  width: 65em;
  transform: translateY(1.2em);

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

export const Divider = styled.div`
  width: 21em;
`;

export const SignUp = styled.a`
  background-color: ${colors.cyan};
  border: none;
  color: #fff !important;
  border-radius: 2em;
  padding: 0.3em 1.5em;
  margin-left: 1em;

  :hover {
    /* background-color: hsla(180, 53%, 61%, 1); */
    -webkit-filter: brightness(0.9) saturate(0.8) contrast(0.9);
    -moz-filter: brightness(0.9) saturate(0.8) contrast(0.9);
    -o-filter: brightness(0.9) saturate(0.8) contrast(0.9);
    -ms-filter: brightness(0.9) saturate(0.8) contrast(0.9);
    filter: brightness(0.9) saturate(0.8) contrast(0.9);
    /* transition: none; */
  }
`;
