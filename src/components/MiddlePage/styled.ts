/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import * as colors from '../../assets/styles/configColors/colors';

export const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(6em) translateY(2em) scale(0.8);
  background-position: bottom;
`;

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.7em;
  width: 90%;
  color: ${colors.veryDarkBlue};
`;

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  color: ${colors.grayishViolet};
  font-weight: 500;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.cyan};
  border: none;
  color: #fff !important;
  border-radius: 2em;
  padding: 0.5em 1.5em;
  transform: translateY(1.5em);
  text-decoration: none;
  color: ${colors.grayishViolet};
  font-weight: 700;
  width: fit-content;
  :hover {
    cursor: pointer;
    color: ${colors.veryDarkViolet};
    transition: all 400ms ease;
    -webkit-filter: brightness(0.9) saturate(0.8) contrast(0.9);
    -moz-filter: brightness(0.9) saturate(0.8) contrast(0.9);
    -o-filter: brightness(0.9) saturate(0.8) contrast(0.9);
    -ms-filter: brightness(0.9) saturate(0.8) contrast(0.9);
    filter: brightness(0.9) saturate(0.8) contrast(0.9);
    transition: all 400ms ease-out;
  }
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(3.2em);
  transform: translateY(3.2em);
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  transform: translateX(6.2em);
`;
