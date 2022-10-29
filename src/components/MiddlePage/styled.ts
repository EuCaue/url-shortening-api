/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import * as colors from '../../assets/styles/configColors/colors';

// IMG
export const Img = styled.img`
  align-items: center;
  justify-content: center;
  margin-left: 12em;
  margin-top: 2em;
`;

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  width: 7.39em;
  color: ${colors.veryDarkBlue};
`;

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25em;
  color: ${colors.grayishViolet};
  font-weight: 500;
`;

// "Get Started button"
export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.cyan};
  border: none;
  color: #fff !important;
  border-radius: 2em;
  padding: 0.5em 1.5em;
  text-decoration: none;
  color: ${colors.grayishViolet};
  font-weight: 700;
  width: fit-content;
`;

// NOTE: whitehover in the button
export const WhiteHover = styled.span`
  margin-top: 1.5em;
  width: fit-content;
  border-radius: 2em;
  :hover {
    background-color: white;
    transition: all 400ms ease-out;
    opacity: 50%;
  }
`;

// NOTE: span flex
export const Span = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 15em;
`;

// NOTE: Container && mediaqueries
export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 60em) and (min-width: 20em) {
    flex-direction: column-reverse;
    ${Img} {
      margin-left: 10em;
      width: 29em;
    }
    ${H1} {
      font-size: 2.2rem;
      margin-right: 7em;
      text-align: center;
      padding-top: 1em;
    }

    ${H2} {
      width: 19em;
      text-align: center;
      margin-left: -1em;
      font-size: 1rem;
    }

    ${Link} {
      margin-left: 2.5em;
      width: 12em;
      height: 3em;
    }
  }
`;
